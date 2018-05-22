let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/accounting'

MongoClient.connect(url, (err, connection) => {
	let collection = connection.collection('customers')

	let doInsert = (i) => {
		if (i < 1000000) {
			let value = Math.floor(Math.random() * 10)

			collection.insert(
				{'n': '#' + i, 'v': value}, (err, count) => {
					doInsert(i + 1)
				}
			)
		} else {
			connection.close()
		}
	}
	
	doInsert(200000)
})