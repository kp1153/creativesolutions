"use client";

const ERPBRIDGE_EXE_URL = "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Setup%200.1.0.exe";
const ERPBRIDGE_AGENT_URL = "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Tally%20Agent%20Setup%201.0.0.exe";
const ERPBRIDGE_PWA_URL = "https://erpbridge.vercel.app";

const features = [
  { hi: "टैली से सीधे डेटा अपलोड करें", en: "Upload directly from Tally, Busy or Marg" },
  { hi: "Sales, Purchase, P&L रिपोर्ट तुरंत", en: "Instant Sales, Purchase & P&L Reports" },
  { hi: "Party Ledger — हर पार्टी का हिसाब", en: "Party-wise Ledger with full balance" },
  { hi: "Date filter से किसी भी period की रिपोर्ट", en: "Filter reports by any date range" },
  { hi: "Excel में Export — accountant को भेजें", en: "Export to Excel in one click" },
  { hi: "मोबाइल, tablet, laptop — कहीं से भी", en: "Works on any device, anywhere" },
  { hi: "Google login — कोई password नहीं", en: "Secure Google login, no password needed" },
  { hi: "Duplicate protection — data double नहीं होगा", en: "Smart duplicate upload protection" },
  { hi: "Outstanding Tracking — उधारी का पूरा हिसाब", en: "Party-wise outstanding with aging analysis" },
  { hi: "WhatsApp Payment Reminder — एक click में भेजें", en: "Send payment reminder directly on WhatsApp" },
  { hi: "Inventory Monitoring — स्टॉक की निगरानी", en: "Real-time stock tracking from Tally data" },
  { hi: "Team Management — Roles & Rights", en: "Add accountant or viewer with controlled access" },
];

const fmcgFeatures = [
  { hi: "Party-wise Sales — कौन सी party को कितने boxes गए", en: "Party-wise sales with city, state & qty" },
  { hi: "Product-wise Sales — कौन सा product कितना बिका", en: "Product-wise qty sold across all invoices" },
  { hi: "SO Performance — हर Sales Officer की performance", en: "Sales Officer wise invoices, qty & parties" },
  { hi: "ASM Performance — Area Sales Manager की report", en: "ASM wise performance with SO breakdown" },
  { hi: "City-wise Sales — शहर के हिसाब से data", en: "City and state wise sales analysis" },
];

const howTo = [
  { hi: "Google account से login करें", en: "Login with your Google account", icon: "🔐" },
  { hi: "Tally → Sales Register → Export → Excel", en: "Export from Tally as Excel file", icon: "📤" },
  { hi: "Dashboard → Upload Data → file चुनें", en: "Go to Dashboard → Upload Data", icon: "📁" },
  { hi: "Reports देखें — Sales, Purchase, Ledger, P&L", en: "View instant reports on dashboard", icon: "📊" },
];

