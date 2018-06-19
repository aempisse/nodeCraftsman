let Server = require('./server.js').Server

let server = Server('8080')

server.listen(() => {
	console.log('Server started and listening on port', server.options.port);
})