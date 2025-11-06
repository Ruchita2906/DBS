import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [speciality, setSpeciality] = useState('');
  const navigate = useNavigate();

  const filteredDoctors = doctors?.filter((doctor) => {
    const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase());
    const matchesSpeciality = speciality ? doctor.speciality === speciality : true;
    return matchesSearch && matchesSpeciality;
  });

  // Extract all unique specialities from doctor data
  const specialities = [...new Set(doctors?.map((d) => d.speciality))];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">All Doctors</h1>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Speciality Filter */}
        <select
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          className="border border-gray-300 rounded-full px-4 py-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Specialities</option>
          {specialities.map((spec, i) => (
            <option key={i} value={spec}>
              {spec}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredDoctors?.length > 0 ? (
          filteredDoctors.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center border border-gray-100"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover bg-white"
              />
              <div className="p-3">
                <p className="text-green-500 text-xs font-semibold flex items-center justify-center mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Available
                </p>
                <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                <p className="text-xs text-gray-500">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default Doctors;
