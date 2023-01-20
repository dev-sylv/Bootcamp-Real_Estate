import cors from "cors";
import express, { Application } from "express";

import router from "../Routes/houseRoutes"

import morgan from "morgan";

export default function appConfig(app: Application) {
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))

    // Routes for application:
    app.use("/api/houses", router)
}