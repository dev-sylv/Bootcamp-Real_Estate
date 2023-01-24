import houseModels from "../Models/houses.models";

import agentsModel from "../Models/agents.models";

import cloudinary from "../Utils/cloudinary";

import { Request, Response } from "express";
import mongoose from "mongoose";

// post houses:
export const uploadHouses = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {houseName, houseDescription, housePrice, bedrooms, bathrooms, houseImage, houseRentage, houseLocation, houseTypes, agentname} = req.body;
        const cloud_Img = await cloudinary.uploader.upload(req?.file!.path);
        const agent = await agentsModel.findById(req.params.authorID)
        const newHouse = await houseModels.create({
            houseName,
            houseDescription,
            housePrice,
            bedrooms,
            bathrooms,
            houseImage: cloud_Img.secure_url,
            houseRentage,
            houseLocation,
            houseTypes,
            agentname: agent?.agentname
        })
        agent?.houses.push(new mongoose.Types.ObjectId(newHouse._id))
        agent?.save();
        if (!newHouse){
            return res.status(401).json({
                status: "Please fill in all the required fields",
            })
        }
        return res.status(201).json({
            status: "Successfully uploaded a new house",
            data: newHouse
        })
    } catch (error) {
        return res.status(400).json({
            status: "An error occured in uploading house",
            data: error
        })
    }
}

// get all Houses:

// get one house:

// Update house details:

// delete a house: