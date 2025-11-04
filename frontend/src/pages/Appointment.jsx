import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

// Helper function to get the next 7 days
const getNext7Days = () => {
  const today = new Date();
  let days = [];
  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dateNum = currentDate.getDate();
    days.push({
      label: `${dayName} ${dateNum}`,
      dateObj: currentDate
    });
  }
  return days;
};

const TIME_SLOTS = [
  "8:00 am", "8:30 am", "9:00 am", "9:30 am",
  "10:00 am", "10:30 am", "11:00 am", "11:30 am",
  "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm",
  "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm",
  "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm" 
];

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);

  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [selectedTimeIdx, setSelectedTimeIdx] = useState(2);

  useEffect(() => {
    if (doctors) {
      const doc = doctors.find(doc => doc._id === docId);
      setDocInfo(doc);
    }
  }, [docId, doctors]);

  if (!docInfo) return <p>Loading...</p>;

  const days = getNext7Days();

  return (
    <div className="flex flex-col items-center w-full px-2 md:px-0">
      <div className="flex flex-col md:flex-row items-start gap-6 w-full max-w-4xl mt-8 md:mt-12">
        {/* Doctor image with colored background */}
        <div className="bg-blue-400 rounded-lg p-4 md:p-6 flex-shrink-0 w-full md:w-44 h-48 md:h-60 flex items-center justify-center mb-6 md:mb-0">
          <img
            className="object-cover w-36 h-40 md:h-48 rounded-md"
            src={docInfo.image}
            alt={docInfo.name}
          />
        </div>

        {/* Doctor info card */}
        <div className="border border-gray-200 rounded-lg p-4 md:p-8 bg-white w-full">
          <h2 className="flex items-center text-xl md:text-2xl font-semibold mb-2">
            {docInfo.name}
            <img className="w-5 ml-2" src={assets.verified_icon} alt="Verified" />
          </h2>
          <div className="flex flex-wrap items-center gap-3 mb-4 text-gray-700 text-sm">
            <span>{docInfo.degree} - {docInfo.speciality}</span>
            <span className="py-0.5 px-2 border rounded-full text-xs bg-gray-100">
              {docInfo.experience}
            </span>
          </div>
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1 text-gray-700 font-semibold">
              About
              <img className="w-4" src={assets.info_icon} alt="About" />
            </div>
            <p className="text-gray-600">
              {docInfo.about}
            </p>
          </div>
          <div className="mb-4">
            <span className="font-medium">Appointment fee:&nbsp;</span>
            <span className="font-bold">{currencySymbol} {docInfo.fee}</span>
          </div>
        </div>
      </div>

      {/* Booking slots section */}
      <div className="w-full max-w-3xl mt-8">
        <h3 className="font-semibold text-base md:text-lg mb-4">Booking slots</h3>
        {/* Date buttons */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {days.map((d, idx) => (
            <button
              key={idx}
              className={`min-w-[72px] px-3 md:px-5 py-2 md:py-3 rounded-full font-semibold transition-all border border-gray-300
                ${selectedDayIdx === idx
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-800"
                }`}
              onClick={() => { setSelectedDayIdx(idx); setSelectedTimeIdx(2); }}
            >
              {d.label}
            </button>
          ))}
        </div>
        {/* Scrollable time slots row, scrollbar hidden */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {TIME_SLOTS.map((slot, idx) => (
            <button
              key={idx}
              className={`min-w-[90px] px-4 md:px-5 py-2 rounded-full border transition-all shrink-0
                ${selectedTimeIdx === idx
                  ? "bg-blue-500 text-white border-blue-600 font-semibold"
                  : "bg-gray-100 text-gray-800 border-gray-200"
                }`}
              onClick={() => setSelectedTimeIdx(idx)}
            >
              {slot}
            </button>
          ))}
        </div>
        <button
          className="bg-blue-600 text-white w-full md:w-auto px-7 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
          onClick={() => {
            alert(
              `Appointment booked for ${days[selectedDayIdx].label} at ${TIME_SLOTS[selectedTimeIdx]}`
            );
          }}
        >
          Book an appointment
        </button>
      </div>

      {/* listing releted doctors  */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      
    </div>
  );
};

export default Appointment;
