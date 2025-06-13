// backend/controllers/admin.controller.js

const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");

exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.getAll();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch admins", error: err.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await Admin.create({ name, email, password: hashedPassword, role });
    res.status(201).json({ message: "Admin created", id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Failed to create admin", error: err.message });
  }
};

exports.updateAdminRole = async (req, res) => {
  const { id } = req.params;
  const { role ,name} = req.body;
  try {
    const updated = await Admin.updateRole(id, role,name);
    if (updated) {
      res.status(200).json({ message: "Role updated" });
    } else {
      res.status(404).json({ message: "Admin not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update role", error: err.message });
  }
};
