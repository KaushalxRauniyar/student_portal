import React, { useState } from 'react'
import './One.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Seven() {

  const navigate=useNavigate()
const [ee1,setee1]=useState('10')
const [epp,setepp]=useState('10')
const [pr,setpr]=useState('10')
const [ee2,setee2]=useState('10')
const [intt,setintt]=useState('10')
const [mi,setmi]=useState('10')


const handlesubmit=()=>{
  const total=17
  const ans=((ee1*3)+(epp*2)+(pr*5)+(ee2*3)+(intt*2)+(mi*2))/total
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

  <h1 className='text-xl font-bold'>7th Semister Calculator</h1>
</div>
     <div className='flex xob overflow-auto justify-between items-center gap-20 border'>
      <div>
        <h2>Professional Elective-IV</h2>
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
        <h2>Engineering Professional Practice	</h2>
        <p>Credit: 2</p>
      </div>
      <select onChange={(e)=>sete(e.target.value)} className='sel'>
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
        <h2>Open Elective-III/ (MI-II) </h2>
        <p>Credit: 3</p>
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
        <h2>Project-I	</h2>
        <p>CREDIT:5</p>
      </div>
      <select onChange={(e)=>setpr(e.target.value)} className='sel'>
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
        <h2>Internship</h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setintt(e.target.value)} className='sel'>
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
        <h2>MI- (Computing Laboratory)</h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setmi(e.target.value)} className='sel'>
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

export default Seven
