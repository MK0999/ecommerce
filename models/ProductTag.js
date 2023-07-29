const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: dataTypes.Integer,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_id:{
      type: datatypes.INTEGER,
      refrences:{
        model: 'product',
        key: 'id'
      },
    },

    tag_id:{
      type: datatypes.INTEGER,
      refrences:{
        model: 'tag',
        key: 'id',
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
