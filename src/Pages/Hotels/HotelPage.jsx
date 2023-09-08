import React from 'react'
import Hotels from '../../components/Hotels/Hotels'
import HotelImg from '../../Assets/Images/hotelPage.png'
import hotelimg1 from '../../Assets/Images/hotels/h1.png'
import hotelimg2 from '../../Assets/Images/hotels/h2.png'
import hotelimg3 from '../../Assets/Images/hotels/h3.png'
import hotelimg4 from '../../Assets/Images/hotels/h4.png'

const HotelPage = () => {
    return (
        <div>
            <div className="hotel_banner">
                <img src={HotelImg} alt="" style={{ width: "100%" }} />
            </div>
            <section className="hotels-section">
                <h2>Hotels In Mumbai</h2>
                <Hotels hotelimg1={hotelimg1} hotelimg2={hotelimg2} hotelimg3={hotelimg3} hotelimg4={hotelimg4}
                    hotelname1="Taj Hotel" hotelname2="Redac Gateway" hotelname3="Eastern Discovery" hotelname4="Sothwest States" location1="Mumbai" location2="Mumbai" location3="Mumbai" location4="Mumbai" />
            </section>
            <section className="hotels-section">
                <h2>Hotels In Pune</h2>
                <Hotels hotelimg1={hotelimg1} hotelimg2={hotelimg2} hotelimg3={hotelimg3} hotelimg4={hotelimg4}
                    hotelname1="Taj Hotel" hotelname2="Redac Gateway" hotelname3="Eastern Discovery" hotelname4="Sothwest States" location1="Pune" location2="Pune" location3="Pune" location4="Pune" />
            </section>
            <section className="hotels-section">
                <h2>Hotels In Delhi</h2>
                <Hotels hotelimg1={hotelimg1} hotelimg2={hotelimg2} hotelimg3={hotelimg3} hotelimg4={hotelimg4}
                    hotelname1="Taj Hotel" hotelname2="Redac Gateway" hotelname3="Eastern Discovery" hotelname4="Sothwest States" location1="Delhi" location2="Delhi" location3="Delhi" location4="Delhi" />
            </section>
            <section className="hotels-section">
                <h2>Hotels In Banglore</h2>
                <Hotels hotelimg1={hotelimg1} hotelimg2={hotelimg2} hotelimg3={hotelimg3} hotelimg4={hotelimg4}
                    hotelname1="Taj Hotel" hotelname2="Redac Gateway" hotelname3="Eastern Discovery" hotelname4="Sothwest States" location1="Banglore" location2="Banglore" location3="Banglore" location4="Banglore" />
            </section>
        </div>
    )
}

export default HotelPage