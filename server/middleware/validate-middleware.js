
const validate = (schema) => async(req,res,next) => {
   try {
    //  Validates that the input matches the schema.
    await schema.parseAsync(req.body)
    next();
    
   } catch (err) {
     
      const message = err.errors[0].message;
      console.log(err);
      res.status(400).json({msg:message})
   }
}

module.exports = validate