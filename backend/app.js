// backend/app.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const bcrypt = require("bcrypt");

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth.routes");
const adminRoutes = require("./routes/admin.routes");
const ticketRoutes = require("./routes/ticket.routes");
const customerRoutes = require("./routes/customer.routes");
const serviceRoutes = require("./routes/service.routes");
const orderRoutes = require("./routes/order.routes");

// Use routes
app.use("/api/auth", authRoutes);           // For login
app.use("/api/admins", adminRoutes);        // Admin management
app.use("/api/tickets", ticketRoutes);      // Ticket support
app.use("/api/customers", customerRoutes);  // Customer data
app.use("/api/services", serviceRoutes);    // Services
app.use("/api/orders", orderRoutes);        // Orders

// Health check
app.get("/", (req, res) => {
  res.send("Admin panel backend is running ✅");
});

// Error handling (optional but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

