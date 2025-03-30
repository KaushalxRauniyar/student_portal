import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { Book, BookAIcon, Computer, Gamepad, Home, Hospital, TestTube2, User, Lightbulb } from 'lucide-react'

function Sidebar() {
  return (
    <div className='w-[17%] overflow-y-auto min-h-screen bg-gradient-to-t from bg-green-200 to-gray-600'>
        <div className='flex flex-col text-[15px]'>
            <NavLink className='bg-white navv' to='/'>
              <Home/>  Home
            </NavLink>
            <NavLink className='bg-white navv' to='/profile'>  
               <User/> Profile
            </NavLink>
            <NavLink className='bg-white navv' to='/elective'>
               <Lightbulb/> Elective Suggestion
            </NavLink>
            <NavLink className='bg-white navv' to='/scgpa'>
               <Computer /> SCGPA Calculator
            </NavLink>
            <NavLink className='bg-white navv' to='/health_status'>
               <Hospital/> Health Status
            </NavLink>
            <NavLink className='bg-white navv' to='/book'>
              <Book/>  Book Suggestion
            </NavLink>
            <NavLink className='bg-white navv' to='/test'>
              <TestTube2/> Test
            </NavLink>
           
            <NavLink className='bg-white navv' to='/feedback'>
               <BookAIcon/> Feedback
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
