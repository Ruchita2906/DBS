import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gb-primary gap-8 py-10 md:py-[6vw] md:max-w-6xl md:mx-auto px-6">

      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start gap-4">
        <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          BOOK APPOINTMENT <br /> 
          <span className="text-orange-500">with trusted doctors</span>
        </p>

        <div className="flex items-center gap-4">
          <img
            src={assets.group_profiles}
            alt=""
            className="w-16 h-16 rounded-full border-2 border-orange-500"
          />
          <p className="text-gray-600 text-sm md:text-base">
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/>
            schedule your appointment hassle-free.
          </p>
        </div>

        <a href="#speciality" className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
          Book Appointment
          <img src={assets.arrow_icon} alt=""/>
        </a>  
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative flex justify-center">
        <img
          className="w-[90%] h-auto rounded-lg" // smaller image (90% width)
          src={assets.header_img}
          alt=""
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-4 max-w-xs">
          <h1 className="text-lg font-semibold text-gray-800">
            Welcome to Our Healthcare Platform
          </h1>
          <p className="text-sm text-gray-600">
            Your health is our priority. Connect with top doctors today!
          </p>
        </div>
      </div>

    </div>
  );
};

export default Header;
