const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  contact: String
},{ timestamp: true })

const User = mongoose.model('User', userSchema)
module.exports = User
