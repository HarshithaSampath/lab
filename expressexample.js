var express=require('express')
var app=express()
app.get('/',function(req,res){
	res.send('This is a Sample example for express.js')
})
var server=app.listen(8000)