class Service {
  constructor(db) {
    this.db = db;
  }

  create(serviceData) {
    const sql = `
      INSERT INTO services 
      (name, original_price, discount, price, quantity, type, provider, status, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;
    const { name, original_price, discount, price, quantity, type, provider, status } = serviceData;
    return this.db.promise().execute(sql, [
      name, original_price, discount, price, quantity, type, provider, status
    ]);
  }

  getAll() {
    return this.db.promise().query("SELECT * FROM services ORDER BY created_at DESC");
  }

  // Add more methods as needed (update, delete, etc.)
}

module.exports = Service;
