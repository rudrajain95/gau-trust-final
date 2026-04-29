"use client";

import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/get-orders")
      .then((res) => res.json())
      .then((data) => {
        console.log("ORDERS:", data);
        setOrders(data.orders || []);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">📦 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="bg-white p-4 mb-4 rounded shadow">
            <p className="font-bold">Order ID: {order._id}</p>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.total}</p>

            <div className="mt-2">
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