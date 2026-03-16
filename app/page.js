"use client";

import { useState } from "react";

const EXE_DOWNLOAD_URL = "https://github.com/kp1153/nishant/releases/latest/download/nishant-setup.exe";

const features = [
  { icon: "🧾", title: "बिलिंग", desc: "GST के साथ तुरंत बिल बनाओ — CGST, SGST automatic" },
  { icon: "📦", title: "स्टॉक", desc: "सामान का पूरा हिसाब — कम हो तो alert" },
  { icon: "👥", title: "ग्राहक सूची", desc: "हर ग्राहक की पूरी history एक जगह" },
  { icon: "💸", title: "उधारी", desc: "किसने कितना लिया, कितना बाकी — WhatsApp reminder" },
  { icon: "📊", title: "रिपोर्ट", desc: "रोज, महीने, साल की बिक्री रिपोर्ट" },
  { icon: "🖨️", title: "Print & PDF", desc: "बिल print करो या PDF download करो" },
];

export default function Home() {
  const [copied, setCopied] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं चाहिए
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            निशांत हार्डवेयर<br />प्रबंधन सॉफ्टवेयर
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto">
            हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, GST रिपोर्ट सब एक जगह। Windows पर चलता है।
          </p>
          <a
            href={EXE_DOWNLOAD_URL}
            className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition"
          >
            ⬇️ मुफ्त में डाउनलोड करें (.exe)
          </a>
          <p className="text-blue-200 text-sm mt-3">Windows 10 / 11 — 64-bit</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">क्या-क्या मिलता है?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="rounded-2xl border-2 border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-gray-700">सालाना प्लान</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-6">प्रति वर्ष</p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ सभी features</li>
                <li>✅ अपडेट मुफ्त</li>
                <li>✅ WhatsApp support</li>
                <li>✅ 7 दिन free trial</li>
              </ul>
              <a
                href={EXE_DOWNLOAD_URL}
                className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Trial शुरू करें
              </a>
            </div>

            <div className="rounded-2xl border-2 border-blue-600 p-8 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                सबसे अच्छा
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">एकमुश्त</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-1">₹5,000</div>
              <p className="text-gray-400 text-sm mb-6">एक बार — हमेशा के लिए</p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ सभी features</li>
                <li>✅ जिंदगी भर अपडेट</li>
                <li>✅ WhatsApp support</li>
                <li>✅ 7 दिन free trial</li>
              </ul>
              <a
                href={EXE_DOWNLOAD_URL}
                className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Trial शुरू करें
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Free Invoice Generator */}
      <section className="py-12 px-4 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">मुफ्त Invoice Generator</h2>
          <p className="text-gray-500 mb-6 text-sm">GST invoice तुरंत बनाओ — कोई signup नहीं, बिल्कुल मुफ्त</p>
          <a
            href="https://pdf-invoice-generator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Invoice बनाओ →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-blue-100 mb-8">7 दिन पूरी तरह मुफ्त। कोई card नहीं, कोई झंझट नहीं।</p>
          <a
            href={EXE_DOWNLOAD_URL}
            className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition"
          >
            ⬇️ अभी डाउनलोड करें
          </a>
          <p className="text-blue-200 text-sm mt-4">
            मदद चाहिए?{" "}
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              WhatsApp करें
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}