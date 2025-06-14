const {z} = require("zod");
const signUpSchema = z.object({
     username : z
     .string({required_error : "Name is required"})
     .trim()
     .min(3,{message:"Name must be at least 3 chars"})
     .max(255,{message:"Name must not be more than 255 chars"}),
   email : z
     .string({required_error : "Email is required"})
     .trim()
     .email({message:"Invalid email address"})
     .min(3,{message:"Email must be at least 3 chars"})
     .max(255,{message:"Email must not be more than 255 chars"}),
   phone : z
     .string({required_error : "Phone is required"})
     .trim()
     .min(10,{message:"Phone must be at least 10 chars"})
     .max(10,{message:"Phone must not be more than 10 chars"}),
     password : z
     .string({required_error : "Password is required"})
     .trim()
     .min(6,{message:"password must be at least 6 chars"})
     .max(50,{message:"Email must not be more than 50 chars"}),

})
const loginSchema = z.object({
  email:z 
  .string({required_error:"Emial is requires"})
  .trim()
  .email({message:"Invalid email address"})
  .min(3,{message:"Email must be at least 3 chars"})
  .max(255,{message:"Email must not be more than 255 chars"}),
   password : z
     .string({required_error : "Password is required"})
     .trim()
     .min(6,{message:"Password must be at least 6 chars"})
     .max(50,{message:"Password  must not be more than 50 chars"}),
})
module.exports = {signUpSchema,loginSchema};