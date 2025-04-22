import express from 'express'
import Upload from '../config/multer.js'
import { detail, login, signup } from '../controller/UserController.js'

const UserRouter=express.Router()

UserRouter.post("/signup",Upload.single("image"),signup)
UserRouter.post('/login',login)
UserRouter.post("/detail",detail)



export default UserRouter