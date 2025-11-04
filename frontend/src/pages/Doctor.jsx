import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext"; // adjust path

const Doctor = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  // 🔹 State for filter menu toggle
  const [showFilter, setShowFilter] = useState(false);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  const applyFilter = (selectedSpeciality = speciality) => {
    if (selectedSpeciality) {
      setFilterDoc(
        doctors.filter(
          (doc) =>
            doc.speciality.toLowerCase() === selectedSpeciality.toLowerCase()
        )
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Filters Toggle Button for Mobile */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilter((prev) => !prev)} // toggle open/close
          className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300"
        >
          Filters
        </button>
      </div>

      {/* Sidebar - Specialities */}
      {(showFilter || window.innerWidth >= 768) && ( // always show on desktop, toggle on mobile
        <div className="w-full md:w-1/4 bg-white rounded-lg shadow p-4 border transition-all duration-300">
          <p className="font-semibold mb-3">
            Browse through the doctors specialist
          </p>
          <div className="flex flex-col gap-2">
            {specialities.map((spec, index) => (
              <button
                key={index}
                onClick={() => applyFilter(spec)}
                className="text-left px-3 py-2 rounded-md border hover:bg-blue-50 hover:border-blue-500 transition"
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Doctors Grid */}
      <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterDoc.map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="bg-[#F0F5FF] rounded-lg overflow-hidden shadow-sm text-center border border-gray-200 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
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
    </div>
  );
};

export default Doctor;
