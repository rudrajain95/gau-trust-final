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
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold">
        Welcome, {user.name} 👋
      </h1>

      <p className="mt-2">📱 Mobile: {user.mobile}</p>
      <p>📍 Address: {user.address}</p>

    </div>
  );
}
