import express, { Application, Request, Response } from "express";

import cors from "cors";

import router from "../Routes/houseRoutes";

const port: number = 5000;

require("../Utils/db")

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Server created successfully for real estate project"
    })
});

app.use("api/houses", router)

app.listen(port, () =>{
    console.log("listening to my server port on port", port);
})