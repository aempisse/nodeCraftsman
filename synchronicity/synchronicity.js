// console.log("Hello");

// setTimeout(function() {
// 	console.log("World");
// }, 1000);

var fs = require('fs');

fs.stat('/etc/passwd', function(err, stats) {
	console.dir(stats);
})