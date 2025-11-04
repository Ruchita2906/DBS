import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-16">
        
        {/* Left Section */}
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed text-gray-600">
            We connect you with the best doctors in your area. Book appointments easily and get trusted medical care anytime.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>📞 +91 9373557423</li>
            <li>📧 info@example.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright text */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MedCare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
