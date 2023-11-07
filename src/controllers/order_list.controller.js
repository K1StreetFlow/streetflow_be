const { Order_list } = require("../models");

const getAllOrder = async (req, res) => {
	try {
		const orderList = await Order_list.findAll();

		if (orderList) {
			res.status(200).json({
				message: "Get All Order List Successfully",
				data: orderList,
			});
		} else {
			res.status(404).json({ message: "Get All Order List Failed" });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = { getAllOrder };
