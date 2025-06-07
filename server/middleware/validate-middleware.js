
const validate = (schema) => async(req,res,next) => {
   try {
    //  Validates that the input matches the schema.
    await schema.parseAsync(req.body)
    next();
    
   } catch (err) {
     const status = 422;
      const message = err.errors[0].message;
      console.log(err);
      const error = {
         status,message
      }
      // Calling next(err) allows us to pass the error down to the error middleware, which is designed to catch and handle errors gracefully.
      next(error)
      // res.status(400).json({msg:message})
   }
}

module.exports = validate