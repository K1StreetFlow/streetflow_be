const testingController = {
  getAllPayments: async (req, res) => {
    try {
      res.status(200).json({ data: "All Payment" });
    } catch (error) {
      res.status.json({ error: "Internal server error" });
    }
  },
  getDetailPayment: async (req, res) => {
    try {
      res.status(200).json({ data: "Detail Payment" });
    } catch (error) {
      res.status.json({ error: "Internal server error" });
    }
  },
};

module.exports = testingController;
