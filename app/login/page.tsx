"use client";

import { useState } from "react";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = () => {
    if (!mobile) {
      alert("कृपया मोबाइल नंबर दर्ज करें");
      return;
    }

    alert("OTP भेजा गया (Demo)");
    setStep(2);
  };

  const handleVerifyOtp = () => {
  if (!otp) {
    alert("OTP दर्ज करें");
    return;
  }

  // 👉 USER DATA CREATE
  const user = {
    name: "Customer",
    mobile: mobile,
    address: "Chhatarpur"
  };

  // 👉 SAVE IN LOCALSTORAGE
  localStorage.setItem("user", JSON.stringify(user));

  alert("Login Successful ✅");

  // 👉 REDIRECT
  window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center mb-2">
          Secure Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          मोबाइल नंबर से लॉगिन करें
        </p>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              onChange={(e) => setMobile(e.target.value)}
            />

            <button
              onClick={handleSendOtp}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Send OTP
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold"
            >
              Verify & Login
            </button>
          </>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          नया account?{" "}
          <a href="/signup" className="text-green-600 font-semibold">
            Create Account
          </a>
        </p>

      </div>

    </div>
  );
}