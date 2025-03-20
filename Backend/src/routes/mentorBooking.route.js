import express from "express"
import { getMentorAllBookSession } from "../controllers/booking.controller.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.use(verifyToken)

router.get("/", getMentorAllBookSession)

export default router