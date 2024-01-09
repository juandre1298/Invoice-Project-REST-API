import { sequelize } from "../database/database.js";
import { DataTypes } from "sequelize";

export const PurchaseOrders = sequelize.define("purchaseOrders", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});
