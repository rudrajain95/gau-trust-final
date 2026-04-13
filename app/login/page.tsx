"use client";

import { useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    const data = localStorage.getItem("user");

    if (!data) {
      alert("No account found ❌");
      return;
    }

    const user = JSON.parse(data);

    if (user.mobile.trim() === mobile.trim()) {
      alert("Login Successful ✅");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid Mobile Number ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow w-[400px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Secure Login
        </h2>

        <input
          type="text"
          placeholder="Enter Mobile Number"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setMobile(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded"
        >
          Continue
        </button>

      </div>

    </div>
  );
}
