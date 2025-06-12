class User {
  constructor(db) {
    this.db = db;
  }

  getAllCustomers() {
    // Do NOT fetch password
    return this.db.promise().query(`
      SELECT id, name, email, phone, created_at, status 
      FROM users 
      WHERE role = 'customer'
    `);
  }

  getById(id) {
    return this.db.promise().query(
      "SELECT id, name, email, phone, created_at, status FROM users WHERE id = ?",
      [id]
    );
  }
}

module.exports = User;
