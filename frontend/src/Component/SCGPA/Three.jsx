import React, { useState } from 'react'
import './One.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Three() {

  const navigate=useNavigate()
const [stw,setstw]=useState('10')
const [math,setmath]=useState('10')
const [ind,setind]=useState('10')
const [ds,setds]=useState('10')
const [dsd,setdsd]=useState('10')
const [afl,setafl]=useState('10')
const [dsl,setdsl]=useState('10')
const [dsdl,setdsdl]=useState('10')

const handlesubmit=()=>{
  const total=21
  const ans=((stw*2)+(math*4)+(ind*2)+(ds*4)+(dsd*3)+(afl*4)+(dsl*1)+(dsdl*1))/total
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

  <h1 className='text-xl font-bold'>3rd Semister Calculator</h1>
</div>
     <div className='flex xob overflow-auto justify-between items-center gap-20 border'>
      <div>
        <h2>Scientific and Technical Writing</h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setstw(e.target.value)} className='sel'>
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
        <h2>Probability and Statistics</h2>
        <p>Credit: 4</p>
      </div>
      <select onChange={(e)=>setmath(e.target.value)} className='sel'>
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
        <h2>Industry 4.0 Technologies</h2>
        <p>Credit: 2</p>
      </div>
      <select onChange={(e)=>setind(e.target.value)} className='sel'>
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
        <h2>Data Structures</h2>
        <p>CREDIT:4</p>
      </div>
      <select onChange={(e)=>setds(e.target.value)} className='sel'>
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
        <h2>Digital Systems Design</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setdsd(e.target.value)} className='sel'>
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
        <h2>Automata Theory and Formal Languages</h2>
        <p>CREDIT:4</p>
      </div>
      <select onChange={(e)=>setafl(e.target.value)} className='sel'>
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
        <h2>Data Structures Laboratory</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setdsl(e.target.value)} className='sel'>
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
        <h2>Digital Systems Design Laboratory</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setdsdl(e.target.value)} className='sel'>
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

export default Three
