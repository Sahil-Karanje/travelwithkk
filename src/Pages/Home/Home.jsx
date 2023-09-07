import React from 'react'
import './Home.css'
import taj from '../../Assets/Videos/taj.mp4'

const Home = () => {
  return (
    <div>
      <section id="home_banner">
        <video src={taj} loop muted autoPlay></video>
      </section>
    </div>
  )
}

export default Home