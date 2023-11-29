const { Payment, Cart, Users_customer, Order_list } = require("../../models");
const midtransClient = require("midtrans-client");
const cron = require("node-cron");

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
			res.status(200).json({
				message: "Get all payments",
				data: payments,
			});
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
			res.status(200).json({
				message: `Get payment by id ${id}`,
				data: payment,
			});
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},

	getPaymentByCode: async (req, res) => {
		try {
			const { code_payment } = req.params;
			const payment = await Payment.findOne({
				where: { code_payment: code_payment },
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

			res.status(200).json(payment);
			return;
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	createPayment: async (req, res) => {
		try {
			const { body } = req;
			const payment = await Payment.create(body);
			res.status(201).json({
				message: "Create payment successfull",
				data: payment,
			});
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
			res.status(201).json({
				message: "Create payment successfull",
				token: transaction.token,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: "Internal server error" });
		}
	},

	updatePayment: async (req, res) => {
		try {
			const { id } = req.params;
			const { status_payment, date_payment, method_payment, id_cart } = req.body;

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

			async function updateOrderStatus(paymentStatus, orderId) {
				let status_order;
				if (paymentStatus === "Pending") {
					status_order = "Unpaid";
				} else if (paymentStatus === "Unpaid") {
					status_order = "Unpaid";
				} else if (paymentStatus === "Success") {
					status_order = "Paid";
				} else if (paymentStatus === "Failed") {
					status_order = "Canceled";
				}
				await Order_list.update({ status_order }, { where: { id: orderId } });
			}

			const order = await Order_list.findOne({ where: { id_payment: id } });
			if (order) {
				updateOrderStatus(status_payment, order.id);
			}

			res.status(200).json({
				message: `Update payment by id ${id} successfull`,
				data: req.body,
			});
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},

	deletePayment: async (req, res) => {
		try {
			const { id } = req.params;
			await Payment.destroy({
				where: {
					id,
				},
			});
			res.status(200).json({
				message: `Delete payment by id ${id} successfull`,
			});
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},

	getMidtransStatus: async (req, res) => {
		try {
			const { order_id } = req.params;
			const snap = new midtransClient.Snap({
				isProduction: false,
				serverKey: process.env.MIDTRANS_SERVER_KEY,
			});
			const status = await snap.transaction.status(order_id);

			res.status(200).json({
				message: `Get status payment by order id ${order_id} successfull`,
				data: status,
			});
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},

	updateAllStatusPending: async (req, res) => {
		try {
			const payments = await Payment.findAll({
				where: { status_payment: "Pending" },
			});

			async function updateOrderStatus(paymentStatus, orderId) {
				let status_order;
				if (paymentStatus === "Pending") {
					status_order = "Unpaid";
				} else if (paymentStatus === "Unpaid") {
					status_order = "Unpaid";
				} else if (paymentStatus === "Success") {
					status_order = "Paid";
				} else if (paymentStatus === "Failed") {
					status_order = "Canceled";
				}
				await Order_list.update({ status_order }, { where: { id: orderId } });
			}

			payments.forEach(async (payment) => {
				const { code_payment } = payment;
				let scheduler = cron.schedule("*/10 * * * * *", async () => {
					try {
						const snap = new midtransClient.Snap({
							isProduction: false,
							serverKey: process.env.MIDTRANS_SERVER_KEY,
							clientKey: process.env.MIDTRANS_CLIENT_KEY,
						});

						// Request the payment status from Midtrans
						const transactionDetails = await snap.transaction.status(code_payment);

						// console.log(`Checking payment status with code payment ${code_payment} every 10 seconds`);

						// Check the payment status from the Midtrans response
						const { transaction_status } = transactionDetails;

						if (transaction_status == "settlement") {
							await Payment.update({ status_payment: "Success" }, { where: { code_payment: code_payment } });
							console.log("Payment status updated to Success");

							const order = await Order_list.findOne({
								where: { id_payment: payment.id },
							});
							if (order) {
								await updateOrderStatus("Success", order.id); // await added here
							}
						} else if (transaction_status == "expire") {
							await Payment.update({ status_payment: "Failed" }, { where: { code_payment: code_payment } });
							console.log("Payment status updated to Failed");

							const order = await Order_list.findOne({
								where: { id_payment: payment.id },
							});
							if (order) {
								await updateOrderStatus("Failed", order.id); // await added here
							}
						}
					} catch (error) {
						console.error("Scheduler error:", error);
					}
				});
			});

			res.status(200).json({
				message: "Update all pending payments status successfully",
			});
		} catch (error) {
			res.status(500).json({ error: "Internal server error" });
		}
	},
};

module.exports = paymentController;
