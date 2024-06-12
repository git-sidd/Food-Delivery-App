import mongoose from "mongoose";
import bcrypt from "bcrypt"

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
userSchema.methods.isPasswordCorrect=
    async function(password){
        return await bcrypt.compare(password,this.password)
    }
export const User=mongoose.model("User",userSchema);