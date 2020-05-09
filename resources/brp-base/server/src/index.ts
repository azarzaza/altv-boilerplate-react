import "reflect-metadata";
// import * as chalk from "chalk";
import { log } from "alt-server";
import { SystemEnvironment } from "./loaders/environment";
import Database from "./loaders/database";
import "./gamemod";

// Database();
SystemEnvironment();
Database.initConnection();

// initGameEnvironment();

