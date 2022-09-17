//laying out the use of routes, fs, notes db, and the newNote funciton
const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../../db/db.json');
const newNote = require('../../lib/notes');
const { response } = require('express');

router.get('/api/notes', (req, res) => {
    const result = notes;
    if (result){
        res.json(result);
    } else {
        res.sendStatus(404); 
        console.log("404 error, results not found -- notes.js")
    }
});


