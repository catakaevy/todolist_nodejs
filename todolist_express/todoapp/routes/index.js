const express = require('express');
const router = express.Router();
const mysql = require('mysql');
require('dotenv').config()
const { DB_PW } = process.env

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: DB_PW,
  database: 'todo_app'
})

// set list box
let todos = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'ToDo App',
    todos: todos
  });
});

router.post('/', function (req, res, next) {
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });
  const todo = req.body.add;
  connection.query(
    `insert into tasks (user_id, content) values (1, '${todo}');`,
    (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      res.redirect('/');
    }
  );
});

module.exports = router;
