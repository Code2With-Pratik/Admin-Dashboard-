const Ticket = require("../models/ticket.model");

// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const [tickets] = await Ticket.getAll(); // Destructuring the result from MySQL
    console.log("Fetched Tickets:", tickets);
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tickets", error: err.message });
  }
};

// Update ticket status
exports.updateTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const result = await Ticket.updateStatus(id, status); // No destructuring
    if (result) {
      res.status(200).json({ message: "Status updated successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update status", error: err.message });
  }
};

