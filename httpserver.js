var http=require('http');
var ser=http.createServer(function(req,res){
	res.write("Hello world! I have creted my first serevr!");
	res.write("nodemon Example Program!");
	res.end();
	});
ser.listen(3000);
console.log("Server  started...Running on localhost:3000");