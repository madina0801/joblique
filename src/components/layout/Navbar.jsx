import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../assets/logo.svg";

function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 const content = (
  <>
   <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-darkblue text-light transition z-50">
    <ul className="text-center text-xl p-20">
     <NavLink to="/"  onClick={toggleMobileMenu}>
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       Home
      </li>
     </NavLink>
     <NavLink to="/about" onClick={toggleMobileMenu}>
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       About
      </li>
     </NavLink>
     <NavLink to="https://github.com/madina0801/JobTrackr" target="_blank"  onClick={toggleMobileMenu}>
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       GitHub
      </li>
     </NavLink>
    </ul>
   </div>
  </>
 );

 return (
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
     href="https://flowbite.com/"
     class="flex items-center space-x-3 rtl:space-x-reverse"
    >
     <img src={logo} class="h-8" alt="JobTrackr Logo" />
     <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      JobTrackr
     </span>
    </a>
    <button
     data-collapse-toggle="navbar-default"
     type="button"
     class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
     aria-controls="navbar-default"
     aria-expanded="false"
    >
     <button onClick={toggleMobileMenu}>
      {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
     </button>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <NavLink to="/" className="main-nav-link">
       Home
      </NavLink>
      <NavLink to="/about" className="main-nav-link">
       About
      </NavLink>
      <NavLink to="https://github.com/madina0801/JobTrackr" target="blank">
       <a className="main-nav-link">
        GitHub
       </a>
      </NavLink>
     </ul>
    </div>
   </div>

   <div>{isMobileMenuOpen && content}</div>
  </nav>
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
