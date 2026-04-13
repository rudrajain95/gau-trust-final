"use client";
import { useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user.mobile === mobile) {
      alert("Login Successful ✅");
      window.location.href = "/dashboard";
    } else {
      alert("User not found ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Customer Login
        </h2>

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setMobile(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-3 rounded"
        >
          Login
        </button>
      </div>

    </div>
  );
}