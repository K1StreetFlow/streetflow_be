const express = require("express");
const { login, logout } = require("../controllers/authAdminController");
const { verifyTokenCookieAdmin } = require("../middleware/verifyToken");
const router = express.Router();

router.post("/login", login);
router.post("/logout", verifyTokenCookieAdmin, logout);

module.exports = router;
