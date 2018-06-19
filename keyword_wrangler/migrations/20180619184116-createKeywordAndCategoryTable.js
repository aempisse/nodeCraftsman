let dbm = require('db-migrate')
let type = dbm.dataType
let async = require('async')

exports.up = (db, callback) => {
  async.series(
  	[
  		db.createTable.bind(db, 'keywords', {
  			id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
  			value: { type: 'string', length: '128', notNull: true, unique: true },
  			categoryID: { type: 'int', notNull: true }
  		}),
  		db.createTable.bind(db, 'category', {
  			id: { type: 'int', primaryKey: true, autoIncrement: true, notNull: true },
  			name: { type: 'string', length: '128', notNull: true }
  		})
  	], callback)
}

exports.down = (db, callback) => {
  async.series(
  	[
  		db.dropTable.bind(db, 'keywords'),
  		db.dropTable.bind(db, 'category')
  	], callback)
}

exports._meta = {
  "version": 1
}
