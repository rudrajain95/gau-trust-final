"use client";

import { useEffect, useState } from "react";

export default function DeliveryPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [name, setName] = useState("");

  const fetchOrders = () => {
    fetch(`/api/get-orders?name=${name}`)
      .then((res) => res.json())
      .then((data) => setOrders(data.orders || []));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🚚 Delivery Panel</h1>

      <input
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4"
      />

      <button
        onClick={fetchOrders}
        className="bg-black text-white px-4 py-2 mb-6"
      >
        Load Orders
      </button>

      {orders.map((order) => (
        <div key={order._id} className="bg-white p-4 mb-4 shadow rounded">
          <p>ID: {order._id}</p>
          <p>Status: {order.status}</p>
          <p>Total: ₹{order.total}</p>

          <button
            onClick={() => updateStatus(order._id, "Delivered")}
            className="bg-green-600 text-white px-3 py-1 mt-2"
          >
            Mark Delivered
          </button>
        </div>
      ))}
    </div>
  );

  async function updateStatus(id: string, status: string) {
    await fetch("/api/update-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    fetchOrders();
  }
}