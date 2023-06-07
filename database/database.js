import Sequelize from "sequelize";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../config.js";

/* export const sequelize = new Sequelize("db_facturas", "juan", "1298", {
  host: "localhost",
  dialect: "mysql",
}); */
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
});
