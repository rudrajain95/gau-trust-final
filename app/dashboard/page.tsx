"use client";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold">
        Welcome, {user?.name || "User"} 👋
      </h1>

      <p className="mt-2">Mobile: {user?.mobile}</p>
      <p>Address: {user?.address}</p>

    </div>
  );
}