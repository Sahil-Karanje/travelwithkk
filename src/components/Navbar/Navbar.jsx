import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        document.querySelector(".header").classList.add("stickyheader");
        document.querySelectorAll(".nav-link").forEach((navElement) => {
          navElement.style.color = "#000";
        });
      } else {
        document.querySelector(".header").classList.remove("stickyheader");
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
            <nav className="navbar navbar-expand-lg navbar-dark d-flex justify-content-center">
              <button className="menu-btn d-lg-none d-block">
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item  ">
                    <Link className="nav-link" to="/">Home </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/about-us">About Us </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/hotels">Hotels </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/contact">Contact </Link>
                  </li>
                  <li className="nav-item ">
                    {
                      isAuthenticated ? (<Link className="nav-link" to="/user"  >User </Link>) : (<Link className="nav-link" to="" onClick={() => loginWithPopup()}>Login </Link>)
                    }

                  </li>

                </ul>

              </div>
            </nav>
          </div>
        </div>
      </header>
      <section className="sidemenu p-0" id="sidemenuid">
        <div className="sidemenu-top-div">
          <div>
            <img className="sidemenu-logo" src="assets/images/bankai-logo-blue.svg" alt="" />
          </div>
          <div id="closemenu">
            <svg className="sidemenu-cross" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
          </div>
        </div>
        <div className="sidemenu-list-div">
          <ul className="sidemenu-list">
            <li className="sidemenu-li">
              <Link className="sidemenu-item active-link" to="/">Home</Link>
            </li>
            <li className="sidemenu-li">
              <Link className="sidemenu-item" to="/about-us">About Us</Link>
            </li>
            <li className="sidemenu-li">
              <Link className="sidemenu-item" to="/hotels">Hotels</Link>
            </li>
            <li className="sidemenu-li">
              <Link className="sidemenu-item" to="/contact">Contact</Link>
            </li>
            <li className="sidemenu-li">
              {

                isAuthenticated ? (<Link className="sidemenu-item" to="/" onClick={() => logout()}>Logout</Link>) : (<Link className="sidemenu-item" to="/" onClick={() => loginWithPopup()}>Login </Link>)
              }
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;