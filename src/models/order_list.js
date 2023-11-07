"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Order_list extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Order_list.init(
		{
			id_order: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			code_order: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			id_product: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
				// references: {
				// 	model: "Products",
				// 	key: "id_product",
				// },
			},
			id_users: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
				// references: {
				// 	model: "Users_customer",
				// 	key: "id_users",
				// },
			},
			id_payment: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
				// references: {
				//   model: "Payment",
				//   key: "id_payment",
				// }
			},
			created_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			update_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			deleted_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Order_list",
			paranoid: true,
		}
	);
	return Order_list;
};

