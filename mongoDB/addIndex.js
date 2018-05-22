let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/accounting'

MongoClient.connect(url, (err, connection) => {
	let collection = connection.collection('customers')

	collection.ensureIndex('v', (err, indexName) => {
		connection.close()
	})
})