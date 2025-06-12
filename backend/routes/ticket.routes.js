const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticket.controller");

router.get("/", ticketController.getAllTickets);
router.put("/:id/status", ticketController.updateTicketStatus);

module.exports = router;