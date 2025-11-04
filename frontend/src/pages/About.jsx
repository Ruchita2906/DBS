import React, { useState } from 'react'
import { assets } from '../assets/assets'

const About = () => {
  const [activeBox, setActiveBox] = useState(null)

  const boxes = [
    {
      id: 1,
      title: "EFFICIENCY:",
      desc: "Streamlined Appointment Scheduling that fits into your busy lifestyle."
    },
    {
      id: 2,
      title: "CONVENIENCE:",
      desc: "Access to a network of trusted healthcare professionals in your area."
    },
    {
      id: 3,
      title: "PERSONALIZATION:",
      desc: "Tailored recommendations and reminders to help you stay on top of your health."
    }
  ]

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      {/* About Section */}
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <b className='text-gray-800 text-lg'>Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className='text-center my-16'>
        <p className='text-xl font-semibold text-gray-700'>
          WHY <span className='text-blue-600'>CHOOSE US</span>
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 border border-gray-300 rounded-lg'>
        {boxes.map((box) => (
          <div
            key={box.id}
            onClick={() => setActiveBox(box.id)}
            className={`
              p-6 text-center cursor-pointer transition-all duration-300 
              ${activeBox === box.id
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-500 hover:text-white text-gray-700"}
              ${box.id !== 3 ? "border-b md:border-b-0 md:border-r border-gray-300" : ""}
            `}
          >
            <b className='block mb-2'>{box.title}</b>
            <p className='text-sm'>{box.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
