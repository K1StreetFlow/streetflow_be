const { Users_customer } = require("../models");

async function getAllUsers(req, res) {
  // Implementasi logika mendapatkan semua pengguna
  try {
    const users = await Users_customer.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getUserById(req, res) {
  // Implementasi logika mendapatkan pengguna berdasarkan ID
  try {
    const { id } = req.params;
    const user = await Users_customer.findByPk(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, retypePassword } = req.body;

    // Check if the user with the provided ID exists
    const existingUser = await Users_customer.findByPk(id);

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

async function deleteUser(req, res) {
  // Implementasi logika penghapusan pengguna
  try {
    const { id } = req.params;
    const user = await Users_customer.findByPk(id);

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
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
};
