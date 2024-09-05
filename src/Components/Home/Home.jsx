import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className='homeMain'>
        <div onClick={()=>{navigate("/learn")}} className='LearnModeBtn'>Learn Mode</div>
        <div className='AutoModeBtn'>Auto Mode</div>
    </div>
  )
}

export default Home
