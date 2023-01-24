import { registerAgents } from "../Controllers/agents.controllers";

import {Router} from "express";

const router = Router();

import { agentsUpload } from "../Utils/multer";

router.route("/registeragent").post(agentsUpload, registerAgents);

export default router;