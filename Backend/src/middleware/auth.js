import { ApiError } from "../helpers/apiError.js";
import { User } from "../models/user.model.js";
import { httpStatus } from "../utils/httpStatus.js";
import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    let token;

    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }
    console.log("frontend se aaya token : ", token);

    if (!token) {
        return next(
            new ApiError(
                httpStatus.unAuthorized,
                "You are not logged in! please login firts"
            )
        )
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);

        const currentUser = await User.findById(decoded._id)

        if (!currentUser) {
            return res.json(
                new ApiError(
                    httpStatus.unAuthorized,
                    "The user toke is no longer exists"
                )
            )
        }

        req.user = currentUser;
        next();
    }
    catch (e) {
        return next(
            new ApiError(
                httpStatus.unAuthorized,
                "You are not allowed"
            )
        )
    }


}