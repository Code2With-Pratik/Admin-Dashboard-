// backend/routes/customer.routes.js

const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.get("/", customerController.getAllCustomers);
router.get("/:id", customerController.getCustomerById);
router.delete("/:id", customerController.deleteCustomerById);

module.exports = router;
