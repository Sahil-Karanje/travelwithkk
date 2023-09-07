import React,{useEffect} from 'react';
import './Navbar.css'; // Import your CSS file
import logo from '../../Assets/Images/kk.png'

function Navbar() {
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        document.querySelector(".header").classList.add("stickyheader");
        var whlogo = document.querySelector(".white-logo");
        whlogo.src = "assets/images/bankai-logo-blue.svg";
        whlogo.classList.add("white-logo-stick");
        document.querySelectorAll(".nav-link").forEach((navElement) => {
          navElement.style.color = "#000";
        });
      } else {
        document.querySelector(".header").classList.remove("stickyheader");
        whlogo = document.querySelector(".white-logo");
        whlogo.src = "assets/images/bankai-logo.svg";
        whlogo.classList.remove("white-logo-stick");
        document.querySelectorAll(".nav-link").forEach((navElement) => {
          navElement.style.color = "#fff";
        });
      }
    });
    
    let menubtn = document.querySelector(".menu-btn");
    menubtn.addEventListener("click", () => {
      document.getElementById("sidemenuid").classList.add("sidemenuphone");
    });
    
    let closemenubtn = document.querySelector(".sidemenu-cross");
    closemenubtn.addEventListener("click", () => {
      document.getElementById("sidemenuid").classList.remove("sidemenuphone");
    });
    
    document.querySelectorAll(".sidemenu-item").forEach((phElement) => {
      phElement.addEventListener("click", () => {
        document.getElementById("sidemenuid").classList.remove("sidemenuphone");
      });
    });
  })
  return (
    <>
    <header className="header">
        <div className="header-wrap pt-2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between">
                    <div>
                        <a className="navbar-brand " href="/">
                            <img className="white-logo" style={{width:"15%"}} src={logo} alt=""/>
                        </a>
                    </div>
                    <button className="menu-btn d-lg-none d-block">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item  ">
                                <a className="nav-link active" href="/home">Home </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/about-us">About Us </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/our-team">Our Team </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/trailers">Trailers </a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/contact">Contact </a>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </header>
    <section class="sidemenu p-0" id="sidemenuid">
            <div class="sidemenu-top-div">
                <div>
                    <img class="sidemenu-logo"src="assets/images/bankai-logo-blue.svg" alt=""/>
                </div>
                <div id="closemenu">
                    <svg class="sidemenu-cross" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                </div>
            </div>
            <div class="sidemenu-list-div">
                <ul class="sidemenu-list">
                    <li class="sidemenu-li">
                        <a class="sidemenu-item active-link" href="/">Home</a>
                    </li>
                    <li class="sidemenu-li">
                        <a class="sidemenu-item" href="/about-us">About Us</a>
                    </li>
                    <li class="sidemenu-li">
                        <a class="sidemenu-item" href="/our-team">Our Team</a>
                    </li>
                    <li class="sidemenu-li">
                        <a class="sidemenu-item" href="/trailers">Trailers</a>
                    </li>
                    <li class="sidemenu-li">
                        <a class="sidemenu-item" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </section>
    </>
  );
}

export default Navbar;