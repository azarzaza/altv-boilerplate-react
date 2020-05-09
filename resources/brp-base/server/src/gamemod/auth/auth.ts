import { log ,rootDir , getResourcePath,on} from "alt-server";
import  Database from "../../loaders/database";
import * as colors from "../../utils/colors";

on("playerConnect", player => {
    
})

on("ConnectionComplete", () => {
    if (Database.isConnectionReady) {
        return;
    }  
    Database.isConnectionReady = true;
})

const startupInterval = setInterval(() => {
    log('Checking if the database connection is ready ...');
    if (Database.isConnectionReady) {
        clearInterval(startupInterval);
        log(`${colors.FgGreen} Database Connection get ready`);
    }
}, 2000);
