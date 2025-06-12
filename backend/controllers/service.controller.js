const Service = require("../models/service.model");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.getAll();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: "Error fetching services", error: err.message });
  }
};

exports.addService = async (req, res) => {
  try {
    const result = await Service.create(req.body);
    res.status(201).json({ message: "Service created", id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: "Failed to add service", error: err.message });
  }
};

exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Service.update(id, req.body);
    res.status(200).json({ message: "Service updated" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update service", error: err.message });
  }
};