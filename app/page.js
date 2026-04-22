"use client";
import { useEffect, useState } from "react";

const HARDWARE_EXE_URL =
  "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://hardware.nishantsoftwares.in";
const SCHOOL_EXE_URL =
  "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const ERPBRIDGE_EXE_URL =
  "https://pub-b7b15d809a3649a48535433d66376f24.r2.dev/ERPBridge%20Setup%200.1.0.exe";
const ERPBRIDGE_PWA_URL = "https://erpbridge.nishantsoftwares.in";
const DENTAL_PWA_URL = "https://dental.nishantsoftwares.in";
const DENTAL_EXE_URL =
  "https://pub-2bb08b9a599048e48fa0e6a4a9f137bb.r2.dev/Nishant%20Dental%20Pro%20Setup%201.0.0.exe";
const HOTEL_EXE_URL =
  "https://pub-f773dd480900429baad9123bdff7a15f.r2.dev/Nishant%20Hotel%20Pro%20Setup%200.1.0.exe";
const CLINIC_EXE_URL =
  "https://pub-70d93acc97f04394bd956a27e7e6b849.r2.dev/ClinicOS%20Setup%201.0.0.exe";
const CLINIC_PWA_URL = "https://clinic.nishantsoftwares.in";
const PSYCHIATRIST_EXE_URL =
  "https://pub-7dcd195985a44c1c81fd0ef44e78fa01.r2.dev/Psychiatrist%20Pro%20Setup%201.0.0.exe";
const PSYCHIATRIST_PWA_URL = "https://psychiatrists.nishantsoftwares.in";
const BILLING_EXE_URL =
  "https://pub-ef61c868f2a7481d8c2857d0de28bd51.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A4%BF%E0%A4%82%E0%A4%97%20Setup%201.0.0.exe";
