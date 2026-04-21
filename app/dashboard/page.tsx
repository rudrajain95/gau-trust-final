"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("user");
    const sub = localStorage.getItem("subscription");

    if (data) {
      setUser(JSON.parse(data));
    }

    if (sub === "active") {
      setSubscribed(true);
    }
  }, []);

  const handleSubscribe = () => {
    localStorage.setItem("subscription", "active");
    setSubscribed(true);
    alert("Subscription Activated ✅");
  };

  if (!user) {
  return (
    <div className="p-10 text-center">
      ❌ Session Expired <br /><br />

      <button
        onClick={() => (window.location.href = "/login")}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Login Again
      </button>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Account</h1>

        <button
          onClick={() => {
            localStorage.clear();
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

      {/* 🔥 SUBSCRIPTION CARD */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6 border-l-4 border-green-600">

        <h2 className="text-xl font-bold mb-2">
          💳 Membership Plan
        </h2>

        <p className="text-gray-600 mb-3">
          ₹199 / Month — Free Delivery + Morning Fresh Milk + Rewards
        </p>

        {subscribed ? (
          <span className="text-green-600 font-semibold">
            ✅ Active Plan
          </span>
        ) : (
          <button
            onClick={handleSubscribe}
            className="bg-green-600 text-white px-6 py-2 rounded-lg mt-2"
          >
            Subscribe Now
          </button>
        )}
      </div>

      {/* MENU */}
      <div className="grid md:grid-cols-3 gap-4">

        <a href="/products">
       <div className="bg-white p-5 rounded-xl shadow cursor-pointer hover:shadow-lg">
       🛒 Order Milk & Products
       </div>
       </a>
       
       <a href="/orders">
       <div className="bg-white p-5 rounded-xl shadow cursor-pointer">
       📦 My Orders
       </div>
       </a>

        <div className="bg-white p-5 rounded-xl shadow">
          📍 Saved Addresses
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          🎁 Reward Points
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          ⚙️ Account Settings
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          📞 Support
        </div>

      </div>

    </div>
  );
}