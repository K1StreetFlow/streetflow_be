"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Shipping extends Model {
		static associate(models) {
			Shipping.belongsTo(models.Order_list, {
				foreignKey: "id_order_list",
				as: "order_list",
			});
			Shipping.belongsTo(models.Address, {
				foreignKey: "id_address",
				as: "address",
			});
		}
	}
	Shipping.init(
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			name_courier: DataTypes.STRING,
			receipt_number: DataTypes.STRING,
			id_order_list: DataTypes.INTEGER,
			id_address: DataTypes.INTEGER,
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			deletedAt: {
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Shipping",
			tableName: "Shipping",
			paranoid: true,
		}
	);
	return Shipping;
};