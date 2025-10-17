"use client";
import { form } from "@/services/user";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) =>
      formDataToSend.append(key, formData[key])
    );

    try {
      const response = await form(formDataToSend);
      if (response.success) {
        Swal.fire({
          title: "Form Submitted Successfully!",
          text: "We have received your information.",
          icon: "success",
        });
        // ✅ Reset form fields
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          location: "",
          message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit the form. Please check your network and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-lg border-black border-2">
        <h1
          className="text-2xl sm:text-3xl font-bold text-center mb-8 tracking-wide dark:text-black"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Contact <span className="text-[#b89f7d]">Us</span>
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
              placeholder="Your Name"
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handlechange}
              required
            />
            <input
              className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
              placeholder="Phone Number"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlechange}
              required
            />
          </div>

          {/* Email + Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
              placeholder="Email Address"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              required
            />
            <input
              className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition dark:text-black"
              placeholder="Enter Your Location..."
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handlechange}
              required
            />
          </div>

          {/* Message */}
          <textarea
            className="border-b-1 border-[#9b4a2d] px-1 py-2 w-full outline-none placeholder-gray-500 text-sm sm:text-base transition resize-none dark:text-black"
            placeholder="Message..."
            rows="3"
            id="message"
            name="message"
            value={formData.message}
            onChange={handlechange}
          ></textarea>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              disabled={loading}
              className={`cursor-pointer bg-gradient-to-r from-[#efdecc] to-[#d5c1a9] border-2 border-[#efdecc] font-semibold dark:text-black text-sm sm:text-base md:text-lg px-8 py-2.5 rounded-2xl transition duration-300 hover:scale-105 hover:bg-white hover:bg-none hover:text-black ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
