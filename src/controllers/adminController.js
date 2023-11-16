const { Users_administrators } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const createAdmin = async (req, res) => {
  try {
    const { username, email, password, retypePassword } = req.body;

    // Check if user with the provided email already exists
    //{ attributes: { exclude: ["password", "deletedAt"] } },
    const existingAdmin = await Users_administrators.findOne({ where: { email: email } });

    if (existingAdmin) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    if (password !== retypePassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Dapatkan informasi file yang diunggah (jika ada)
    const profileImage = req.file ? path.join("uploads", req.file.filename) : null;

    // Create a new user
    await Users_administrators.create({
      username,
      email,
      password: hashedPassword,
      upload_photo: profileImage, // Simpan nama file di database
    });

    res.status(201).json("Registration successful");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function getAllAdmins(req, res) {
  // Implementasi logika mendapatkan semua pengguna
  try {
    const admins = await Users_administrators.findAll({ attributes: { exclude: ["password", "deletedAt"] } });
    res.json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAdminById(req, res) {
  // Implementasi logika mendapatkan pengguna berdasarkan ID
  try {
    const { id } = req.params;
    const admin = await Users_administrators.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const editAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, retypePassword } = req.body;

    // Check if the user with the provided ID exists
    const existingAdmin = await Users_administrators.findByPk(id, { attributes: { exclude: ["password", "deletedAt"] } });

    if (!existingAdmin) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data if the fields are provided
    existingAdmin.username = username || existingAdmin.username;
    existingAdmin.email = email || existingAdmin.email;

    const profileImage = req.file ? path.join("uploads", req.file.filename) : null;

    if (profileImage) {
      // Update the profile image if a new one is uploaded
      existingAdmin.upload_photo = profileImage;
    }

    if (password !== undefined && password === retypePassword) {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
      existingAdmin.password = hashedPassword;
    }

    // Save the updated user record to the database
    await existingAdmin.save();

    res.status(200).json({ message: "User updated successfully", user: existingAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function deleteAdmin(req, res) {
  // Implementasi logika penghapusan pengguna
  try {
    const { id } = req.params;
    const admin = await Users_administrators.findByPk(id);

    if (!admin) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hapus token admin dari cookie jika ID admin yang dihapus sama dengan ID yang ada dalam token
    const tokenAdmin = req.cookies.tokenAdmin;
    if (tokenAdmin) {
      const { adminId } = jwt.verify(tokenAdmin, process.env.JWT_SECRET);
      if (parseInt(adminId) === parseInt(id)) {
        res.clearCookie("tokenAdmin", { httpOnly: true });
      }
    }

    // Hapus user dari database
    await admin.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  editAdmin,
  deleteAdmin,
};
