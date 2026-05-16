"use client";

import { useEffect, useState } from "react";

export default function AdminProducts() {
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();

    setProducts(data.products || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (!name || !price) {
      alert("Fill all fields");
      return;
    }

    await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
      }),
    });

    setName("");
    setPrice("");

    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    await fetch("/api/products", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchProducts();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">
        🛒 Admin Products
      </h1>

      {/* ADD PRODUCT */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-3"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 mr-3"
        />

        <button
          onClick={addProduct}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </button>

      </div>

      {/* PRODUCTS */}
      <div className="grid md:grid-cols-3 gap-4">

        {products.map((item) => (
          <div
            key={item._id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h2 className="font-bold text-lg">
              {item.name}
            </h2>

            <p className="text-gray-600 mb-3">
              ₹{item.price}
            </p>

            <button
              onClick={() => deleteProduct(item._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}