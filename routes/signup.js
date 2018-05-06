var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('signup', {title: 'Sign Up'});
});

router.post('/', passport.authenticate('local-signup', {
    successRedirect: '/', 
    failureRedirect: '/signup',
}));

module.exports = (passport, router);