import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate= useNavigate()
  return (
    <div className='navbar bg-gradient-to-l from-blue-400 to-violet-600 shadow-2xl '>
      
        <img onClick={()=>navigate('/')} className='logo cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRBSvZKUEfakopELoM-aQsefPmSzRL5ow0Rw&s"  alt="" />
       
        <div className='center'>
<p className='animate-bounce'>welcome to KIIT elective selection suggestion</p>
        </div>
      <div className='right'>
        <img src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png" className='img' alt="" />

    <p className='name'>Welcome ,usernameeee</p>

<button className='btn text-md cursor-pointer'>Logout</button>
        
      </div>
    </div>
  )
}

export default Navbar
