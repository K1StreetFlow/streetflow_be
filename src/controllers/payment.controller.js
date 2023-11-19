const { Payment, Cart, Users_customer } = require("../models");
const midtransClient = require("midtrans-client");

const paymentController = {
  getAllPayments: async (req, res) => {
    try {
      const payments = await Payment.findAll({
        include: [
          {
            model: Cart,
            as: "cart",
            include: [
              {
                model: Users_customer,
                as: "user_customer",
              },
            ],
          },
        ],
      });
      res.status(200).json(payments).message("Get all payments");
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  getPaymentById: async (req, res) => {
    try {
      const { id } = req.params;
      const payment = await Payment.findByPk(id, {
        include: [
          {
            model: Cart,
            as: "cart",
            include: [
              {
                model: Users_customer,
                as: "user_customer",
              },
            ],
          },
        ],
      });
      res.status(200).json(payment).message(`Get Payment Successfully at ID: ${id}`);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  createPayment: async (req, res) => {
    try {
      const { body } = req;
      const payment = await Payment.create(body);
      res.status(201).json(payment).message("Create payment successfull");
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  processPayment: async (req, res) => {
    try {
      const { fullname, email, code_payment, total } = req.body;
      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY,
      });
      const parameter = {
        transaction_details: {
          order_id: code_payment,
          gross_amount: total,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          first_name: fullname,
          email: email,
        },
      };
      const transaction = await snap.createTransaction(parameter);
      // res.status(201).json({
      //   message: "Create payment successfull",
      //   token: transaction.token,
      // });
      res.status(201).json(transaction.token).message("Create Payment Successfully")
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updatePayment: async (req, res) => {
    try {
      const { id } = req.params;
      const { status_payment, date_payment, method_payment, id_cart } =
        req.body;

      await Payment.update(
        {
          status_payment,
          date_payment,
          method_payment,
          id_cart,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json(req.body).message(`Update Payment Successfully at ID: ${id}`);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = paymentController;
