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

//creating a method for generating Access and Refresh Tokens
const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const accesstoken = await user.generateAccessToken();
        const refreshtoken = await user.generateRefreshToken();

        // Save refresh token in the database
        user.refreshtoken = refreshtoken;
        await user.save(); // Ensure the refresh token is saved

        return { accesstoken, refreshtoken };

    } catch (error) {
        console.error("Error generating tokens: ", error); // Log the specific error
        throw new ApiError(500, "Something went wrong while generating Access and Refresh tokens");
    }
};




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
    const {accesstoken,refreshtoken}=await generateAccessAndRefreshToken(user._id)

    const loggedInUser= await User.findById(user._id).select("-password -refreshtoken")
    const options={
        httpOnly:true,
        secure:true
    }
    return res.status(200)
    .cookie("accesstoken",accesstoken,options)
    .cookie("refreshtoken",refreshtoken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accesstoken,refreshtoken
            },
            "User logged In Successfully"
        )
    )
})

const logoutUser=asyncHandler(async(req,res)=>{
    User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshtoken:undefined
            }
        },
        {
            new:true
        }
    )
    const options={
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accesstoken",options)
    .clearCookie("refreshtoken",options)
    .json(new ApiResponse(200,{},"User Logged out"))
}) 
export {registerUser,loginUser,logoutUser}
