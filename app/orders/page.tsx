"use client";

import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, i) => (
          <div key={i} className="bg-white p-5 rounded-xl shadow mb-4">

            <p className="text-sm text-gray-500 mb-2">
              {order.date}
            </p>

            {order.items.map((item: any, j: number) => (
              <p key={j}>
                {item.name} - ₹{item.price}
              </p>
            ))}

          </div>
        ))
      )}

    </div>
  );
}