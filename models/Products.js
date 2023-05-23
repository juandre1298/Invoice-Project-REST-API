import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define("products", {
  internalId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clientId: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
});
