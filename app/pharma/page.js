"use client";

const PHARMA_PWA_URL = "#";

const features = [
  { hi: "Medicine Stock — दवाइयाँ add करो, quantity track करो", en: "Add medicines with batch number, expiry date & stock quantity" },
  { hi: "Expiry Alert — expire होने से पहले alert", en: "Get alerts for medicines expiring in next 30/60/90 days" },
  { hi: "GST Billing — 0%, 5%, 12% GST के हिसाब से bill", en: "GST-compliant billing with 0%, 5% & 12% GST slabs for medicines" },
  { hi: "Prescription-based Billing — doctor का पर्चा scan करो", en: "Bill against doctor's prescription — link medicines to prescription" },
  { hi: "Purchase Entry — distributor से माल आया", en: "Record purchases from distributors with batch & expiry details" },
  { hi: "Customer Ledger — उधारी का हिसाब", en: "Track credit given to customers with balance due" },
  { hi: "Distributor Management — किससे क्या लिया, कितना बाकी", en: "Distributor-wise purchase tracking with outstanding balance" },
  { hi: "GSTR-1 Ready Data — monthly export करो", en: "Monthly sales data ready for GSTR-1 filing" },
  { hi: "Sales Return — वापस आई दवाई का हिसाब", en: "Handle medicine returns from customers with credit notes" },
  { hi: "PWA + Windows .exe — mobile और desktop दोनों", en: "Works as Android PWA and Windows desktop app" },
];

const howTo = [
  { step: "01", hi: "Login — Google account से", en: "Login with Google account", icon: "🔐" },
  { step: "02", hi: "Medicines add करो — batch, expiry, rate", en: "Add medicines with batch number, expiry date & MRP", icon: "💊" },
  { step: "03", hi: "New Bill → medicines चुनो → GST calculate होगा", en: "Create bill → select medicines → GST auto-calculated", icon: "🧾" },
  { step: "04", hi: "Reports — stock, expiry, monthly sales", en: "View stock status, expiry alerts & monthly reports", icon: "📊" },
];

export default function PharmaPage() {
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
      <section className="bg-gradient-to-br from-red-700 via-red-600 to-rose-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">💊 Nishant Pharma Pro<br />दवा दुकान — Marg जैसा</h1>
          <p className="text-lg mb-1 font-semibold text-red-100">दवा की दुकान के लिए — stock, expiry alert, GST billing, prescription billing सब एक जगह।</p>
          <p className="text-base mb-8 text-red-200/70">Medicine stock management, expiry alerts, GST billing & prescription billing — all in one place.</p>
          <div className="flex flex-col items-center gap-3">
            <a href={PHARMA_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-red-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-red-50 transition">
              📱 Try Free — Open App
            </a>
            <p className="text-xs text-red-200/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-red-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Medical stores, pharmacies के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-red-500/20 rounded-xl px-5 py-4">
                <div className="text-red-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-red-200 rounded-xl p-4 text-center shadow-sm">
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
            <div className="rounded-2xl border-2 border-red-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=pharma" className="block w-full bg-red-600 text-white font-bold py-2 rounded-xl hover:bg-red-500 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-1">₹1,999</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=pharma" className="block w-full bg-red-600 text-white font-bold py-2 rounded-xl hover:bg-red-500 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}