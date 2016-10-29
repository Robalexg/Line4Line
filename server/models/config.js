const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// const db = mongoose.connect('mongodb://localhost:51707/line4line')
const db = mongoose.connect('mongodb://heroku_3p151kcj:7rulu53hu64jb1euj339uvtarv@ds137267.mlab.com:37267/heroku_3p151kcj')

module.exports = db


