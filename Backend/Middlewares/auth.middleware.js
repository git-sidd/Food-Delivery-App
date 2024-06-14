
import jwt from "jsonwebtoken"
import { ApiError } from "../Utils/ApiError.js"
import { User } from "../Models/User.model.js"
import { asyncHandler } from "../Utils/asyncHandler.js"
export const verifyjwt= asyncHandler(async(req,res,next)=>{
    try {
        const ACCESS_TOKEN_SECRET="siddheshpornimarameshpatole"
        const token=req.cookies?.accesstoken || req.header("Authorization"?.replace("Bearer",""))

        if(!token){
            throw new ApiError(401,"Unauthorized Access")
        }

        const decodedToken=jwt.verify(token,ACCESS_TOKEN_SECRET)

        const user= await User.findById(decodedToken?._id).select("-password -refreshtoken")

        if(!user){
            throw new ApiError(401,"Invalid Access Token")
        }
        req.user=user
        next();
    } catch (error) {
        throw new ApiError(401,error?.message ||"Invalid Access Token")
    }
})
