//sets the use of the router
const router = require('express').Router();
const notesRoute = require('./notes');

//sets the use of the note router
router.use(notesRoute);

module.exports = router; 