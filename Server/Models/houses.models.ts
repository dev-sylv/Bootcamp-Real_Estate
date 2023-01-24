import mongoose, {Schema, Document, model} from "mongoose";

interface houses{
    houseName: string;
    houseDescription: string;
    housePrice: string;
    bedrooms: string;
    bathrooms: string;
    houseImage: string;
    houseRentage: string;
    houseLocation: string;
    houseTypes: string;
    agentname: string
}

interface iHouses extends houses, Document{};

const houseSchema = new Schema({
    houseName: {
        type: String,
        required: [true, "Please enter a House Name"],
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
        required: [true, "Please enter the number of bedrooms"],
        trim: true,
    },
    bathrooms: {
        type: String,
        required: [true, "Please enter the number of bathrooms"],
        trim: true,
    },
    houseImage: {
        type: String,
        required: [true, "Please enter a House Image"],
        trim: true,
    },
    houseRentage: {
        type: String,
        required: [true, "Please enter a House Type e.g Rent or sale"],
        trim: true,
    },
    houseLocation: {
        type: String,
        required: [true, "Please enter the house Location"],
        trim: true,
    },
    houseTypes: {
        type: String,
        required: [true, "Please enter the house Model e.g Duplex, Bungalows"],
        trim: true,
    },
    agentname: [{
        type: String,
        required: [true, "Please enter the agent that's posting the house"],
        trim: true
    }]
}, {timestamps: true});

const houseModel = model<iHouses>("HouseCollections", houseSchema);

export default houseModel;