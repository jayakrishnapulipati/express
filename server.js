/**
 * Created by PRASAD on 20-Feb-16.
 */

// required modules to run application=================
var express        = require('express');
var app            = module.exports =  express(); //now app.js can be required to bring app into any file
var bodyParser     = require('body-parser');
var mongoose = require('mongoose');
// required modules

// configuration =======================================



var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  var movieSchema = new mongoose.Schema({
    title: { type: String }
  , rating: String
  , releaseYear: Number
  , hasCreditCookie: Boolean
  });

  // Compile a 'Movie' model using the movieSchema as the structure.
  // Mongoose also creates a MongoDB collection called 'Movies' for these documents.
  var Movie = mongoose.model('Movie', movieSchema);
  exports Movie;
});

mongoose.connect('mongodb://raju:raju@ds031691.mongolab.com:31691/application');



app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({extended : true})); //support encoded bodies
// configuring routes paths =============================
/**
 * configure our routes
 * module.exports must be defined before this line */
require('./app/routes')(app,dbcon);


//port connection ====================================
/**setup the port to 3000
*our application startup at http://localhost:3000*/
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});