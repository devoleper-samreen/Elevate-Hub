import express from "express";
import authRoute from "./auth.route.js"
import mentorRoute from "./mentor.route.js"
import profileRoute from "./profile.route.js"
import serviceRoute from "./service.route.js"
import paymentRoute from "./payment.route.js"

const router = express.Router()

//for auth
router.use("/auth", authRoute)

//for mentors
router.use("/mentor", mentorRoute)

//for profile
router.use("/profile", profileRoute)

//for services
router.use("/services", serviceRoute)

//for payment
router.use("/payment", paymentRoute)

export default router