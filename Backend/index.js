import express from "express"
import connectDB from "../Backend/db/db.js"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config(
  {  path:'./.env'}
)

connectDB()

const app = express()
const port = 5000
//imp setup for cors policycy
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port:http://localhost:${port}`)
})

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))
//check notes for knowing more..
app.use(express.json({
  limit:"16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())

app.use(express.urlencoded({extended: true, limit: "16kb"})) // Add this middleware for URL-encoded form data

//import route from user.routes.js
import userRouter from "../Backend/Routes/user.routes.js"
app.use("/api/v1/users",userRouter)
export default app
