const { Users_customer, Address } = require("../../models");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function getTokenUser(req, res) {
  try {
    // Get the token from the 'tokenAdmin' cookie
    const token = req.cookies.tokenCustomer;

    // If the token is not present
    if (!token) {
      return res.status(401).json({ message: "Token not found" });
    }

    // Decode the token to get user information
    const decodedToken = jwt.decode(token);

    // Send the decoded token to the frontend
    res.status(200).json({ decodedToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getAllUsers(req, res) {
  // Implementasi logika mendapatkan semua pengguna
  try {
    const users = await Users_customer.findAll({
      include: [
        {
          model: Address,
          as: "address",
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      ],
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getUserById(req, res) {
  // Implementasi logika mendapatkan pengguna berdasarkan ID
  try {
    const { id } = req.params;
    const user = await Users_customer.findByPk(id, {
      include: [
        {
          model: Address,
          as: "address",
        },
      ],
    });

		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const editUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { username, email, password, retypePassword, fullname, gender, birth_date, phone_number } = req.body;

		// Check if the user with the provided ID exists
		const existingUser = await Users_customer.findByPk(id, {
			attributes: { exclude: ["password", "deletedAt"] },
		});

		if (!existingUser) {
			return res.status(404).json({ message: "User not found" });
		}

		// Update user data if the fields are provided
		existingUser.username = username || existingUser.username;
		existingUser.email = email || existingUser.email;
		existingUser.fullname = fullname || existingUser.fullname;
		existingUser.gender = gender || existingUser.gender;
		existingUser.birth_date = birth_date || existingUser.birth_date;
		existingUser.phone_number = phone_number || existingUser.phone_number;

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

    res
      .status(200)
      .json({ message: "User updated successfully", user: existingUser });
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

    // Hapus token admin dari cookie jika ID admin yang dihapus sama dengan ID yang ada dalam token
    const tokenCustomer = req.cookies.tokenCustomer;
    if (tokenCustomer) {
      const { userId } = jwt.verify(tokenCustomer, process.env.JWT_SECRET);
      if (parseInt(userId) === parseInt(id)) {
        res.clearCookie("tokenCustomer", { httpOnly: true });
      }
    }

    await user.destroy();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await Users_customer.findOne({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getTokenUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserProfile,
};
