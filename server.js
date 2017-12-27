var express = require('express');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
var routes = require('./api/routes/routes');
var mongoose = require('mongoose');
var User = require('./api/model/model');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDb');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.listen(port);
console.log('Server started on port:'+port);

app.use(function(req,res){
  res.status(404).send({url:req.originalUrl + ' not found'})
});
