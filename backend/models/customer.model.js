// backend/models/customer.model.js
const db = require("../config/db");

const Customer = {
  getAll: async () => {
    try {
      const [rows] = await db.query(`
        SELECT id, full_name, email, phone, referral_code, referred_by, created_at 
        FROM customers
      `);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  getById: async (id) => {
    try {
      const [rows] = await db.query(`
        SELECT id, full_name, email, phone, referral_code, referred_by, created_at 
        FROM customers 
        WHERE id = ?
      `, [id]);
      return rows[0];
    } catch (err) {
      throw err;
    }
  },

  deleteById: async (id) => {
    try {
      const [result] = await db.query(`
        DELETE FROM customers 
        WHERE id = ?
      `, [id]);
      return result.affectedRows > 0;
    } catch (err) {
      throw err;
    }
  }
};

module.exports = Customer;
