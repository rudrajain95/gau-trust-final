"use client";

import { useState, useEffect } from "react";

export default function Products() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    { name: "Fresh Milk", price: 60 },
    { name: "Paneer", price: 300 },
    { name: "Curd", price: 80 },
    { name: "Butter", price: 250 },
  ];

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (item: any) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

  const handlePayment = async () => {
    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay SDK failed");
      return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const order = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify({ amount: total }),
    }).then((res) => res.json());

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Gau Trust Milk",
      description: "Order Payment",
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment Successful ✅");

        // SAVE ORDER
        const oldOrders = localStorage.getItem("orders");
        const orders = oldOrders ? JSON.parse(oldOrders) : [];

        const newOrder = {
          items: cart,
          date: new Date().toLocaleString(),
          paymentId: response.razorpay_payment_id,
        };

        localStorage.setItem("orders", JSON.stringify([newOrder, ...orders]));

        localStorage.removeItem("cart");
        window.location.href = "/orders";
      },
      theme: {
        color: "#16a34a",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-3">₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3">🛒 Cart</h2>

        {cart.map((item, i) => (
          <p key={i}>{item.name} - ₹{item.price}</p>
        ))}

        {cart.length > 0 && (
          <button
            className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
            onClick={handlePayment}
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
}