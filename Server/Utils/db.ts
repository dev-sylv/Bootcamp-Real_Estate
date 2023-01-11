import mongoose from "mongoose";


const URI = "mongodb://localhost/RealEstate";
const liveURI = "";

mongoose.connect(URI);

mongoose.connection.on(
    "open", () =>{
        console.log("Database is connected to server");
    }
).once(
    "error", (error) =>{
        console.log("An errror occured in connecting real estate database");
    }
)