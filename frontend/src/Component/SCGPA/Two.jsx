import  { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import './One.css'
import { useNavigate } from 'react-router-dom'
function Two() {
const [chem,setchem]=useState('10')
const [math,setmath]=useState('10')
const [eng,seteng]=useState('10')
const [be,setbe]=useState('10')
const [cl,setcl]=useState('10')
const [yoga,setyoga]=useState('10')
const [el,setel]=useState('10')
const [work,setwork]=useState('10')
const [comlab,setcomlab]=useState('10')
const [ee1,setee1]=useState('10')
const [ee2,setee2]=useState('10')

const handlesubmit=()=>{
  const total=20
  const ans=((chem*3)+(math*4)+(eng*2)+(be*2)+(cl*1)+(yoga*1)+(comlab*1)+(el*1)+(work*1)+(ee1*2)+(ee2*2))/total
alert("Your Total SCGPA IS: "+ans.toFixed(2))
console.log(ans);

}
const navigate=useNavigate()

  return (
    <div className='one overflow-auto w-screen h-screen flex justify-center bg-red-200  items-center '>
      <div className='contain flex flex-col overflow-auto  bg-blue-300 border'>
     <div onClick={()=>navigate('/scgpa')} className= 'arrow bg-blue-800 w-10 p-2 rounded-2xl'>
     <ArrowLeft/>
     </div>
<div className='flex justify-center items-center'>

  <h1 className='text-xl font-bold'>2nd Semister Calculator</h1>
</div>
     <div className='flex xob overflow-auto justify-between items-center gap-20 border'>
      <div>
        <h2>CHEMISTRY</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setchem(e.target.value)} className='sel'>
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
        <h2>Transform Calculus and Numerical Analysis</h2>
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
        <h2>ENGLISH</h2>
        <p>Credit: 2</p>
      </div>
      <select onChange={(e)=>seteng(e.target.value)} className='sel'>
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
        <h2>BASIC ELECTRONICS</h2>
        <p>CREDIT:2</p>
      </div>
      <select onChange={(e)=>setbe(e.target.value)} className='sel'>
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
        <h2>CHEMISTRY LAB</h2>
        <p>CREDIT:1</p>
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
        <h2>YOGA</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setyoga(e.target.value)} className='sel'>
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
        <h2>ENGINEERING LAB</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setel(e.target.value)} className='sel'>
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
        <h2>WORKSHOP</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setwork(e.target.value)} className='sel'>
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
        <h2>COMMUNICATION LAB</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setcomlab(e.target.value)} className='sel'>
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
        <h2>ENGINEERING ELECTIVE-I</h2>
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
        <h2>SOCIAL SCIENCE ELECTIVE</h2>
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

export default Two