const BILLING_PWA_URL = "https://billing.nishantsoftwares.in";
const products = [
  {
    key: "erpbridge",
    icon: "📊",
    title: "ERPBridge",
    subtitle: "Business Intelligence",
    descHi: "Tally, Busy, Marg का data — Sales, Purchase, P&L, Ledger एक जगह",
    descEn: "Upload Tally data — instant Sales, Purchase, P&L & Ledger reports",
    exeUrl: ERPBRIDGE_EXE_URL,
    pwaUrl: ERPBRIDGE_PWA_URL,
    software: "erpbridge",
    newPrice: "₹25,000",
    renewPrice: "₹2,500",
    accentText: "text-yellow-400",
    accentBorder: "border-yellow-500",
    accent: "bg-yellow-500",
  },
  {
    key: "dental",
    icon: "🦷",
    title: "Dental Pro",
    subtitle: "Clinic Management",
    descHi: "डेंटल क्लिनिक के लिए — मरीज, prescription, treatment, billing",
    descEn: "Patients, Prescriptions, Treatments & Billing — all in one place",
    exeUrl: DENTAL_EXE_URL,
    pwaUrl: DENTAL_PWA_URL,
    software: "dental",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-green-400",
    accentBorder: "border-green-500",
    accent: "bg-green-600",
  },
  {
    key: "hardware",
    icon: "🔧",
    title: "Hardware Pro",
    subtitle: "Shop Management",
    descHi: "हार्डवेयर दुकान के लिए — बिल, स्टॉक, उधारी, GST",
    descEn: "Billing, stock, credit & GST reports for hardware shops",
    exeUrl: HARDWARE_EXE_URL,
    pwaUrl: HARDWARE_PWA_URL,
    software: "hardware",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500",
    accent: "bg-blue-600",
  },
  {
    key: "billing",
    icon: "🧾",
    title: "निशांत बिलिंग",
    subtitle: "GST Billing Software",
    descHi: "किसी भी दुकान के लिए — बिल, ग्राहक, सामान, GST, WhatsApp share",
    descEn: "GST billing, customers, products & WhatsApp sharing for any shop",
    exeUrl: BILLING_EXE_URL,
    pwaUrl: BILLING_PWA_URL,
    software: "billing",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500",
    accent: "bg-blue-600",
  },
  {
    key: "school",
    icon: "🏫",
    title: "निशांत स्कूल सॉफ्टवेयर",
    subtitle: "School Management",
    descHi: "CBSE स्कूलों के लिए — Students, Fees, Attendance, Exams",
    descEn:
      "Students, Fees, Attendance, Exams & Parent Portal all in one place",
    exeUrl: SCHOOL_EXE_URL,
    pwaUrl: "https://school.nishantsoftwares.in",
    software: "school",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-indigo-400",
    accentBorder: "border-indigo-500",
    accent: "bg-indigo-600",
  },
  {
    key: "ration",
    icon: "🏪",
    title: "Ration Pro",
    subtitle: "राशन दुकान प्रबंधन",
    descHi: "राशन की दुकान के लिए — स्टॉक, बिक्री, उधारी सब एक जगह",
    descEn: "Stock, sales & credit management for ration shops",
    exeUrl: "",
    pwaUrl: "#",
    software: "ration",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-orange-400",
    accentBorder: "border-orange-500",
    accent: "bg-orange-500",
  },
  {
    key: "pharma",
    icon: "💊",
    title: "Pharma Pro",
    subtitle: "Medical Store Management",
    descHi: "दवा की दुकान के लिए — stock, expiry, billing, GST",
    descEn: "Medicine stock, expiry alerts, billing & GST for pharmacies",
    exeUrl: "",
    pwaUrl: "#",
    software: "pharma",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-red-400",
    accentBorder: "border-red-500",
    accent: "bg-red-600",
  },
  {
    key: "heera",
    icon: "💎",
    title: "Heera Pro",
    subtitle: "हीरा उद्योग प्रबंधन",
    descHi: "हीरा उद्योग के लिए — rough, polished, karigar, party ledger",
    descEn:
      "Diamond industry — rough tracking, karigar management & party ledger",
    exeUrl:
      "https://pub-31ce429b28bc4ce8bf56e0a2af375815.r2.dev/Heera%20Desk%20Setup%200.1.0.exe",
    pwaUrl: "https://heera.nishantsoftwares.in",
    software: "heera",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500",
    accent: "bg-cyan-600",
  },
  {
    key: "clinic",
    icon: "🏥",
    title: "Clinic Pro",
    subtitle: "सामान्य क्लिनिक",
    descHi: "डॉक्टर के क्लिनिक के लिए — OPD, prescription, billing",
    descEn: "OPD management, prescriptions & billing for general clinics",
    exeUrl: CLINIC_EXE_URL,
    pwaUrl: CLINIC_PWA_URL,
    software: "clinic",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-teal-400",
    accentBorder: "border-teal-500",
    accent: "bg-teal-600",
  },
  {
    key: "legal",
    icon: "⚖️",
    title: "Legal Pro",
    subtitle: "वकीलों के लिए",
    descHi: "वकीलों के लिए — cases, clients, dates, documents",
    descEn: "Cases, clients, court dates & document management for lawyers",
    exeUrl: "",
    pwaUrl: "#",
    software: "legal",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-purple-400",
    accentBorder: "border-purple-500",
    accent: "bg-purple-600",
  },
  {
    key: "hotel",
    icon: "🏨",
    title: "Hotel Pro",
    subtitle: "Hotel Management",
    descHi: "होटल के लिए — rooms, booking, billing, staff",
    descEn: "Room booking, billing & staff management for hotels",
    exeUrl: HOTEL_EXE_URL,
    pwaUrl: "/hotel",
    software: "hotel",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-pink-400",
    accentBorder: "border-pink-500",
    accent: "bg-pink-600",
  },
  {
    key: "sunar",
    icon: "💍",
    title: "स्वर्णशिल्पी",
    subtitle: "सुनार की दुकान",
    descHi: "सुनार की दुकान के लिए — गिरवी, कारीगर, भाव, बिल",
    descEn: "Jewellery shop — girvi, karigar, rates & GST billing",
    exeUrl:
      "https://pub-f93bf69cda354eeaadadab7f833d5bbf.r2.dev/%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%B6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A5%80%20Setup%200.1.0.exe",
    pwaUrl: "https://sunar.nishantsoftwares.in",
    software: "sunar",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500",
    accent: "bg-amber-500",
  },
  {
    key: "homeo",
    icon: "🌿",
    title: "Homeo Pro",
    subtitle: "होम्योपैथी क्लिनिक",
    descHi: "होम्योपैथी डॉक्टर के लिए — मरीज, दवा, prescription",
    descEn: "Homeopathy clinic — patients, medicines & prescriptions",
    exeUrl:
      "https://pub-b05b804e53a14a4db299e550b4b5538e.r2.dev/HomeoClinic%20Pro%20Setup%200.1.0.exe",
    pwaUrl: "https://homeopathy.nishantsoftwares.in",
    software: "homeo",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-lime-400",
    accentBorder: "border-lime-500",
    accent: "bg-lime-500",
  },
  {
    key: "psychiatrist",
    icon: "🧠",
    title: "Psychiatrist Pro",
    subtitle: "मानसिक स्वास्थ्य क्लिनिक",
    descHi: "मनोचिकित्सक के लिए — मरीज, पर्चा, दवा, follow-up reminder",
    descEn: "Patients, prescriptions, medicines & follow-up SMS reminders",
    exeUrl: PSYCHIATRIST_EXE_URL,
    pwaUrl: PSYCHIATRIST_PWA_URL,
    software: "psychiatrist",
    newPrice: "₹4,999",
    renewPrice: "₹2,500",
    accentText: "text-violet-400",
    accentBorder: "border-violet-500",
    accent: "bg-violet-600",
  },
];

