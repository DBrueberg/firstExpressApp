// Devin Brueberg
// CSC435 Adv Web App Development
// Assignment 1 - server.js
// March 2, 2021

// Naming the HTTP_PORT to auto read the port or be port 8080
var HTTP_PORT = process.env.PORT || 8080;
// Initializing a variable to use express
const express = require('express');
// The path is required to use the css stylesheet
const path = require('path');
// Constructing an express object to use its methods
const app = new express();

// Using express.get to set the main app file to be index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

// Letting the app know to use the static files in public.
// The styles.css sheet
app.use(express.static(path.join(__dirname, 'public')));

// Listening for the HTTP_PORT so it can be loaded in
app.listen(HTTP_PORT);