// server.js

	// set up ========================
	var express  = require('express');
	var app      = express(); 								// create our app w/ express
	var mongoose = require('mongoose'); 					// mongoose for mongodb
	var cloudinary = require('cloudinary');
	// configuration =================

	//need to change the url
	//mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu'); 	// connect to mongoDB database on modulus.io

	cloudinary.config({ 
	  cloud_name: 'sample', 
	  api_key: '874837483274837', 
	  api_secret: 'a676b67565c6767a6767d6767f676fe1' 
	});

	app.configure(function() {
		app.use(express.static(__dirname + '/app')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
		app.use(express.methodOverride()); 						// simulate DELETE and PUT
	});

	// define model =================
	// var Todo = mongoose.model('Todo', {
	// 	text : String
	// });

	app.get('*', function(req, res) {
		res.sendfile('./app/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// listen (start app with node server.js) ======================================
	app.listen(8080);
	console.log("App listening on port 8080");

