import express from "express"
import { updateProfile } from "../controllers/profile.controller.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.use(verifyToken)

router.put("/update", updateProfile)

export default router