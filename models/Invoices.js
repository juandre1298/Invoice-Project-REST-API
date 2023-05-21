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
});
