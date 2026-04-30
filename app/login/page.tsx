"use client";

import { useState } from "react";

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOTP = async () => {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      body: JSON.stringify({ mobile }),
    });

    const data = await res.json();
    console.log(data);

    alert("OTP Sent!");
    setStep(2);
  };

  const verifyOTP = async () => {
    const res = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ mobile, otp }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login Success ✅");
      window.location.href = "/dashboard";
    } else {
      alert("Wrong OTP ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border p-2 mb-4"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button
              onClick={sendOTP}
              className="w-full bg-green-600 text-white py-2 rounded"
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
              className="w-full border p-2 mb-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOTP}
              className="w-full bg-blue-600 text-white py-2 rounded"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
}