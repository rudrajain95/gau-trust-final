"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    fetch("/api/get-orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch("/api/update-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    const data = await res.json();
    console.log("UPDATE:", data);

    // refresh list
    fetchOrders();
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🧑‍💼 Admin Panel</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            className="bg-white p-5 mb-5 rounded-xl shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-lg">Order ID: {order._id}</p>
                <p>Status: <b>{order.status}</b></p>
                <p>Total: ₹{order.total}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(order._id, "Preparing")}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Preparing
                </button>

                <button
                  onClick={() => updateStatus(order._id, "Out for Delivery")}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Out
                </button>

                <button
                  onClick={() => updateStatus(order._id, "Delivered")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Delivered
                </button>
              </div>
            </div>

            <div className="mt-3 border-t pt-3">
              {order.items.map((item: any, i: number) => (
                <p key={i}>
                  {item.name} × {item.qty}
                </p>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}