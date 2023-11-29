const express = require("express");
const { login, logout } = require("../../controllers/auth/authAdminController");
const { isAdmin } = require("../../middleware/verifyToken");
const router = express.Router();

router.post("/login", login);
router.post("/logout", isAdmin, logout);

module.exports = router;
