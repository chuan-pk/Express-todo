var express = require('express');
var router = express.Router();
var models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {

    models.Todo.findAll({
        // where:{
        //     complete: false             // find all todo in database, todo-list's complete attribute = false 
        // }
    }).then(function(todo){
      res.render('index', { title: 'Todo dashboard', todo_list: todo});  
        });
});

router.post('/', function(req, res){
    var text = req.body.todo_text;             // get todo text from input name = 'todo_text'
    var date = req.body.date;                  // get todo date from input name = 'date'        yyyy-mm-dd
    var priority = req.body.priority;          // get todo priority from input name = 'priority'

    models.Todo.create({
        todo_text: text,
        date: date,
        priority: priority,
        complete: false
    });
    res.redirect('/')
});


router.post('/submit/:item_id', function(req, res){
    var item_id = req.params.item_id;
});

router.post('/delete/:item_id', function(req, res){
    var item_id = req.params.item_id;
    models.Todo.destroy({
        where: {
            id: item_id
        }
    }).then(function(deleted){
            res.redirect('/');
    });
});


module.exports = router;
