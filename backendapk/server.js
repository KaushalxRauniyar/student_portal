import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
import FeedRouter from './route/Feedbackroute.js'
import connectDB from './config/ConnectDB.js'
import ConnectCloud from './config/ConnectCloudinary.js'
import UserRouter from './route/UserRoute.js'

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

await connectDB()
await ConnectCloud()


app.use("/api",FeedRouter)
app.use('/api/user',UserRouter)

app.get("/",(req,res)=>{
res.send("hey sanamika")
})

app.listen(3000)