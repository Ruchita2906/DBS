import React from "react";
import { assets } from "../assets/assets"; // make sure assets.contact_image exists

const Contact = () => {
  return (
    <div className="px-6 md:px-20 lg:px-32 py-12">
      {/* Title */}
      <div className="text-center text-2xl font-medium text-gray-500 mb-10">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={assets.contact_image}
            alt="Doctor with patient"
            className="rounded-lg shadow-md w-full md:w-4/5"
          />
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 space-y-6 text-gray-700">
          {/* Office Info */}
          <div>
            <h2 className="text-lg font-semibold">OUR OFFICE</h2>
            <p className="mt-2">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p className="mt-2">
              Tel: (415) 555-0132 <br />
              Email: greatstackdev@gmail.com
            </p>
          </div>

          {/* Careers Info */}
          <div>
            <h2 className="text-lg font-semibold">CAREERS AT PRESCRIPTO</h2>
            <p className="mt-2">
              Learn more about our teams and job openings.
            </p>
            <button className="mt-4 px-5 py-2 border border-gray-700 rounded-md hover:bg-gray-800 hover:text-white transition">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
