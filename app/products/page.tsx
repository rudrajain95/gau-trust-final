"use client";

import { useState, useEffect } from "react";

export default function Products() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    { id: 1, name: "Fresh Milk", price: 60 },
    { id: 2, name: "Paneer", price: 300 },
    { id: 3, name: "Curd", price: 80 },
    { id: 4, name: "Butter", price: 250 },
  ];

  // ✅ LOAD CART
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ SAVE CART
  const updateCart = (updatedCart: any[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ ADD ITEM
  const addToCart = (product: any) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
      updateCart(updated);
    } else {
      updateCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ✅ INCREASE
  const increaseQty = (id: number) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };

  // ✅ DECREASE
  const decreaseQty = (id: number) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0);

    updateCart(updated);
  };

  // ✅ TOTAL
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // ✅ LOAD RAZORPAY
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // ✅ PAYMENT
  const handlePayment = async () => {
    if (cart.length === 0) {
      alert("Cart empty");
      return;
    }

    const res = await loadRazorpay();

    if (!res) {
      alert("Razorpay failed to load");
      return;
    }

    const options: any = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: total * 100,
      currency: "INR",
      name: "Gau Trust Milk",
      description: "Milk Order Payment",

      handler: function (response: any) {
        console.log("PAYMENT SUCCESS:", response);

        const orders = JSON.parse(localStorage.getItem("orders") || "[]");

        const newOrder = {
          id: Date.now(),
          items: cart,
          total: total,
          status: "Confirmed",
          paymentId: response.razorpay_payment_id,
          date: new Date().toLocaleString(),
        };

        localStorage.setItem(
          "orders",
          JSON.stringify([newOrder, ...orders])
        );

        localStorage.removeItem("cart");
        setCart([]);

        alert("Order Saved ✅");

        setTimeout(() => {
          window.location.href = "/orders";
        }, 1000);
      }, // ✅🔥 YEH COMMA IMPORTANT HAI

      theme: {
        color: "#16a34a",
      },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      <h1 className="text-3xl font-bold mb-6">
        🛒 Our Products
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">
              {item.name}
            </h2>

            <p className="text-gray-600 mb-3">
              ₹{item.price}
            </p>

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

        <h2 className="text-xl font-bold mb-4">
          🛍️ Cart
        </h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.qty}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>
            ))}

            <div className="mt-4 font-bold text-lg">
              Total: ₹{total}
            </div>

            <button
              onClick={handlePayment}
              className="mt-4 w-full bg-black text-white py-3 rounded-lg"
            >
              Pay Now
            </button>
          </>
        )}
      </div>

    </div>
  );
}