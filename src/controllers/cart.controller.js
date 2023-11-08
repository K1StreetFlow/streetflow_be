const cartController = {
  tes: async (req, res) => {
    try {
      res.status(200).json({ testing: "Testing" });
    } catch (error) {
      res.status.json({ error: "Internal server error" });
    }
  },
};

module.exports = cartController;
