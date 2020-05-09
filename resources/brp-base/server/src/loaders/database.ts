import orm from "typeorm";
import chalk from "chalk";
import { log } from "alt-server";
import pg from "pg";

import { SysConfig } from "./environment";

const pool = new pg.Pool({});
pool.on('error', err => {
    console.log('Connection Refused Error');
    console.log(err);
    process.exit(1);
});


class Database{
    public static isConnectionReady: boolean = false;
    public static initConnection = () => {
        const dbConfig: orm.ConnectionOptions = {
            type: "postgres",      //String(process.env.DBTYPE),
            // host: "localhost" || process.env.POSTGRES_HOST,
            // port:  5432 ||Number(process.env.POSTGRES_HOST),
            // username: "postgres" || process.env.POSTGRES_USER,
            // password: "test" || process.env.POSTGRES_PASSWORD,
            // database: "brp" || process.env.POSTGRES_DB,
            host: SysConfig.dbHost,
            port: SysConfig.dbPort,
            database: SysConfig.dbName,
            username: SysConfig.dbUsername,
            password: SysConfig.dbPassword,
        };
        (async () => {
            console.time(chalk.greenBright("########## Database connection time!"));
            try {
                await orm.createConnection(dbConfig);
                console.timeEnd(chalk.greenBright("########## Database connection time!"));
                log("Database connected");
                Database.isConnectionReady = true;
            } catch (error) {
                log("Database not connected");
                log(error);
                process.exit(1);
            }
        })();
    
    }
}

export default Database;
