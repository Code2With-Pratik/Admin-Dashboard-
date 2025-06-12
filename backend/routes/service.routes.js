const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service.controller");

router.get("/", serviceController.getAllServices);
router.post("/", serviceController.addService);
router.put("/:id", serviceController.updateService);

module.exports = router;