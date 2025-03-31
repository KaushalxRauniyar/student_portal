import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { Book, BookAIcon, Computer, Gamepad, Home, Hospital, TestTube2, User, Lightbulb } from 'lucide-react'

function Sidebar() {
  return (
    <div className='w-[17%] border-t-2 border-blue-800 overflow-y-auto min-h-screen bg-slate-800'>
        <div className='flex flex-col text-[15px]'>
            <NavLink className='text-white navv' to='/'>
              <Home/>  Home
            </NavLink>
            <NavLink className='text-white navv' to='/profile'>  
               <User/> Profile
            </NavLink>
            <NavLink className='text-white navv' to='/elective'>
               <Lightbulb/> Elective Suggestion
            </NavLink>
            <NavLink className='text-white navv' to='/scgpa'>
               <Computer /> SCGPA Calculator
            </NavLink>
            <NavLink className='text-white navv' to='/health_status'>
               <Hospital/> Health Status
            </NavLink>
            <NavLink className='text-white navv' to='/book'>
              <Book/>  Book Suggestion
            </NavLink>
            <NavLink className='text-white navv' to='/test'>
              <TestTube2/> Test
            </NavLink>
           
            <NavLink className='text-white navv' to='/feedback'>
               <BookAIcon/> Feedback
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
