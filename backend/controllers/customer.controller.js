// backend/controllers/customer.controller.js

const Customer = require("../models/customer.model");

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    res.status(200).json(customers);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).json({ message: "Error fetching customers", error: err.message });
  }
};


exports.getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await Customer.getById(id);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: "Customer not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching customer", error: err.message });
  }
};

exports.deleteCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Customer.deleteById(id);
    if (deleted) {
      res.status(200).json({ message: "Customer deleted" });
    } else {
      res.status(404).json({ message: "Customer not found or not deleted" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error deleting customer", error: err.message });
  }
};
