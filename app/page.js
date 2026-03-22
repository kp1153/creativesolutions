"use client";

const HARDWARE_EXE_URL = "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://nishant-ten.vercel.app";
const SCHOOL_EXE_URL = "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const ERPBRIDGE_EXE_URL = "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Setup%200.1.0.exe";
const ERPBRIDGE_PWA_URL = "https://erpbridge.vercel.app";

const products = [
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
    desc: "हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, GST रिपोर्ट सब एक जगह।",
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
    desc: "Built for CBSE private schools — Students, Fees, Attendance, Exams, Results & Parent Portal all in one place.",
    exeUrl: SCHOOL_EXE_URL,
    pwaUrl: "https://school-saas-azure.vercel.app",
    pwaLabel: "📱 Android / Tablet par Install Karen",
    exeLabel: "🖥️ Download for Windows (.exe)",
    software: "school",
    newPrice: "₹5,500",
    renewPrice: "₹2,500",
  },
  {
    key: "erpbridge",
    color: "yellow",
    gradient: "from-yellow-600 via-yellow-500 to-amber-600",
    border: "border-yellow-500",
    textAccent: "text-yellow-600",
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-400",
    badge: "🆓 7 Days Completely Free — No Card Required",
    title: "ERPBridge Business Intelligence",
    desc: "Tally, Busy, Marg ka data upload karo — Sales, Purchase, P&L aur Party Ledger reports ek jagah.",
    exeUrl: ERPBRIDGE_EXE_URL,
    pwaUrl: ERPBRIDGE_PWA_URL,
    pwaLabel: "📱 Android / Tablet par Install Karen",
    exeLabel: "🖥️ Windows par Download Karen (.exe)",
    software: "erpbridge",
    newPrice: "₹11,999",
    renewPrice: "₹4,999",
    titleColor: "text-gray-900",
    descColor: "text-yellow-900",
    exeBtnClass: "bg-gray-900 text-yellow-400 hover:bg-gray-800",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <section className="bg-amber-500 py-3 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3 text-white font-bold text-lg">
          <a href="tel:+919996865069" className="flex items-center gap-2 hover:underline">📞 9996865069</a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:prasad.kamta@gmail.com" className="flex items-center gap-2 hover:underline">✉️ prasad.kamta@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">💬 WhatsApp करें</a>
        </div>
      </section>

      {products.map((p) => (
        <div key={p.key}>
          <section className={`bg-gradient-to-br ${p.gradient} text-white py-16 px-4 text-center`}>
            <div className="max-w-3xl mx-auto">
              <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">{p.badge}</div>
              <h2 className={`text-3xl md:text-5xl font-extrabold mb-3 leading-tight ${p.titleColor || ""}`}>{p.title}</h2>
              <p className={`text-lg mb-6 max-w-xl mx-auto ${p.descColor || "text-white/80"}`}>{p.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={p.exeUrl} className={`inline-block font-bold text-lg px-8 py-3 rounded-2xl shadow-lg transition ${p.exeBtnClass || "bg-white text-gray-900 hover:bg-gray-100"}`}>{p.exeLabel}</a>
                <div className="flex flex-col items-center">
                  <a href={p.pwaUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">{p.pwaLabel}</a>
                  <p className="text-xs mt-1 opacity-80">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
                </div>
              </div>
              <p className="text-sm mt-3 opacity-70">Windows 10/11 — 64-bit &nbsp;|&nbsp; Android Chrome par bhi chalta hai</p>
            </div>
          </section>

          <section className="py-10 px-4 bg-gray-50">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Pricing</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className={`rounded-2xl border-2 ${p.border} p-6 text-center shadow-lg relative`}>
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${p.bg} text-white text-xs font-bold px-4 py-1 rounded-full`}>New Account</div>
                  <h4 className="text-lg font-bold mb-1 text-gray-700 mt-2">First Time</h4>
                  <div className={`text-4xl font-extrabold ${p.textAccent} mb-1`}>{p.newPrice}</div>
                  <p className="text-gray-400 text-sm mb-4">One time — 1 year included</p>
                  <a href={`/payment?software=${p.software}`} className={`block w-full ${p.bg} text-white font-bold py-2 rounded-xl ${p.hover} transition`}>Start Free Trial</a>
                </div>
                <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm hover:shadow-md transition">
                  <h4 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h4>
                  <div className={`text-4xl font-extrabold ${p.textAccent} mb-1`}>{p.renewPrice}</div>
                  <p className="text-gray-400 text-sm mb-4">Per year</p>
                  <a href={`/payment?software=${p.software}`} className={`block w-full ${p.bg} text-white font-bold py-2 rounded-xl ${p.hover} transition`}>Start Free Trial</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}

      <section className="py-12 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">मुफ्त Invoice Generator</h2>
          <p className="text-gray-500 mb-6 text-sm">GST invoice तुरंत बनाओ — कोई signup नहीं, बिल्कुल मुफ्त</p>
          <a href="https://pdf-invoice-generator.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition">Invoice बनाओ →</a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-blue-100 mb-8">7 दिन पूरी तरह मुफ्त। कोई card नहीं, कोई झंझट नहीं।</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {products.map((p) => (
              <a key={p.key} href={p.exeUrl} className="inline-block bg-white font-bold text-lg px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-100 transition text-gray-800">{p.exeLabel.split(" ").slice(0, 2).join(" ")}</a>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="tel:+919996865069" className="text-white font-bold hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="text-white font-bold hover:underline">✉️ prasad.kamta@gmail.com</a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">💬 WhatsApp करें</a>
          </div>
        </div>
      </section>

    </main>
  );
}