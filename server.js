'use strict';


//dependencies
const express = require('express');
const api = express();
const bodyParser = require('body-parser');
const path = require('path');


const Twig = require('twig'),
    twig = Twig.twig;


//debug
let morgan = require('morgan');
api.use(morgan("combined"));


// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
api.use(bodyParser.json());

//routing config
let SpellRouter = require('./router/spell');


//templating default url : /public/foo_folder/foo_file
api.use("/public", express.static(path.join(__dirname, 'public')));



api.use('/spell', SpellRouter);



//test
api.get('/', function(req,res){
    res.render('index.twig', {
        message : "Hello World"
    });
});



api.listen(3000, () => {
    console.log('Express server started on port 3000'); // eslint-disable-line
});

