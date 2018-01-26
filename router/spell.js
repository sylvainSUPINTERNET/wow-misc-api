'use strict';


const express = require('express');
const spell_router = express.Router();

/*
// middleware that is specific to this router
spell_router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
spell_router.get('/', function(req, res) {
    res.send('Birds home page');
});
// define the about route
spell_router.get('/about', function(req, res) {
    res.send('About birds');
});
*/


class SpellRouter {
    constructor() {
        this.route_test = "ok";
    }


    getTest() {
        return this.test
    }
}

let spellRouter = new SpellRouter();
module.exports = spellRouter;

