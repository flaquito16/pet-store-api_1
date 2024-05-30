import { envs } from "../src/confing/envs";
import { AppRoutes } from "../src/presentaciones/routes"; //1
import { Server } from "./presentaciones/server";

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({
        port: envs.PORT,
        routes: AppRoutes.routes //2
      }).start();
  }