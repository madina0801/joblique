import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../assets/logo.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const content = (
    <>
      <div className="absolute left-0 right-0 z-50 block w-full transition lg:hidden md:hidden top-16 bg-darkblue text-light">
        <ul className="p-20 text-xl text-center">
          <NavLink to="/" onClick={toggleMobileMenu}>
            <li className="transition cursor-pointer hover:text-lightblue border-b0 border-darkblue hover:border-lightblue">
              Home
            </li>
          </NavLink>
          <NavLink to="/about" onClick={toggleMobileMenu}>
            <li className="transition cursor-pointer hover:text-lightblue border-b0 border-darkblue hover:border-lightblue">
              About
            </li>
          </NavLink>
          <NavLink
            to="https://github.com/madina0801/JobTrackr"
            target="_blank"
            onClick={toggleMobileMenu}
          >
            <li className="transition cursor-pointer hover:text-lightblue border-b0 border-darkblue hover:border-lightblue">
              GitHub
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="w-screen">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="JobTrackr Logo" />
          <span className="self-center text-2xl font-semibold text-darkblue whitespace-nowrap dark:text-white">
            JobTrackr
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg text-darkblue md:p-0 bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink to="/">
              <li className="nav-link">Home</li>
            </NavLink>
            <NavLink to="/about">
              <li className="nav-link">About</li>
            </NavLink>
            <NavLink
              to="https://github.com/madina0801/JobTrackr"
              target="blank"
            >
              <li className="nav-link">GitHub</li>
            </NavLink>

            <button
              className="flex items-start justify-start w-10 h-10 mt-1 bg-gray-300 rounded-full dark:bg-gray-800"
              onClick={() => setIsDarkMode((prev) => !prev)}
            >
              {isDarkMode ? (
                <FiSun className="text-yellow-500" />
              ) : (
                <FiMoon className="text-gray-500" />
              )}
            </button>
          </ul>
        </div>
      </div>

      <div>{isMobileMenuOpen && content}</div>
    </nav>
  );
}

export default Navbar;
