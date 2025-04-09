import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser,
  faSliders,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`${
          visible ? "hidden" : ""
        } flex justify-between items-center px-5 py-0 shadow-md bg-white fixed top-0 left-0 w-full z-50 montserrat-font`}
      >
        {/* Logo */}
        <NavLink to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
            alt="logo"
            className="h-14 sm:h-16 md:h-20 object-contain"
          />
        </NavLink>

        {/* Center Nav Links */}
        <div className="NavLinks hidden md:flex text-base lg:text-lg font-medium ml-10 gap-8">
          {["/", "/page1", "/page2", "/page3"].map((route, i) => (
            <NavLink
              key={i}
              to={route}
              className="flex flex-col items-center hover:scale-105 transition-transform duration-200 hover:underline"
            >
              <p className="capitalize">
                {route === "/" ? "Home" : route.replace("/", "")}
              </p>
              <hr className="w-3/4 h-[2.5px] bg-black border-none rounded hidden" />
            </NavLink>
          ))}
        </div>

        {/* Search input on large screens */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className={` search ${
              search ? "w-40 sm:w-50 sm:ml-3 md:w-72 text-black" : "w-0"
            } transition-all duration-300 ease-in-out border outline-none px-3 py-2 rounded-full text-sm ${
              search ? "opacity-100" : "opacity-0"
            } `}
          />
        </div>

        {/* Right Icons */}
        <div className="flex justify-center items-center gap-5 text-xl text-gray-700 ml-5">
          {/* Search Icon */}
          <button
            className="hover:text-black transition"
            onClick={() => setSearch(!search)}
            aria-label="Search"
          >
            {search ? (
                <FontAwesomeIcon icon={faXmark} />
            ) : (
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </button>

          {/* User Dropdown */}
          <div className={`${search ? "hidden" : "block"} relative group`}>
            <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
            <div className="hidden group-hover:flex flex-col absolute top-6 right-0 bg-grey-900 text-black font-normal border shadow-md rounded-md text-sm min-w-[8rem] z-40">
              <NavLink
                to="/login"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Sign Up
              </NavLink>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </p>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className={`${
              search ? "hidden" : "block"
            } md:hidden cursor-pointer`}
            onClick={() => setVisible(!visible)}
          >
            <FontAwesomeIcon icon={faBars} />
            {/* <FontAwesomeIcon icon={faSliders} /> */}
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          visible ? "w-4/5 sm:w-3/5 md:w-2/5 shadow-lg" : "w-0"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4 text-2xl">
          <button onClick={() => setVisible(false)} aria-label="Close menu">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col items-start px-6 gap-4 text-lg font-medium mt-6">
          {["/", "/collection", "/about", "/contact"].map((route, i) => (
            <NavLink
              key={i}
              to={route}
              className="w-full py-2 border-b hover:bg-gray-100 transition duration-200"
              onClick={() => setVisible(false)}
            >
              {route === "/" ? "Home" : route.replace("/", "")}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
