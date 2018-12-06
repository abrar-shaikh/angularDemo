var model = require('./model.js')

function register(req,res){
	let user = new model(req.body)
	return model.findOne({email:req.body.email}).then((data)=>{
		if(!data){
			user.save().then((data)=>{

				res.json({code:201,message:'user successfully registered',data:data})
			}).catch((err)=>{
				if(err){
					res.json({code:500,message:"internal server error"})
				}
			})
		}
		else{
			res.json({code:400,message:"user already registered"})
		}
	})
}

function authenticate(req,res){
	return model.findOne({email:req.body.email}).then((data)=>{
		if(!data){
			res.json({code:404,message:"no such user is registered"})
		}
		else{
			if(data.password === req.body.password){
				res.json({code:200,message:"successfully logged in"})
			}
			else{
				res.json({code:400,message:"you entered wrong password"})
			}
		}
	}).catch((err)=>{
		if(err){
			console.log(err)
			res.json({code:500,message:"internal server error"})
		}
	})
}

module.exports = {
	register,
	authenticate
}