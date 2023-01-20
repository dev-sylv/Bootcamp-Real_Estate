import express, { Application } from "express";
import DBconnect from "../Utils/db";
import appConfig from "./app";

const port: number = 5000;

const app: Application = express();

DBconnect();
appConfig(app);

app.listen(port, () =>{
    console.log("")
    console.log("Server is created and listening to port", port)
})
