import mongoose from "mongoose";

interface houses{
    houseName: string;
    houseAddress: string;
    houseDescription: string;
    housePrice: string;
    bedrooms: string;
    bathrooms: string;
    houseImage: string;
    houseRentage: string;
    cities: string;
    houseTypes: string;
}

interface iHouses extends houses, mongoose.Document{};

const houseSchema = new mongoose.Schema({
    houseName: {
        type: String,
        required: [true, "Please enter a House Name"],
        trim: true,
    },
    houseAddress: {
        type: String,
        required: [true, "Please enter a House Address"],
        unique: true,
        trim: true,
    },
    houseDescription: {
        type: String,
        required: [true, "Please enter a House Description"],
        trim: true,
    },
    housePrice: {
        type: String,
        required: [true, "Please enter a House Price"],
        trim: true,
    },
    bedrooms: {
        type: String,
        required: [true, "Please enter a House Description"],
        trim: true,
    },
    bathrooms: {
        type: String,
        required: [true, "Please enter a House Description"],
        trim: true,
    },
    houseImage: {
        type: String,
        required: true,
        unique: true
        trim: true,
    },
    houseTypes: {
        type: String,
        require: true,
        trim: true,
    },
    cities: {
        type: String,
        require: true,
        trim: true,
    },
    houseStyles: {
        type: String,
        require: true,
        trim: true,
    },
});

const houseModel = mongoose.model<iHouses>("house collections", houseSchema);

export default houseModel;