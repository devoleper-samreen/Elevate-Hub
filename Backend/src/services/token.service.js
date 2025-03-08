import jwt from "jsonwebtoken"
import moment from "moment"

const generateToken = () => {
    const payload = {
        _id: userId,
        iat: moment().unix(),
        exp: expires.unix()
    }

    jwt.sign(payload, secret)
}

export const generateAuthTokens = async (user) => {
    const accessTokenExpires = moment().add(
        process.env.JWT_ACCESS_TOKEN_EXPIRATION_MINUTES,
        "minutes"
    )

    const accessToken = generateToken(
        user._id,
        accessTokenExpires,
        process.env.JWT_ACCESS_TOKEN_SECRET
    )

    return accessToken
}

export const generateVarificationTokens = async (userId) => {
    const varificationTokenExpires = moment().add(
        process.env.JWT_VARIFICATION_EXPIRATION_MINUTES,
        "minutes"
    )

    const verificationToken = generateToken(
        userId,
        varificationTokenExpires,
        process.env.JWT_VARIFICATION_SECRET
    )

    return verificationToken
}

export const verifyToken = async (token, secret) => {
    if (secret === "accessToken") {
        return jwt.verify(
            token,
            process.env.JWT_ACCESS_TOKEN_SECRET
        )
    } else if (secret === "verify") {
        return jwt.verify(
            token,
            process.env.JWT_VARIFICATION_SECRET
        )
    }
}