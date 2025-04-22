import React, { useState } from 'react'
import './One.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function One() {

  const navigate=useNavigate()
const [phy,setphy]=useState('10')
const [math,setmath]=useState('10')
const [sls,setsls]=useState('10')
const [evs,setevs]=useState('10')
const [cl,setcl]=useState('10')
const [ed,seted]=useState('10')
const [ee1,setee1]=useState('10')
const [ee2,setee2]=useState('10')
const [phyl,setphyl]=useState('10')

const handlesubmit=()=>{
  const total=21
  const ans=((phy*3)+(math*4)+(sls*2)+(evs*2)+(cl*4)+(phyl*1)+(ed*1)+(ee1*2)+(ee2*2))/total
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

  <h1 className='text-xl font-bold'>1st Semister Calculator</h1>
</div>
     <div className='flex xob overflow-auto justify-between items-center gap-20 border'>
      <div>
        <h2>Physics</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setphy(e.target.value)} className='sel'>
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
        <h2>Differential Equations and Linear Algebra</h2>
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
        <h2>SCIENCE OF LIVING SYSTEMS</h2>
        <p>Credit: 2</p>
      </div>
      <select onChange={(e)=>setsls(e.target.value)} className='sel'>
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
        <h2>ENVIROMENTAL SCIENCE</h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setevs(e.target.value)} className='sel'>
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
        <h2>PHYSICS LAB</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setphyl(e.target.value)} className='sel'>
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
        <h2>PROGRAMMING LAB</h2>
        <p>CREDIT:4</p>
      </div>
      <select onChange={(e)=>setcl(e.target.value)} className='sel'>
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
        <h2>ENGINEERING DRAWING & GRAPHICS</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>seted(e.target.value)} className='sel'>
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
        <h2>ENGINEERING ELECTIVE-II</h2>
        <p>CREDIT:2</p>
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
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>SCIENCE ELECTIVE</h2>
        <p>CREDIT:2</p>
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

     <button onClick={()=>handlesubmit()} className='btn  cursor-pointer'>Calculate</button>
    </div><br />
      </div>
  )
}

export default One
