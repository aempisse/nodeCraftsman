'use strict'

var fs = require('fs');

var stream = fs.createReadStream('blablabla');

var content = '';

stream.on('error', function(err) {
	console.log("Oops: " + err);
});

stream.once('data', function(data) {
	console.log("First chunk received");
	content = data;
});

stream.on('data', function(data) {
	content += data;
});

stream.on('end', function() {
	console.log("Data received: " + content);
});