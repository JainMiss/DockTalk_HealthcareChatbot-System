import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import { HiMenu, HiX } from "react-icons/hi"; // Icons for menu toggle
import NearbySearch from "./NearbySearch";
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto px-4">
        {/* Logo and Title */}
        <Link to="/">
          <div className="flex gap-3 items-center">
            <img src={assets.imagesbg} alt="Logo" width={35} height={30} />
            <p className="font-sans font-extrabold text-2xl text-gray-800">
              DocTalk HealthCare Chatbot
            </p>
          </div>
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="text-gray-800 text-3xl lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-white shadow-lg lg:static lg:bg-transparent lg:flex lg:items-center lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-x-8 font-sans font-semibold text-lg text-gray-700 lg:items-center">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 lg:py-0 hover:text-gray-500 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 lg:py-0 hover:text-gray-500 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                to="/nearby-search"
                className={({ isActive }) =>
                  `block py-2 px-4 lg:py-0 ${
                    isActive ? "text-gray-500" : "hover:text-gray-500"
                  } transition-colors duration-300`
                }
              >
                Nearby Search
              </Link>
            </li> */}

            <li>
              <Link
                to="/medical-report"
                className="block py-2 px-4 lg:py-0 hover:text-gray-500 transition-colors duration-300"
              >
                Generate Medical Report
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className="block py-2 px-4 lg:py-0 hover:text-gray-500 transition-colors duration-300"
              >
                Schedule Appointment
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row gap-y-4 lg:gap-x-4 mt-4 lg:mt-0`}
        >
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 hover:scale-105 active:animate-bounce transition-transform duration-300">
                Login
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 hover:scale-105 active:animate-bounce transition-transform duration-300">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-gray-800 text-white py-2 px-4 rounded-md font-medium hover:bg-gray-700 hover:scale-105 active:animate-bounce transition-transform duration-300"
              >
                Log Out
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
