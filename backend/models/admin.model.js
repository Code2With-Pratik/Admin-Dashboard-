// backend/models/admin.model.js

const db = require("../config/db");

const Admin = {
  findByEmail: async (email) => {
    const [rows] = await db.query("SELECT * FROM admins WHERE email = ?", [email]);
    return rows[0];
  },

  create: async (adminData) => {
    const { name, email, password, role } = adminData;
    const [result] = await db.query(
      "INSERT INTO admins (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, password, role || "viewer"]
    );
    return result;
  },

  getAll: async () => {
    const [rows] = await db.query("SELECT id, name, email, role FROM admins");
    return rows;
  },

  updateRole: async (id, role) => {
    const [result] = await db.query("UPDATE admins SET role = ? WHERE id = ?", [role, id]);
    return result.affectedRows;
  }
};

module.exports = Admin;
