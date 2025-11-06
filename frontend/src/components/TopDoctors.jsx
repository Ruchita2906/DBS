import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div
      className="flex flex-col items-center gap-4 py-12 px-4 sm:px-6 md:px-10 text-gray-800"
      id="top-doctors"
    >
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center">Top Doctors to Book</h1>
      <p className="text-sm sm:text-base text-gray-500 text-center sm:w-2/3 md:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div
        className="
          w-full
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4
          pt-5
        "
      >
        {doctors?.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="
              bg-[#F0F5FF]
              rounded-lg
              overflow-hidden
              shadow-md
              text-center
              border
              border-gray-200
              hover:-translate-y-1
              hover:shadow-lg
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-36 sm:h-40 md:h-44 object-cover bg-white"
            />

            {/* Info Section */}
            <div className="p-3">
              <p className="text-green-500 text-xs font-semibold flex items-center justify-center mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Available
              </p>
              <p className="font-semibold text-sm sm:text-base">{item.name}</p>
              <p className="text-xs text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
  onClick={() => navigate("/doctors")}
  className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
>
  More
</button>

    </div>
  );
};

export default TopDoctors;
