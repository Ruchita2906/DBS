import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Doctor from "./pages/Doctor.jsx";
import Appointment from "./pages/Appointment.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import MyProfile from './pages/MyProfile';

import MyAppointment from "./pages/MyAppointment.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";


import Doctors from "./pages/Doctor.jsx";
export default function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/doctors" element={<Doctors />} />

        {/* ✅ Fixed: use plural path */}
        <Route path="/my-appointments" element={<MyAppointment />} />
      </Routes>

      <Footer />
    </div>
  );
}
