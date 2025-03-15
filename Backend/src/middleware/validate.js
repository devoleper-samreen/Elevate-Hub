import { httpStatus } from "../utils/httpStatus.js"
import { ApiError } from "../helpers/apiError.js"
const validationSource = {
    BODY: "body",
    QUERY: "query",
    PARAM: "params",
    HEADER: "headers"
};

export default (schema, source = validationSource.BODY) => {
    return (req, res, next) => {
        try {
            const { error } = schema.validate(req[source])
            if (!error) return next()
            const { details } = error
            const message = details.map((i) => i.message.replace(/['"]+/g, "")).join(",")
            console.log(message);
            next(new ApiError(httpStatus.badRequest, message))

        } catch (err) {
            next(err)

        }
    }

}