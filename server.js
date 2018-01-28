'use strict';

//DEV TEST for run app on different port (test socket)
const portfinder = require('portfinder');


//dependencies
const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const path = require('path');

//config express for socketIO
api.set('port', process.env.PORT || 3000);

//Socket IO
let server = require('http').Server(api);
let io = require('socket.io')(server);


//MONGODB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wow_api');


//TEMPLATING
const Twig = require('twig'),
    twig = Twig.twig;


//Stripe config
const stripeConfig = require('./payment/stripe.config');


//debug
let morgan = require('morgan');
api.use(morgan("combined"));


// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({extended: false}));

// parse application/json
api.use(bodyParser.json());

//routing config
let SpellRouter = require('./router/spell');


//templating default url : /public/foo_folder/foo_file
api.use("/public", express.static(path.join(__dirname, 'public')));


api.use('/spell', SpellRouter);


/////////////////////////////////test
api.get('/', function (req, res) {
    res.render('index.twig', {
        message: "Hello World"
    });
});
/////////////////////////////////////


api.get('/communauty', function (req, res, next) {
    res.render('chat.twig', {})
});


//PAYMENT - DONATION

api.post("/stripe/charge", (req, res) => {
    let stripe = stripeConfig.getModuleStripe();

    let amount = req.body.amount;
    let convert_amount = (amount+"").split(".")[1];
    let connvert_amount_stripeFormat = amount * 100;

    if (amount === 0 || !amount || parseInt(convert_amount) <= 50){  //convert amount to euro and check if above 50 cents
        res.render('payment_error.twig', {message: "Votre montant doit être au minimum de 51 cents !", home_path:'/'})
    }else {
        stripe.customers.create({
            email: req.body.user_email,
            source: req.body.stripeToken
        })
            .then(customer =>
                stripe.charges.create({
                    amount: connvert_amount_stripeFormat,
                    description: `Misc is Life - ${new Date()}`,
                    currency: "eur",
                    customer: customer.id
                }))
            .then(charge => res.render('payment_success.twig', {
                message: 'Donation effectuée avec succès ! <br> Nous vous remercions pour la confiance et l\'intérêt que vous portez à notre application :)',
                home_path: '/'
            }));
    }
});


io.on('connection', function (socket) {
    console.log("new user connected => ", socket.id);

    socket.on('test', function (msg) {
        console.log(msg)
    });
    //disconnected
    socket.on('disconnect', function () {
        console.log('user disconnected', socket.id);
    });
});


server.listen(api.get('port'));
