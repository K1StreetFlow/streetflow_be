'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Nomor_resi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order_list: {
        type: Sequelize.INTEGER,
        // references: {
				// 	model: "Order_list",
				// 	key: "id",
				// },
      },
      id_address: {
        type: Sequelize.INTEGER,
        // references: {
        //   model: "Address",
        //   key: "id",
        // }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Nomor_resi');
  }
};