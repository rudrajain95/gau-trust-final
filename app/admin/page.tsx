"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const adminLogin = () => {
    if (password === "admin123") {
      localStorage.setItem("adminLogin", "true");
      setIsAdmin(true);
      fetchOrders();
    } else {
      alert("Wrong admin password");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminLogin");
    setIsAdmin(false);
  };

  const fetchOrders = () => {
    setLoading(true);
    fetch("/api/get-orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setLoading(false);
      });
  };

  useEffect(() => {
    const login = localStorage.getItem("adminLogin");
    if (login === "true") {
      setIsAdmin(true);
      fetchOrders();
    }
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/update-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status }),
    });

    fetchOrders();
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Admin Login
          </h1>

          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 w-full mb-4 rounded"
          />

          <button
            onClick={adminLogin}
            className="bg-black text-white w-full py-3 rounded"
          >
            Login
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Temporary password: admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🧑‍💼 Admin Panel</h1>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <a href="/admin/products" className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg">🛒 Product Management</h2>
          <p className="text-gray-500">Add / delete products</p>
        </a>

        <a href="/orders" className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg">📦 Customer Orders</h2>
          <p className="text-gray-500">View order history</p>
        </a>

        <a href="/delivery" className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold text-lg">🚚 Delivery Panel</h2>
          <p className="text-gray-500">Delivery boy orders</p>
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

      {loading ? (
        <p>Loading...</p>
      ) : orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="bg-white p-5 mb-5 rounded-xl shadow">
            <p className="font-bold">Order ID: {order._id}</p>
            <p>Status: <b>{order.status}</b></p>
            <p>Total: ₹{order.total}</p>

            <div className="flex gap-2 mt-3">
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

            <div className="mt-3 border-t pt-3">
              {order.items?.map((item: any, i: number) => (
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