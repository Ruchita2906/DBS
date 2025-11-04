import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'; // adjust the path

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="top-doctors"
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-5 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
            key={index}
            className="cursor-pointer bg-[#F0F5FF] rounded-lg overflow-hidden shadow-sm text-center border border-gray-200 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover bg-white"
            />

            {/* Info Section */}
            <div className="p-3">
              {/* Availability */}
              <p className="text-green-500 text-xs font-semibold flex items-center justify-center mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Available
              </p>

              {/* Name & Speciality */}
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
