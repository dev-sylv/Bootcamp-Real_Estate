import cors from "cors";
import express, { Application } from "express";

// import router from "../Routes/houseRoutes";
import router from "../Routes/agents.Routes";

import morgan from "morgan";

export default function appConfig(app: Application) {
    // Middlewares needed for application to run:
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))

    // Routes for application:
    app.use("/api/agents", router)
}