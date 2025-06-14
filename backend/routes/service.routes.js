// backend/routes/service.route.js

const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");

// POST: Create service
router.post("/", serviceController.createService);

// GET: All services
router.get("/", serviceController.getAllServices);

// GET: Service by ID
router.get("/:id", serviceController.getServiceById);

// PUT: Update service by ID
router.put("/:id", serviceController.updateService);

// DELETE: Delete service by ID
router.delete("/:id", serviceController.deleteService);

// GET: Services by status
router.get("/status/:status", serviceController.getServicesByStatus);

// GET: Services by category
router.get("/category/:cate_id", serviceController.getServicesByCategory);

// GET: Search services by name (use query param like ?query=followers)
router.get("/search/query", serviceController.searchServices);

module.exports = router;