const whyUs = [
  {
    icon: "🇮🇳",
    title: "भारत के लिए बना",
    desc: "GST, HSN code, हिंदी UI — सब कुछ Indian business की ज़रूरत के हिसाब से।",
  },
  {
    icon: "📴",
    title: "Offline भी काम करे",
    desc: "Internet नहीं है? Desktop app बिना internet के भी पूरी तरह काम करती है।",
  },
  {
    icon: "💸",
    title: "सबसे सस्ता — सबसे अच्छा",
    desc: "कम कीमत में ज़्यादा features। कोई hidden charge नहीं।",
  },
  {
    icon: "🔒",
    title: "आपका data — आपके पास",
    desc: "Data आपके device पर। कोई third-party cloud नहीं। पूरी privacy।",
  },
  {
    icon: "📱",
    title: "Mobile + Desktop दोनों",
    desc: "PWA से mobile पर चलाओ, या Desktop app install करो — एक ही software।",
  },
  {
    icon: "🛠️",
    title: "7 दिन मुफ्त Trial",
    desc: "पहले आज़माओ — फिर खरीदो। कोई card नहीं, कोई commitment नहीं।",
  },
  {
    icon: "📞",
    title: "सीधी Support",
    desc: "WhatsApp पर बात करो — कोई IVR नहीं, कोई ticket नहीं। सीधे developer से।",
  },
  {
    icon: "🔄",
    title: "हमेशा अपडेट",
    desc: "नई GST changes, नए features — सब automatic update। कोई extra charge नहीं।",
  },
];

export default function Home() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch("/api/views")
      .then((r) => r.json())
      .then((d) => setViews(d.views));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      {views && (
        <div className="bg-zinc-800 text-center py-2 px-4 text-xs text-amber-400 font-semibold">
          👁️ अब तक {Number(views).toLocaleString("hi-IN")} बार देखा गया
        </div>
      )}

      {/* Hero */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            🆓 7 Days Free Trial — No Card Required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            इंडिया के अपने
            <br />
            <span className="text-amber-400">Business Softwares</span>
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            13 industries के लिए — एक platform पर
          </p>
          <p className="text-gray-500 mb-10">
            Built for Indian businesses — affordable, simple, powerful
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {products.map((p) => (
              <a
                key={p.key}
                href={"/" + p.key}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border ${p.accentBorder} border-opacity-40 bg-zinc-800 hover:bg-zinc-700 transition group`}
              >
                {p.comingSoon && (
                  <span className="absolute top-2 right-2 text-xs bg-zinc-700 text-zinc-400 px-2 py-0.5 rounded-full">
                    Soon
                  </span>
                )}
                <span className="text-3xl">{p.icon}</span>
                <span className={`font-bold text-sm ${p.accentText}`}>
                  {p.title}
                </span>
                <span className="text-zinc-400 text-xs text-center leading-tight">
                  {p.subtitle}
                </span>
                <span className={`text-xs font-bold ${p.accentText}`}>
                  {p.newPrice}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-2">
            Nishant Software क्यों चुनें?
          </h2>
          <p className="text-center text-gray-400 mb-10 text-sm">
            जो बात हमें बाकी सबसे अलग बनाती है
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <div
                key={i}
                className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700 hover:border-amber-500/40 transition"
              >
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{w.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            आज ही शुरू करें — मुफ्त में
          </h2>
          <p className="text-amber-100 mb-6 text-sm">
            7 दिन पूरी तरह मुफ्त — कोई card नहीं | 7 days free, no card required
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-white font-bold">
            <a href="tel:+919996865069" className="hover:underline">
              📞 9996865069
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">
              ✉️ prasad.kamta@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
