var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('signin', {title: 'Sign Ip'});
});

router.post('/', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
}));

module.exports = (passport, router);