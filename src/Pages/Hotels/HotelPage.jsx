import React from 'react'
import Hotels from '../../components/Hotels/Hotels'
import HotelImg from '../../Assets/Images/hotelPage.png'
const HotelPage = () => {
    return (
        <div>
            <div className="hotel_banner">
                <img src={HotelImg} alt="" style={{width:"100%"}} />
            </div>
            <Hotels/>
        </div>
    )
}

export default HotelPage