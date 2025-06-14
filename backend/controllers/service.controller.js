// backend/controllers/service.controller.js

const Service = require("../models/service.model");

// Create a new service
exports.createService = async (req, res) => {
  try {
    const serviceId = await Service.create(req.body);
    res.status(201).json({ message: "Service created", id: serviceId });
  } catch (err) {
    res.status(500).json({ message: "Failed to create service", error: err.message });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.getAll();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch services", error: err.message });
  }
};

// Get service by ID
exports.getServiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.getById(id);
    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch service", error: err.message });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Service.updateById(id, req.body);
    if (updated) {
      res.status(200).json({ message: "Service updated successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update service", error: err.message });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Service.deleteById(id);
    if (deleted) {
      res.status(200).json({ message: "Service deleted successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete service", error: err.message });
  }
};

// Get services by status
exports.getServicesByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const services = await Service.getByStatus(status);
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch services by status", error: err.message });
  }
};

// Get services by category
exports.getServicesByCategory = async (req, res) => {
  const { cate_id } = req.params;
  try {
    const services = await Service.getByCategory(cate_id);
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch services by category", error: err.message });
  }
};

// Search services by name
exports.searchServices = async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: "Missing search query" });

  try {
    const results = await Service.search(q);
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err.message });
  }
};

