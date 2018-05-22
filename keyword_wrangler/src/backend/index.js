let Percolator = require('percolator').Percolator

let port = 8080
let server = Percolator({'port': port})

server.route('/api/keywords',
	{
		GET: (req, res) => {
			res.object({'foo': 'bar'}).send()
		}
	}
)

server.listen(() => {
	console.log('Server started and listening on port', port);
})