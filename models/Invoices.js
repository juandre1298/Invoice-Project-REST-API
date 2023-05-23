import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const Invoice = sequelize.define("invoices", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  discount: {
    type: DataTypes.DECIMAL(5, 4),
    defaultValue: 0,
  },
  dateOfEntry: {
    type: DataTypes.DATE,
  },
  subtotal: {
    type: DataTypes.INTEGER,
  },
  image: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.INTEGER,
  },
});
