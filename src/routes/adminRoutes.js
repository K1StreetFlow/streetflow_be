const express = require("express");
const { getAllAdmins, getAdminById, editAdmin, deleteAdmin } = require("../controllers/adminController");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
router.use(verifyToken);
// Routing untuk operasi pengelolaan pengguna
router.get("/", getAllAdmins);
router.get("/:id", getAdminById);
router.put("/:id", editAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;
