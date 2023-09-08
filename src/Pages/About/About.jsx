import React from 'react'
import about from '../../Assets/Images/about.png'
import abImg from '../../Assets/Images/ab_1.png'
import logo from '../../Assets/Images/kk.png'
import './About.css'
import img1 from '../../Assets/Images/img1.png'
import img2 from '../../Assets/Images/img2.png'
import img3 from '../../Assets/Images/img3.png'

const About = () => {
    return (
        <div>
            <div id="about_banner">
                <img src={about} alt="abImg" style={{ width: "100%" }} />
            </div>

            <div className="container pt-5"> 
                <section className="company_img">
                    <img src={abImg} alt="cimg" />
                    <div className="about_text">
                        <figure style={{ width: "20%" }}>
                            <img src={logo} alt="logo" id='animated_logo' style={{ width: "100%" }} />
                        </figure>
                        <p style={{ textAlign: "center", padding: "20px" }}>Welcome to KK tours & travels, your gateway to unforgettable adventures and seamless travel experiences. With a passion for exploration and a commitment to excellence, we curate journeys that immerse you in the world's most captivating destinations. Join us and embark on a voyage where every moment becomes a cherished memory, and every destination tells a unique story. Your journey starts here, with us.</p>
                    </div>
                </section>
                <section id="place" className='hidden' style={{ marginBottom: "50px" }}>
                    <h1 style={{ textAlign: 'center', margin: '50px 0' }}>Let's pack bags</h1>
                    <div className="d-flex justify-content-space-between align-items-center " style={{width:"100%"}}>
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '40%' }}>
                            <div className="s1 d-flex justify-content-end" style={{ width: '100%' }}>
                                <img src={img1} alt="" className='slidingImage1' style={{ width: '35%', borderRadius: "10px" }} />
                            </div>
                            <div className="s2 d-flex justify-content-center" style={{ width: '100%' }}>
                                <img src={img2} alt="" className='slidingImage2' style={{ width: '35%', borderRadius: "10px", margin: "10px 0" }} />
                            </div>
                            <div className="s3 d-flex justify-content-end" style={{ width: '100%' }}>
                                <img src={img3} alt="" className='slidingImage3' style={{ width: '35%', borderRadius: "10px" }} />
                            </div>
                        </div>

                        <div className="d-flex justify-content-center align-items-center" style={{ width: '60%' }}>
                            <h6 style={{ textAlign: 'center', width: '60%', marginLeft:"10px" }}>Travel makes one modest. You see what a tiny place you occupy in the world.</h6>
                        </div>
                    </div>
                </section>
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