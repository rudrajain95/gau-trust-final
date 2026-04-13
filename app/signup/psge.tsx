"use client";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = () => {
    alert("Signup Successful");
    console.log({ name, mobile, address });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow w-[400px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Customer Signup
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile Number"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setMobile(e.target.value)}
        />

        <textarea
          placeholder="Address"
          className="w-full mb-4 p-3 border rounded"
          onChange={(e) => setAddress(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-3 rounded"
        >
          Signup
        </button>
      </div>

    </div>
  );
}