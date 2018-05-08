var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/',function(req,res){
  res.redirect('/');
  });

router.post('/', passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup',
}));

module.exports = (passport, router);