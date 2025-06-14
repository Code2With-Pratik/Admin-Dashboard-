const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

// GET all orders
router.get("/", orderController.getAllOrders);

// GET order by ID
router.get("/:id", orderController.getOrderById);

// PUT update order
router.put("/:id", orderController.updateOrder);

// PUT cancel order
router.put("/cancel/:id", orderController.cancelOrder);

// PUT refund order
router.put("/refund/:id", orderController.refundOrder);

module.exports = router;
