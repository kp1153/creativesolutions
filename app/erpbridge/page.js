"use client";

const ERPBRIDGE_EXE_URL =
  "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Setup%200.1.0.exe";
const ERPBRIDGE_AGENT_URL =
  "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Tally%20Agent%20Setup%201.0.0.exe";
const ERPBRIDGE_PWA_URL = "https://erpbridge.vercel.app";

const features = [
  {
    hi: "टैली से सीधे डेटा अपलोड करें",
    en: "Upload directly from Tally, Busy or Marg",
  },
  {
    hi: "Sales, Purchase, P&L रिपोर्ट तुरंत",
    en: "Instant Sales, Purchase & P&L Reports",
  },
  {
    hi: "Party Ledger — हर पार्टी का हिसाब",
    en: "Party-wise Ledger with full balance",
  },
  {
    hi: "Date filter से किसी भी period की रिपोर्ट",
    en: "Filter reports by any date range",
  },
  {
    hi: "Excel में Export — accountant को भेजें",
    en: "Export to Excel in one click",
  },
  {
    hi: "मोबाइल, tablet, laptop — कहीं से भी",
    en: "Works on any device, anywhere",
  },
  {
    hi: "Google login — कोई password नहीं",
    en: "Secure Google login, no password needed",
  },
  {
    hi: "Duplicate protection — data double नहीं होगा",
    en: "Smart duplicate upload protection",
  },
  {
    hi: "Outstanding Tracking — उधारी का पूरा हिसाब",
    en: "Party-wise outstanding with aging analysis",
  },
  {
    hi: "WhatsApp Payment Reminder — एक click में भेजें",
    en: "Send payment reminder directly on WhatsApp",
  },
  {
    hi: "Inventory Monitoring — स्टॉक की निगरानी",
    en: "Real-time stock tracking from Tally data",
  },
  {
    hi: "Team Management — Roles & Rights",
    en: "Add accountant or viewer with controlled access",
  },
];

const fmcgFeatures = [
  {
    hi: "Party-wise Sales — कौन सी party को कितने boxes गए",
    en: "Party-wise sales with city, state & qty",
  },
  {
    hi: "Product-wise Sales — कौन सा product कितना बिका",
    en: "Product-wise qty sold across all invoices",
  },
  {
    hi: "SO Performance — हर Sales Officer की performance",
    en: "Sales Officer wise invoices, qty & parties",
  },
  {
    hi: "ASM Performance — Area Sales Manager की report",
    en: "ASM wise performance with SO breakdown",
  },
  {
    hi: "City-wise Sales — शहर के हिसाब से data",
    en: "City and state wise sales analysis",
  },
];

const comparisonRows = [
  {
    feature: "कीमत / Price",
    magenta: "₹36,000/year",
    erp: "₹11,999 एक बार",
    erpWin: true,
  },
  {
    feature: "Free Trial",
    magenta: "❌ नहीं",
    erp: "✅ 7 दिन, no card",
    erpWin: true,
  },
  { feature: "Sales Analytics", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Purchase Insights", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Outstanding Tracking", magenta: "✅", erp: "✅", erpWin: false },
  { feature: "Inventory Monitoring", magenta: "✅", erp: "✅", erpWin: false },
  {
    feature: "Payment Follow-up",
    magenta: "✅",
    erp: "✅ WhatsApp Direct",
    erpWin: true,
  },
  {
    feature: "Tally Auto-Sync",
    magenta: "✅",
    erp: "✅ हर 15 मिनट",
    erpWin: false,
  },
  { feature: "Mobile App", magenta: "✅", erp: "✅ PWA — free", erpWin: true },
  {
    feature: "ASM / SO Performance",
    magenta: "❌ नहीं",
    erp: "✅ FMCG exclusive",
    erpWin: true,
  },
  { feature: "Roles & Rights", magenta: "✅", erp: "✅", erpWin: false },
  {
    feature: "Hindi Support",
    magenta: "❌",
    erp: "✅ पूरी Hindi UI",
    erpWin: true,
  },
];

