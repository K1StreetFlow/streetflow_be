// ./middleware/verifytoken.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyTokenCookieAdmin = (req, res, next) => {
  const token = req.cookies.tokenAdmin;
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("tokenAdmin", { httpOnly: true });
    res.status(403).json({ message: "Forbidden" });
  }
};

const verifyTokenCookieCustomer = (req, res, next) => {
  const token = req.cookies.tokenCustomer;
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("tokenCustomer", { httpOnly: true });
    res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = { verifyTokenCookieAdmin, verifyTokenCookieCustomer };
