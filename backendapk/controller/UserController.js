import User from "../model/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'
import mongoose from "mongoose"


//signup
const signup=async (req,res)=>{
    try{
const {name,email,password}=req.body
const imageFile=req.file

const exEmail=await User.findOne({email})

if(exEmail)
{
    return res.json({
        success:false,
        message:"Email exist "
    })
}
const hashpass=await bcrypt.hash(password,10)
const img=await cloudinary.uploader.upload(imageFile.path)


const user=await User.create({
    name,
    email,
    password:hashpass,
    image:img.secure_url
})
await user.save()
const token= jwt.sign({id:user._id},"SUCCESS")

return res.json({
    success:true,
    token,
    message:"Signup successfull"
})
    }catch(error)
    {
        return res.json({
            success:false,
            message:error.message
        })
    }
}


//login
const login=async(req,res)=>{
    try{
const {email,password}=req.body

const user=await User.findOne({email})
if(!user)
{
    return res.json({
        success:false,
        message:"email doesnot exist"
    })
}

const match=await bcrypt.compare(password,user.password)
if(!match)
{
    return res.json({
        success:false,
        message:"something is Wrong"
    })
}


const token=jwt.sign({id:user._id},"SUCCESS")

return res.json({
    success:true,
    token,
    message:"login successful"
})



    }catch(error)
{
    return res.json({
        success:false,
        message:error.message
    })
}
}


// detail of user
const detail=async(req,res)=>{
    try{
const {token}=req.body

const decoded= jwt.verify(token,"SUCCESS")

const id=decoded.id
if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
        success: false,
        message: "Invalid user ID format",
    });
}
const user=await User.findById(id).select('-password')
if(!user)
{
    return res.json({
        success:false,
        message:"user not exist"
    })
}
return res.json({
    success:true,
    user
})

    }catch(error)
    {
        return res.json({
            success:false,
            message:error.message
        })
    }
}



export {signup,login,detail}



