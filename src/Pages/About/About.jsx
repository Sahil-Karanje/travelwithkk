import React from 'react'
import taj from '../../Assets/Images/taj.png'
import abImg from '../../Assets/Images/ab_1.png'
import logo from '../../Assets/Images/kk.png'
import './About.css'

const About = () => {
    return (
        <div>
            <div id="about_banner">
                <img src={taj} alt="abImg" style={{ width: "100%" }} />
            </div>
            <div className="container pt-5">


                <section className="company_img">
                    <img src={abImg} alt="cimg" />
                    <div className="about_text">
                        <figure style={{ width: "20%" }}>
                            <img src={logo} alt="logo" style={{ width: "100%" }} />
                        </figure>
                        <p style={{ textAlign: "center", padding: "20px" }}>Welcome to KK tours & travels, your gateway to unforgettable adventures and seamless travel experiences. With a passion for exploration and a commitment to excellence, we curate journeys that immerse you in the world's most captivating destinations. Join us and embark on a voyage where every moment becomes a cherished memory, and every destination tells a unique story. Your journey starts here, with us.</p>
                    </div>
                </section>
                <hr />
                <section className='mission'>
                    <div className="our_mission">
                        <h2>Our Mission</h2>
                        <p>At KK, our mission is to inspire and empower travelers to discover the beauty of our world while fostering cultural understanding and preserving the planet's natural wonders. We strive to create exceptional, sustainable travel experiences that leave a positive impact on both our clients and the communities we visit. Our dedication to responsible tourism ensures that every adventure we craft enriches lives and leaves a lasting legacy of responsible exploration for generations to come.</p>
                    </div>
                    <div className="our_mission">
                        <h2>Our Mission</h2>
                        <p>At KK, our mission is to inspire wanderlust, foster connections, and create enduring memories through exceptional travel experiences. We are dedicated to crafting journeys that not only showcase the world's beauty but also leave a positive impact on the communities and environments we visit. Our commitment to sustainability, authenticity, and unparalleled service drives us to ensure every trip is a transformative adventure that enriches lives and promotes a deeper understanding of our global community.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About