'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Milkman = mongoose.model('Milkman'),
    Banks = mongoose.model('Banks'),
    Doctors = mongoose.model('Doctors'),
    NGO = mongoose.model('NGO'),
    passport = require('passport');

/**
 * Create user
 */
exports.create = function (req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.save(function(err) {
    if (err) return res.json(400, err);
    
    req.logIn(newUser, function(err) {
      if (err) return next(err);

      return res.json(req.user.userInfo);
    });
  });
};

/**
 *  Get profile of specified user
 */
exports.show = function (req, res, next) {
  var userId = req.params.id;

  User.findById(userId, function (err, user) {
    if (err) return next(err);
    if (!user) return res.send(404);

    res.send({ profile: user.profile });
  });
};

exports.showMilkman = function (req, res, next) {

  var query = Milkman.find();
  var fields = 'firstName lastName bashi buffalo camel children';
  query.select(fields);

  query.exec(function(err,data){
    if(err) return next(err);
    res.send(data);
  });
};

exports.showBanks = function(req,res,next){

  var query = Banks.find();
  

  query.exec(function(err,data){
    if(err) return next(err);
    res.send(data);
  });
};

exports.showVillages = function(req,res,next){

  // TODO: Fill this
  res.send([{'title':'blah'}]);
};

exports.showDoctors = function(req,res,next){

  var query = Doctors.find();
  

  query.exec(function(err,data){
    if(err) return next(err);
    res.send(data);
  });
};

exports.showSuppliers = function(req,res,next){

  // TODO: Fill this
  res.send([{'title':'blah'}]);
};

exports.showNGO = function(req,res,next){

  var query = NGO.find();
  

  query.exec(function(err,data){
    if(err) return next(err);
    res.send(data);
  });
};

/**
 * Change password
 */
exports.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return res.send(400);

        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

/**
 * Get current user
 */
exports.me = function(req, res) {
  res.json(req.user || null);
};