//laying out the use of routes, fs, notes db, and the newNote funciton
const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../../db/db.json');
const { response } = require('express');
const newNote = require('../../lib/notes');


//this arrow function will get the notes from the db.json file, and return it to the index.js to render on the page
router.get('/api/notes', (req, res) => {
    const result = notes;
    if (result){
        res.json(result);
    } else {
        res.sendStatus(404); 
        console.log("404 error, results not found -- notes.js")
    }
});

//arrow function will let the user add a new note, it 
//connects to the newNote function, and returns info to the index.js 
//which will then render the info on the page
router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = newNote(req.body, notes);
    res.json(note); 
});


module.exports = router;