'use strict';

var express = require('express');

var app = express();

app.get('/',function(req,res){
	res.send("<h1>I Love China!</h1>");
});


app.listen(4000,function(){
	console.log("The frontend server is running on port 4000");
});