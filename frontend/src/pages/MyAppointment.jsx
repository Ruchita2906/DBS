import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);
  const [paidStatus, setPaidStatus] = useState({}); // track payments

  const handlePay = (index) => {
    setPaidStatus((prev) => ({ ...prev, [index]: true }));
  };

  const handleCancel = (index) => {
    alert(`Appointment ${index + 1} cancelled!`);
  };

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      <div>
        {doctors.slice(0, 3).map((doctor, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr_1fr] gap-4 items-center py-4 border-b"
          >
            {/* Doctor Image */}
            <div>
              <img
                className="w-28 h-28 object-cover rounded-md bg-indigo-50"
                src={doctor.image}
                alt={doctor.name}
              />
            </div>

            {/* Doctor Info */}
            <div>
              <p className="font-semibold">{doctor.name}</p>
              <p className="text-gray-600">{doctor.speciality}</p>
              <p className="font-medium mt-2">Address:</p>
              <p className="text-gray-600">{doctor.line1}</p>
              <p className="text-gray-600">{doctor.line2}</p>
              <p className="mt-2">
                <span className="font-medium">Date & Time:</span> 25 July, 2024
                | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col items-end gap-2">
              {!paidStatus[index] ? (
                <button
                  onClick={() => handlePay(index)}
                  className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
                >
                  Pay here
                </button>
              ) : (
                <button className="bg-indigo-200 text-indigo-700 px-4 py-2 rounded cursor-not-allowed">
                  Paid
                </button>
              )}
              <button
                onClick={() => handleCancel(index)}
                className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-100"
              >
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
