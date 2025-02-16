import  { useState } from 'react'
import './One.css'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
function Five() {

  const navigate=useNavigate()
const [ee,setee]=useState('10')
const [daa,setdaa]=useState('10')
const [se,setse]=useState('10')
const [cn,setcn]=useState('10')
const [ee1,setee1]=useState('10')
const [ee2,setee2]=useState('10')
const [al,setal]=useState('10')
const [cnl,setcnl]=useState('10')
const [kl,setkl]=useState('10')

const handlesubmit=()=>{
  const total=22
  const ans=((daa*3)+(se*4)+(ee*3)+(cn*3)+(ee1*3)+(ee2*3)+(al*1)+(cnl*1)+(kl*1))/total
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

  <h1 className='text-xl font-bold'>5th Semister Calculator</h1>
</div>
     <div className='flex xob overflow-auto justify-between items-center gap-20 border'>
      <div>
        <h2>Engineering Economics</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setee(e.target.value)} className='sel'>
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
        <h2>Design and Analysis of Algorithms</h2>
        <p>Credit: 3</p>
      </div>
      <select onChange={(e)=>setdaa(e.target.value)} className='sel'>
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
        <h2>Software Engineering</h2>
        <p>Credit: 4</p>
      </div>
      <select onChange={(e)=>setse(e.target.value)} className='sel'>
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
        <h2>Computer Networks	</h2>
        <p>CREDIT:3</p>
      </div>
      <select onChange={(e)=>setcn(e.target.value)} className='sel'>
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
        <h2>Professional Elective-I</h2>
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
     <div className='flex xob justify-between items-center gap-20 border'>
      <div>
        <h2>Professional Elective-II</h2>
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
        <h2>Algorithms Laboratory</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setal(e.target.value)} className='sel'>
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
        <h2>Computer Networks Laboratory</h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setcnl(e.target.value)} className='sel'>
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
        <h2>K-Explore Open Elective-I </h2>
        <p>CREDIT:1</p>
      </div>
      <select onChange={(e)=>setkl(e.target.value)} className='sel'>
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

export default Five
