let Percolator = require('percolator').Percolator
let dbSession = require('../../src/backend/dbSession.js')

let port = 8080
let server = Percolator({'port': port})

server.route('/api/keywords',
	{
		GET: (req, res) => {
			dbSession.fetchAll(
				'SELECT id, value, categoryID FROM keyword ORDER BY id',
				(err, rows) => {
					if (err) {
						console.log(err)
						res.status.internalServerError(err)
					} else {
						res.collection(rows).send()
					}
				}
			)
		}
	}
)

server.listen(() => {
	console.log('Server started and listening on port', port);
})