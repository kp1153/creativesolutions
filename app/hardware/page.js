"use client";

const HARDWARE_EXE_URL = "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://nishant-ten.vercel.app";

const features = [
  { hi: "GST Billing — bill बनाओ, print करो, WhatsApp पर भेजो", en: "GST-compliant billing — create, print & share on WhatsApp" },
  { hi: "Stock Management — item add करो, quantity track करो", en: "Add items, track stock levels, get low-stock alerts" },
  { hi: "उधारी / Credit Tracking — किसने कितना लेना है", en: "Track credit given to customers — who owes how much" },
  { hi: "Customer Ledger — हर customer का हिसाब", en: "Complete ledger for each customer with balance" },
  { hi: "Party-wise Purchase — कहाँ से माल आया", en: "Track purchases party-wise with dates and amounts" },
  { hi: "GST Reports — GSTR-1, GSTR-3B के लिए ready data", en: "GST report data ready for filing — GSTR-1 & GSTR-3B" },
  { hi: "Barcode Support — barcode scan करके billing", en: "Barcode scanning for fast billing at counter" },
  { hi: "Multi-user — owner और counter boy अलग access", en: "Owner gets full access, counter staff gets limited access" },
  { hi: "PWA + Windows .exe — दोनों पर चलता है", en: "Works as Android PWA and Windows desktop app" },
  { hi: "7-Day Free Trial — कोई card नहीं", en: "7-day free trial — no credit card required" },
];

const howTo = [
  { step: "01", hi: "Login करें — Google account से", en: "Login with Google account", icon: "🔐" },
  { step: "02", hi: "Items add करो — नाम, rate, stock", en: "Add your items with name, rate & opening stock", icon: "📦" },
  { step: "03", hi: "New Bill → customer चुनो → items add करो", en: "Create new bill → select customer → add items", icon: "🧾" },
  { step: "04", hi: "Print / WhatsApp पर भेजो", en: "Print or share bill on WhatsApp directly", icon: "📱" },
];

export default function HardwarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
      </div>
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">🔧 निशांत Hardware Pro<br />Shop Management</h1>
          <p className="text-lg mb-1 font-semibold text-blue-100">हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, GST रिपोर्ट सब एक जगह।</p>
          <p className="text-base mb-8 text-blue-200/70">Built for hardware shops — billing, stock, credit management and GST reports all in one place.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={HARDWARE_EXE_URL} className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-blue-50 transition">
              🖥️ Windows पर Download करें (.exe)
            </a>
            <div className="flex flex-col items-center">
              <a href={HARDWARE_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-xs mt-1 text-blue-200/70">👉 Chrome menu ⋮ → Add to Home Screen</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-blue-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Hardware, Sanitary, Paint, Electrical दुकानों के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-blue-500/20 rounded-xl px-5 py-4">
                <div className="text-blue-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कैसे उपयोग करें</h2>
          <p className="text-center text-gray-500 text-sm mb-8">4 आसान steps</p>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="text-xs text-gray-400 font-bold mb-1">STEP {h.step}</div>
                <div className="font-bold text-gray-800 text-xs mb-1">{h.hi}</div>
                <div className="text-xs text-gray-500">{h.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-blue-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-1">₹5,500</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-bold py-2 rounded-xl hover:bg-blue-500 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-bold py-2 rounded-xl hover:bg-blue-500 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}