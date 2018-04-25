process.env.NODE_ENV = 'test';

var app      = require('../app');
let models = require('../db/models');
let chai = require('chai');
let chaiHttp = require('chai-http');
var assert = require('chai').assert;
let should = chai.should();
chai.use(chaiHttp);

describe('Todo', function () {
  before(function () {
    return models.sequelize.sync();
  });
  
  beforeEach('', function () {
    return models.Todo.destroy({ truncate: true })
  });

  describe('/GET todo', () => {
    it('loads page correctly', function (done) {
      chai.request(app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.to.be.empty;
          done();
        });
    });
	});
  
  describe('/POST todo', () => {
    it('it should POST a book', (done) => {
      let todo = {
        todo_text: "todo_1",
        date: "2018-05-22",
        priority: 'High',
      }
        chai.request(app)
        .post('/')
        .send(todo)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            assert.include(todo , {todo_text: "todo_1"});
            assert.include(todo , {date: "2018-05-22"});
            assert.include(todo , {priority: "High"});
          done();
        });
  	});
  });
});