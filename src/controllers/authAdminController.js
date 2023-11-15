const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users_administrators } = require("../models");
const dotenv = require("dotenv");
dotenv.config();

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Cari pengguna berdasarkan alamat email
    const admin = await Users_administrators.findOne({ where: { email: email } });

    // Jika pengguna tidak ditemukan
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Bandingkan kata sandi yang dimasukkan dengan yang disimpan dalam basis data
    const passwordMatch = await bcrypt.compare(password, admin.password);

    // Jika kata sandi tidak sesuai
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    // Generate token JWT
    const token = jwt.sign({ adminId: admin.id, username: admin.username, email: admin.email, photo: admin.upload_photo }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("tokenAdmin", token, { httpOnly: true });
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
    res.clearCookie("tokenAdmin", { httpOnly: true });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  login,
  logout,
};
