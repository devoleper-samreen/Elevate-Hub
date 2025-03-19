import express from "express"
import { bookSession, getUserBookSession } from "../controllers/booking.controller.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.use(verifyToken)

router.post("/", bookSession)
router.get("/", getUserBookSession)

export default router