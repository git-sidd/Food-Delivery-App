import express from "express"
import connectDB from "./db.js"
import dotenv from "dotenv"
dotenv.config(
  {  path:'./.env'}
)
connectDB()
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})