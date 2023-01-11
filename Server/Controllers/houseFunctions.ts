import houseModel from "../Models/housesModel";

import { Request, Response } from "express";

// Get All House:
const getAllHouse = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const allHouses = await houseModel.find();
        return res.status(200).json({
            message: "Successfully got all Houses",
            data: allHouses
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting all houses",
            data: error
        })
    }
}

// Get One House:
const getOneHouse = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const oneHouse = await houseModel.findById(req.params.houseID);
        return res.status(200).json({
            message: "Successfully got this House",
            data: oneHouse
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting this house",
            data: error
        })
    }
}

// Upload House:
const uploadHouses = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {houseName, houseAddress,houseDescription, housePrice, bedrooms, bathrooms, houseImage, houseTypes, cities, houseStyles} = req.body;
        const NewHouse = await houseModel.create({
            houseName,
            houseAddress, 
            houseDescription,
            housePrice, 
            bedrooms, 
            bathrooms, 
            houseImage, 
            houseTypes, 
            cities, 
            houseStyles
        })
        return res.status(201).json({
            message: "Successfully Uploaded a new House",
            data: NewHouse
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in uploading this house",
            data: error
        })
    }
}

// Update House Details:
const UpdateHouse = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {houseDescription, housePrice, houseImage, houseTypes} = req.body;
        const houseUpdated = await houseModel.findByIdAndUpdate(
            req.params.houseID,
            {
                houseDescription,
                housePrice,
                houseImage,
                houseTypes,
            },
            {new: true}
        )
        return res.status(200).json({
            message: "Successfully updated this house",
            data: houseUpdated
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this house",
            data: error
        })
    }
}

// Delete a house:
// Search For House:
// View Blogs on the site:

export { getAllHouse, getOneHouse, uploadHouses }