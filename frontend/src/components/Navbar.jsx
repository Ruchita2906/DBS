import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Mobile menu state
  const [token, setToken] = useState(true); // true = user logged in (for demo)

  // Logout handler
  const handleLogout = () => {
    setToken(false); // Clear token state
    navigate("/"); // Redirect to home after logout
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400 relative">
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        {["/", "/doctor", "/about", "/contact"].map((path, idx) => {
          const labels = ["Home", "All Doctors", "About", "Contact"];
          return (
            <NavLink
              key={idx}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "hover:text-orange-500"
              }
            >
              <li className="py-1">{labels[idx]}</li>
              <hr className="border-none h-0.5 bg-orange-500 w-3/5 m-auto" />
            </NavLink>
          );
        })}
      </ul>

      {/* Right Side Buttons / Profile */}
      <div className="flex items-center gap-4">
        {token ? (
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {/* Profile picture and dropdown icon */}
            <img
              src={assets.profile_pic}
              alt="Profile"
              className="w-8 h-8 rounded-full border border-gray-400"
            />
            <img
              src={assets.dropdown_icon}
              alt="Dropdown"
              className={`w-4 h-4 transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />

            {/* Dropdown menu */}
            {showDropdown && (
              <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md w-40 text-gray-700">
                <ul>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/profile")}
                  >
                    My Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate("/my-appointments")}
                  >
                    My Appointments
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/login">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
              Create Account
            </button>
          </NavLink>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 h-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 flex flex-col">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 border-b">
            <img src={assets.logo} alt="Logo" className="h-10" />
            {/* Close Button */}
            <button
              onClick={() => setShowMenu(false)}
              className="text-2xl font-bold cursor-pointer p-2"
            >
              ×
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-3 mt-4 text-base font-medium text-gray-700 w-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `w-full text-center py-2 rounded-md transition ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`
              }
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/doctor"
              className={({ isActive }) =>
                `w-full text-center py-2 rounded-md transition ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`
              }
              onClick={() => setShowMenu(false)}
            >
              All Doctors
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `w-full text-center py-2 rounded-md transition ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`
              }
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `w-full text-center py-2 rounded-md transition ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`
              }
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
