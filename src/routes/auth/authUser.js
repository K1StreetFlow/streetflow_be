const express = require("express");
const {
  register,
  login,
  logout,
} = require("../../controllers/auth/authUserController");
const upload = require("../../middleware/multerConfig");
const { isCustomer } = require("../../middleware/verifyToken");
const router = express.Router();

router.post("/register", upload.single("profileImage"), register);
router.post("/login", login);
router.post("/logout", isCustomer, logout);

module.exports = router;
