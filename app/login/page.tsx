"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOtp = () => {
    if (!mobile) {
      alert("Please enter mobile number");
      return;
    }

    alert("Testing OTP: 123456");
    setStep(2);
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      localStorage.setItem("customerMobile", mobile);
      alert("Login Success ✅");
      window.location.href = "/dashboard";
    } else {
      alert("Wrong OTP ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-96">
        <h1 className="text-2xl font-bold text-center mb-2">
          Customer Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Login with mobile number
        </p>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border p-3 w-full mb-4 rounded"
            />

            <button
              onClick={sendOtp}
              className="bg-green-600 text-white w-full py-3 rounded"
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
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border p-3 w-full mb-4 rounded"
            />

            <button
              onClick={verifyOtp}
              className="bg-black text-white w-full py-3 rounded"
            >
              Verify OTP
            </button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Testing OTP: 123456
            </p>
          </>
        )}
      </div>
    </div>
  );
}