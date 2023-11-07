"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Order_list", {
			id_order: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			code_order: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			id_product: {
				allowNull: false,
				type: Sequelize.INTEGER,
				// references: {
				// 	model: "Products",
				// 	key: "id_product",
				// },
			},
			id_users: {
				allowNull: false,
				type: Sequelize.INTEGER,
				// references: {
				// 	model: "Users_customer",
				// 	key: "id_users",
				// },
			},
			id_payment: {
				allowNull: false,
				type: Sequelize.INTEGER,
				// references: {
				//   model: "Payment",
				//   key: "id_payment",
				// }
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			update_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deleted_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Order_list");
	},
};

