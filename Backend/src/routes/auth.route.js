import express from "express"
import { signup, signin } from "../controllers/auth.controller.js"
import validate from "../middleware/validate.js"
import { signUpValidation, signInValidation } from "../validations/authValidation.js"
import { asyncHandler } from "../helpers/asyncHandler.js"

const router = express.Router()

router.post("/signup", validate(signUpValidation), asyncHandler(signup))
router.post("/signin", validate(signInValidation), asyncHandler(signin))

export default router
