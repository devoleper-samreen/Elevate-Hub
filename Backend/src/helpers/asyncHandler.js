// export const asyncHandler = (req, res, next) => {
//     execution(req, res, next).catch(next)
// }

export const asyncHandler = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};
