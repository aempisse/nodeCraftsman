let DBWrapper = require('node-dbi').DBWrapper

let dbWrapper = new DBWrapper('sqlite3', {'path': '/var/tmp/keyword-wrangler.test.sqlite'})
dbWrapper.connect()

module.exports = dbWrapper