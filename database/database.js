import Sequelize from "sequelize";

export const sequelize = new Sequelize("db_facturas", "juan", "1298", {
  host: "localhost",
  dialect: "mysql",
});
