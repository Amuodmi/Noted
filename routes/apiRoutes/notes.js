//laying out the use of routes, fs, notes db, and the newNote funciton
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { notes } = require('../../db/db.json');
const { response } = require('express');
const { createNewNote } = require('../../lib/notes');


//this arrow function will get the notes from the db.json file, and return it to the index.js to render on the page
router.get('/notes', (req, res) => {
    const result = notes;
    console.log("am i calling this thing??? /api/notes GET");
    if (notes){
        res.json(result);
    } else {
        res.sendStatus(404); 
        console.log("404 error, results not found -- notes.js")
    }
});

//arrow function will let the user add a new note, it 
//connects to the newNote function, and returns info to the index.js 
//which will then render the info on the page
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);
    res.json(note); 
    // hi :)  *heart*
}); // <3 <3 <3 <3

router.delete('/notes/:id', (req, res) => {
    notes.forEach((note, index) => {
        if (note.id == req.params.id) {
            notes.splice(index, 1);
        }
    })
    fs.writeFileSync(path.join(__dirname, "../../data/notes.json"), JSON.stringify(notes));
    res.json(notes);
});

module.exports = router;