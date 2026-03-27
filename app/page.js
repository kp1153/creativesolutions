"use client";

const HARDWARE_EXE_URL =
  "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://nishant-ten.vercel.app";
const SCHOOL_EXE_URL =
  "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const ERPBRIDGE_EXE_URL =
  "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Setup%200.1.0.exe";
const ERPBRIDGE_AGENT_URL =
  "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Tally%20Agent%20Setup%201.0.0.exe";
const ERPBRIDGE_PWA_URL = "https://erpbridge.vercel.app";

const erpbridgeFeatures = [
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
  { hi: "Outstanding Tracking — उधारी का पूरा हिसाब", en: "Party-wise outstanding with aging analysis" },
  { hi: "WhatsApp Payment Reminder — एक click में भेजें", en: "Send payment reminder directly on WhatsApp" },
  { hi: "Inventory Monitoring — स्टॉक की निगरानी", en: "Real-time stock tracking from Tally data" },
  { hi: "Team Management — Roles & Rights", en: "Add accountant or viewer with controlled access" },
];

const erpbridgeFmcgFeatures = [
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

const erpbridgeHowTo = [
  { hi: "Google account से login करें", en: "Login with your Google account" },
  {
    hi: "Tally → Sales Register → Export → Excel",
    en: "Export from Tally as Excel file",
  },
  {
    hi: "Dashboard → Upload Data → file चुनें",
    en: "Go to Dashboard → Upload Data",
  },
  {
    hi: "Reports देखें — Sales, Purchase, Ledger, P&L",
    en: "View instant reports on dashboard",
  },
];

// Magenta BI vs ERPBridge comparison data
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

const products = [
  {
    key: "erpbridge",
    color: "yellow",
    gradient: "from-yellow-600 via-yellow-500 to-amber-600",
    border: "border-yellow-500",
    textAccent: "text-yellow-600",
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-400",
    badge: "🆓 7 Days Completely Free — No Card Required",
    title: "Nishant ERPBridge Business Intelligence",
    descHi:
      "Tally, Busy, Marg का data upload करो — Sales, Purchase, P&L और Party Ledger reports एक जगह। FMCG companies के लिए SO और ASM performance reports भी।",
    descEn:
      "Upload data from Tally, Busy or Marg — get instant Sales, Purchase, P&L and Party Ledger reports. FMCG companies get SO and ASM performance reports too.",
    exeUrl: ERPBRIDGE_EXE_URL,
    pwaUrl: ERPBRIDGE_PWA_URL,
    pwaLabel: "📱 Android / Tablet पर Install करें",
    exeLabel: "🖥️ Windows पर Download करें (.exe)",
    software: "erpbridge",
    newPrice: "₹11,999",
    renewPrice: "₹4,999",
    titleColor: "text-gray-900",
    descColor: "text-yellow-900",
    exeBtnClass: "bg-gray-900 text-yellow-400 hover:bg-gray-800",
    features: erpbridgeFeatures,
    fmcgFeatures: erpbridgeFmcgFeatures,
    howTo: erpbridgeHowTo,
  },
  {
    key: "dental",
    color: "green",
    gradient: "from-green-700 via-green-600 to-emerald-700",
    border: "border-green-600",
    textAccent: "text-green-600",
    bg: "bg-green-600",
    hover: "hover:bg-green-700",
    badge: "🆓 7 Days Completely Free — No Card Required",
    title: "Nishant Dental Clinic Management",
    descHi: "दाँत के क्लिनिक के लिए बना — मरीज, prescription, treatment और billing सब एक जगह।",
    descEn: "Built for dental clinics — Patients, Prescriptions, Treatments & Billing all in one place.",
    exeUrl: "",
    pwaUrl: "https://dental-generic.vercel.app",
    pwaLabel: "📱 Android / Tablet पर Install करें",
    exeLabel: "🖥️ Windows पर Download करें (.exe)",
    software: "dental",
    newPrice: "₹4,999",
    renewPrice: "₹1,999",
  },
  {
    key: "hardware",
    color: "blue",
    gradient: "from-blue-700 via-blue-600 to-indigo-700",
    border: "border-blue-600",
    textAccent: "text-blue-600",
    bg: "bg-blue-600",
    hover: "hover:bg-blue-700",
    badge: "🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं चाहिए",
    title: "निशांत सैनिटरी-हार्डवेयर प्रबंधन सॉफ्टवेयर",
    descHi:
      "हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, GST रिपोर्ट सब एक जगह।",
    descEn:
      "Built for hardware shops — billing, stock, credit management and GST reports all in one place.",
    exeUrl: HARDWARE_EXE_URL,
    pwaUrl: HARDWARE_PWA_URL,
    pwaLabel: "📱 Android / Tablet पर इंस्टाल करें",
    exeLabel: "🖥️ Windows पर डाउनलोड करें (.exe)",
    software: "hardware",
    newPrice: "₹5,500",
    renewPrice: "₹2,500",
  },
  {
    key: "school",
    color: "indigo",
    gradient: "from-indigo-700 via-indigo-600 to-purple-700",
    border: "border-indigo-600",
    textAccent: "text-indigo-600",
    bg: "bg-indigo-600",
    hover: "hover:bg-indigo-700",
    badge: "🆓 7 Days Completely Free — No Card Required",
    title: "Nishant School Management Software",
    descHi:
      "CBSE प्राइवेट स्कूलों के लिए बना — Students, Fees, Attendance, Exams, Results और Parent Portal सब एक जगह।",
    descEn:
      "Built for CBSE private schools — Students, Fees, Attendance, Exams, Results & Parent Portal all in one place.",
    exeUrl: SCHOOL_EXE_URL,
    pwaUrl: "https://school-saas-azure.vercel.app",
    pwaLabel: "📱 Android / Tablet पर Install करें",
    exeLabel: "🖥️ Windows पर Download करें (.exe)",
    software: "school",
    newPrice: "₹5,500",
    renewPrice: "₹2,500",
  },
];

// ── Magenta vs ERPBridge Comparison Section ──────────────────────
function MagentaComparison() {
  return (
    <section className="py-16 px-4 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-bold px-4 py-1 rounded-full mb-3 tracking-widest uppercase">
            Magenta BI vs ERPBridge
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Magenta से <span className="text-yellow-400">3x सस्ता</span> —
            features ज़्यादा
          </h3>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Magenta BI लेता है ₹36,000/year। हम लेते हैं ₹11,999 एक बार — और
            features वही सब, कुछ extra भी।
          </p>
        </div>

        {/* Price highlight cards */}
        <div className="grid grid-cols-2 gap-4 mb-10 max-w-lg mx-auto">
          <div className="bg-red-950/60 border border-red-500/30 rounded-2xl p-5 text-center">
            <div className="text-xs text-red-400 font-bold mb-1 tracking-widest uppercase">
              Magenta BI
            </div>
            <div className="text-3xl font-extrabold text-red-400 mb-1">
              ₹36,000
            </div>
            <div className="text-xs text-red-400/70">प्रति वर्ष — हर साल</div>
            <div className="text-xs text-gray-500 mt-2">
              3 साल = ₹1,08,000 😰
            </div>
          </div>
          <div className="bg-yellow-500/10 border-2 border-yellow-500/60 rounded-2xl p-5 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs font-extrabold px-3 py-0.5 rounded-full">
              बेहतर चुनाव
            </div>
            <div className="text-xs text-yellow-400 font-bold mb-1 tracking-widest uppercase">
              ERPBridge
            </div>
            <div className="text-3xl font-extrabold text-yellow-400 mb-1">
              ₹11,999
            </div>
            <div className="text-xs text-yellow-400/70">
              एक बार — 1 साल included
            </div>
            <div className="text-xs text-gray-400 mt-2">3 साल = ₹21,997 🎉</div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-2xl overflow-hidden border border-gray-800">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray-800 text-xs font-bold uppercase tracking-wider">
            <div className="px-5 py-3 text-gray-400">Feature</div>
            <div className="px-5 py-3 text-center text-red-400">Magenta BI</div>
            <div className="px-5 py-3 text-center text-yellow-400">
              ERPBridge ✦
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-t border-gray-800 ${
                row.erpWin ? "bg-yellow-500/5" : "bg-gray-900/50"
              }`}
            >
              <div className="px-5 py-3 text-sm text-gray-300 font-medium">
                {row.feature}
              </div>
              <div className="px-5 py-3 text-sm text-center text-gray-400">
                {row.magenta}
              </div>
              <div
                className={`px-5 py-3 text-sm text-center font-semibold ${row.erpWin ? "text-yellow-400" : "text-gray-300"}`}
              >
                {row.erp}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            7 दिन मुफ्त — कोई credit card नहीं, कोई commitment नहीं
          </p>
          <a
            href={ERPBRIDGE_PWA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl transition"
          >
            {"🚀"} अभी Free Trial शुरू करें
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="bg-amber-500 py-3 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3 text-white font-bold text-lg">
          <a
            href="tel:+919996865069"
            className="flex items-center gap-2 hover:underline"
          >
            📞 9996865069
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="mailto:prasad.kamta@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            ✉️ prasad.kamta@gmail.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            💬 WhatsApp करें
          </a>
        </div>
      </section>

      {products.map((p) => (
        <div key={p.key}>
          <section
            className={`bg-gradient-to-br ${p.gradient} text-white py-16 px-4 text-center`}
          >
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {p.badge}
              </div>
              <h2
                className={`text-3xl md:text-5xl font-extrabold mb-3 leading-tight ${p.titleColor || ""}`}
              >
                {p.title}
              </h2>
              <p
                className={`text-lg mb-1 max-w-xl mx-auto font-semibold ${p.descColor || "text-white/90"}`}
              >
                {p.descHi}
              </p>
              <p
                className={`text-base mb-6 max-w-xl mx-auto ${p.descColor || "text-white/70"}`}
              >
                {p.descEn}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={p.exeUrl}
                  className={`inline-block font-bold text-lg px-8 py-3 rounded-2xl shadow-lg transition ${p.exeBtnClass || "bg-white text-gray-900 hover:bg-gray-100"}`}
                >
                  {p.exeLabel}
                </a>
                <div className="flex flex-col items-center">
                  <a
                    href={p.pwaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition"
                  >
                    {p.pwaLabel}
                  </a>
                  <p className="text-xs mt-1 opacity-80">
                    👉 Chrome menu ⋮ → Add to Home Screen → Install
                  </p>
                </div>
              </div>
              <p className="text-sm mt-3 opacity-70">
                Windows 10/11 — 64-bit &nbsp;|&nbsp; Android Chrome पर भी चलता
                है
              </p>
            </div>
          </section>

          {p.features && (
            <section className="py-12 px-4 bg-gray-900 text-white">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-1 text-yellow-400">
                  खासियत / Features
                </h3>
                <p className="text-center text-gray-400 text-sm mb-4">
                  Tally / ERP users के लिए — For Tally / ERP Users
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {p.features.map((f, i) => (
                    <div
                      key={i}
                      className="bg-gray-800 border border-yellow-500/20 rounded-xl px-5 py-4"
                    >
                      <div className="text-yellow-400 font-semibold text-sm mb-1">
                        ✦ {f.hi}
                      </div>
                      <div className="text-gray-400 text-xs">{f.en}</div>
                    </div>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-center mb-1 text-yellow-400">
                  FMCG Companies के लिए
                </h3>
                <p className="text-center text-gray-400 text-sm mb-4">
                  200 parties, 20 SO, 5 ASM — सब एक dashboard पर — All on one
                  dashboard
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.fmcgFeatures.map((f, i) => (
                    <div
                      key={i}
                      className="bg-gray-800 border border-yellow-500/20 rounded-xl px-5 py-4"
                    >
                      <div className="text-yellow-400 font-semibold text-sm mb-1">
                        ✦ {f.hi}
                      </div>
                      <div className="text-gray-400 text-xs">{f.en}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {p.howTo && (
            <section className="py-12 px-4 bg-yellow-50">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-1 text-gray-800">
                  कैसे उपयोग करें / How to Use
                </h3>
                <p className="text-center text-gray-500 text-sm mb-8">
                  सिर्फ 4 आसान स्टेप — Just 4 simple steps
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {p.howTo.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white border border-yellow-300 rounded-xl px-5 py-4 flex gap-4 items-start shadow-sm"
                    >
                      <div className="text-2xl font-black text-yellow-500 leading-none">
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">
                          {s.hi}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">{s.en}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {p.key === "erpbridge" && (
            <>
              <section className="py-14 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-10">
                    <div className="inline-block bg-yellow-500/20 text-yellow-400 text-xs font-bold px-4 py-1 rounded-full mb-3 tracking-widest uppercase">
                      New Feature
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                      Tally Auto-Sync Agent
                    </h3>
                    <p className="text-yellow-400 font-semibold text-lg mb-1">
                      टैली का data अपने आप ERPBridge में आएगा
                    </p>
                    <p className="text-gray-400 text-sm max-w-xl mx-auto">
                      हर 15 मिनट में automatic sync — कोई file export नहीं, कोई
                      manual upload नहीं | Automatic sync every 15 minutes — no
                      file export, no manual upload needed
                    </p>
                  </div>
                  <div className="text-center mb-12">
                    <a
                      href={ERPBRIDGE_AGENT_URL}
                      className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl transition"
                    >
                      🖥️ Tally Agent Download करें (.exe) — Windows
                    </a>
                    <p className="text-gray-500 text-xs mt-2">
                      Windows 10 / 11 — 64-bit &nbsp;|&nbsp; Size: ~76 MB
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 mb-10">
                    <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-500 text-gray-900 font-black text-lg w-9 h-9 rounded-full flex items-center justify-center">
                          1
                        </div>
                        <div>
                          <div className="font-bold text-white">
                            Agent Install करें
                          </div>
                          <div className="text-gray-400 text-xs">
                            Install the Agent
                          </div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1 leading-relaxed">
                        <li>
                          ▸ ऊपर दिया{" "}
                          <span className="text-yellow-400 font-semibold">
                            .exe
                          </span>{" "}
                          download करें
                        </li>
                        <li>▸ File पर double-click करें → Install होगा</li>
                        <li>▸ कोई option नहीं आएगा — automatic install</li>
                        <li className="text-gray-500 text-xs pt-1">
                          Download the .exe above → Double-click to install
                          automatically
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-500 text-gray-900 font-black text-lg w-9 h-9 rounded-full flex items-center justify-center">
                          2
                        </div>
                        <div>
                          <div className="font-bold text-white">
                            Sync Token लें
                          </div>
                          <div className="text-gray-400 text-xs">
                            Get your Sync Token
                          </div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1 leading-relaxed">
                        <li>
                          ▸{" "}
                          <a
                            href={ERPBRIDGE_PWA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 underline"
                          >
                            erpbridge.vercel.app
                          </a>{" "}
                          पर जाएं
                        </li>
                        <li>
                          ▸ Google account से{" "}
                          <span className="text-yellow-400 font-semibold">
                            Login
                          </span>{" "}
                          करें
                        </li>
                        <li>
                          ▸{" "}
                          <span className="text-yellow-400 font-semibold">
                            Settings → Get Sync Token
                          </span>{" "}
                          पर click करें
                        </li>
                        <li>
                          ▸ Token{" "}
                          <span className="text-yellow-400 font-semibold">
                            Copy
                          </span>{" "}
                          कर लें
                        </li>
                        <li className="text-gray-500 text-xs pt-1">
                          Login → Settings → Get Sync Token → Copy
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-500 text-gray-900 font-black text-lg w-9 h-9 rounded-full flex items-center justify-center">
                          3
                        </div>
                        <div>
                          <div className="font-bold text-white">
                            Agent में Token डालें
                          </div>
                          <div className="text-gray-400 text-xs">
                            Paste Token in Agent
                          </div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1 leading-relaxed">
                        <li>
                          ▸ Taskbar में नीचे{" "}
                          <span className="text-yellow-400 font-semibold">
                            right side
                          </span>{" "}
                          देखें (clock के पास)
                        </li>
                        <li>
                          ▸{" "}
                          <span className="text-yellow-400 font-semibold">
                            ERPBridge icon
                          </span>{" "}
                          दिखेगा — उस पर click करें
                        </li>
                        <li>
                          ▸ Settings window में{" "}
                          <span className="text-yellow-400 font-semibold">
                            Sync Token
                          </span>{" "}
                          box में token paste करें
                        </li>
                        <li>
                          ▸{" "}
                          <span className="text-yellow-400 font-semibold">
                            Save
                          </span>{" "}
                          दबाएं → &quot;Settings saved successfully&quot; आएगा
                        </li>
                        <li className="text-gray-500 text-xs pt-1">
                          Click tray icon → Paste token → Save
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800 border border-yellow-500/20 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-yellow-500 text-gray-900 font-black text-lg w-9 h-9 rounded-full flex items-center justify-center">
                          4
                        </div>
                        <div>
                          <div className="font-bold text-white">
                            Tally चालू रखें — बस!
                          </div>
                          <div className="text-gray-400 text-xs">
                            Keep Tally running — that&apos;s it!
                          </div>
                        </div>
                      </div>
                      <ul className="text-sm text-gray-300 space-y-1 leading-relaxed">
                        <li>
                          ▸ अपना{" "}
                          <span className="text-yellow-400 font-semibold">
                            Tally
                          </span>{" "}
                          software खोलें
                        </li>
                        <li>
                          ▸ Agent{" "}
                          <span className="text-yellow-400 font-semibold">
                            हर 15 मिनट
                          </span>{" "}
                          में automatically sync करेगा
                        </li>
                        <li>▸ ERPBridge dashboard पर data अपने आप आ जाएगा</li>
                        <li>
                          ▸ Manual कुछ नहीं करना — Agent background में चलता
                          रहेगा
                        </li>
                        <li className="text-gray-500 text-xs pt-1">
                          Open Tally → Agent syncs every 15 min automatically
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5 text-center">
                    <p className="text-yellow-400 font-bold text-sm mb-1">
                      💡 ध्यान रखें / Important
                    </p>
                    <p className="text-gray-300 text-sm">
                      Sync के समय{" "}
                      <span className="text-yellow-400 font-semibold">
                        Tally चालू होना चाहिए
                      </span>{" "}
                      — Agent और Tally दोनों एक ही computer पर होने चाहिए।
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Tally must be running during sync — Agent and Tally must
                      be on the same computer.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Magenta Comparison यहाँ जोड़ा ── */}
              <MagentaComparison />
            </>
          )}

          {p.features && (
            <section className="py-10 px-4 bg-gray-50">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-center mb-1 text-gray-700">
                  Testing कैसे करें / How to Test
                </h3>
                <p className="text-center text-gray-500 text-sm mb-6">
                  Login करें, file upload करें, reports देखें — It&apos;s that
                  simple
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    {
                      step: "01",
                      hi: "Login करें",
                      en: "Open site → Start Free Trial → Google login",
                      icon: "🔐",
                    },
                    {
                      step: "02",
                      hi: "File Upload करें",
                      en: "Dashboard → Upload Data → Tally or FMCG Excel",
                      icon: "📤",
                    },
                    {
                      step: "03",
                      hi: "Reports देखें",
                      en: "Reports → Sales, Purchase, Ledger, P&L, FMCG",
                      icon: "📊",
                    },
                  ].map((t) => (
                    <div
                      key={t.step}
                      className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm"
                    >
                      <div className="text-3xl mb-2">{t.icon}</div>
                      <div className="text-xs text-gray-400 font-bold mb-1">
                        STEP {t.step}
                      </div>
                      <div className="font-bold text-gray-800 mb-1">{t.hi}</div>
                      <div className="text-xs text-gray-500">{t.en}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-yellow-100 border border-yellow-300 rounded-xl p-4 text-center">
                  <p className="text-sm text-yellow-800 font-semibold">
                    ⚠️ गलत data upload हो जाए तो — If wrong data uploaded
                  </p>
                  <p className="text-xs text-yellow-700 mt-1">
                    Settings → Clear All Data → दोबारा सही file upload करें — Go
                    to Settings → Clear All Data → Re-upload correct file
                  </p>
                </div>
              </div>
            </section>
          )}

          <section className="py-10 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Pricing
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div
                  className={`rounded-2xl border-2 ${p.border} p-6 text-center shadow-lg relative`}
                >
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 ${p.bg} text-white text-xs font-bold px-4 py-1 rounded-full`}
                  >
                    New Account / नया Account
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-gray-700 mt-2">
                    पहली बार / First Time
                  </h4>
                  <div
                    className={`text-4xl font-extrabold ${p.textAccent} mb-1`}
                  >
                    {p.newPrice}
                  </div>
                  <p className="text-gray-400 text-sm mb-1">
                    एक बार — 1 साल included
                  </p>
                  <p className="text-gray-400 text-xs mb-4">
                    One time — 1 year included
                  </p>
                  <a
                    href={`/payment?software=${p.software}`}
                    className={`block w-full ${p.bg} text-white font-bold py-2 rounded-xl ${p.hover} transition`}
                  >
                    Start Free Trial — मुफ्त शुरू करें
                  </a>
                </div>
                <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition">
                  <h4 className="text-lg font-bold mb-1 text-gray-700 mt-2">
                    नवीनीकरण / Renewal
                  </h4>
                  <div
                    className={`text-4xl font-extrabold ${p.textAccent} mb-1`}
                  >
                    {p.renewPrice}
                  </div>
                  <p className="text-gray-400 text-sm mb-1">प्रति वर्ष</p>
                  <p className="text-gray-400 text-xs mb-4">Per year</p>
                  <a
                    href={`/payment?software=${p.software}`}
                    className={`block w-full ${p.bg} text-white font-bold py-2 rounded-xl ${p.hover} transition`}
                  >
                    Start Free Trial — मुफ्त शुरू करें
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <section className="py-12 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-1 text-gray-800">
            मुफ्त Invoice Generator
          </h2>
          <p className="text-gray-600 text-sm font-medium mb-1">
            Free GST Invoice Generator
          </p>
          <p className="text-gray-500 mb-6 text-sm">
            GST invoice तुरंत बनाओ — कोई signup नहीं, बिल्कुल मुफ्त | Create GST
            invoices instantly — no signup, completely free
          </p>
          <a
            href="https://pdf-invoice-generator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Invoice बनाओ / Create Invoice →
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-1">
            आज ही शुरू करें — मुफ्त में
          </h2>
          <p className="text-blue-200 text-lg font-medium mb-2">
            Start Today — For Free
          </p>
          <p className="text-blue-100 mb-8">
            7 दिन पूरी तरह मुफ्त। कोई card नहीं, कोई झंझट नहीं। | 7 days
            completely free. No card, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {products.map((p) => (
              <a
                key={p.key}
                href={p.exeUrl}
                className="inline-block bg-white font-bold text-lg px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-100 transition text-gray-800"
              >
                {p.exeLabel.split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a
              href="tel:+919996865069"
              className="text-white font-bold hover:underline"
            >
              📞 9996865069
            </a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="text-white font-bold hover:underline"
            >
              ✉️ prasad.kamta@gmail.com
            </a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:underline"
            >
              💬 WhatsApp करें
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
