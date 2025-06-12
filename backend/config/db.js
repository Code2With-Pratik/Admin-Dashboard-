// backend/config/db.js
require('dotenv').config();           // loads .env into process.env
const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:     process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection (optional)
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('✅ MySQL connected:', process.env.DB_NAME);
    conn.release();
  } catch (err) {
    console.error('❌ MySQL connection error:', err.message);
    process.exit(1);
  }
}

testConnection();

module.exports = pool;
