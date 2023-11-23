"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users_customer extends Model {
		static associate(models) {
			// Definisi relasi one-to-many
			Users_customer.hasOne(models.Address, {
				foreignKey: "id_users_customer",
				as: "address",
			});
		}
	}
	Users_customer.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			username: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(255),
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			fullname: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			gender: {
				type: DataTypes.ENUM("Male", "Female"),
				allowNull: false,
			},
			birth_date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			upload_photo: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			phone_number: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			deletedAt: {
				type: DataTypes.DATE,
				allowNull: true,
			},
		},
		{
			sequelize,
			modelName: "Users_customer",
			paranoid: true,
			timestamps: true,
			tableName: "Users_customer",
			freezeTableName: true,
		}
	);

	return Users_customer;
};
