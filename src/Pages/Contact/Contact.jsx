import React from 'react'
import './Contact.css'
import contact from "../../Assets/Images/contact.png"
import { CiLocationOn, CiMail } from "react-icons/ci"
import { BiPhoneCall } from "react-icons/bi"
import Booknow from '../../components/Booking/Booknow'

const Contact = () => {
  return (
    <div>
      <div id="contact_banner">
        <img src={contact} alt="abImg" style={{ width: "100%" }} />
      </div>
      <section>
        <div className="container pb-5">
          <div className="contact_container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="contact_text">
                  <h1>Contact Information</h1>
                  <div>
                    <p className='py-lg-3 py-3 contact-info'> <CiLocationOn /> 540 Libety Road, Thane, GhodBandar</p>
                    <p className='py-lg-3 py-3 contact-info'> <BiPhoneCall /> (000) 999 -656 -888</p>
                    <p className='py-lg-3 py-3 contact-info'> <CiMail /> travelerKK@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="contact_form">
                  <h1>Send Message</h1>
                  <div className="row">
                    <div className="col-md-6 py-3 px-1">
                      <input className='input-text' type="text" name="Name" placeholder='Your Name*' id="" />
                    </div>
                    <div className="col-md-6 py-3 px-1">
                      <input className='input-text' type="text" name="Name" placeholder='Phone Number*' id="" />
                    </div>
                    <div className="col-12 py-3 px-1">
                      <input className='input-text' type="email" name="email" placeholder='Your Email*' id="" />
                    </div>
                    <div className="col-12 py-3 px-1">
                      <textarea className='input-text' name="adress" placeholder='Your Address' id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="col-12 py-3 px-1">
                      <button className='contact-submitbtn'>Submit</button>
                    </div>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </section>
      <Booknow/>
    </div>
  )
}

export default Contact