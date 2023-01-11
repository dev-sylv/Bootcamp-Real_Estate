import mongoose from "mongoose";

interface houses{
    houseName: string;
    houseAddress: string;
    houseDescription: string;
    housePrice: string;
    bedrooms: string;
    bathrooms: string;
    houseImage: string;
    houseTypes: string;
    cities: string;
    houseModels: string;
}

interface iHouses extends houses, mongoose.Document{};

const houseSchema = new mongoose.Schema({
    houseName: {
        type: String,
        require: true
    },
    houseAddress: {
        type: String,
        require: true,
        unique: true
    },
    houseDescription: {
        type: String,
        require: true,
        unique: true
    },
    housePrice: {
        type: String,
        require: true
    },
    bedrooms: {
        type: String,
        require: true
    },
    bathrooms: {
        type: String,
        require: true
    },
    houseImage: {
        type: String,
        require: true,
        unique: true
    },
    houseTypes: {
        type: String,
        require: true
    },
    cities: {
        type: String,
        require: true
    },
    houseStyles: {
        type: String,
        require: true
    },
});

const houseModel = mongoose.model<iHouses>("house collections", houseSchema);

export default houseModel;