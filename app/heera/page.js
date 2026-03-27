"use client";

const HEERA_PWA_URL = "#";

const features = [
  { hi: "Rough Stock — rough diamond कितना है, weight, quality", en: "Track rough diamond stock — weight in carat, quality grade & lot number" },
  { hi: "Karigar Management — किस karigar को क्या दिया, कब आएगा", en: "Assign rough to karigar — track issue date, expected return & weight" },
  { hi: "Polish Stock — polish हुई diamonds का record", en: "Track polished diamond stock — shape, size, color, clarity & carat" },
  { hi: "Party Ledger — किस party को क्या बेचा, payment कब आई", en: "Party-wise sales ledger with outstanding payment tracking" },
  { hi: "Karigar Accounts — मजदूरी का पूरा हिसाब", en: "Track karigar wages — amount due, advance paid & balance" },
  { hi: "Loss/Gain Tracking — rough से polish में कितना घटा", en: "Calculate weight loss from rough to polished — track manufacturing loss" },
  { hi: "Export Records — किस country को कितना export किया", en: "Track exports country-wise with invoice & shipment details" },
  { hi: "Purchase Records — rough कहाँ से आया, rate क्या था", en: "Record rough purchases with source, rate per carat & lot details" },
  { hi: "Monthly P&L — महीने का नफा-नुकसान", en: "Monthly profit & loss — purchase cost vs sales revenue" },
  { hi: "PWA — mobile पर app की तरह", en: "Works as Android PWA — access anywhere from any device" },
];

const howTo = [
  { step: "01", hi: "Login — Google account से", en: "Login with Google account", icon: "🔐" },
  { step: "02", hi: "Rough purchase entry करो — weight, quality, rate", en: "Enter rough purchase with weight, quality & rate per carat", icon: "💎" },
  { step: "03", hi: "Karigar को rough दो — issue करो", en: "Issue rough to karigar — enter weight & expected return date", icon: "👨‍🏭" },
  { step: "04", hi: "Polish वापस आने पर entry करो — party को बेचो", en: "Enter polished return → sell to party → track payment", icon: "✨" },
];

export default function HeeraPage() {
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
      <section className="bg-gradient-to-br from-cyan-700 via-cyan-600 to-teal-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">💎 Nishant Heera Pro<br />हीरा उद्योग प्रबंधन</h1>
          <p className="text-lg mb-1 font-semibold text-cyan-100">हीरा उद्योग के लिए — rough, polish, karigar, party ledger और export records सब एक जगह।</p>
          <p className="text-base mb-8 text-cyan-200/70">Diamond industry management — rough tracking, karigar management, polish stock & party ledger all in one place.</p>
          <div className="flex flex-col items-center gap-3">
            <a href={HEERA_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-cyan-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-cyan-50 transition">
              📱 Try Free — Open App
            </a>
            <p className="text-xs text-cyan-200/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-cyan-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Diamond traders, manufacturers & exporters के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-cyan-500/20 rounded-xl px-5 py-4">
                <div className="text-cyan-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-cyan-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-cyan-200 rounded-xl p-4 text-center shadow-sm">
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
            <div className="rounded-2xl border-2 border-cyan-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-cyan-600 mb-1">₹7,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=heera" className="block w-full bg-cyan-600 text-white font-bold py-2 rounded-xl hover:bg-cyan-500 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-cyan-600 mb-1">₹2,999</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=heera" className="block w-full bg-cyan-600 text-white font-bold py-2 rounded-xl hover:bg-cyan-500 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}