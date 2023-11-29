const express = require("express");
const {
  getTokenUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserProfile,
} = require("../../controllers/users/userController");
const { isAdmin, isCustomer } = require("../../middleware/verifyToken");
const { isAdminOrSelf } = require("../../middleware/adminMiddleware");
const upload = require("../../middleware/multerConfig");
const router = express.Router();

router.get("/token", isCustomer, getTokenUser);
router.get("/", isAdmin, getAllUsers);
router.get("/:id", isAdminOrSelf, getUserById);
router.put("/:id", isAdminOrSelf, upload.single("profileImage"), editUser);
router.delete("/:id", isAdminOrSelf, deleteUser);
router.get("/profile/user", isCustomer, getUserProfile);

router.get("/view/:filename", (req, res) => {
	res.sendFile(path.join(__dirname, "../assets/images/profile", req.params.filename));
});

module.exports = router;
