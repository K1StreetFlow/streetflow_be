const express = require("express");
const { getAllUsers, getUserById, editUser, deleteUser } = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");
const upload = require("../middleware/multerConfig");
const router = express.Router();
router.use(verifyToken);
// Routing untuk operasi pengelolaan pengguna
router.get("/", upload.single("profileImage"), getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", upload.single("profileImage"), editUser);
router.delete("/:id", deleteUser);

module.exports = router;
