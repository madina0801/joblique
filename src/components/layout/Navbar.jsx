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
   <div className="lg:hidden md:hidden block absolute top-16 w-full left-0 right-0 bg-darkblue text-light transition z-50">
    <ul className="text-center text-xl p-20">
     <NavLink to="/" onClick={toggleMobileMenu}>
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
       Home
      </li>
     </NavLink>
     <NavLink to="/about" onClick={toggleMobileMenu}>
      <li className="hover:text-lightblue transition border-b0  border-darkblue hover:border-lightblue cursor-pointer">
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
   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div
     class="flex items-center space-x-3 rtl:space-x-reverse"
    >
     <img src={logo} class="h-8" alt="JobTrackr Logo" />
     <span class="self-center text-2xl text-darkblue font-semibold whitespace-nowrap dark:text-white">
      JobTrackr
     </span>
    </div>
    <button
     data-collapse-toggle="navbar-default"
     type="button"
     class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul class="font-medium text-darkblue flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <NavLink to="/">
       <li className="nav-link">Home</li>
      </NavLink>
      <NavLink to="/about">
       <li className="nav-link">About</li>
      </NavLink>
      <NavLink to="https://github.com/madina0801/JobTrackr" target="blank">
       <a className="nav-link">GitHub</a>
      </NavLink>
     </ul>
    </div>
   </div>

   <div>{isMobileMenuOpen && content}</div>
  </nav>
 );
}

export default Navbar;

{/*  */}