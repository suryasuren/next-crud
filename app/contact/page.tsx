"use client";
import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    place: "",
    notes: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Mobile Number Input */}
          <div className="mb-4">
            <label
              htmlFor="mobileNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Place Input */}
          <div className="mb-4">
            <label
              htmlFor="place"
              className="block text-gray-700 font-bold mb-2"
            >
              Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="Enter your place"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {/* Notes Input */}
          <div className="mb-4">
            <label
              htmlFor="notes"
              className="block text-gray-700 font-bold mb-2"
            >
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Enter any notes"
              className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring focus:border-blue-300"
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
