import express from "express";

const router = express.Router();

import {houseUploads} from "../Utils/multer";

import { uploadHouses } from "../Controllers/house.controllers";

router.route("/uploadhouse").post(houseUploads, uploadHouses);

export default router;