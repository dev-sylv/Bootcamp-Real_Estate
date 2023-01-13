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
const removeHouse = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const deletedHouse = await houseModel.findByIdAndRemove(req.params.houseID);
        return res.status(200).json({
            message: "Successfully deleted this house",
            data: deletedHouse
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in deleting this house",
            data: error
        })
    }
}

// Search For House:
const inputSearch = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const searchValue = await houseModel.find(req.query);
        return res.status(200).json({
            message: "Search Input result successfully gotten",
            data: searchValue
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured, couldn't get the searched input",
            data: error
        })
    }
}

// View Blogs on the site:
const houseViews = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const views = await houseModel.findByIdAndUpdate(
            req.params.houseID, 
            {
                $push: {views: req.params.ip}
            },
            {new: true}
        )
        return res.status(200).json({
            message: "Successfully got users views on this house"
        })
    } catch (error) {
        return res.status(400).json({
            message: "Couldn't get users views",
            data: error
        })
    }
}

export { getAllHouse, getOneHouse, uploadHouses, UpdateHouse, removeHouse, inputSearch, houseViews }