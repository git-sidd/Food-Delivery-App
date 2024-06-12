import mongoose from "mongoose";
const MONGODB_URI="mongodb+srv://siddheshpatole157:sidd%402112@cluster0.wropc5b.mongodb.net/siddfoods?retryWrites=true&w=majority"
const connectDB= async ()=>{
    try {
        await mongoose.connect(`${MONGODB_URI}`)
        console.log("MONGO_DB connected")
        const fetched_data=mongoose.connection.db.collection("data")
        const data= await fetched_data.find({}).toArray()
        //console.log(data);
    } catch (error) {
        console.log("MongoDb Connection Error:",error);
        process.exit(1)
    }
}
export default connectDB