'use strict';


//dependencies
const express = require('express');
const api = express();
const bodyParser = require('body-parser');



//debug
let morgan = require('morgan');
api.use(morgan("combined"));


// parse application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
api.use(bodyParser.json());


//routing
let SpellRouter = require('./router/spell');


api.use('/spell', SpellRouter);



api.listen(3000, () => {
    console.log('Express server started on port 3000'); // eslint-disable-line
});