const comparisonRows = [
  { feature: "कीमत / Price", magenta: "₹36,000/year", erp: "₹11,999 एक बार", erpWin: true },
  { feature: "Free Trial", magenta: "❌ नहीं", erp: "✅ 7 दिन, no card", erpWin: true },
  { feature: "Sales Analytics", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Purchase Insights", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Outstanding Tracking", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Inventory Monitoring", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Payment Follow-up", magenta: "✅", erp: "✅ WhatsApp Direct", erpWin: true },
  { feature: "Tally Auto-Sync", magenta: "✅", erp: "✅ हर 15 मिनट", erpWin: false },
  { feature: "Mobile App", magenta: "✅", erp: "✅ PWA — free", erpWin: true },
  { feature: "ASM / SO Performance", magenta: "❌ नहीं", erp: "✅ FMCG exclusive", erpWin: true },
  { feature: "Roles & Rights", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Hindi Support", magenta: "❌", erp: "✅ पूरी Hindi UI", erpWin: true },
];

export default function ERPBridgePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Contact bar */}
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🆓 7 Days Completely Free — No Card Required
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight text-gray-900">
            Nishant ERPBridge<br />Business Intelligence
          </h1>
          <p className="text-lg mb-1 font-semibold text-yellow-900">
            Tally, Busy, Marg का data upload करो — Sales, Purchase, P&L और Party Ledger reports एक जगह। FMCG companies के लिए SO और ASM performance reports भी।
          </p>
          <p className="text-base mb-8 text-yellow-900/70">
            Upload data from Tally, Busy or Marg — get instant Sales, Purchase, P&L and Party Ledger reports. FMCG companies get SO and ASM performance reports too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={ERPBRIDGE_EXE_URL} className="inline-block bg-gray-900 text-yellow-400 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition">
              🖥️ Windows पर Download करें (.exe)
            </a>
            <div className="flex flex-col items-center">
              <a href={ERPBRIDGE_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 Android / Tablet पर Install करें
              </a>
              <p className="text-xs mt-1 text-yellow-900/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
            </div>
          </div>
          <p className="text-sm mt-3 text-yellow-900/60">Windows 10/11 — 64-bit &nbsp;|&nbsp; Android Chrome पर भी चलता है</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-yellow-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Tally / ERP users के लिए — For Tally / ERP Users</p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-yellow-500/20 rounded-xl px-5 py-4">
                <div className="text-yellow-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-1 text-yellow-400">FMCG Companies के लिए</h2>
          <p className="text-center text-gray-400 text-sm mb-8">200 parties, 20 SO, 5 ASM — सब एक dashboard पर — All on one dashboard</p>
          <div className="grid md:grid-cols-2 gap-4">
            {fmcgFeatures.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-yellow-500/20 rounded-xl px-5 py-4">
                <div className="text-yellow-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 px-4 bg-yellow-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कैसे उपयोग करें / How to Use</h2>
          <p className="text-center text-gray-500 text-sm mb-8">4 आसान steps — 4 Simple Steps</p>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h, i) => (
              <div key={i} className="bg-white border border-yellow-200 rounded-xl p-5 text-center shadow-sm">
                <div className="text-3xl mb-2">{h.icon}</div>
                <div className="text-xs text-gray-400 font-bold mb-1">STEP {i + 1}</div>
                <div className="font-bold text-gray-800 text-sm mb-1">{h.hi}</div>
                <div className="text-xs text-gray-500">{h.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tally Agent */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-yellow-400">Tally Auto-Sync Agent</h2>
          <p className="text-center text-gray-400 text-sm mb-8">हर 15 मिनट में automatically data sync होगा — No manual export needed</p>
          <div className="bg-gray-800 border border-yellow-500/30 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h3 className="text-yellow-400 font-bold mb-3">Agent क्या करता है?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✅ Tally से हर 15 मिनट में automatically data fetch करता है</li>
                  <li>✅ Background में चलता है — Tally use करते रहो</li>
                  <li>✅ Internet पर securely upload करता है</li>
                  <li>✅ एक बार install — हमेशा काम करता है</li>
                  <li>✅ Duplicate data automatically reject होता है</li>
                </ul>
                <p className="text-gray-500 text-xs mt-4">
                  <span className="text-yellow-400 font-semibold">जरूरी:</span> Agent और Tally एक ही computer पर होने चाहिए। Tally चालू होना चाहिए।
                </p>
                <p className="text-gray-500 text-xs mt-1">Tally must be running during sync — Agent and Tally must be on the same computer.</p>
              </div>
              <div className="flex-shrink-0">
                <a href={ERPBRIDGE_AGENT_URL}
                  className="inline-block bg-yellow-500 text-gray-900 font-extrabold px-6 py-3 rounded-xl hover:bg-yellow-400 transition text-center">
                  🤖 Tally Agent Download करें
                </a>
                <p className="text-xs text-gray-500 mt-2 text-center">Windows only — Auto-sync setup</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magenta Comparison */}
      <section className="py-16 px-4 bg-gray-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-bold px-4 py-1 rounded-full mb-3 tracking-widest uppercase">
              Magenta BI vs ERPBridge
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Magenta से <span className="text-yellow-400">3x सस्ता</span> — features ज़्यादा
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Magenta BI लेता है ₹36,000/year। हम लेते हैं ₹11,999 एक बार — और features वही सब, कुछ extra भी।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
            <div className="bg-red-950/60 border border-red-500/30 rounded-2xl p-5 text-center">
              <div className="text-xs text-red-400 font-bold mb-1 tracking-widest uppercase">Magenta BI</div>
              <div className="text-3xl font-extrabold text-red-400 mb-1">₹36,000</div>
              <div className="text-xs text-red-400/70">प्रति वर्ष — हर साल</div>
              <div className="text-xs text-gray-500 mt-2">3 साल = ₹1,08,000 😰</div>
            </div>
            <div className="bg-yellow-500/10 border-2 border-yellow-500/60 rounded-2xl p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs font-extrabold px-3 py-0.5 rounded-full">बेहतर चुनाव</div>
              <div className="text-xs text-yellow-400 font-bold mb-1 tracking-widest uppercase">ERPBridge</div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-1">₹11,999</div>
              <div className="text-xs text-yellow-400/70">एक बार — 1 साल included</div>
              <div className="text-xs text-gray-400 mt-2">3 साल = ₹21,997 🎉</div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-3 bg-gray-800 text-xs font-bold uppercase tracking-wider">
              <div className="px-5 py-3 text-gray-400">Feature</div>
              <div className="px-5 py-3 text-center text-red-400">Magenta BI</div>
              <div className="px-5 py-3 text-center text-yellow-400">ERPBridge ✦</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-gray-800 ${row.erpWin ? "bg-yellow-500/5" : "bg-gray-900/50"}`}>
                <div className="px-5 py-3 text-sm text-gray-300 font-medium">{row.feature}</div>
                <div className="px-5 py-3 text-sm text-center text-gray-400">{row.magenta}</div>
                <div className={`px-5 py-3 text-sm text-center font-semibold ${row.erpWin ? "text-yellow-400" : "text-gray-300"}`}>{row.erp}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm mb-4">7 दिन मुफ्त — कोई credit card नहीं, कोई commitment नहीं</p>
            <a href={ERPBRIDGE_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl transition">
              🚀 अभी Free Trial शुरू करें
            </a>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-1 text-gray-700">Testing कैसे करें / How to Test</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Login करें, file upload करें, reports देखें — It&apos;s that simple</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "01", hi: "Login करें", en: "Open site → Start Free Trial → Google login", icon: "🔐" },
              { step: "02", hi: "File Upload करें", en: "Dashboard → Upload Data → Tally or FMCG Excel", icon: "📤" },
              { step: "03", hi: "Reports देखें", en: "Reports → Sales, Purchase, Ledger, P&L, FMCG", icon: "📊" },
            ].map((t) => (
              <div key={t.step} className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
                <div className="text-3xl mb-2">{t.icon}</div>
                <div className="text-xs text-gray-400 font-bold mb-1">STEP {t.step}</div>
                <div className="font-bold text-gray-800 mb-1">{t.hi}</div>
                <div className="text-xs text-gray-500">{t.en}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-xl p-4 text-center">
            <p className="text-sm text-yellow-800 font-semibold">⚠️ गलत data upload हो जाए तो — If wrong data uploaded</p>
            <p className="text-xs text-yellow-700 mt-1">Settings → Clear All Data → दोबारा सही file upload करें — Go to Settings → Clear All Data → Re-upload correct file</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-yellow-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-4 py-1 rounded-full">New Account / नया Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-yellow-600 mb-1">₹11,999</div>
              <p className="text-gray-400 text-sm mb-1">एक बार — 1 साल included</p>
              <p className="text-gray-400 text-xs mb-4">One time — 1 year included</p>
              <a href="/payment?software=erpbridge" className="block w-full bg-yellow-500 text-white font-bold py-2 rounded-xl hover:bg-yellow-400 transition">
                Start Free Trial — मुफ्त शुरू करें
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">नवीनीकरण / Renewal</h3>
              <div className="text-4xl font-extrabold text-yellow-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-1">प्रति वर्ष</p>
              <p className="text-gray-400 text-xs mb-4">Per year</p>
              <a href="/payment?software=erpbridge" className="block w-full bg-yellow-500 text-white font-bold py-2 rounded-xl hover:bg-yellow-400 transition">
                Renew Now — नवीनीकरण करें
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}