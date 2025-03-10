import express from "express"
import { asyncHandler } from "../helpers/asyncHandler.js"
import { getMentorsByUsername, getAllMentors } from "../controllers/mentor.controllers.js"

const router = express.Router()

router.get("/", asyncHandler(getAllMentors))
router.get("/:username", asyncHandler(getMentorsByUsername))


export default router