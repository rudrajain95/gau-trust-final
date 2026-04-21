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

  // ✅ LOAD CART FROM LOCALSTORAGE
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ ADD TO CART + SAVE
  const addToCart = (item: any) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(item.name + " added to cart 🛒");
  };

  // ✅ PLACE ORDER
  const placeOrder = () => {
    alert("Order Placed ✅");

    // 👉 CLEAR CART AFTER ORDER
    localStorage.removeItem("cart");
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-6">

      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid md:grid-cols-4 gap-6">

        {products.map((item, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow">

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

        <h2 className="text-xl font-bold mb-3">🛒 Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, i) => (
            <p key={i}>
              {item.name} - ₹{item.price}
            </p>
          ))
        )}

        {cart.length > 0 && (
          <button
            className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
            onClick={placeOrder}
          >
            Place Order
          </button>
        )}

      </div>

    </div>
  );
}