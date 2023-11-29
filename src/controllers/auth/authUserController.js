const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users_customer } = require("../../models");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  try {
    const { username, email, password, retypePassword, fullname, gender, birth_date, phone_number } = req.body;

    // Check if user with the provided email already exists
    const existingUser = await Users_customer.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }
    if (password !== retypePassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Get information about the uploaded file (if any)
    const profileImage = req.file ? path.join("uploads", req.file.filename) : null;

    // Create a new user
    const users = await Users_customer.create({
      username,
      email,
      password: hashedPassword,
      fullname,
      gender,
      birth_date,
      phone_number,
      upload_photo: profileImage, // Save the file name in the database
    });

    res.status(201).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Cari pengguna berdasarkan alamat email
    const user = await Users_customer.findOne({ where: { email: email } });

    // Jika pengguna tidak ditemukan
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Bandingkan kata sandi yang dimasukkan dengan yang disimpan dalam basis data
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Jika kata sandi tidak sesuai
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate token JWT
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        email: user.email,
        photo: user.upload_photo,
        fullname: user.fullname,
        gender: user.gender,
        birth_date: user.birth_date,
        phone_number: user.phone_number,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.cookie("tokenCustomer", token, { httpOnly: true });
    // Kirim respons dengan token
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function logout(req, res) {
  try {
    // Clear the 'token' cookie
    res.clearCookie("tokenCustomer", { httpOnly: true });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  register,
  login,
  logout,
};