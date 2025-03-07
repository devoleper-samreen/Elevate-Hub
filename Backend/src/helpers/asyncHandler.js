export const asyncHandler = (req, res, next) => {
    execution(req, res, next).catch(next)
}