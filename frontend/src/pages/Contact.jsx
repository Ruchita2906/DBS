import React, { useState } from "react";
import { assets } from "../assets/assets"; // Ensure assets.contact_image exists

const Contact = () => {
  // Toggle state for showing/hiding job section
  const [showJobs, setShowJobs] = useState(false);

  // Job positions for the doctor appointment system
  const jobOpenings = [
    {
      title: "General Physician (MBBS / MD)",
      type: "Full-time | Pune, India",
      link: "https://forms.gle/exampleDoctor",
    },
    {
      title: "Medical Assistant / Receptionist",
      type: "Full-time | On-site",
      link: "https://forms.gle/exampleReceptionist",
    },
    {
      title: "Frontend Developer (React.js)",
      type: "Full-time | Hybrid",
      link: "https://forms.gle/exampleFrontend",
    },
    {
      title: "Backend Developer (Node.js, MongoDB)",
      type: "Full-time | Remote",
      link: "https://forms.gle/exampleBackend",
    },
    {
      title: "Nurse / Lab Technician",
      type: "Part-time | Pune, India",
      link: "https://forms.gle/exampleNurse",
    },
    {
      title: "Digital Marketing Executive",
      type: "Internship | Remote",
      link: "https://forms.gle/exampleMarketing",
    },
  ];

  return (
    <div className="px-6 md:px-20 lg:px-32 py-12">
      {/* Title */}
      <div className="text-center text-2xl font-medium text-gray-500 mb-10">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
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
            <button
              onClick={() => setShowJobs(!showJobs)}
              className="mt-4 px-5 py-2 border border-gray-700 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              {showJobs ? "Hide Jobs" : "Explore Jobs"}
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally Render Job Opportunities */}
      {showJobs && (
        <div className="bg-gray-100 py-10 px-6 rounded-2xl shadow-sm animate-fadeIn">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            🌟 Explore Job Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Join our growing team and make a real difference in healthcare.  
            We’re always looking for passionate people to work with us!
          </p>

          {/* Job Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-gray-500 mt-2">{job.type}</p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
