'use strict';

const express = require('express')
    , spellRouter = express.Router();


const Twig = require('twig'),
    twig = Twig.twig;




/*
ROUTE NAME : /spell/list => GET
HTTP METHOD : GET
PARAMS : N / A
 */
spellRouter.get('/list', function(req, res) {
    res.status(200).json({error : false, message:"Liste des spells", code_http: "200"})
});


/*
ROUTE NAME : /spell/:patch_number/version/:spell_id => GET
HTTP METHOD : GET
PARAMS :
    - patch_number - INT - Version du patch WoW
    - spell_id - INT - spell id (in db)
 */
spellRouter.get('/:patch_number/version/:spell_id', function(req, res) {
    let patch_number = req.params.patch_number;
    let spell_id = req.params.spell_id;

    res.status(200).json({error : false, message:`liste des spells pour version ${patch_number}`, spell_id: spell_id.toString(), patch_number: patch_number.toString(), code_http: "200"})

});

module.exports = spellRouter;