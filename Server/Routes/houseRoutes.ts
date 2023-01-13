import { getAllHouse, getOneHouse, houseViews, inputSearch, removeHouse, UpdateHouse, uploadHouses } from "../Controllers/houseFunctions";

import houseUploads from "../Utils/multer";

import express from "express";

const router = express.Router();

router.route("/getallhouse").get(getAllHouse);
router.route("/getonehouse/:houseID").get(getOneHouse);
router.route("/postnewhouse").post(houseUploads, uploadHouses);
router.route("/updateahouse/:houseID").patch(UpdateHouse);
router.route("/gethouseviews/:houseID").patch(houseViews);
router.route("/deletethishouse/:houseID").delete(removeHouse);
router.route("/searchforhouse").get(inputSearch);

export default router;