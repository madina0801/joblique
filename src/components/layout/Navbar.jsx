import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMenu, IoClose } from "react-icons/io5";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

import lightModeLogo from "../../assets/logo-light-mode.svg";
import darkModeLogo from "../../assets/logo-dark-mode.png";

function Navbar() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 const [darkMode, setDarkMode] = useState(false);

 const darkModeHandler = () => {
  setDarkMode(!darkMode);
  document.body.classList.toggle("dark");
 };

 const content = (
  <>
   <div className="block md:hidden absolute top-16 w-full h-svh left-0 right-0 bg-light/50 dark:bg-darkblue/50 text-darkblue dark:text-light transition z-50 backdrop-blur-sm">
    <ul className="text-center text-2xl font-medium p-20">
     <NavLink to="/" onClick={toggleMobileMenu}>
      <li className="mb-8 hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       Home
      </li>
     </NavLink>
     <NavLink to="/about" onClick={toggleMobileMenu}>
      <li className="mb-8 hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       About
      </li>
     </NavLink>
     <NavLink
      to="https://github.com/madina0801/JobTrackr"
      target="_blank"
      onClick={toggleMobileMenu}
     >
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       GitHub
      </li>
     </NavLink>
    </ul>
   </div>
  </>
 );

 return (
  <nav className="w-screen">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
     <img src={darkMode ? darkModeLogo : lightModeLogo } className="h-8" alt="JobTrackr Logo" />
     <span className="self-center text-2xl text-darkblue font-semibold whitespace-nowrap dark:text-light">
      JobTrackr
     </span>
    </div>
    <button
     data-collapse-toggle="navbar-default"
     type="button"
     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
     aria-controls="navbar-default"
     aria-expanded="false"
     onClick={toggleMobileMenu}
    >
     {isMobileMenuOpen ? (
      <IoClose className="w-10 h-10" />
     ) : (
      <IoMenu className="w-10 h-10" />
     )}
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul className="font-medium text-darkblue flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
      <NavLink to="/">
       <li className="nav-link  dark:text-light">Home</li>
      </NavLink>
      <NavLink to="/about">
       <li className="nav-link  dark:text-light">About</li>
      </NavLink>
      <NavLink to="https://github.com/madina0801/JobTrackr" target="blank">
       <li className="nav-link  dark:text-light">GitHub</li>
      </NavLink>
      <button
       className="h-6 w-10 flex bg-light rounded-lg justify-center items-center"
       onClick={darkModeHandler}
      >
       {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
     </ul>
    </div>
   </div>

   <div>{isMobileMenuOpen && content}</div>
  </nav>
 );
}

export default Navbar;
