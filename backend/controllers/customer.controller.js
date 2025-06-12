const Customer = require("../models/customer.model");

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.getAll();
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching customers", error: err.message });
  }
};
