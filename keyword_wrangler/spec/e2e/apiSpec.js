let request = require('request')

describe('The API', () => {
	it('should respond to a GET request at /api/keywords/', (done) => {
		let expected = {"_items":
			[
				{'id': 1, 'value': 'Aubergine', 'categoryID': 1},
				{'id': 2, 'value': 'Onion', 'categoryID': 1},
				{'id': 3, 'value': 'Knife', 'categoryID': 2}
			]
		}

		request.get(
		{
			'url': 'http://localhost:8080/api/keywords/',
			'json': true
		},
		(err, res, body) => {
			expect(res.statusCode).toBe(200)
			expect(body).toEqual(expected)
			done()
		})
	})
})