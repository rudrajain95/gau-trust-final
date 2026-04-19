"use client";

import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = () => {
    if (!name || !mobile || !address) {
      alert("कृपया सभी जानकारी भरें");
      return;
    }

    const user = { name, mobile, address };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully ✅");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-2">
          Create Your Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          शुरू करने के लिए अपनी जानकारी भरें
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setMobile(e.target.value)}
        />

        <textarea
          placeholder="Delivery Address"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          पहले से account है?{" "}
          <a href="/login" className="text-green-600 font-semibold">
            Secure Login
          </a>
        </p>

      </div>

    </div>
  );
}