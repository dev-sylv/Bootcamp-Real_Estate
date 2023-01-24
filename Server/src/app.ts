import cors from "cors";
import express, { Application } from "express";

// import router from "../Routes/houseRoutes";
import agentrouter from "../Routes/agents.Routes";

import houserouter from "../Routes/houseRoutes";

import morgan from "morgan";

export default function appConfig(app: Application) {
    // Middlewares needed for application to run:
    app.use(express.json())
    app.use(cors())
    app.use(morgan("dev"))

    // Routes for application:
    // Agents routes
    app.use("/api/agents", agentrouter);

    // houses routes
    app.use("/api/houses", houserouter)
}