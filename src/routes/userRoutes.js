const express = require("express");
const { getAllUsers, getUserById, editUser, deleteUser } = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
// router.use(verifyToken);
// Routing untuk operasi pengelolaan pengguna
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

module.exports = router;
