// Express web application framework
var express = require('express');

// Parsing middleware, see https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');

// Allow cross-origin resource sharing, see https://www.npmjs.org/package/cors
var cors = require('cors');

// Detail of this request module can be found at https://github.com/mikeal/request
var request = require('request');

function fhdbRoute() {
  // APP_URL is the root of the URL that accesses the MongoDb database
  var appurl = process.env.APP_URL + '/';

  var fhdb = new express.Router();
  fhdb.use(cors());
  fhdb.use(bodyParser());

  // GET REST endpoints from here on in - query params may or may not be populated
  fhdb.get('/', function(req, res) {
    // see http://expressjs.com/4x/api.html#res.json
    res.json({msg: 'fhdb root here'});
  });

  fhdb.get('/list', function(req, res) {
    // Return listing of entire contents of the database.
    url = appurl + 'fhdbList';
    timelog(url);
    timelog('get list');

    request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.get('/addMrJones', function(req, res) {
    // Add Jim Jones entry.
    url = appurl + 'fhdbAdd';
    timelog(url);
    timelog('get add mr jones');

    request.post(url, { "form" : { "firstname" : "jim", "lastname" : "jones", "country" : "Ireland", "phone" : "123456" } }, 
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.get('/addMrSmith', function(req, res) {
    // Add Jack Smith entry.
    url = appurl + 'fhdbAdd';
    timelog(url);
    timelog('get add mr smith');
    
    request.post(url, { "form" : { "firstname" : "jack", "lastname" : "smith", "country" : "dbland", "phone" : "987654" } }, 
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.post('/', function(req, res) {
    res.json({msg: 'fhdb root here'});
  });

  fhdb.post('/list', function(req, res) {
    // Return listing of entire contents of the database.
    url = appurl + 'fhdbList';
    timelog(url);

    request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  // POST REST endpoints - note we use 'body-parser' middleware above to parse the request body in this route.
  // This can also be added in application.js
  // See: https://github.com/senchalabs/connect#middleware for a list of Express 4 middleware
  fhdb.post('/addMrJones', function(req, res) {
    // Add Jim Jones entry.
    url = appurl + 'fhdbAdd';
    timelog(url);
    timelog('post add mr jones');

    request.post(url, { "form" : { "firstname" : "jim", "lastname" : "jones", "country" : "Ireland", "phone" : "123456" } }, 
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.post('/addMrSmith', function(req, res) {
    // Add Jack Smith entry.
    url = appurl + 'fhdbAdd';
    timelog(url);
    timelog('post add mr smith');
    
    request.post(url, { "form" : { "firstname" : "jack", "lastname" : "smith", "country" : "dbland", "phone" : "987654" } }, 
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.post('/deleteall', function(req, res) {
    // Clear the database.
    url = appurl + 'deleteAll';
    timelog(url);
    timelog('post deleteall');
    
    request(url,
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.get('/deleteall', function(req, res) {
    // Clear the database.
    url = appurl + 'deleteAll';
    timelog(url);
    timelog('get delete all');
    
    request(url,
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.post('/listLastName', function(req, res) {
    // List all with 'smith' as surname.
    url = appurl + 'fhdbListLastName';
    timelog(url);
    timelog('post list last name');

  	request.post(url, { "form" : { "lastname" : "smith" } },
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  fhdb.get('/listLastName', function(req, res) {
    // List all with 'smith' as surname.
    url = appurl + 'fhdbListLastName';
    timelog(url);
    timelog('get list last name');

  	request.post(url, { "form" : { "lastname" : "smith" } },
    function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // Success
      timelog("Response is " + body);
      res.json({msg: body});
    }
    else {
      // Error
      timelog("ERROR.  Response is " + error);
      res.json({msg: error});
    }
	})
  });

  return fhdb;
}

timelog = function(message) {
  // console.log with a timestamp.
	console.log(new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') + ' UTC -- ' + message);
}

module.exports = fhdbRoute;