const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb://localhost/anglrDemo')
const action = require('./action.js')



app.post('/signUp',(req,res)=>{
	action.register(req,res)
})

app.post('/login',(req,res)=>{
	action.authenticate(req,res)
})

app.listen('8009',()=>{
	console.log("app is runnig")
})