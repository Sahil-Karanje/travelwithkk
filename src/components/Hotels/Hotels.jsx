import React from 'react'
import './Hotels.css'
import {AiFillStar} from 'react-icons/ai'

const Hotels = (props) => {
  return (
    <div className='hotels container'>
      <div className="hotels_cards">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000" className="hotel">
              <figure>
                <img src={props.hotelimg1} alt="" />
              </figure>
              <div className="hotel_text">
                <h4>{props.hotelname1}</h4>
                <p>{props.location1}</p>
                <hr />
                <p style={{color:"gold"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                From : <span>Rs.{props.hotelprice1}/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000" className="hotel">
              <figure>

                <img src={props.hotelimg2} alt="" />
              </figure>
              <div className="hotel_text">
                <h4>{props.hotelname2}</h4>
                <p>{props.location2}</p>
                <hr />
                <p style={{color:"gold"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                From : <span>Rs.{props.hotelprice2}/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000" className="hotel">
              <figure>
                <img src={props.hotelimg3} alt="" />
              </figure>
              <div className="hotel_text">
                <h4>{props.hotelname3}</h4>
                <p>{props.location3}</p>
                <hr />
                <p style={{color:"gold"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                From : <span>Rs.{props.hotelprice3}/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div data-aos="flip-left"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000" className="hotel">
              <figure>
                <img src={props.hotelimg4} alt="" />
              </figure>
              <div className="hotel_text">
                <h4>{props.hotelname4}</h4>
                <p>{props.location4}</p>
                <hr />
                <p style={{color:"gold"}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></p>
                From : <span>Rs.{props.hotelprice4}/-</span> per night
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels