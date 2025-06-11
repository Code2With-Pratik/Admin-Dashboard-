const express = require('express');
const app = express();
const db = require('./db'); // your db.js

app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send('DB Error');
    res.json(results);
  });
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));
