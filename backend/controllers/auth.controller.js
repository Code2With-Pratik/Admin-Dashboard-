// backend/controllers/auth.controller.js

const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findByEmail(email);
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin.id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "Login successful", token, role: admin.role });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};
