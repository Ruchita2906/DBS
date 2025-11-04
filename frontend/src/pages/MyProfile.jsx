import React, { useState } from "react";
import { assets } from "../assets/assets"; // ✅ ensure profile_pic exists

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Ruchita Chaudhari",
    image: assets.profile_pic,
    email: "ruchita@gmail.com",
    phone: "9876543210",
    address: {
      line1: "123, ABC Apartments",
      line2: "MG Road, Pune",
    },
    gender: "female",
    dob: "1998-10-10",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "line1" || name === "line2") {
      setUserData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    setIsEdit(false);
    alert("✅ Information saved successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      {/* Profile Image + Name */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full border"
        />
        <p className="mt-3 font-bold text-lg">{userData.name}</p>
        <hr className="w-2/3 border-b-2 border-black mt-2" />
      </div>

      {/* Profile Info */}
      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-gray-600">Email:</label>
          {isEdit ? (
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          ) : (
            <p>{userData.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-600">Phone:</label>
          {isEdit ? (
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          ) : (
            <p>{userData.phone}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-600">Address:</label>
          {isEdit ? (
            <>
              <input
                type="text"
                name="line1"
                value={userData.address.line1}
                onChange={handleChange}
                placeholder="Address Line 1"
                className="w-full border px-3 py-2 rounded mb-2"
              />
              <input
                type="text"
                name="line2"
                value={userData.address.line2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="w-full border px-3 py-2 rounded"
              />
            </>
          ) : (
            <p>
              {userData.address.line1}, {userData.address.line2}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-gray-600">Gender:</label>
          {isEdit ? (
            <select
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label className="block text-gray-600">Date of Birth:</label>
          {isEdit ? (
            <input
              type="date"
              name="dob"
              value={userData.dob}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setIsEdit(true)}
          className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50"
        >
          Edit
        </button>
        <button
          onClick={handleSave}
          className="border border-green-500 text-green-500 px-6 py-2 rounded-full hover:bg-green-50"
        >
          Save information
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
