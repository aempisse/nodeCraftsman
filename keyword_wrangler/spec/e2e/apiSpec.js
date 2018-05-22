let request = require('request')

describe('The API', () => {
	it('should respond to a GET request at /api/keywords/', (done) => {
		request.get(
		{
			'url': 'http://localhost:8080/api/keywords/',
			'json': true
		},
		(err, res, body) => {
			expect(res.statusCode).toBe(200)
			expect(body.foo).toEqual('bar')
			done()
		})
	})
})