const express = require("express");
const { login, logout } = require("../controllers/authAdminController");
const verifyTokenCookie = require("../middleware/verifyToken");
const router = express.Router();

router.post("/login", login);
router.post("/logout", verifyTokenCookie, logout);

module.exports = router;
