import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Product = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
});
