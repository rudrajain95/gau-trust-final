export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-800">

      {/* 🔥 NAVBAR */}
      <header className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-green-700">
          🐄 Gau Trust Milk
        </h1>

        <div className="flex gap-3">
          <a href="/login">
            <button className="px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-black">
              Secure Login
            </button>
          </a>

          <a href="/signup">
            <button className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
              Create Account
            </button>
          </a>
        </div>
      </header>


      {/* 🔥 HERO */}
      <section className="py-24 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              शुद्ध और ताज़ा दूध  
              <br /> अब सीधे आपके घर
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Gau Trust Milk एक भरोसेमंद डेयरी प्लेटफॉर्म है जो आपको  
              सीधे फार्म और लोकल सप्लायर्स से ताज़ा दूध और डेयरी प्रोडक्ट्स  
              आपके घर तक पहुंचाता है।
            </p>

            <p className="mt-2 text-gray-500">
              हर दिन farm video updates के साथ पूरी पारदर्शिता।
            </p>

            <div className="flex gap-4 mt-8">
              <a href="/signup">
                <button className="bg-green-600 text-white px-8 py-3 rounded-xl shadow hover:bg-green-700">
                  अभी शुरू करें
                </button>
              </a>

              <a href="/login">
                <button className="bg-gray-900 text-white px-8 py-3 rounded-xl shadow hover:bg-black">
                  लॉगिन करें
                </button>
              </a>
            </div>
          </div>

          <img
            src="/milk.jpg"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>


      {/* 🔥 TRUST SECTION */}
      <section className="px-10 py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-14">
          ग्राहक Gau Trust पर भरोसा क्यों करते हैं?
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg">📹 Farm Transparency</h3>
            <p className="mt-2 text-gray-600">
              हर दिन दूध का सोर्स वीडियो में देखें
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg">🥛 Fresh Dairy</h3>
            <p className="mt-2 text-gray-600">
              सीधे फार्म से ताज़ा दूध और प्रोडक्ट्स
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg">🏪 Nearby Shop</h3>
            <p className="mt-2 text-gray-600">
              अपने नजदीकी डेयरी शॉप से ऑर्डर करें
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg">🚚 Reliable Delivery</h3>
            <p className="mt-2 text-gray-600">
              समय पर और सुरक्षित डिलीवरी
            </p>
          </div>

        </div>
      </section>


      {/* 🔥 DELIVERY POLICY */}
      <section className="px-10 py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-14">
          Delivery Policy
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-green-500">
            <h3 className="font-bold text-lg">⭐ Subscription Customers</h3>
            <p className="mt-2">Same day delivery available</p>
            <p className="font-semibold">6 AM – 9 PM</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border-l-4 border-blue-500">
            <h3 className="font-bold text-lg">📦 Non-Subscription</h3>
            <p className="mt-2">Order anytime</p>
            <p className="font-semibold">7 AM – 11 AM</p>
          </div>

        </div>
      </section>


      {/* 🔥 PRODUCTS */}
      <section className="px-10 py-20 text-center bg-white">
        <h2 className="text-4xl font-bold mb-14">
          हमारे डेयरी प्रोडक्ट्स
        </h2>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">

          {["Milk", "Paneer", "Curd", "Butter Milk", "Butter"].map((item) => (
            <div key={item} className="bg-gray-50 py-6 rounded-xl shadow hover:shadow-lg">
              {item}
            </div>
          ))}

        </div>
      </section>


      {/* 🔥 CTA */}
      <section className="bg-green-700 text-white text-center py-20">
        <h2 className="text-4xl font-bold">
          आज ही Gau Trust से जुड़ें
        </h2>

        <p className="mt-3">
          शुद्ध दूध, सही कीमत और पूरी पारदर्शिता के साथ
        </p>

        <a href="/signup">
          <button className="mt-8 bg-white text-green-700 px-8 py-3 rounded-xl font-semibold">
            Create Customer Account
          </button>
        </a>
      </section>


      {/* 🔥 FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        <p>© 2026 Gau Trust Milk</p>
        <p className="text-gray-400 text-sm">
        छतरपुर में ताज़ा दूध डिलीवरी सेवा
        </p>
      </footer>

    </main>
  );
}