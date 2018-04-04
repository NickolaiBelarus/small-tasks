const express = require('express');
const mysql = require('mysql');
const path = require('path');

const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlbash'
});

connection.query('USE test_db');


router.use(express.static(path.join(__dirname, 'public')));


router.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, rows) => {
        res.render('account', {
            users: rows
        });
        // var data = {users: rows[0]}
        // res.render('users', data);
    });
});

router.get('/:id', (req, res) => {
    connection.query('SELECT * FROM users ' +
        `WHERE id = ${req.params.id}`, (err, rows) => {
        res.render('account', {
            users: rows
        });
    });
});

router.delete('/:id', (req, res) => {
    connection.query('DELETE FROM users ' +
        `WHERE id = ${req.params.id}`, (err, rows) => {
        console.log(`Number of records deleted: ${rows.affectedRows}`);
        res.send(`Number of records deleted: ${rows.affectedRows}`);
    });
});

router.put('/:id', (req, res) => {
    connection.query(
        'UPDATE `users`' +
        `SET username= "${req.body.email}", fullname= "${req.body.name}", password= "${req.body.password}", role= "${req.body.role}"` +
        `WHERE id = ${req.params.id}`,
        (err, result) => {
            if (err) throw err;
            res.send(`User added to database with ID: ${result.insertId}`);
        }
    );
});

router.post('/', (req, res) => {
    connection.query(
        'INSERT INTO `users`' +
        ' (`id`,`username`,`fullname`,`password`,`role`)' +
        ` VALUES (NULL, "${req.body.email}", "${req.body.name}","${req.body.password}", "${req.body.role}")`,
        (err, result) => {
            if (err) throw err;
            res.send(`User added to database with ID: ${result.insertId}`);
        }
    );
});

module.exports = router;
