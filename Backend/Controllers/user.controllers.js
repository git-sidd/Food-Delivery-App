import { asyncHandler } from "../Utils/asyncHandler.js";
import { ApiError } from "../Utils/ApiError.js";
import { User } from "../Models/User.model.js";
import {ApiResponse} from "../Utils/ApiResponse.js"

    //steps or algorithm
    //1.get user details from frontend
    //2.validation -check not empty
    //3.check if the user already exists
    //4.check for the images and avatars
    //5.upload them to coludinary
    //6.create user object -create entry in database
    //7.remove password and refresh token field from response
    //8.check for user creation
    //9.return response
const registerUser= asyncHandler(async (req,res)=>{
    const {name,username,password,email,address,date}=req.body

    if ([username,password,email,address,date,name].some((field)=>{
        field?.trim()===""
    })){
        throw new ApiError(400,"Every Field is required")
    }

    const existedUser=await User.findOne({
        $or:[{username},{email}]
    })
    if(existedUser){
        throw new ApiError(400,"User already Exists")
    }
    const user= await User.create({
        username,
        name,
        password,
        address,
        email,
        date
    })
    const createdUser=await User.findOne(user._id).select("-password")

    if (!createdUser){
        throw new ApiError(500,"something went wrong while creating user.")
    }
   
    res.status(202).json(
        new ApiResponse(200 ,createdUser,"User registered Sucessfully!")
    )



})
const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body

    if(!email){
        throw new ApiError(400,"Email is Required")
    }
    const user=await User.findOne({email})

    if(!user){
        throw new ApiError(400,'user not exists')
    }
    const isPasswordValid= await user.isPasswordCorrect(password);
    if (!isPasswordValid){
        throw new ApiError(400,"Invalid Credentials")
    }
    const loggedInUser= await User.findById(user._id).select("-password ")
    const options={
        httpOnly:true,
        secure:true
    }
    return res.status(200)
    .json(
        new ApiResponse(
            200,
            {user:loggedInUser},
            "User Logged In successfully"
        )
    )
})
export {registerUser,loginUser}
