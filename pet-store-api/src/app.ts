import { envs } from "../src/confing/envs";
import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "../src/presentaciones/routes"; //1
import { Server } from "./presentaciones/server";

(() => {
  main();
})();

async function main() {
  // todo: await base de datos
  await MongoDatabase.connect({//1
    //3
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });

  // todo: inicio de nuestro server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes, //2
  }).start();
}
