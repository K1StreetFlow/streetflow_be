"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Order_list", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			code_order: {
				type: Sequelize.STRING,
			},
			id_payment: {
				type: Sequelize.INTEGER,
				// references: {
				// 	model: "Payment",
				// 	key: "id",
				// },
			},
			id_cart_details: {
				type: Sequelize.INTEGER,
				// references: {
				// 	model: "Cart_details",
				// 	key: "id",
				// },
			},
			status_order: {
				type: Sequelize.ENUM("Unpaid", "Paid", "Packaged", "Delivered", "Completed", "Canceled"),
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Order_list");
	},
};
