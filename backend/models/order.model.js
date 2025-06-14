const db = require("../config/db");

const Order = {
  // Get all orders
  getAll: async () => {
    const [rows] = await db.query(`
      SELECT 
        id, user, charge, link, start_count, quantity, service, status, remains, created_at, mode 
      FROM orders 
      ORDER BY created_at DESC
    `);
    return rows;
  },

  // Get order by ID
  getById: async (id) => {
    const [rows] = await db.query(`
      SELECT 
        id, user, charge, link, start_count, quantity, service, status, remains, created_at, mode 
      FROM orders 
      WHERE id = ?
    `, [id]);
    return rows[0];
  },

  // Update order details
  update: async (id, data) => {
    const [existingRows] = await db.query(`SELECT * FROM orders WHERE id = ?`, [id]);
    if (existingRows.length === 0) return 0;

    const current = existingRows[0];

    const {
      user = current.user,
      charge = current.charge,
      link = current.link,
      start_count = current.start_count,
      quantity = current.quantity,
      service = current.service,
      status = current.status,
      remains = current.remains,
      mode = current.mode,
    } = data;

    const [result] = await db.query(`
      UPDATE orders 
      SET user = ?, charge = ?, link = ?, start_count = ?, quantity = ?, 
          service = ?, status = ?, remains = ?, mode = ?
      WHERE id = ?
    `, [user, charge, link, start_count, quantity, service, status, remains, mode, id]);

    return result.affectedRows;
  },

  // Cancel order (just updates the status)
  cancel: async (id) => {
    const [result] = await db.query(`
      UPDATE orders 
      SET status = 'canceled' 
      WHERE id = ?
    `, [id]);
    return result.affectedRows;
  },

  // Refund order (example: sets status and optionally reset charge)
  refund: async (id) => {
    const [result] = await db.query(`
      UPDATE orders 
      SET status = 'refunded', charge = 0 
      WHERE id = ?
    `, [id]);
    return result.affectedRows;
  }
};

module.exports = Order;
