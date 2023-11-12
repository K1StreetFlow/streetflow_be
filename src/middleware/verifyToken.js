// ./middleware/verifytoken.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyTokenCookie = (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token", { httpOnly: true });
    res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = verifyTokenCookie;
