// models/photoProduct.js
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class PhotoProduct extends Model {
    static associate(models) {
      PhotoProduct.hasMany(models.Product, { foreignKey: "id_photo_product" });
    }
  }

  PhotoProduct.init(
    {
      photo_product: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PhotoProduct",
      paranoid: true,
      timestamps: true,
    }
  );

  return PhotoProduct;
};
