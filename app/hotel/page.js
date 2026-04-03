"use client";

const features = [
  { icon: "🛏️", title: "Room Management", desc: "सभी rooms की real-time availability — single, double, suite। एक नज़र में पूरा status।" },
  { icon: "📅", title: "Booking & Check-in/out", desc: "Advance booking, walk-in check-in, और quick check-out — सब कुछ 2 clicks में।" },
  { icon: "🧾", title: "Billing & Invoice", desc: "Room charge, restaurant, laundry — सब एक bill में। GST-ready invoice print करो।" },
  { icon: "🍽️", title: "Restaurant Billing", desc: "In-house restaurant के orders room से link करो। Checkout पर automatic merge।" },
  { icon: "👨‍💼", title: "Staff Management", desc: "Housekeeping, reception, accounts — हर staff का काम track करो।" },
  { icon: "📊", title: "Reports & Analytics", desc: "Daily occupancy, revenue, monthly P&L — सब कुछ एक dashboard पर।" },
  { icon: "📴", title: "Offline काम करे", desc: "Internet नहीं है तो भी काम रुकेगा नहीं। Data device पर safe रहेगा।" },
  { icon: "📱", title: "Mobile + Desktop", desc: "PWA से mobile पर चलाओ, या Desktop app install करो — एक ही software।" },
];

export default function HotelPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans flex flex-col">

      {/* Top bar */}
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="text-6xl mb-4">🏨</div>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3">Nishant Hotel Pro</h1>
        <p className="text-gray-400 text-lg mb-2">Hotel Management Software — भारत के होटलों के लिए</p>
        <p className="text-gray-500 max-w-lg mb-4 text-sm leading-relaxed">
          Room booking, check-in/check-out, billing, restaurant billing और staff management —
          सब एक जगह। Offline काम करे, GST-ready, हिंदी में।
        </p>
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl font-extrabold text-pink-400">₹6,999</span>
          <span className="text-gray-500 text-sm">/साल • Renewal ₹2,499</span>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-14 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center text-white mb-2">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-500 text-sm mb-10">Hotel Pro की सभी खूबियाँ</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 hover:border-pink-500/40 rounded-2xl p-5 transition">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nishant */}
      <section className="px-4 py-14 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-2">Nishant Hotel Pro क्यों?</h2>
          <p className="text-gray-500 text-sm mb-10">बाकी hotel software से बेहतर क्यों है</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
            {[
              { icon: "💸", title: "सबसे सस्ता", desc: "IDS, Hotelogix से कई गुना सस्ता — छोटे होटलों के बजट में।" },
              { icon: "🇮🇳", title: "भारत के लिए", desc: "GST invoice, हिंदी UI, Indian payment modes — सब ready।" },
              { icon: "📞", title: "Direct Support", desc: "कोई IVR नहीं — WhatsApp पर सीधे developer से बात करो।" },
            ].map((w, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
                <div className="text-3xl mb-2">{w.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{w.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-6 px-4 text-center text-xs text-gray-500 mt-auto">
        <p>Kamta Prasad Tiwari, Tiwari Bhawan, Village Gahrapur, Post Puarikalan-221202, Varanasi, Uttar Pradesh, India</p>
        <p className="mt-1">© 2026 Nishant Softwaress — All rights reserved</p>
      </footer>

    </main>
  );
}