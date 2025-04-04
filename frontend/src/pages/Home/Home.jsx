import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import { Book, HomeIcon } from 'lucide-react'
function Home() {

const [user,setuser]=useState({})
const token=localStorage.getItem("token")
const getdetail=async()=>{
  try{
const {data}=await axios.post("http://localhost:3000/api/user/detail",{token})
if(data.success)
{
  setuser(data.user)
}else{
  alert(data.message)
}

  }catch(error)
  {
    alert(error.message);
    
  }
}


useEffect(()=>{
  if(token){
    getdetail()
  }
},[token])




  return (
   <div className='homeScreen bg-[#393f4d] h-screen w-screen'>
    <div className='box1 flex gap-8 text-white justify-center bg-gradient-to-r from-blue-500 to-pink-500 '>
<div>
<img src={user.image} height={70} width={80} alt="" />
</div>
<div>
  <h1>Welcome back,<span className='text-black'>  {user.name}!</span></h1>
  <p className='text-gray-700 text-s font-bold'>Your one-stop student portal is ready to empower your academic journey. What would you like to explore today?</p>
</div>
    </div>
    <div className="box2">
 
  <div className="box3">
    <div className="half1 bg-violet-600">Profile Finder</div>
    <div className="half2 bg-black">Details of KIIT Students</div>
  </div>
  <div className="box3">
    <div className="half1 bg-green-500">Elective Suggestion</div>
    <div className="half2">Suggest You Best Elective</div>
  </div>
  <div className="box3">
    <div className="half1 bg-blue-500"><h1>Grade Predictor</h1></div>
    <div className="half2 bg-black">Predict upcoming sem Grade</div>
  </div>
  <div className="box3">
    <div className="half1 bg-amber-700">Grade Genius</div>
    <div className="half2">Calculate your SCGPA Here</div>
  </div>
  <div className="box3">
    <div className="half1 bg-sky-700">Mental Health Checker</div>
    <div className="half2">Checks Your Depression Level</div>
  </div>
  <div className="box3">
    <div className="half1 bg-purple-600">Book Suggestion</div>
    <div className="half2">Suggest Book of different Field</div>
  </div>
  <div className="box3">
    <div className="half1 bg-indigo-600">Test</div>
    <div className="half2">Evaluate Your Knowledge</div>
  </div>
  <div className="box3">
    <div className="half1 bg-cyan-500">Feedback</div>
    <div className="half2">Improve Us, Suggest US</div>
  </div>
</div>

<div className='foot-box flex justify-between'>
  <div className='left'>
<h1>@EduGuide Hub . All Rights Reserved</h1>
  </div>
  <div className='right flex gap-8'>
<h1 className='cursor-pointer'>Policy Privacy</h1>
<h1 className='cursor-pointer'>Terms Of Service</h1>
  </div>
</div>


   </div>
  )
}

export default Home
