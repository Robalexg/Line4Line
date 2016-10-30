const mongoose   = require('mongoose')
//hashing tool
//average number of rounds
const Schema     = mongoose.Schema
//set up for a new user
const currentUserSchema = new Schema({
	name: String,
	profilePic: String,
	socketId: String
})

const currentUser  = mongoose.model('currentUsers', currentUserSchema)
module.exports  = currentUser
