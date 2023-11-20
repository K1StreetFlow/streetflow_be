const jwt = require("jsonwebtoken");

const isAdminOrSelf = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.cookies.tokenCustomer;

    if (req.cookies.tokenAdmin) {
      return next(); // Admin memiliki akses penuh
    }

    if (token) {
      const { userId } = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the logged-in user is an admin

      // Check if the logged-in user is the owner of the profile
      if (parseInt(userId) !== parseInt(id)) {
        return res.status(403).json({ message: "Unauthorized: You can only edit your own profile" });
      }

      next(); // Lanjutkan ke middleware atau rute berikutnya
    } else {
      res.status(401).json({ message: "Unauthorized: Token not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { isAdminOrSelf };