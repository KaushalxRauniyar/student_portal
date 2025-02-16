import React from 'react'
import './Home.css'
import { Mail } from 'lucide-react'
function Home() {
  return (
    <div className=' homeescreen bg-gradient-to-l from-gray-500 to-white overflow-auto w-screen h-screen '>
<div className='flex flex-col justify-center  bg-[#5F6FFF] rounded-2xl'>
  <div className='box text-center mt-1'>
  <h1  className='text-white font-bold text-2xl'>Welcome to Student Portal</h1>
      </div>
  <div className='text-center text-white'>
    Your feature is bright
  </div>
{/* about us section */}
<div className='about-us bg-black rounded-2xl'>
  <div className='box text-center text-white'>
   <h1 className='text-2xl text-white font-bold'> About us</h1>
   <p>This is our Minor project. Here you have different sections to explore.</p>
   <div className=' sect text-[15px] text-green-400'>
   <p> <span className='name'>Profile: </span>  Here You Can search Anyone's Details using their roll Number.</p>
   <p><span className='name'>Section selecton: </span>   This content is made using AI&ML . here  using ml technology it suggest you to choose your elective.</p>
   <p> <span className='name'>SCGPA Calculator: </span>  Your Can Calculate Your SCGPA for respective Semester.</p>
   <p><span className='name'>Student Mental Health Prediction: </span>  here you have to give some answer and see your mental health status</p>
   <p><span className='name'>Book Suggestion: </span>  As per Your Semester it will suugest you some elective books to study. </p>
   <p><span className='name'>Test: </span> You can test Your Knowledge of Your by giving test as per your semister.</p>
   <p><span className='name'>Game: </span>  in this section you can play some game. Sometime relaxation is Important.</p>
   <p><span className='name'>FeedBack: </span>  Here you can give us some of Your important feedback regarding this website. </p>
   </div>
  </div>

</div>
<div className='contact-us bg-black rounded-2xl'>
<div className='text-center box '>
<h1 className='text-2xl font-bold text-white'>Contact Us</h1> <br />
    
   <p className='text-center text-red-400'>Mail: kaushalrauniyar1@gmail.com</p>
   
<p className='text-red-400'>Phone: +918235914724</p>

</div>
</div>
</div>
    </div>
  )
}

export default Home
