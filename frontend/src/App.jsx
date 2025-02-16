
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/Navbar'
import Sidebar from './Component/Sidebar/Sidebar'
import Home from './pages/Home/Home'
import Profile from './pages/profile/Profile'
import Section from './pages/Section'
import Scgpa from './pages/Sgpa/Scgpa'
import ImageRec from './pages/health/ImageRec'
import Book from './pages/Books/Book'
import Test from './pages/Test'
import Games from './pages/Games'
import Feedback from './pages/Feedback'
import One from './Component/SCGPA/One'
import Two from './Component/SCGPA/Two'
import Three from './Component/SCGPA/Three'
import Four from './Component/SCGPA/Four'
import Five from './Component/SCGPA/Five'
import Six from './Component/SCGPA/Six'
import Seven from './Component/SCGPA/Seven'
import Eight from './Component/SCGPA/Eight'

function App() {
 

  return (
   <div className=''>
   <Navbar/>

   <div className='flex w-full overflow-hidden'>
<Sidebar/>
<div className=' w-[80%] mx-auto my-8 ml-[max(5vw,25px)]   text-base'>
  <Routes>
<Route path='' element={<Home/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/section' element={<Section/>}/>
<Route path='/scgpa' element={<Scgpa/>}/>
<Route path='/scgpa/1' element={<One/>}/>
<Route path='/scgpa/2' element={<Two/>}/>
<Route path='/scgpa/3' element={<Three/>}/>
<Route path='/scgpa/4' element={<Four/>}/>
<Route path='/scgpa/5' element={<Five/>}/>
<Route path='/scgpa/6' element={<Six/>}/>
<Route path='/scgpa/7' element={<Seven/>}/>
<Route path='/scgpa/8' element={<Eight/>}/>
<Route path='/health_status' element={<ImageRec/>}/>
<Route path='/book' element={<Book/>}/>
<Route path='/test' element={<Test/>}/>
<Route path='/game' element={<Games/>}/>
<Route path='/feedback' element={<Feedback/>}/>
  </Routes>
</div>
   </div>
   </div>
  )
}

export default App
