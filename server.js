'use strict';


//dependencies
const express = require('express');
const api = express();
const bodyParser = require('body-parser');



//debug
let morgan = require('morgan');
api.use(morgan("combined"));



//routing
let SpellRouter = require('./router/spell');




api.get('/', function(req,res){
    console.log("route / ",SpellRouter.getTest())
   res.send("ok")
});




api.listen(3000, () => {
    console.log('Express server started on port 3000'); // eslint-disable-line
});

