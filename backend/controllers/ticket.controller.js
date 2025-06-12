const Ticket = require("../models/ticket.model");

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.getAll();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tickets", error: err.message });
  }
};

exports.updateTicketStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updated = await Ticket.updateStatus(id, status);
    if (updated) {
      res.status(200).json({ message: "Status updated successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update status", error: err.message });
  }
};