//Dependences
var express = require('express');
var path = require('path');
var app = express();

//app.use(express.static()); tells express to treat public folder as static folder
app.use(express.static(path.join(__dirname + '/public')));

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




  
//routes

//index page
app.get('/', function (req,res) {
  res.render('index');
});

//process.env.PORT replaces 3000 for c9.io

app.listen(3000, function () {
  console.log('App running on port 3000');
});