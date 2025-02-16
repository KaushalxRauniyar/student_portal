import React, { useState } from 'react'
import './One.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Six() {

  const navigate=useNavigate()
const [ee1,setee1]=useState('10')
const [ml,setml]=useState('10')
const [ai,setai]=useState('10')
const [ee2,setee2]=useState('10')
const [ee3,setee3]=useState('10')
const [uhv,setuhv]=useState('10')
const [ail,setail]=useState('10')
const [adl,setadl]=useState('10')
const [mp,setmp]=useState('10')

const handlesubmit=()=>{
  const total=24
  const ans=((ee1*3)+(ml*4)+(ai*3)+(ee2*3)+(ee3*3)+(uhv*3)+(ail*1)+(adl*2)+(mp*2))/total
alert("Your Total SCGPA IS: "+ans.toFixed(2))
console.log(ans);

}


  return (
    <div className='one overflow-auto w-screen h-screen flex justify-center bg-red-200  items-center '>
     
      <div className='contain flex flex-col overflow-auto  bg-blue-300 border'>
      <div onClick={()=>navigate('/scgpa')} className= 'arrow bg-blue-800 w-10 p-2 rounded-2xl'>
     <ArrowLeft />
     </div>
<div className='flex justify-center items-center'>

  <h1 className='text-xl font-bold'>6th Semister Calculator</h1>
</div>
     <div className='flex xob overflow-auto justify-between items-center gap-20 border'>
      <div>
        <h2>HASS Elective-III</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setee1(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='xob flex justify-between items-center gap-20 border'>
      <div>
        <h2>Machine Learning	</h2>
        <p>Credit: 4</p>
      </div>
      <select onChange={(e)=>setml(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='xob flex justify-between items-center gap-20 border'>
      <div>
        <h2>Artificial Intelligence </h2>
        <p>Credit: 3</p>
      </div>
      <select onChange={(e)=>setai(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Professional Elective-III	</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setee2(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>
     </div>
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Open Elective-II/ MI-I	</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setee3(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Universal Human Values</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setuhv(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Artificial Intelligence Laboratory</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setail(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Applications Development Laboratory</h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setadl(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Mini Project </h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setmp(e.target.value)} className='sel'>
        <option value="10">O</option>
        <option value="9">E</option>
        <option value="8">A</option>
        <option value="7">B</option>
        <option value="6">C</option>
        <option value="5">D</option>
        <option value="4">F</option>
      </select>

     </div>

     <button onClick={()=>handlesubmit()} className='btn  cursor-pointer'>Calculate</button>
    </div><br />
      </div>
  )
}

export default Six
