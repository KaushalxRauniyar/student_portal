import express from "express"
import addFeedback from "../controller/FeedbackController.js"
const FeedRouter=express.Router()

FeedRouter.post("/add",addFeedback)

export default FeedRouter