"use client";

import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, index) => {
          const total = order.items.reduce(
            (sum: number, item: any) => sum + item.price,
            0
          );

          return (
            <div
              key={index}
              className="bg-white p-6 mb-5 rounded-xl shadow"
            >

              {/* ORDER HEADER */}
              <div className="flex justify-between mb-3">
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID: #{index + 1}
                  </p>
                  <p className="text-sm text-gray-500">
                    {order.date}
                  </p>
                </div>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  Pending
                </span>
              </div>

              {/* ITEMS */}
              <div className="mb-3">
                {order.items.map((item: any, i: number) => (
                  <p key={i}>
                    {item.name} - ₹{item.price}
                  </p>
                ))}
              </div>

              {/* TOTAL */}
              <div className="flex justify-between items-center mt-4">

                <p className="font-bold text-lg text-green-600">
                 Total: ₹{total}
                </p>

                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Track Order
                </button>

              </div>

            </div>
          );
        })
      )}

    </div>
  );
}