import { useState } from 'react'
import './Profile.css'
import { Search } from 'lucide-react'
 import axios from 'axios'

function Profile() {

  const [roll,setroll]=useState("")
const  [user,setuser]=useState([])
  const handlesubmit=async()=>{
    try{
const response=await axios.post(`https://ddos.erucix.workers.dev/?roll=${roll}`)
console.log(response.data);
setuser(response.data)
    }catch(error)
    {
      console.log(error.message);
      
    }
  }
  console.log(user);
  


  return (
    <div className='profile h-full bg-gradient-to-t from-red-200 to-blue-300 w-screen'>
     <div  className="box flex justify-center items-center ">
<div className='container bg-gradient-to-b from-white to-gray-300 w-[40%] h-full flex flex-col justify-center items-center ' >
      <h1 className=' hi text-xl font-bold shadow-md text-amber-950'>Search Student Details</h1>
<div className=' search flex justify-between gap-6'>
  <input value={roll} onChange={(e)=>setroll(e.target.value)} type="text" placeholder='Enter roll' />
  
<button onClick={handlesubmit} > <div className='flex  gap-4'>
<Search className='text-white' /> <h3>Search</h3>
  </div></button>
</div>
{user.length!=0 &&

<div className='dis'>
<div className='info'>
<h1> Name:{user.name}</h1>
</div>
<div className='info'>
<h1> Program: {user.Program_Description}
</h1>
</div>
<div className='info'>
<h1> Roll Number: {user.roll_no}
</h1>
</div>
<div className='info'>
<h1> Student Number: {user.student_id}
</h1>
</div>

<div className='info'>
<h1> Email:{user.email}
</h1>
</div>

</div>


}
</div>

     </div>
    </div>
  )
}

export default Profile
