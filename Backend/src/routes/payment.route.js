import express from "express"
import { checkout, verifyPayment } from "../controllers/payment.controller.js"
import { verifyToken } from "../middleware/auth.js"

const router = express.Router()

router.use(verifyToken)
router.post('/', checkout)
router.post("/verify", verifyPayment)

export default router