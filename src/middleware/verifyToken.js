// ./middleware/verifytoken.js
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const isAdmin = (req, res, next) => {
  const token = req.cookies.tokenAdmin;
  try {
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const admin = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = admin;
    next();
  } catch (err) {
    res.clearCookie("tokenAdmin", { httpOnly: true });
    res.status(403).json({ message: "Forbidden" });
  }
};

const isCustomer = (req, res, next) => {
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

const isAdminOrCustomer = (req, res, next) => {
  const tokenAdmin = req.cookies.tokenAdmin;
  const tokenCustomer = req.cookies.tokenCustomer;

  try {
    if (tokenAdmin) {
      jwt.verify(tokenAdmin, process.env.JWT_SECRET);
      return next();
    }

    if (tokenCustomer) {
      jwt.verify(tokenCustomer, process.env.JWT_SECRET);
      return next();
    }

    res.status(401).json({ message: "Unauthorized" });
  } catch (err) {
    res.status(403).json({ message: "Forbidden" });
  }
};

module.exports = { isAdmin, isCustomer, isAdminOrCustomer };
