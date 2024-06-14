import mongoose from "mongoose";
const MONGODB_URI="mongodb+srv://siddheshpatole157:sidd%402112@cluster0.wropc5b.mongodb.net/siddfoods?retryWrites=true&w=majority"
const connectDB= async ()=>{
    try {
        await mongoose.connect(`${MONGODB_URI}`)
        console.log("MONGO_DB connected")
        const fetched_Category= mongoose.connection.db.collection("category")
        global.category=await fetched_Category.find({}).toArray()
        //console.log(global.category)
        const fetched_data=mongoose.connection.db.collection("data")
        global.data= await fetched_data.find({}).toArray()
        // console.log("category:",global.category)
        // console.log("data:",global.data)
        
       
       
        // fetched_data.find({}).toArray(async function(err,data){
        // const fetched_Category=mongoose.connection.db.collection("category")   
        // fetched_Category.find({}).toArray(function(err,catData){
        //     if(err){
        //         console.error(err)
        //     }
        //     else{
        //         global.fetched_data=data;
        //         global.fetched_Category=catData;
        //         console.log(global.fetched_data,fetched_Category);
        //     }
        // })
        //})
        // global.data= await fetched_data.find({}).toArray()
        // const fetched_Category=mongoose.connection.db.collection("category")
        // global.category= fetched_Category.find({}).toArray()
       
       
    } catch (error) {
        console.log("MongoDb Connection Error:",error);
        process.exit(1)
    }
}
export default connectDB;