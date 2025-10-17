import { Server } from "http";
import mongoose from "mongoose";

import { envVars } from "./app/config/env";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);

    console.log("Connected to DataBase!");
    server = app.listen(envVars.PORT, () => {
      console.log(`Server is listening on port: ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await startServer();
})();
