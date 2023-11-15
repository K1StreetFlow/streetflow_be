const { Users_administrators } = require("../models");
const bcrypt = require("bcrypt");
const path = require("path");

const createAdmin = async (req, res) => {
  try {
    const { username, email, password, retypePassword } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await Users_administrators.findOne({ attributes: { exclude: ["password", "deletedAt"] } }, { where: { email: email } });

    if (existingUser) {
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
    const users = await Users_administrators.findAll({ attributes: { exclude: ["password", "deletedAt"] } });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAdminById(req, res) {
  // Implementasi logika mendapatkan pengguna berdasarkan ID
  try {
    const { id } = req.params;
    const user = await Users_administrators.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
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
    const existingUser = await Users_administrators.findByPk(id, { attributes: { exclude: ["password", "deletedAt"] } });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data if the fields are provided
    existingUser.username = username || existingUser.username;
    existingUser.email = email || existingUser.email;

    const profileImage = req.file ? path.join("uploads", req.file.filename) : null;

    if (profileImage) {
      // Update the profile image if a new one is uploaded
      existingUser.upload_photo = profileImage;
    }

    if (password !== undefined && password === retypePassword) {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
      existingUser.password = hashedPassword;
    }

    // Save the updated user record to the database
    await existingUser.save();

    res.json({ message: "User updated successfully", user: existingUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function deleteAdmin(req, res) {
  // Implementasi logika penghapusan pengguna
  try {
    const { id } = req.params;
    const user = await Users_administrators.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.destroy();

    res.json({ message: "User deleted successfully" });
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
