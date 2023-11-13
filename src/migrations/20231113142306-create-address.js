"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Address", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			street: {
				type: Sequelize.STRING,
			},
			house_number: {
				type: Sequelize.STRING,
			},
			zipcode: {
				type: Sequelize.STRING,
			},
			city: {
				type: Sequelize.STRING,
			},
			province: {
				type: Sequelize.STRING,
			},
			id_users_customer: {
				type: Sequelize.INTEGER,
				// references: {
				//   model: "Users_customers",
				//   key: "id",
				// }
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
		await queryInterface.dropTable("Addresses");
	},
};
