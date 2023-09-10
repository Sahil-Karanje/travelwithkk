import './Home.css'
import logo from "../../Assets/Images/kk.png"
import taj from '../../Assets/Videos/taj.mp4'
import ActivityCard from '../../components/ActivityCard/ActivityCard'
import tentsvg from '../../Assets/Images/tent.svg'
import adventure from '../../Assets/Images/climb.svg'
import mountains from '../../Assets/Images/moutains.svg'
import fire from '../../Assets/Images/fire.svg'
import leh from '../../Assets/Images/leh.png'
import dilli from '../../Assets/Images/dilli.png'
import mumbai from '../../Assets/Images/mumbai.png'
import agra from '../../Assets/Images/agra.png'
import kashmir from '../../Assets/Images/kashmir.png'
import forts from '../../Assets/Images/forts.png'
import goa from '../../Assets/Images/goa.jpg'
import mumbai2 from '../../Assets/Images/mumbai2.jpg'
import Hotels from '../../components/Hotels/Hotels'

import hotelimg1 from '../../Assets/Images/hotels/h1.png'
import hotelimg2 from '../../Assets/Images/hotels/h2.png'
import hotelimg3 from '../../Assets/Images/hotels/h3.png'
import hotelimg4 from '../../Assets/Images/hotels/h4.png'
import Booknow from '../../components/Booking/Booknow'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div id="home_banner">
        <video src={taj} loop muted autoPlay></video>
        <div className="black_mask">
          <div className='banner_content'>
            <img src={logo} alt="logo" style={{ width: "20%" }} />
            <h1> Travel INDIA with KK</h1>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h2>Activities</h2>
          <div className="row">
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={tentsvg} activityname="Campaing" />
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={adventure} activityname="Adventure" />
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={mountains} activityname="Trekking" />
            </div>
            <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
              data-aos-duration="1000" className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={fire} activityname="Campfire" />
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 " data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
              <div className="off-card">
                <img className="off-card-img" src={goa} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 " data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
              <div className="off-card">
                <img className="off-card-img" src={mumbai2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="top_destination container">
          <h2>Top Destination</h2>
          <div className="destinations_cards">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <Link to="/mumbai">
                  <div className="d_card">
                    <img src={mumbai} alt="img" />
                    <div className="destination_text">mumbai</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className="d_card">
                  <img src={leh} alt="img" />
                  <div className="destination_text">leh</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className="d_card">
                  <img src={kashmir} alt="img" />
                  <div className="destination_text">kashmir</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className="d_card">
                  <img src={dilli} alt="img" />
                  <div className="destination_text">delhi</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className="d_card">
                  <img src={agra} alt="img" />
                  <div className="destination_text">agra</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div className="d_card">
                  <img src={forts} alt="img" />
                  <div className="destination_text">forts</div>
                </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotels">
        <h2>Hotels Recommended for you</h2>
        <Hotels hotelimg1={hotelimg1} hotelimg2={hotelimg2} hotelimg3={hotelimg3} hotelimg4={hotelimg4}
          hotelname1="Taj Hotel" hotelname2="Redac Gateway" hotelname3="Eastern Discovery" hotelname4="Sothwest States" location1="Mumbai" location2="Pune" location3="Delhi" location4="Banlore" hotelprice1="2000" hotelprice2="2000" hotelprice3="2000" hotelprice4="2000" />
      </section>
      <Booknow />
    </div>
  )
}

export default Home