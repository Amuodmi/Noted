const express = require('express');
const router = require('express').Router();
const app = express();
const PORT = process.env.PORT || 3001;

const htmlRoutes = require('./Develop/routes/htmlRoutes');
const notesRoutes = require('./Develop/routes/apiRoutes');



app.get('/db/db'), (req,res) => {
    res.send('data is connected')
}

//GET /api/notes should read the db.json file and return all saved notes as JSON
app.use(express.json());

//parses incoming string of info, or array data
app.use(express.urlencoded({ extended: true }));

//parses JSON data that comes in
app.use(express.static('public'));


//Use api routes
app.use('/', htmlRoutes);
app.use(notesRoutes);


//GET /notes should return the notes.html file
//GET * should return the index.html file



//POST /api/notes should receive a new note to save on the request body, add it to the 
//db.json file, and then return the new note to the client. 

//You'll need to find a way to give each note a unqiue ID when it's saved (look into npm packages that could do this for you)
//notes = 

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));



//BONUS: DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order
//to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property
//and then rewrite the notes to the db.json file. 