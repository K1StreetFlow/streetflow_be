const express = require("express");
const { getTokenUser, getAllUsers, getUserById, editUser, deleteUser } = require("../controllers/userController");
const { verifyTokenCookieAdmin, verifyTokenCookieCustomer } = require("../middleware/verifyToken");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const upload = require("../middleware/multerConfig");
const router = express.Router();

router.get("/token", verifyTokenCookieCustomer, getTokenUser);
router.get("/", verifyTokenCookieAdmin, getAllUsers);
router.get("/:id", isAdminOrSelf, getUserById);
router.put("/:id", isAdminOrSelf, upload.single("profileImage"), editUser);
router.delete("/:id", isAdminOrSelf, deleteUser);

module.exports = router;
