'use strict'

function greet(string) {
	if (string)
		return("Hello " + string + "!");
	return("Hello world!");
}

module.exports = greet;