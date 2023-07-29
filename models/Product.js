// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    product_name: {
dataTypes: dataTypes.STRING,
allowNull: false
    },

    price:{
      type: dataTypes.DECIMAL,
      allowNull: false,
      validate:{
        isDecimal: true,
      }
      },

      stock:{
        type:dataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10,
        validate:{
          number: numeric
        },
       },

       category_id:{
        type: dataTypes.INTEGER,
        refrences:{
          model :'category',
          key: 'id'
        },
       }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
