let MongoClient = require('mongodb').MongoClient
let url = 'mongodb://127.0.0.1:27017/accounting'

MongoClient.connect(url, (err, connection) => {
	let collection = connection.collection('customers')

	collection.update({}, {'$set': {'Age': 29}}, (err, count) => {
		console.log('Updated', count, 'documents')
		collection.find().toArray((err, documents) => {
			console.dir(documents)
			connection.close()
		})
	})
})