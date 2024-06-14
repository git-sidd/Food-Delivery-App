import { Router } from "express";
 const router=Router();

router.route("/foodData").post((req,res)=>{
    try {
       if(global.data && global.category){
         //console.log(global.data, global.category);
         res.send([global.category,global.data])
       }
       else{
        console.log("error");
       }
    } catch (error) {
        console.log(error);
        res.send("Server Error")
    }
})
export default router