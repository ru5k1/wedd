var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');

});

var server = app.listen(443,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening on port 443');
});
