import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Login() {
const [name,setname]=useState('')
const [password,setpassword]=useState('')
const [email,setemail]=useState('')
const [image,setimage]=useState(false)
const [state,setstate]=useState("signup")
const navigate =useNavigate()

const [token,settoken]=useState(localStorage.getItem("token")?localStorage.getItem("token"):false)


useEffect(()=>{
if(token)
{
    navigate('')
}
},[token,navigate])

const handlesubmit=async(e)=>{
e.preventDefault()
if(state==="signup")
{

    const formdata=new FormData()
    formdata.append("name",name)
    formdata.append("email",email)
    formdata.append("password",password)
if(image)
{
    formdata.append("image",image)
}else{
    alert("please select an image")
}
    try{
const {data}=await axios.post("https://student-backend-delta.vercel.app/api/user/signup",formdata)
if(data.success)
{
    settoken(data.token)
    localStorage.setItem("token",data.token)
    window.location.reload()
}else{
    alert(data.message)
  }

    }catch(error)
    {
        console.log(error.message);   
    }
}
else{
    try{
        const {data}=await axios.post("https://student-backend-delta.vercel.app/api/user/login",{email,password})
      if(data.success)
      {
        settoken(data.token)
    localStorage.setItem("token",data.token)
    window.location.reload()
      }else{
        alert(data.message)
      }
        
    }catch(error)
    {
        alert(error.message);
        
    }
}
}

  return (

  <div className=' login-kau h-screen w-screen bg-gradient-to-l from-red-300 to-blue-300'>
<div className=' w-full h-full flex justify-center items-center'>
    <div className='bg-red-100  box '>
    <form onSubmit={handlesubmit} className=''>
        <div className='text-center'>
<h2 className='state'>Welcome To {state==="signup"?"Signup":"Login"}  page</h2>
        </div>
        <div>

{state==="signup"?
<>
<div className='flex img-box'>
            <label htmlFor='image'>Choose Your  Image
                <img src={image?URL.createObjectURL(image):"https://cdn-icons-png.flaticon.com/512/149/149071.png"} className='img' height={60} width={60} alt="" />
            <input onChange={e=>setimage(e.target.files[0])} type="file" id="image" className='' hidden name="" />
            </label>
        </div>

        <div className='inp-box'>
            <label>Name:</label>
            <input onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder='Enter your name' className='txt' name="" id="" />
        </div>
</>
:
<></>
}

     
        <div className='inp-box'>
            <label>Email:</label>
            <input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder='Enter your Mail' className='txt' name="" id="" />
        </div>
        <div className='inp-box'>
            <label>Password:</label>
            <input type="Password" placeholder='Enter your Password'  onChange={(e)=>setpassword(e.target.value)} value={password} className='txt' name="" id="" />
        </div>
        </div>
<div className='text-center'>
<button className='cursor-pointer' >{state==='signup'?"Create new Account":"Login here"}</button>

</div>
{
    state==='signup'?
<p>Already have an account ? <span className='text-blue-500 underline' onClick={()=>setstate("login")}>Login Here</span></p>
    :
    <p>New here? <span className='text-blue-500 underline' onClick={()=>setstate("signup")}>Click Here To Signup</span></p>
}
    </form>
    </div>
</div>
  </div>

  )
}

export default Login
