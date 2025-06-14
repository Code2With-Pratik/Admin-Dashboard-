// backend/models/service.model.js

const db = require("../config/db");

const Service = {
  create: async (serviceData) => {
    const {
      ids, uid, cate_id, name, sort, quantity, desc, price, original_price,
      min, max, add_type, is_free, type, api_service_id, api_provider_id,
      api_provider_price, discount_type, discount_value, discount_start_date,
      discount_end_date, is_tab_name, tab_name, tab_name_background, options,
      status
    } = serviceData;

    const [result] = await db.query(
      `INSERT INTO services (
        ids, uid, cate_id, name, sort, quantity, \`desc\`, price, original_price,
        \`min\`, \`max\`, add_type, is_free, type, api_service_id, api_provider_id,
        api_provider_price, discount_type, discount_value, discount_start_date,
        discount_end_date, is_tab_name, tab_name, tab_name_background, options,
        status, created
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
      [
        ids, uid, cate_id, name, sort, quantity, desc, price, original_price,
        min, max, add_type, is_free, type, api_service_id, api_provider_id,
        api_provider_price, discount_type, discount_value, discount_start_date,
        discount_end_date, is_tab_name, tab_name, tab_name_background, options,
        status
      ]
    );

    return result.insertId;
  },

  getAll: async () => {
    const [rows] = await db.query(`
      SELECT id, name, price, quantity, type, status, created 
      FROM services
      ORDER BY created DESC
    `);
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query("SELECT * FROM services WHERE id = ?", [id]);
    return rows[0];
  },

  updateById: async (id, updatedData) => {
    const [existingRows] = await db.query("SELECT * FROM services WHERE id = ?", [id]);
    if (existingRows.length === 0) return 0;

    const current = existingRows[0];
    const updated = {
      ...current,
      ...updatedData,
    };

    const [result] = await db.query(
      `UPDATE services SET
        ids = ?, uid = ?, cate_id = ?, name = ?, sort = ?, quantity = ?, \`desc\` = ?, price = ?, original_price = ?,
        \`min\` = ?, \`max\` = ?, add_type = ?, is_free = ?, type = ?, api_service_id = ?, api_provider_id = ?,
        api_provider_price = ?, discount_type = ?, discount_value = ?, discount_start_date = ?, discount_end_date = ?,
        is_tab_name = ?, tab_name = ?, tab_name_background = ?, options = ?, status = ?, changed = NOW()
        WHERE id = ?`,
      [
        updated.ids, updated.uid, updated.cate_id, updated.name, updated.sort, updated.quantity, updated.desc,
        updated.price, updated.original_price, updated.min, updated.max, updated.add_type, updated.is_free,
        updated.type, updated.api_service_id, updated.api_provider_id, updated.api_provider_price,
        updated.discount_type, updated.discount_value, updated.discount_start_date, updated.discount_end_date,
        updated.is_tab_name, updated.tab_name, updated.tab_name_background, updated.options, updated.status, id
      ]
    );

    return result.affectedRows;
  },

  deleteById: async (id) => {
    const [result] = await db.query("DELETE FROM services WHERE id = ?", [id]);
    return result.affectedRows > 0;
  },

  // Filter by status (for admin UI)
  getByStatus: async (status) => {
    const [rows] = await db.query(
      "SELECT * FROM services WHERE status = ? ORDER BY created DESC",
      [status]
    );
    return rows;
  },

  // Filter by category
  getByCategory: async (cate_id) => {
    const [rows] = await db.query(
      "SELECT * FROM services WHERE cate_id = ? ORDER BY sort ASC",
      [cate_id]
    );
    return rows;
  },

  // Search by name
 search: async (query) => {
  const [rows] = await db.query(
    "SELECT * FROM services WHERE name LIKE ? OR type LIKE ?",
    [`%${query}%`, `%${query}%`]
  );
  return rows;
},
};

module.exports = Service;
