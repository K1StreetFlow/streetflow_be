const { Users_administrators } = require("../models");

async function getAllAdmins(req, res) {
  // Implementasi logika mendapatkan semua pengguna
  try {
    const users = await Users_administrators.findAll();
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
    const existingUser = await Users_administrators.findByPk(id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data if the fields are provided
    existingUser.username = username || existingUser.username;
    existingUser.email = email || existingUser.email;

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
  getAllAdmins,
  getAdminById,
  editAdmin,
  deleteAdmin,
};
