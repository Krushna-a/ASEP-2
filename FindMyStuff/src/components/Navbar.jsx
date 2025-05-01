import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faQrcode,
  faUser,
  faTags,
  faXmark,
  faBars,
  faBell,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const userIconRef = useRef(null);

  // Close mobile menu when changing routes
  useEffect(() => {
    setVisible(false);
    setDropdownOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (visible && !e.target.closest('.mobile-menu-container')) {
        setVisible(false);
      }
      
      // Close dropdown when clicking outside
      if (dropdownOpen && 
          dropdownRef.current && 
          !dropdownRef.current.contains(e.target) &&
          userIconRef.current &&
          !userIconRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [visible, dropdownOpen]);

  // Handle search submission
  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      console.log("Searching for:", searchValue);
    }
  };

  // Toggle user dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <div
        className={`${
          visible ? "hidden md:flex" : "flex"
        } justify-between items-center px-5 py-0 shadow-md bg-white fixed top-0 left-0 w-full z-50 montserrat-font`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0">
          <img
            src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
            alt="FindMyStuff logo"
            className="h-14 sm:h-16 md:h-20 object-contain"
          />
        </NavLink>

        {/* Center Nav Links */}
        <div className="NavLinks hidden md:flex text-base lg:text-lg font-medium ml-10 gap-8">
          {[
            { path: "/", label: "Home" },
            { path: "/my-items", label: "My Items" },
            { path: "/scan", label: "Scan Tag" },
            { path: "/shop", label: "Get Tags" },
            { path: "/how-it-works", label: "How It Works" }
          ].map((route, i) => (
            <NavLink
              key={i}
              to={route.path}
              className={({ isActive }) => 
                `flex flex-col items-center hover:scale-105 transition-transform duration-200 
                ${isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-500'}`
              }
            >
              <p className="capitalize">
                {route.label}
              </p>
              <div className={`w-3/4 h-[2.5px] bg-blue-600 rounded mt-1 ${location.pathname === route.path ? 'block' : 'hidden'}`} />
            </NavLink>
          ))}
        </div>

        {/* Search input on large screens */}
        <div className="relative flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search for lost items..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
            className={`search ${
              search ? "w-full text-black" : "w-0"
            } transition-all duration-300 ease-in-out border border-gray-300 outline-none px-3 py-2 rounded-full text-sm ${
              search ? "opacity-100" : "opacity-0"
            }`}
          />
          {search && searchValue && (
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setSearchValue("")}
            >
              <FontAwesomeIcon icon={faXmark} className="text-sm" />
            </button>
          )}
        </div>

        {/* Right Icons */}
        <div className="flex justify-center items-center gap-5 text-xl text-gray-700">
          {/* Search Icon */}
          <button
            className="hover:text-blue-600 transition"
            onClick={() => setSearch(!search)}
            aria-label="Search"
          >
            {search ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            )}
          </button>

          {/* Notifications Icon */}
          <NavLink to="/notifications" className={`${search ? "hidden" : "block"} hover:text-blue-600 transition relative`}>
            <FontAwesomeIcon icon={faBell} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </NavLink>

          {/* QR Code Scanner */}
          <NavLink to="/scan" className={`${search ? "hidden" : "block"} hover:text-blue-600 transition`}>
            <FontAwesomeIcon icon={faQrcode} />
          </NavLink>

          {/* User Dropdown */}
          <div className={`${search ? "hidden" : "block"} relative`}>
            <button 
              ref={userIconRef}
              onClick={toggleDropdown}
              className="cursor-pointer hover:text-blue-600 transition focus:outline-none"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <FontAwesomeIcon icon={faUser} />
            </button>
            <div 
              ref={dropdownRef}
              className={`${
                dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
              } absolute top-8 right-0 bg-white text-black font-normal border shadow-lg rounded-md text-sm min-w-[12rem] z-40 transition-all duration-200 ease-in-out`}
            >
              
              <NavLink
                to="/login"
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center gap-2"
              >
                <span className="text-blue-600 text-sm">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center gap-2"
              >
                <span className="text-green-600 text-sm">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                Sign Up
              </NavLink>
              <button className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-left flex items-center gap-2 text-red-500 w-full">
                <span className="text-sm">
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className={`${
              search ? "hidden" : "block"
            } md:hidden cursor-pointer hover:text-blue-600 transition`}
            onClick={() => setVisible(!visible)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`mobile-menu-container fixed top-0 left-0 h-full bg-white z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          visible ? "w-4/5 sm:w-3/5 md:w-2/5 shadow-lg" : "w-0"
        }`}
      >
        {/* Logo and Close Icon */}
        <div className="flex justify-between items-center p-4 border-b">
          <NavLink to="/" onClick={() => setVisible(false)}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg"
              alt="FindMyStuff logo"
              className="h-12 object-contain"
            />
          </NavLink>
          <button 
            onClick={() => setVisible(false)} 
            aria-label="Close menu"
            className="text-2xl hover:text-red-500 transition"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="px-4 py-3 border-b">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for lost items..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col items-start px-4 gap-1 text-lg font-medium mt-2">
          {[
            { path: "/", label: "Home" },
            { path: "/my-items", label: "My Items" },
            { path: "/scan", label: "Scan Tag" },
            { path: "/shop", label: "Get Tags" },
            { path: "/how-it-works", label: "How It Works" },
            { path: "/lost-items", label: "Report Lost Item" },
            { path: "/found-items", label: "Report Found Item" }
          ].map((route, i) => (
            <NavLink
              key={i}
              to={route.path}
              className={({ isActive }) => 
                `w-full py-3 border-b hover:bg-gray-50 transition duration-200 ${
                  isActive ? 'text-blue-600 font-semibold' : ''
                }`
              }
              onClick={() => setVisible(false)}
            >
              {route.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Account Links */}
        <div className="absolute bottom-0 left-0 w-full border-t bg-gray-50">
          <NavLink
            to="/notifications"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 border-b"
            onClick={() => setVisible(false)}
          >
            <FontAwesomeIcon icon={faBell} />
            <span>Notifications</span>
            <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </NavLink>
          <NavLink
            to="/profile"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            onClick={() => setVisible(false)}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>My Profile</span>
          </NavLink>
          <NavLink
            to="/login"
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 border-t"
            onClick={() => setVisible(false)}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Login / Sign Up</span>
          </NavLink>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {visible && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setVisible(false)}
        />
      )}
    </>
  );
};

export default Navbar;
