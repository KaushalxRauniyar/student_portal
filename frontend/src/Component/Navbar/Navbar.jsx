import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../Navbar/log.jpg'
import Home from '../../pages/Home/Home'
function Navbar() {
  const navigate= useNavigate()
const [user,setuser]=useState({})
const token=localStorage.getItem("token")

const setlogout=()=>{
  localStorage.removeItem("token")
  window.location.reload()
}


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
    <div className='navbar bg-slate-800 shadow-2xl '>
        <img onClick={()=>navigate('/')} className='logo cursor-pointer' src={logo}  alt="" />
       
        <div className='center'>
<p className='animate-bounce'>welcome to EduGuide HUB</p>
        </div>
      <div className='right'>
        <img src={user.image} className='img' alt="" />
<div>
    <p className='name text-white'>Welcome ,{user.name}</p>
<p className='text-gray-500'>{user.email}</p>
</div>

<button onClick={setlogout}  className='btn text-md cursor-pointer'>Logout</button>
        
      </div>
    </div>
  )
}

export default Navbar
