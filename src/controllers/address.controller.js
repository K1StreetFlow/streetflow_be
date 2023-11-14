const { Address } = require("../models");

const getAllAddress = async (req, res) => {
	try {
		const address = await Address.findAll();

		if (address) {
			res.status(200).json({
				message: "Get All Address Successfully",
				data: address,
			});
		} else {
			res.status(404).json({ message: "Get All Address Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const getAddressById = async (req, res) => {
	try {
		const { id } = req.params;
		const address = await Address.findOne({
			where: {
				id,
			},
		});

		if (address) {
			res.status(200).json({
				message: "Get Address Successfully",
				data: address,
			});
		} else {
			res.status(404).json({ message: "Get Address Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const createAddress = async (req, res) => {
	try {
		const { body } = req;
		const address = await Address.create(body);

		if (address) {
			res.status(200).json({
				message: "Create Address Successfully",
				data: address,
			});
		} else {
			res.status(404).json({ message: "Create Address Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const updateAddress = async (req, res) => {
	try {
		const { body } = req;
		const { id } = req.params;
		const [updated] = await Address.update(body, {
			where: {
				id,
			},
		});

		if (updated) {
			const updatedAddress = await Address.findOne({ where: { id } });
			res.status(200).json({
				message: "Update Address Successfully",
				data: updatedAddress,
			});
		} else {
			res.status(404).json({ message: "Update Address Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

const deleteAddress = async (req, res) => {
	try {
		const { id } = req.params;
		const address = await Address.destroy({
			where: {
				id,
			},
		});

		if (address) {
			res.status(200).json({
				message: "Delete Address Successfully",
				data: address,
			});
		} else {
			res.status(404).json({ message: "Delete Address Failed" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

module.exports = {
	getAllAddress,
	getAddressById,
	createAddress,
	updateAddress,
	deleteAddress,
};
