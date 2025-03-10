import express from "express";
import authRoute from "./auth.route.js"
import mentorRoute from "./mentor.route.js"

const router = express.Router()

//for auth
router.use("/auth", authRoute)

//for mentors
router.use("/mentor", mentorRoute)

export default router