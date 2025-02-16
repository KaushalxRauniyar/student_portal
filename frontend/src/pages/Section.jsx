import React from 'react'
import { useNavigate } from 'react-router-dom'

function Section() {
    const navigate=useNavigate()
  return (
    <div >
      <button onClick={()=>navigate("/scgpa/6")}> hey</button>

    </div>
  )
}

export default Section
