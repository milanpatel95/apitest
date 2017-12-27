'use strict'

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.savedata  = function(req,res){
  var new_user = new User(req.body);
  new_user.save(function(err,user){
    if(err)
      res.send(err);
    res.json(user);
  });
};

exports.updatedata = function(req,res){
  User.findOneAndUpdate({'uid':req.header('uid')},req.body,{new:true},function(err,user){
    if(err)
      res.send(err);
    res.json(user);
  });
};

exports.getdata = function(req,res){
  User.findOne({'uid':req.header('uid')},function(err,user){
    if(err)
      res.send(err);
    res.json(user);
  });
};

exports.getalldata = function(req,res){
  User.find({},function(err,user){
    if(err)
      res.send(err);
    res.json(user);
  });
};
