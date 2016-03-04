/**
 * Created by PRASAD on 20-Feb-16.
 */

// required modules to run application=================
var express        = require('express');
var app            = module.exports =  express(); //now app.js can be required to bring app into any file
var bodyParser     = require('body-parser');
var database = require('./app/controllers/dbcon');
console.log(database(), 'database');
var config = require('./app/config.json');
var http = require('http');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// required modules

// configuration =======================================

// Connect to database
var db = database().startup(config.connection);


app.use(bodyParser.json()); //support json encoded bodies
app.use(bodyParser.urlencoded({extended : true})); //support encoded bodies
// configuring routes paths =============================
/**
 * configure our routes
 * module.exports must be defined before this line */
require('./app/routes')(app,db);


//port connection ====================================
/**setup the port to 3000
*our application startup at http://localhost:3000*/
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
