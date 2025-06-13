// backend/models/ticket.model.js
const db = require("../config/db");

const Ticket = {

  getAll: async () => {
    try {
      const sql = `
        SELECT t.*, u.full_name AS user_name 
FROM support_tickets t 
LEFT JOIN users u ON t.user_id = u.id 
ORDER BY t.created_at DESC;

      `;

      const rows = await db.query(sql);
      return rows;
    } catch (err) {
      throw err;
    }
  },

  updateStatus: async (ticketId, status) => {
  try {
    const result = await db.query(
      `UPDATE support_tickets SET status = ? WHERE id = ?`,
      [status, ticketId]
    );
    // Depending on DB driver, you might need to access `result[0].affectedRows`
    return result.affectedRows > 0 || result[0]?.affectedRows > 0;
  } catch (err) {
    throw err;
  }
}

};

module.exports = Ticket;
