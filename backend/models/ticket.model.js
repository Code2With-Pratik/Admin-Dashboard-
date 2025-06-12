class Ticket {
  constructor(db) {
    this.db = db;
  }

  create({ user_id, order_id, title, description }) {
    const sql = `
      INSERT INTO tickets (user_id, order_id, title, description, status, created_at)
      VALUES (?, ?, ?, ?, 'pending', NOW())
    `;
    return this.db.promise().execute(sql, [user_id, order_id, title, description]);
  }

  getAll() {
    return this.db.promise().query(`
      SELECT t.*, u.name AS user_name 
      FROM tickets t 
      JOIN users u ON t.user_id = u.id 
      ORDER BY t.created_at DESC
    `);
  }

  updateStatus(ticketId, status) {
    return this.db.promise().execute(
      "UPDATE tickets SET status = ? WHERE id = ?",
      [status, ticketId]
    );
  }
}

module.exports = Ticket;
