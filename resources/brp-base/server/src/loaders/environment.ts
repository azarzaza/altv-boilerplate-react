import path from "path";
import fs from "fs";
import { getResourcePath } from "alt-server";
import chalk from "chalk";

const SysConfig = {
    dbHost: "localhost",
    dbName: "postgres",
    dbUsername: "postgres",
    dbPassword: "postgres",
    dbPort: 5432
};

const SystemEnvironment = () => {
    let config;
    try {
        let lconfig = fs.readFileSync(path.join(getResourcePath("brp-base"), "/config.json")).toString();
        config = JSON.parse(lconfig);
    } catch (error) {
        console.log(chalk.redBright("Failed to load the configuration!")) //TODO : CLI installation need to imple
    }
    SysConfig.dbHost = config.db_host;
    SysConfig.dbName = config.db_name;
    SysConfig.dbUsername = config.db_username;
    SysConfig.dbPassword = config.db_password;
    SysConfig.dbPort = config.db_port;

};

export {
    SystemEnvironment, SysConfig
};