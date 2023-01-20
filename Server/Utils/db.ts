import mongoose from "mongoose";

const DB_URL: string = "mongodb://localhost/Real-Estate";

const DBconnect = async(): Promise<void> =>{
    try {
        const connectString = await mongoose.connect(DB_URL);
        console.log(`DB is connected to ${connectString.connection.host}`)
    } catch (error) {
        console.log("An error occured in connecting DB")
    }
};

export default DBconnect;