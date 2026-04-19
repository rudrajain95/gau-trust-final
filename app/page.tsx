export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-gray-800">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-5 bg-[#0f172a] text-white shadow">
  <h1 className="text-2xl font-bold">🐄 Gau Trust Milk</h1>

  <div className="flex gap-3">
    
    {/* SIGNUP BUTTON */}
    <a href="/signup">
      <button className="bg-black px-5 py-2 rounded-xl hover:bg-gray-800">
        Customer Signup
      </button>
    </a>

    {/* LOGIN BUTTON */}
    <a href="/login">
      <button className="bg-gray-700 px-5 py-2 rounded-xl hover:bg-black">
        Customer Login
      </button>
    </a>

  </div>
</header>


      {/* HERO */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              शुद्ध और ताज़ा दूध <br />
              अब सीधे आपके घर
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Gau Trust Milk आपको भरोसेमंद डेयरी फार्म से सीधे आपके घर तक ताज़ा दूध पहुंचाता है।
            </p>

            <p className="mt-2 text-gray-500">
              हर दिन Farm Video — पूरा भरोसा।
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-black text-white px-8 py-3 rounded-xl shadow hover:bg-gray-800">
                Start Free Trial
              </button>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-xl shadow hover:bg-black">
                Customer Login
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <img
            src="/milk.jpg"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>


      {/* WHY */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          ग्राहक Gau Trust पर भरोसा क्यों करते हैं?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { title: "📹 Farm Transparency", desc: "हर दिन दूध का वीडियो मिलता है" },
            { title: "🥛 Fresh Dairy", desc: "सीधे फार्म से ताज़ा दूध" },
            { title: "🏪 Nearby Shop", desc: "पास की डेयरी से ऑर्डर" },
            { title: "🚚 Fast Delivery", desc: "समय पर डिलीवरी" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* DELIVERY */}
      <section className="px-10 py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-14">
          Delivery Policy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-green-500">
            <h3 className="font-bold text-lg">⭐ Subscription Customers</h3>
            <p className="mt-2">Same day delivery</p>
            <p className="font-semibold">6 AM – 9 PM</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-blue-500">
            <h3 className="font-bold text-lg">📦 Non-Subscription</h3>
            <p className="mt-2">Order anytime</p>
            <p className="font-semibold">7 AM – 11 AM</p>
          </div>

        </div>
      </section>


      {/* PRODUCTS */}
      <section className="px-10 py-20 text-center">
        <h2 className="text-4xl font-bold mb-14">
          हमारे डेयरी प्रोडक्ट्स
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Milk", "Paneer", "Curd", "Butter Milk", "Butter"].map((item) => (
            <div key={item} className="bg-white py-6 rounded-xl shadow hover:shadow-xl">
              {item}
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#0f172a] text-white text-center py-20">
        <h2 className="text-4xl font-bold">
          आज ही Gau Trust से जुड़ें
        </h2>

        <p className="mt-3 text-gray-300">
          शुद्ध दूध और भरोसे के साथ सेवा पाएं।
        </p>

        <button className="mt-8 bg-black px-8 py-3 rounded-xl hover:bg-gray-800">
          Create Customer Account
        </button>
      </section>


      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 Gau Trust Milk</p>
        <p className="text-gray-400 text-sm">
          Chhatarpur में ताज़ा दूध डिलीवरी
        </p>
      </footer>

    </main>
  );
}