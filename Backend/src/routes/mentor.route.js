import express from "express"
import { asyncHandler } from "../helpers/asyncHandler.js"
import { getMentorByUsername, getAllMentors } from "../controllers/mentor.controllers.js"

const router = express.Router()

router.get("/", asyncHandler(getAllMentors))
router.get("/:username", asyncHandler(getMentorByUsername))


export default router