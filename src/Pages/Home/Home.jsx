import React from 'react'
import taj from '../../Assets/Videos/taj_ahal.mp4'

const Home = () => {
  return (
    <div>
        <video src={taj} loop muted autoPlay></video>
    </div>
  )
}

export default Home