var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo dashboard' });
});

router.post('/', function(req, res){
    var text = req.body.todo_text;              // get todo text from input name = 'todo_text'
    var html_text = "<li>" + text + "</li>"     
    res.render('index', {title: 'Todo dashboard', todo_text: html_text});
})

module.exports = router;
