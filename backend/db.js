const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',         // or 127.0.0.1
  user: 'root',              // default XAMPP user
  password: '',              // default is empty in XAMPP
  database: 'ssadmin'   // e.g., 'smartstore'
});

// Connect
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

module.exports = connection;
