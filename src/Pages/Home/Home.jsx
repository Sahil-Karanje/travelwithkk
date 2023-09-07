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

const Home = () => {

  return (
    <div>
      <div id="home_banner">
        <video src={taj} loop muted autoPlay></video>
        <div className="black_mask">
          <div className='banner_content'>
            <img src={logo} alt="logo" style={{ width: "20%" }} />
            <h1>Travel INDIA with KK</h1>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={tentsvg} activityname="Campaing" />
            </div>
            <div className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={adventure} activityname="Adventure" />
            </div>
            <div className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={mountains} activityname="Trekking" />
            </div>
            <div className="col-lg-3 col-md-6 col-12 py-lg-0 pb-4">
              <ActivityCard activityimg={fire} activityname="Campfire" />
            </div>
          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 ">
              <div className="off-card">
              <img className="off-card-img" src={goa} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 ">
              <div className="off-card">
              <img className="off-card-img" src={mumbai2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="top_destination container">
          <h1>Top Destination</h1>
          <div className="destinations_cards">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3">
                <div className="d_card">
                  <img src={mumbai} alt="img" />
                  <div className="destination_text">mumbai</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3">
                <div className="d_card">
                  <img src={leh} alt="img" />
                  <div className="destination_text">leh</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3">
                <div className="d_card">
                  <img src={kashmir} alt="img" />
                  <div className="destination_text">kashmir</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3">
                <div className="d_card">
                  <img src={dilli} alt="img" />
                  <div className="destination_text">dilli</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3">
                <div className="d_card">
                  <img src={agra} alt="img" />
                  <div className="destination_text">agra</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 pb-lg-4 pb-3">
                <div className="d_card">
                  <img src={forts} alt="img" />
                  <div className="destination_text">forts</div>
                </div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="hotels">
        <Hotels/>
      </section>
    </div>
  )
}

export default Home