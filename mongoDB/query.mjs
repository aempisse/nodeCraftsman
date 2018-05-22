import MongoClient from 'mongodb'

let url = 'mongodb://127.0.0.1:27017/accounting'

MongoClient.connect( url, (err, connection) => {
		let collection = connection.collection('customers')
		
		collection.find(
			{'v': {'$gt': 5}},
			{
				'skip:': 100000,
				'limit': 10,
				'sort': 'v'
			}
		).toArray((err, documents) => {
			console.dir(documents)
			connection.close()
		})
	}
)