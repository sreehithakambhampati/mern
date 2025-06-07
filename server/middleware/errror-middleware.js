// We use error-handling middleware to centralize error processing, making our code cleaner and more maintainable.
const errorMiddleware = (err,req,res,next) => {
    const status = err.status || 500;
    const message = err.message || "BACKEND EEROR";
    return res.status(status).json({status,message});

}
module.exports = errorMiddleware;