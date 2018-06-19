let request = require('request')
let dbSession = require('../../src/backend/dbSession.js')
let Server = require('../../src/backend/server.js').Server
let resetDatabase = require('../resetDatabase.js')
let async = require('async')

describe('The API', () => {

	let server

	beforeEach((done) => {
		server = Server('8081')
		server.listen((err) => {
			resetDatabase(dbSession, () => { done(err) })
		})
	})

	afterEach((done) => {
		server.close(() => {
			resetDatabase(dbSession, () => { done(err) })
		})
	})

	it('should respond to a GET request at /api/keywords/', (done) => {
		let expected = {"_items": [
			{'id': 1, 'value': 'Aubergine', 'categoryID': 1},
			{'id': 2, 'value': 'Onion', 'categoryID': 1},
			{'id': 3, 'value': 'Knife', 'categoryID': 2}
		]}

		async.series([

			(callback) => {
				dbSession.insert(
					'keyword',
					{'value': 'Aubegine', 'categoryID': 1},
					(err) => { callback(err) }
				)
			},

			(callback) => {
				dbSession.insert(
					'keyword',
					{'value': 'Onion', 'categoryID': 1},
					(err) => { callback(err) }
				)
			},

			(callback) => {
				dbSession.insert(
					'keyword',
					{'value': 'Knife', 'categoryID': 2},
					(err) => { callback(err) }
				)
			}],

			(err, results) => {
				request.get(
					{
						'url': 'http://localhost:8081/api/keywords/',
						'json': true
					},
					(err, res, body) => {
						expect(res.statusCode).toBe(200)
						expect(body).toEqual(expected)
						done()
					}
				)
			}
			
		)
	})
})