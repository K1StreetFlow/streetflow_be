const { Users_customer, Address } = require("../models");
const path = require("path");
const bcrypt = require("bcrypt");

async function getAllUsers(req, res) {
	// Implementasi logika mendapatkan semua pengguna
	try {
		const users = await Users_customer.findAll({
			include: [
				{
					model: Address,
					as: "addresses",
				},
			],
		});
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
		const user = await Users_customer.findByPk(id, {
			include: [
				{
					model: Address,
					as: "addresses",
				},
			],
		});

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
