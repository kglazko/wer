var express = require('express');
var app = express();

//Nano Module Configuration
var nano = require('nano')('http://localhost:5984');
//Specify which database to use each time
var db = nano.use('testruns');
//Config
const PORT = 3000;
const AUDIENCE = "http://localhost:" +PORT;

app.get('/', function (req,res){
	res.send('Hello World!');
});

app.listen(3000,function(){
	console.log('Example app listening on port 3000');
});

app.post('/test_run', function(req, resp) {
	//Grab 
});