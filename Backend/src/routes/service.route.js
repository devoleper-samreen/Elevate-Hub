import express from "express"
import { createService } from "../controllers/service.controller.js"
import { verifyToken } from "../middleware/auth.js"
import { serviceValidation } from "../validations/serviceValidation.js"
import validate from "../middleware/validate.js"

const router = express.Router()

router.use(verifyToken)

router.post("/create", validate(serviceValidation), createService)


export default router