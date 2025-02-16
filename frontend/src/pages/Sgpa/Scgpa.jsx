import  { useState } from 'react'
import './Scgpa.css'
import { useNavigate } from 'react-router-dom'

function Scgpa() {
  const [sem,setsem]=useState("1")
 const navigate=useNavigate()
 
 const handlesubmit=()=>{
  navigate(`/scgpa/${sem}`)
 }

  return (
    <div className='bg-gradient-to-l from-gray-500 to-white w-screen h-screen'>
<div className='sgpa '>
<div className='sem bg-gradient-to-l from-red-200 to-purple-400'>
     <h3 className='animate-bounce'>Please Select Your Semester</h3>
        <select  onChange={(e)=>setsem(e.target.value)}>
          <option value="">Select Your Semister</option>
          <option value="1">1st</option>
          <option value="2">2Nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
        </select> <br />
        <button className='cursor-pointer' onClick={handlesubmit}>Submit</button>
</div>
</div>   
    </div>
  )
}

export default Scgpa
