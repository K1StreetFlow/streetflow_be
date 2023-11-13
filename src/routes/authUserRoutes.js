const express = require("express");
const { register, login, logout } = require("../controllers/authUserController");
const upload = require("../middleware/multerConfig");
const verifyTokenCookie = require("../middleware/verifyToken");
const router = express.Router();

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);
router.post("/logout", verifyTokenCookie, logout);

module.exports = router;
