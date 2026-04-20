"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  if (!user) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Account</h1>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* USER INFO */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">
          👤 {user.name}
        </h2>
        <p className="text-gray-600">📱 {user.mobile}</p>
        <p className="text-gray-600">📍 {user.address}</p>
      </div>

      {/* MENU GRID */}
      <div className="grid md:grid-cols-3 gap-4">

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer">
          📦 My Orders
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer">
          📍 Saved Addresses
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer">
          💳 Subscription Plan
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer">
          🎁 Reward Points
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer">
          ⚙️ Account Settings
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg cursor-pointer">
          📞 Support
        </div>

      </div>

    </div>
  );
}