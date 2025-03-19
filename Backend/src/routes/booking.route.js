import express from "express"
import { bookSession } from "../controllers/booking.controller.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.use(verifyToken)

router.post("/", bookSession)

export default router