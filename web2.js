var http=require('http');
var ser=http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("Hello world");
	res.write("<br>");
	res.write("<h1>hi hello</h1>");
	res.end();
	});
ser.listen(2020);
console.log("Server 2020 started");