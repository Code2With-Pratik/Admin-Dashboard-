class Order {
  constructor(db) {
    this.db = db;
  }

  getAll() {
    return this.db.promise().query(`
      SELECT o.*, u.name as customer_name, s.name as service_name 
      FROM orders o
      JOIN users u ON o.user_id = u.id
      JOIN services s ON o.service_id = s.id
      ORDER BY o.created_at DESC
    `);
  }
}

module.exports = Order;
