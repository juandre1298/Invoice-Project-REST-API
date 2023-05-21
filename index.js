import app from "./app.js";
import { sequelize } from "./database/database.js";
import { users, products } from "./seed.js";
import { User } from "./models/Users.js";
import { Product } from "./models/Products.js";
import { mainSeed } from "./seed.js";

async function main() {
  try {
    await sequelize.authenticate();

    console.log("connection has been established successfully.");
    // force:false is to not overwrite the database
    await sequelize.sync({ force: true }).then(() => {
      mainSeed();
    });

    console.log("Database is sync");
    app.listen(4000);
    console.log("server is listening on port 4000");
  } catch (err) {
    console.log("unable to connect to the database: ", err);
  }
}

main();
