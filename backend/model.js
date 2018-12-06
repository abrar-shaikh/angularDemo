const mongoose = require('mongoose')

var user = mongoose.Schema({
	fullName:{type:String,required:true},
	gender:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true}
})

module.exports = mongoose.model('user',user)