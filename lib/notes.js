//need for Node functions, FS, Path, and database
const router = require('express').Router();
const fs = require('fs');
const { notes } = require('../db/db.json');
const path = require('path');

//a function that will create a new note
//body and notes will be pushed to array
function newNote(body, notes){
    const note = body;
    notes.push(note);

    
//FS will write the file to db.json
fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({notes}, null, 2)
);
return note;
}

module.exports = newNote; 