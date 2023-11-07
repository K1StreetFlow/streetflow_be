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
				type: DataTypes.INTEGER,
			},
			id_users: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			id_payment: {
				allowNull: false,
				type: DataTypes.INTEGER,
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
				allowNull: true,
				type: DataTypes.DATE,
			},
		},
		{
			sequelize,
			modelName: "Order_list",
			tableName: "Order_list",
			paranoid: true,
			createdAt: "created_at",
			updatedAt: "update_at",
			deletedAt: "deleted_at",
		}
	);
	return Order_list;
};
