let Percolator = require('percolator').Percolator
let dbSession = require('../../src/backend/dbSession.js')

let Server = (port) => {
	let server = Percolator({'port': port, 'autolink': false})

	server.route('api/keywords',
	{
		GET: (req, res) => {
			dbSession.fetchAll('SELECT id, value, categoryID FROM keyword ORDER BY id', (err, rows) => {
				if (err) {
					console.log(err)
					res.status.internalServerError(err)
				} else {
					res.collection(rows).send()
				}
			})
		}
	})

	return server
}

module.exports = {'Server': Server}