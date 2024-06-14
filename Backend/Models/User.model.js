import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


const userSchema=new mongoose.Schema(
   { username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    refreshtoken:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }},{timestamps:true}
)
userSchema.pre("save",async function(next){
    if(this.isModified("password"))
    {
        this.password=await bcrypt.hash(this.password,10)
        next();
    }
})//password check logic
const ACCESS_TOKEN_SECRET="siddheshpornimarameshpatole"
const ACCESS_TOKEN_EXPIRY="1d"
const REFRESH_TOKEN_SECRET="sakshirameshpatole"
const REFRESH_TOKEN_EXPIRY="10d"
userSchema.methods.isPasswordCorrect=
    async function(password){
        return await bcrypt.compare(password,this.password)
    }
    userSchema.methods.generateAccessToken= function(){
        return jwt.sign(
            {
                _id:this._id,
                email:this.email,
                username:this.username,
                name:this.name,
                address:this.address
    
            },
           ACCESS_TOKEN_SECRET,
            {
               expiresIn: ACCESS_TOKEN_EXPIRY
            }
        )
    }    
    userSchema.methods.generateRefreshToken= function(){
        return jwt.sign(
            {
                _id:this._id,
               
            },
            REFRESH_TOKEN_SECRET,
            {
                expiresIn:REFRESH_TOKEN_EXPIRY
            }
        )
    }        
export const User=mongoose.model("User",userSchema);