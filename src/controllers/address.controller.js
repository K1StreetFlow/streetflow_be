const { Address, Users_customer } = require("../models");

const addressController = {
  getAllAddresses: async (req, res) => {
    try {
      const addresses = await Address.findAll({
        include: [
          {
            model: Users_customer,
            as: "user_customer",
            attributes: {
              exclude: ["password"],
            },
          },
        ],
      });
      res.status(200).json(addresses);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  getAddressById: async (req, res) => {
    try {
      const { id } = req.params;
      const address = await Address.findByPk(id);

      if (!address) {
        return res.status(404).json({ message: "Address not found" });
      }

      res.status(200).json(address);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  getAddressByIdCustomer: async (req, res) => {
    try {
      const { id } = req.params;
      const address = await Address.findAll({ where: { id_users_customer: id } });

      if (!address) {
        return res.status(404).json({ message: "Address not found" });
      }

      res.status(200).json(address);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  createAddress: async (req, res) => {
    try {
      const newAddress = await Address.create(req.body);
      res.status(201).json({ message: "Address created successfully", address: newAddress });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  updateAddressById: async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Address.update(req.body, {
        where: { id },
      });

      if (!updated) {
        return res.status(404).json({ message: "Address not found" });
      }

      const updatedAddress = await Address.findByPk(id);
      res.status(200).json({
        message: "Address updated successfully",
        address: updatedAddress,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  deleteAddressById: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Address.destroy({
        where: { id },
      });

      if (!deleted) {
        return res.status(404).json({ message: "Address not found" });
      }

      res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  deleteAddressByCustomerId: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Address.destroy({
        where: { id_users_customer: id },
      });

      if (!deleted) {
        return res.status(404).json({ message: "Address not found" });
      }

      res.status(200).json({ message: "Address deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
};

module.exports = addressController;
