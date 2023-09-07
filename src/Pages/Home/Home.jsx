import React from 'react'
import './Home.css'
import logo from "../../Assets/Images/kk.png"
import taj from '../../Assets/Videos/taj.mp4'
import ActivityCard from '../../components/ActivityCard/ActivityCard'

const Home = () => {
  return (
    <div>
      <section id="home_banner">
        <video src={taj} loop muted autoPlay></video>
        <div className="black_mask">
          <div className='banner_content'>
            <img src={logo} alt="logo" style={{width:"20%"}} />
            <h1>Travel INDIA with KK</h1>
          </div>
        </div>
      </section>
      <section>
        <ActivityCard />
      </section>
    </div>
  )
}

export default Home