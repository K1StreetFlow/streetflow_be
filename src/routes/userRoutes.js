const express = require("express");
const {
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const {
  verifyTokenCookieAdmin,
  verifyTokenCookieCustomer,
} = require("../middleware/verifyToken");
const { isAdminOrSelf } = require("../middleware/adminMiddleware");
const { isUser } = require("../middleware/userMiddleware");
const upload = require("../middleware/multerConfig");
const router = express.Router();

router.get("/", verifyTokenCookieAdmin, getAllUsers);
router.get("/:id", isAdminOrSelf, isUser, getUserById);
router.put(
  "/:id",
  isAdminOrSelf,
  isUser,
  upload.single("profileImage"),
  editUser
);
router.delete("/:id", isAdminOrSelf, isUser, deleteUser);

module.exports = router;
