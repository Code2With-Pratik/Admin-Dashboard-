 // backend/routes/admin.routes.js

const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
// You can add middleware here to restrict to superadmins

router.get("/", adminController.getAllAdmins);
router.post("/", adminController.createAdmin);
router.put("/:id/role", adminController.updateAdminRole);

module.exports = router;
