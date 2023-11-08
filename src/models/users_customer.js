"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users_customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users_customer.init(
    {
      id_users_customer: DataTypes.INTEGER,
      username: DataTypes.STRING(20),
      fullname: DataTypes.STRING(100),
      email: DataTypes.STRING(255),
      password: DataTypes.STRING(100),
      jenis_kelamin: {
        type: DataTypes.STRING,
        validate: {
          isIn: [["Laki-laki", "Perempuan", "Lainnya"]],
        },
      },
      upload_photo: DataTypes.TEXT,
      alamat: DataTypes.TEXT,
      telepon: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Users_customer",
    }
  );
  return Users_customer;
};
