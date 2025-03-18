import express from "express"
import { checkout, verifyPayment } from "../controllers/payment.controller.js"

const router = express.Router()

router.post('/', checkout)
router.post("/verify", verifyPayment)

export default router