// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname, 'activity.txt');

var watch = require('node-watch');
 
watch(filePath, function(req,res) {
	fs.readFile(filePath, function(err,data){
		if (!err){
		console.log('received data: ' + data);
		}else{
			console.log(err);
		}
		app.render('pages/live', { dataR:data }, function(err, html){
		});	
	});
	
	
});




app.get('/', function(req, res) {
	fs.readFile(filePath, function(err,data){
		if (!err){
		console.log('received data: ' + data);
		}else{
			console.log(err);
		}
		res.render('pages/index',{feed:data});	
	});  
});

app.listen(8080);
console.log('8080 is the magic port');