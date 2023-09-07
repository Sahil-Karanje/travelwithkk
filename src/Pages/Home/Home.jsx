import React from 'react'
import './Home.css'
import taj from '../../Assets/Videos/taj.mp4'
import { FaCrown } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      <section id="home_banner">
        <video src={taj} loop muted autoPlay></video>
        <div className="black_mask">
          {/* <h1>Travel <span style={{color:"orange"}}>IN</span><span>D</span><span style={{color:"green"}}>IA</span> With <span>KK</span>  </h1> */}
          <h1>Travel INDIA with KK <span className='crown'><FaCrown/></span> </h1>
        </div>
      </section>
    </div>
  )
}

export default Home