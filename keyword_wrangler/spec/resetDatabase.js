let async = require('async')

let resetDatabase = (dbSession, callback) => {
	async.series(
		[
			(callback) => {
				dbSession.remove('keyword', '1', (err) => { callback(err) })
			},
			(callback) => {
				dbSession.remove('category', '1', (err) => { callback(err) })
			}
		],
		(err, results) => { callback(err) }
	)
}

module.exports = resetDatabase