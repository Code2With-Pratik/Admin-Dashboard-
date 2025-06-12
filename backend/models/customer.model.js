// backend/models/customer.model.js

const db = require("../config/db");

const Customer = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT id, name, email, phone, address, created_at 
        FROM users 
        WHERE role = 'customer'
      `;
      db.query(query, (err, results) => {
        if (err) return reject(err);
        resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT id, name, email, phone, address, created_at 
        FROM users 
        WHERE id = ? AND role = 'customer'
      `;
      db.query(query, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });
  },

  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM users WHERE id = ? AND role = 'customer'`;
      db.query(query, [id], (err, results) => {
        if (err) return reject(err);
        resolve(results.affectedRows > 0);
      });
    });
  }
};

module.exports = Customer;
