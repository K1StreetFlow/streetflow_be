const express = require("express");
const {
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
} = require("../controllers/userController");
const { isAdmin } = require("../middleware/verifyToken");
const { isAdminOrCustomerID } = require("../middleware/adminMiddleware");
const upload = require("../middleware/multerConfig");
const router = express.Router();

router.get("/", isAdmin, getAllUsers);
router.get("/:id", isAdminOrCustomerID, getUserById);
router.put(
  "/:id",
  isAdminOrCustomerID,
  upload.single("profileImage"),
  editUser
);
router.delete("/:id", isAdminOrCustomerID, deleteUser);

module.exports = router;