const syncSteps = [
  {
    step: "01",
    icon: "⬇️",
    hi: "Tally Agent Download करें",
    en: "Download & install the Tally Agent on your Windows PC",
    detail:
      "नीचे दिए button से Agent download करें → .exe file पर double-click करें → install हो जाएगा → system tray में icon दिखेगा।",
  },
  {
    step: "02",
    icon: "⚙️",
    hi: "Tally में Server Enable करें",
    en: "Enable XML Server in TallyPrime — one time setting",
    detail:
      "Tally Prime खोलें → F1: Help → Settings → CoNnectivity → Client/Server configuration → TallyPrime acts as: Server → Y से save करें → Tally restart करें।",
  },
  {
    step: "03",
    icon: "🔑",
    hi: "Sync Token Copy करें",
    en: "Copy your unique Sync Token from ERPBridge dashboard",
    detail: "ERPBridge dashboard → Settings → Sync Token copy करें।",
  },
  {
    step: "04",
    icon: "📋",
    hi: "Agent में Token Paste करें",
    en: "Paste token in Agent settings and save",
    detail:
      "System tray में Agent icon → click करें → Settings → Sync Token box में paste करें → Save दबाएं।",
  },
  {
    step: "05",
    icon: "🔄",
    hi: "Sync Now दबाएं",
    en: "Click Sync Now — data will appear on dashboard",
    detail:
      "Agent icon → Sync Now → 'Sync complete. X records inserted.' दिखे तो सफल। अब हर 15 मिनट में auto-sync होगा।",
  },
];

