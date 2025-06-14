const Order = require("../models/order.model");

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.getAll();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders", error: err.message });
  }
};

// Get order by ID
exports.getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.getById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: "Error fetching order", error: err.message });
  }
};

// Update order
exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updated = await Order.update(id, data);
    if (updated) {
      res.status(200).json({ message: "Order updated successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update order", error: err.message });
  }
};

// Cancel order
exports.cancelOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const cancelled = await Order.cancel(id);
    if (cancelled) {
      res.status(200).json({ message: "Order canceled successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to cancel order", error: err.message });
  }
};

// Refund order
exports.refundOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const refunded = await Order.refund(id);
    if (refunded) {
      res.status(200).json({ message: "Order refunded successfully" });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to refund order", error: err.message });
  }
};
