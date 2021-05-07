import React from 'react';
import Powerslap from './video/powerslap.mp4';
import Umesh from './video/Umesh.png';
import Bijender from './video/bijender.png';
import Amarpal from './video/amarpal.png';
import Sonu from './video/sonu.png';
import Somesh from './video/somesh.png';
import Footer from './Footer';
import './Project.css';

function Project() {
    return (
        <div>
            <div className="navbar">
                <a className="logo" href="#">Mr. Shakya</a>
                <ul className="nav">
                    <li className="home"><a href="#home">Home</a></li>
                    <li className="about"><a href="#about">About</a></li>
                    <li className="portfolio"><a href="#portfolio">Portfolio</a></li>
                    <li className="friends"><a href="#services">Friends</a></li>
                    <li className="projects"><a href="#contact">Projects</a></li>
                </ul>
            </div>
            <section className="banner-area" id="home">
                <video autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                        zIndex: "-1"

                    }}
                >
                    <source src={Powerslap} type="video/mp4" />
                </video>
            </section>

            <section className="about-area" id="about">
                <div className="text-part">
                    <h1 style={{ paddingTop: "20px" }}>
                        About Me</h1>
                    <img src={Umesh} style={{ marginLeft: "38%", borderRadius: "10%" }} /> <br/><br/>

                    <p>
                        Hello I'm Umesh Shakya.I am from New Delhi. My father is a farmer and my mother is a housewife.
                        I always had an interest in computers and this is the reason behind me working towards my goal to become a Software Engineer. I did most of my schooling from an NGO known as Pragati Wheel School.
                     I completed my 10th from Nios and joined Navgurukul. </p>
                </div>
            </section>

            <section className="port-area" id="portfolio">
                <div className="text-part">
                    <h1 style={{ paddingTop: "20px" }}>
                        PortFolio </h1>
                    <p>
                    A portfolio is a collection of financial investments like stocks, bonds, commodities, cash, and cash equivalents, including closed-end funds and exchange traded funds (ETFs). ... A portfolio may contain a wide range of assets including real estate, art, and private investments.
                    </p>
                </div>
            </section>

            <section className="service-area" id="services">
                <div className="text-part">
                    <h1 style={{ paddingTop: "20px" }}>
                        My Friend</h1>


                    <div className='main' style={{ paddingTop: "20px" }}>
                        <img src={Bijender}/>
                        <img src={Amarpal}/>
                    </div><br /> <br />
                    <div className='main' style={{ paddingTop: "20px" }}>
                        <img src={Somesh}/>
                        <img src={Sonu}/>
                    </div>

                </div>
            </section>

            <section className="contact-area" id="contact">
                <div className="text-part">
                    <h1 style={{ fontWeight: 'bold', color: 'black', textDecoration: "underline" }}>

                        My Projects</h1>
                    <p className="project">

                        ■ Saral _E _learning  <a href="https://github.com/umesh8800/E-Saral" target="_blank">(Code)</a><br />


                    ■ Weather_App  <a href="https://github.com/umesh8800/weather_app" target="_blank">(Code)</a><br />



                    ■ Google_News  <a href="https://github.com/umesh8800/Google_News" target="_blank">(Code)</a><br />


                    ■ Tudo_List   <a href="https://github.com/umesh8800/Todo-List" target="_blank">(Code)</a><br />


                    ■ Company_project <a href="https://github.com/umesh8800/website_project" target="_blank">(Code)</a><br />

                    </p>
                </div>            </section>
                <Footer/>

        </div>
    )
}

export default Project
