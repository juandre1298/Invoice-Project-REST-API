import app from "./app.js";
import { PORT } from "./config.js";
import { sequelize } from "./database/database.js";
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
    app.listen(PORT);
    console.log(`server is listening on port ${PORT}`);
  } catch (err) {
    console.log("unable to connect to the database: ", err);
  }
}

main();
