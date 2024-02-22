import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../assets/logo.svg";


function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
  <header
   className={`header  ${isMobileMenuOpen ? "nav-open" : ""}`}
   style={{
    zIndex: "999",
    position: "sticky",
    top: "0",
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
   }}
  >
   <div className="logo">
    {" "}
    <a href="#">
     <img
      className="logo"
      alt="JobTrackr logo"
      src={logo}
      style={{
       height: "4.5rem",
       width: "3rem",
       position: "absolute",
       top: "50%",
       transform: "translateY(-50%)",
      }}
     />
    </a>
   </div>
   <div
    className="heading-primary"
    style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
   >
    JobTrackr
   </div>
   <nav
    className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}
    style={{ zIndex: "300" }}
   >
    <ul className="main-nav-list">
     <NavLink to="/" className="main-nav-link" onClick={toggleMobileMenu}>
      Home
     </NavLink>
     <NavLink to="/about" className="main-nav-link" onClick={toggleMobileMenu}>
      About
     </NavLink>
     <li>
      <a
       className="main-nav-link"
       target="blank"
       href="https://github.com/madina0801/JobTrackr"
       onClick={toggleMobileMenu}
      >
       GitHub
      </a>
     </li>
    </ul>
   </nav>
   <button
    className="btn-mobile-nav"
    onClick={toggleMobileMenu}
   >
    {isMobileMenuOpen ? <IoClose className="icon-mobile-nav" /> : <IoMenu className="icon-mobile-nav" />}
    {/* <ion-icon
     className="icon-mobile-nav"
     name={isMobileMenuOpen ? "close-outline" : "menu-outline"}
    ></ion-icon> */}
   </button>
  </header>
 );
}

export default Navbar;
