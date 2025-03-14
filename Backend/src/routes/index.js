import express from "express";
import authRoute from "./auth.route.js"
import mentorRoute from "./mentor.route.js"
import profileRoute from "./profile.route.js"

const router = express.Router()

//for auth
router.use("/auth", authRoute)

//for mentors
router.use("/mentor", mentorRoute)

//for profile
router.use("/profile", profileRoute)

export default router