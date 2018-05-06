var cookieParser = require('cookie-parser')
var express = require('express');
var router = express.Router();
var models = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('Cookies: ', req.cookies);
    models.Todo.findAndCountAll({where: {complete: false}})       // find todo-item in in todo models
        .then(todo => {
            models.Todo.findAndCountAll({where: {complete: true}})  // find complete-item in todo models
        .then(complete =>{
            models.Todo.count({where: {priority: 'High', complete: false}})
        .then(todo_high_count =>{
            models.Todo.count({where: {priority: 'Medium', complete: false}})
        .then(todo_medium_count =>{
            models.Todo.count({where: {priority: 'Low', complete: false}})
        .then(todo_low_count =>{
            models.Todo.count({where: {priority: null, complete: false}})
        .then(todo_d_count =>{
                console.log(todo_d_count);

                res.render('index', { 
                title: 'Todo dashboard', 
                todo_list: todo.rows, 
                complete_list: complete.rows, 
                todo_count: todo.count,
                complete_count: complete.count,
                todo_high_priority_count: todo_high_count,
                todo_medium_priority_count: todo_medium_count,
                todo_low_priority_count: todo_low_count,
                todo_d_priority_count: todo_d_count
            });
        });
        });
        });
        });
        });
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
    models.Todo.findById(item_id).then(todo => {
        todo.update({
            complete: !(todo.complete)
        }).then(function(updated){
            res.redirect("/");
        });
    })
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