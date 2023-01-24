import agentModels from "../Models/agents.models";

import cloudinary from "../Utils/cloudinary";

import bcrypt from "bcrypt";

import {Response, Request} from "express";
// create agents:
const registerAgents = async(req: Request, res: Response): Promise<Response> =>{
   try {
    const {agentname, agentbio, agentPicture, agentemail, agentpassword, isAdmin} = req.body;
    const cloud_Img = await cloudinary.uploader.upload(req?.file!.path);
    const saltedPassword: string = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(agentpassword, saltedPassword);
    const agents = await agentModels.create({
        agentname,
        agentbio,
        agentPicture: cloud_Img.secure_url,
        agentemail,
        agentpassword: hashedPassword,
        isAdmin,
    })
    console.log("second")
    if (!agents) {
        return res.status(401).json({
            status: "Please fill in the required fields",
        })
    }
    return res.status(201).json({
        status: "Agent successfully created",
        data: agents
    })
   } catch (error) {
    return res.status(400).json({
        status: "An error occured in registering new agents",
        data: error
    })
   }
}

// agent sign in/ login:

// get all agents:

// get an agent:

// Delete agent:

export {registerAgents}