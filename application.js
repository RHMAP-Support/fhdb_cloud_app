// Feedhenry library
var mbaas = require('fh-mbaas-express');

// Express web application framework
var express = require('express');

// Allow cross-origin resource sharing, see https://www.npmjs.org/package/cors
var cors = require('cors');

//var util = require('util');

// Securable endpoints: list the endpoints which you want to make securable here
var securableEndpoints = [];

var app = express();

// Enable CORS for all requests
app.use(cors());

// Note: the order which we add middleware to Express here is important!
app.use('/sys', mbaas.sys(securableEndpoints));
app.use('/mbaas', mbaas.mbaas);

// Note: important that this is added just before your own Routes
app.use(mbaas.fhmiddleware());

// You can define custom URL handlers here.  This one handles the main functionality.
app.use('/fhdb', require('./lib/fhdb.js')());

app.use('/', function(req, res) {
  // Something to display if someone hits the root endpoint.
  res.end('Your Cloud App is Running.....');
});

// Important that this is last!
app.use(mbaas.errorHandler());

var port = process.env.FH_PORT || process.env.VCAP_APP_PORT || 8001;
var server = app.listen(port, function() {
  console.log("App started at: " + new Date() + " on port: " + port);
});