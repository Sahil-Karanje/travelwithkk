import React from 'react'
import './Hotels.css'
import hotel1 from '../../Assets/Images/hotels/h1.png'
import hotel2 from '../../Assets/Images/hotels/h2.png'
import hotel3 from '../../Assets/Images/hotels/h3.png'
import hotel4 from '../../Assets/Images/hotels/h4.png'
import hotel5 from '../../Assets/Images/hotels/h5.png'
import hotel6 from '../../Assets/Images/hotels/h6.png'
import hotel7 from '../../Assets/Images/hotels/h7.png'
import hotel8 from '../../Assets/Images/hotels/h8.png'

const Hotels = () => {
  return (
    <div className='hotels container'>
      <div className="hotels_cards">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel1} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Redac Gateway Hotel</h3>
                <p>Mumbai</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.2000/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>

                <img src={hotel2} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Eastern Discovery</h3>
                <p>Mumbai</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.2000/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel3} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Southwest States</h3>
                <p>Pune</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.2000/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel4} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>TreeHouse Villas</h3>
                <p>Delhi</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.2000/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel5} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Vnahomes Aparhotel</h3>
                <p>Delhi</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.2000/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel6} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Furama Chiang Mai</h3>
                <p>Pune</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.2000/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel7} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Hotel WBF Hommachi</h3>
                <p>Hyderabad</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.5999/-</span> per night
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 pb-lg-5 pb-3">
            <div className="hotel">
              <figure>
                <img src={hotel8} alt="" />
              </figure>
              <div className="hotel_text">
                <h3>Parian Holiday Villas</h3>
                <p>Mumbai</p>
                <hr />
                <p>stars</p>
                From : <span>Rs.6000/-</span> per night
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotels