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
  <>
   <nav
    className={`bg-white border-gray-200 dark:bg-gray-900`}
   >
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <a
      href="/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
     >
      <img src={logo} className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-darkblue text-2xl font-semibold whitespace-nowrap dark:text-light">
       JobTrackr
      </span>
     </a>
     <button
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      onClick={toggleMobileMenu}
     >
      <span className="sr-only">Open main menu</span>
      {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
     </button>
     <div className={`w-full md:block md:w-auto ${!isMobileMenuOpen ? "hidden" : "nav-mobile"}`} id="navbar-default">
      <ul className="text-darkblue font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       <NavLink
        to="/"
        className="mobile-nav-link hover:text-lightblue"
        onClick={toggleMobileMenu}
       >
        Home
       </NavLink>
       <NavLink
        to="/about"
        className="mobile-nav-link hover:text-lightblue"
        onClick={toggleMobileMenu}
       >
        About
       </NavLink>
       <li>
        <a
         target="_blank"
         className="mobile-nav-link hover:text-lightblue"
         href="https://github.com/madina0801/JobTrackr"
         onClick={toggleMobileMenu}
        >
         GitHub
        </a>
       </li>
      </ul>
     </div>
    </div>
   </nav>
  </>

  //   <header
  //    className={`header  ${isMobileMenuOpen ? "nav-open" : ""}`}
  //    style={{
  //     zIndex: "999",
  //     position: "sticky",
  //     top: "0",
  //     backdropFilter: "blur(10px)",
  //     backgroundColor: "rgba(255, 255, 255, 0.7)",
  //    }}
  //   >
  //    <div className="logo">
  //     {" "}
  //     <a href="#">
  //      <img
  //       className="logo"
  //       alt="JobTrackr logo"
  //       src={logo}
  //       style={{
  //        height: "4.5rem",
  //        width: "3rem",
  //        position: "absolute",
  //        top: "50%",
  //        transform: "translateY(-50%)",
  //       }}
  //      />
  //     </a>
  //    </div>
  //    <div
  //     className="heading-primary text-darkblue"
  //     style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
  //    >
  //     JobTrackr
  //    </div>
  //    <nav
  //     className={`main-nav ${isMobileMenuOpen ? "open" : ""}`}
  //     style={{ zIndex: "300" }}
  //    >
  //     <ul className="main-nav-list">
  //      <NavLink to="/" className="main-nav-link" onClick={toggleMobileMenu}>
  //       Home
  //      </NavLink>
  //      <NavLink to="/about" className="main-nav-link" onClick={toggleMobileMenu}>
  //       About
  //      </NavLink>
  //      <li>
  //       <a
  //        className="main-nav-link"
  //        target="blank"
  //        href="https://github.com/madina0801/JobTrackr"
  //        onClick={toggleMobileMenu}
  //       >
  //        GitHub
  //       </a>
  //      </li>
  //     </ul>
  //    </nav>
  //    <button
  //     className="btn-mobile-nav"
  //     onClick={toggleMobileMenu}
  //    >
  //     {isMobileMenuOpen ? <IoClose className="icon-mobile-nav" /> : <IoMenu className="icon-mobile-nav" />}
  //     {/* <ion-icon
  //      className="icon-mobile-nav"
  //      name={isMobileMenuOpen ? "close-outline" : "menu-outline"}
  //     ></ion-icon> */}
  //    </button>
  //   </header>
  //  );
 );
}

export default Navbar;
