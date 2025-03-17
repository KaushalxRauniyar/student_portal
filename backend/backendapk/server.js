import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
import FeedRouter from './route/Feedbackroute.js'
import connectDB from './config/ConnectDB.js'

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

await connectDB()
app.use("/api",FeedRouter)


app.get("/",(req,res)=>{
res.send("hey sanamika")
})

app.listen(3000)