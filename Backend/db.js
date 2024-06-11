import mongoose from "mongoose";


const MONGODB_URI="mongodb+srv://siddheshpatole157:sidd%402112@cluster0.wropc5b.mongodb.net/siddfoods?retryWrites=true&w=majority"

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(MONGODB_URI)
        console.log(`\nMONGO DB Connected!! \nDB Host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB connection error:",error);
        process.exit(1);
    }
}
export default connectDB;