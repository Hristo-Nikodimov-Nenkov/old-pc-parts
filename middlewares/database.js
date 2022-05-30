import mongoose from "mongoose";
import databaseConfigs, {
   developmentConnectionString,
} from "../configs/database.js";
import {seedMotherboards, seedProcessors} from "../services/seed/index.js";

export default function () {
   mongoose
      .connect(databaseConfigs.connectionString)
      .then(async () => {
         const dbEnvStr =
            databaseConfigs.connectionString === developmentConnectionString
               ? "Development"
               : "Production";
         console.log(`${dbEnvStr} database connected.`);

         if (process.env.NODE_ENV?.toLowerCase() === "seed") {
            await seedProcessors();
            await seedMotherboards();
         }
      })
      .catch((err) => console.log(err));
}
