const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqlbash'
});

connection.query('USE test_db');

// router.get('/account/:id', (req, res) => {
//     connection.query(`SELECT * FROM users WHERE id = ${req.params.id}` (err, rows) => {
//         res.render('account', {
//             users: rows,
//         });
//     });
// });

// router.post('/account/:id', (req, res) => {
//     connection.query('SELECT * FROM users WHERE id = :id', (err, rows) => {
//         res.render('account', {
//             users: rows,
//         });
//     });
// });

module.exports = router;
