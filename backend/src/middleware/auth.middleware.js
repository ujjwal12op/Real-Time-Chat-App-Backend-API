import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req,res,next) =>{
  try {
    const token  = req.cookies.jwt; // cookie parser ki zaroorat hai
    if(!token){
      return res.status(401).json({message :"Unauthorized-no token provided"});
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("-password");
    if(!user){
        return res.status(401).json({message : "User not found!"});
    }

    req.user = user;
    next(); // update profile wale pe run hoga
  } catch (error) {
    console.log("Error in protect route middleware",error.message);
    res.status(500).json({message: "Internal Server Error"});
  }
}