export default function ERPBridgePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-600 via-yellow-500 to-amber-600 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            🆓 7 Days Completely Free — No Card Required
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight text-gray-900">
            Nishant ERPBridge
            <br />
            Business Intelligence
          </h1>
          <p className="text-lg mb-1 font-bold text-gray-900">
            Tally, Busy, Marg का data upload करो — Sales, Purchase, P&L और Party
            Ledger reports एक जगह। FMCG companies के लिए SO और ASM performance
            reports भी।
          </p>
          <p className="text-base mb-8 text-yellow-900/80 font-medium">
            Upload data from Tally, Busy or Marg — get instant Sales, Purchase,
            P&L and Party Ledger reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ERPBRIDGE_EXE_URL}
              className="inline-block bg-gray-900 text-yellow-400 font-extrabold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition"
            >
              🖥️ Windows पर Download करें (.exe)
            </a>
            <div className="flex flex-col items-center">
              <a
                href={ERPBRIDGE_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white font-extrabold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-700 transition"
              >
                📱 Android / Tablet पर Install करें
              </a>
              <p className="text-xs mt-1 text-yellow-900/70 font-medium">
                👉 Chrome menu ⋮ → Add to Home Screen → Install
              </p>
            </div>
          </div>
          <p className="text-sm mt-3 text-white font-medium">
            Windows 10/11 — 64-bit &nbsp;|&nbsp; Android Chrome पर भी चलता है
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-white">
            खासियत / Features
          </h2>
          <p className="text-center text-white font-medium text-sm mb-8">
            Tally / ERP users के लिए — For Tally / ERP Users
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-zinc-800 border border-white rounded-xl px-5 py-4"
              >
                <div className="text-white font-bold text-sm mb-1">
                  ✦ {f.hi}
                </div>
                <div className="text-white font-medium text-xs">{f.en}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-center mb-1 text-white">
            FMCG Companies के लिए
          </h2>
          <p className="text-center text-white font-medium text-sm mb-8">
            200 parties, 20 SO, 5 ASM — सब एक dashboard पर
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {fmcgFeatures.map((f, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-white rounded-xl px-5 py-4"
              >
                <div className="text-white font-bold text-sm mb-1">
                  ✦ {f.hi}
                </div>
                <div className="text-white font-medium text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tally Auto-Sync Guide */}
      <section className="py-14 px-4 bg-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-yellow-400">
            🔄 Tally Auto-Sync कैसे करें
          </h2>
          <p className="text-center text-zinc-300 font-medium text-sm mb-10">
            एक बार setup करें — हर 15 मिनट में खुद sync होगा
          </p>

          <div className="space-y-4">
            {syncSteps.map((s) => (
              <div
                key={s.step}
                className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-5 flex gap-5 items-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 text-gray-900 font-extrabold text-sm flex items-center justify-center">
                  {s.step}
                </div>
                <div>
                  <div className="text-lg font-extrabold text-white mb-0.5">
                    {s.icon} {s.hi}
                  </div>
                  <div className="text-yellow-400 font-semibold text-xs mb-2">
                    {s.en}
                  </div>
                  <div className="text-zinc-300 font-medium text-sm leading-relaxed">
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={ERPBRIDGE_AGENT_URL}
              className="inline-block bg-yellow-500 text-gray-900 font-extrabold text-lg px-8 py-3 rounded-2xl hover:bg-yellow-400 transition shadow-lg"
            >
              🤖 Tally Agent Download करें
            </a>
            <p className="text-zinc-500 font-medium text-xs mt-2">
              Windows 10/11 only — free download
            </p>
          </div>

          <div className="mt-6 bg-zinc-700 border border-yellow-500/30 rounded-xl p-4 text-center">
            <p className="text-yellow-400 font-bold text-sm">
              ⚠️ Problem आए तो?
            </p>
            <p className="text-zinc-300 font-medium text-xs mt-1">
              'No data found' — Tally में XML Server enable करें (Step 02 देखें)
              <br />
              'Invalid token' — Dashboard → Settings से token दोबारा copy करें
              <br />
              'Connection refused' — Tally चालू करें और company खोलें
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
            <div className="bg-red-950/60 border border-red-500/30 rounded-2xl p-5 text-center">
              <div className="text-xs text-red-400 font-extrabold mb-1 tracking-widest uppercase">
                Magenta BI
              </div>
              <div className="text-3xl font-extrabold text-red-400 mb-1">
                ₹36,000
              </div>
              <div className="text-xs text-red-400/70 font-medium">
                प्रति वर्ष — हर साल
              </div>
              <div className="text-xs text-zinc-500 font-medium mt-2">
                3 साल = ₹1,08,000 😰
              </div>
            </div>
            <div className="bg-yellow-500/10 border-2 border-yellow-500/60 rounded-2xl p-5 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs font-extrabold px-3 py-0.5 rounded-full">
                बेहतर चुनाव
              </div>
              <div className="text-xs text-yellow-400 font-extrabold mb-1 tracking-widest uppercase">
                ERPBridge
              </div>
              <div className="text-3xl font-extrabold text-yellow-400 mb-1">
                ₹11,999
              </div>
              <div className="text-xs text-yellow-400/70 font-medium">
                एक बार — 1 साल included
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-2">
                3 साल = ₹21,997 🎉
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-700">
            <div className="grid grid-cols-3 bg-zinc-800 text-xs font-extrabold uppercase tracking-wider">
              <div className="px-5 py-3 text-zinc-400">Feature</div>
              <div className="px-5 py-3 text-center text-red-400">
                Magenta BI
              </div>
              <div className="px-5 py-3 text-center text-yellow-400">
                ERPBridge ✦
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 border-t border-zinc-700 ${row.erpWin ? "bg-yellow-500/5" : "bg-zinc-900/50"}`}
              >
                <div className="px-5 py-3 text-sm text-zinc-200 font-bold">
                  {row.feature}
                </div>
                <div className="px-5 py-3 text-sm text-center text-zinc-400 font-medium">
                  {row.magenta}
                </div>
                <div
                  className={`px-5 py-3 text-sm text-center font-extrabold ${row.erpWin ? "text-yellow-400" : "text-zinc-300"}`}
                >
                  {row.erp}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-zinc-400 font-medium text-sm mb-4">
              7 दिन मुफ्त — कोई credit card नहीं, कोई commitment नहीं
            </p>
            <a
              href={ERPBRIDGE_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl transition"
            >
              🚀 अभी Free Trial शुरू करें
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8 text-white">
            Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-yellow-500 p-6 text-center shadow-lg relative bg-zinc-900">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs font-extrabold px-4 py-1 rounded-full">
                New Account / नया Account
              </div>
              <h3 className="text-lg font-extrabold mb-1 text-white mt-2">
                पहली बार / First Time
              </h3>
              <div className="text-4xl font-extrabold text-yellow-400 mb-1">
                ₹11,999
              </div>
              <p className="text-zinc-300 font-medium text-sm mb-1">
                एक बार — 1 साल included
              </p>
              <p className="text-zinc-400 font-medium text-xs mb-4">
                One time — 1 year included
              </p>
              <a
                href="/payment?software=erpbridge"
                className="block w-full bg-yellow-500 text-gray-900 font-extrabold py-2 rounded-xl hover:bg-yellow-400 transition"
              >
                Start Free Trial — मुफ्त शुरू करें
              </a>
            </div>
            <div className="rounded-2xl border-2 border-zinc-600 p-6 text-center shadow-sm bg-zinc-900">
              <h3 className="text-lg font-extrabold mb-1 text-white mt-2">
                नवीनीकरण / Renewal
              </h3>
              <div className="text-4xl font-extrabold text-yellow-400 mb-1">
                ₹4,999
              </div>
              <p className="text-zinc-300 font-medium text-sm mb-1">
                प्रति वर्ष
              </p>
              <p className="text-zinc-400 font-medium text-xs mb-4">Per year</p>
              <a
                href="/payment?software=erpbridge"
                className="block w-full bg-yellow-500 text-gray-900 font-extrabold py-2 rounded-xl hover:bg-yellow-400 transition"
              >
                Renew Now — नवीनीकरण करें
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
