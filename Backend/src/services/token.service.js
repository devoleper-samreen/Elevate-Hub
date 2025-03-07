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

const generateAuthTokens = async (user) => {
    const accessTokenExpires = moment().add(

    )
}