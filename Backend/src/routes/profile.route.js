import express from "express"
import { updateProfile, updateImage } from "../controllers/profile.controller.js"
import { verifyToken } from "../middleware/auth.js"
import { upload } from "../middleware/multer.js"

const router = express.Router()

router.use(verifyToken)

router.put("/update", updateProfile)
router.patch("/update-photo", upload.fields([
    {
        name: "profilePicture",
        maxCount: 1
    },

]), updateImage)

export default router