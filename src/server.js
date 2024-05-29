const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'u2627311_default',
    password: '9P0fa53p0Gx1ZZwm',
    database: 'u2627311_default',
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected!');
});

app.post('/api/saveUser', (req, res) => {
    const { telegramId, phoneNumber } = req.body;
    const sql = 'INSERT INTO users (telegramId, phoneNumber) VALUES (?, ?)';
    db.query(sql, [telegramId, phoneNumber], (err, result) => {
        if (err) {
            return res.status(400).json('Error:' + err);
        }
        res.json({ id: result.insertId, telegramId, phoneNumber });
    });
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});