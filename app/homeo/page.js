"use client";
import { useEffect } from "react";

const HOMEO_PWA_URL = "https://homeopathy.nishantsoftwares.in";
const HOMEO_EXE_URL = "https://pub-b05b804e53a14a4db299e550b4b5538e.r2.dev/HomeoClinic%20Pro%20Setup%200.1.0.exe";

const features = [
  { icon: "📋", title: "डिजिटल पर्चा", desc: "डॉक्टर पर्चा लिखते हैं — काउंटर पर तुरंत पहुँच जाता है। कागज की जरूरत नहीं।" },
  { icon: "👨‍⚕️", title: "कई डॉक्टर एक साथ", desc: "1 से 5 डॉक्टर अपने-अपने लॉगिन से एक साथ काम कर सकते हैं।" },
  { icon: "💊", title: "400+ दवाएं पहले से भरी", desc: "होम्योपैथी की सभी दवाएं और पोटेंसी ड्रॉपडाउन में पहले से मौजूद हैं।" },
  { icon: "🔄", title: "काउंटर पर फौरन", desc: "डॉक्टर सेव करें — उसी पल काउंटर पर दिख जाए। कोई देरी नहीं।" },
  { icon: "🔍", title: "मरीज खोजें", desc: "नाम या मोबाइल नंबर से मरीज को पलभर में खोजें।" },
  { icon: "📦", title: "दवाओं का हिसाब", desc: "कौन सी दवा है, कौन सी खत्म है — सब एक जगह दिखेगा।" },
];

const howTo = [
  { step: "१", icon: "🔐", title: "गूगल से लॉगिन करें", desc: "मालिक पहले लॉगिन करें — फिर डॉक्टरों को मंजूरी दें।" },
  { step: "२", icon: "⚙️", title: "क्लिनिक की जानकारी भरें", desc: "क्लिनिक का नाम, पता, रजिस्ट्रेशन नंबर डालें।" },
  { step: "३", icon: "👨‍⚕️", title: "डॉक्टर जोड़ें", desc: "डॉक्टर गूगल से लॉगिन करें — मालिक उन्हें मंजूरी दें।" },
  { step: "४", icon: "📋", title: "काम शुरू करें", desc: "डॉक्टर पर्चा लिखें — काउंटर पर फौरन दिखे।" },
];

export default function HomeoPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const emailFromUrl = params?.get("email") || "";

  const pay = async () => {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 4999, plan: "new", software: "homeo" }),
    });
    const order = await res.json();
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 4999 * 100,
      currency: "INR",
      name: "निशांत सॉफ्टवेयर्स",
      description: "HomeoClinic Pro — 1 साल",
      order_id: order.id,
      prefill: { email: emailFromUrl },
      handler: async (response) => {
        await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            email: emailFromUrl,
            name: "",
            phone: "",
            plan: "new",
            software: "homeo",
          }),
        });
        alert("भुगतान सफल! सॉफ्टवेयर चालू हो गया।");
      },
    });
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-green-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर्स</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-5 py-1.5 rounded-full mb-5 border border-white/30">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            🌿 HomeoClinic Pro<br />
            <span className="text-green-200">होम्योपैथी क्लिनिक का डिजिटल सहायक</span>
          </h1>
          <p className="text-xl mb-2 font-semibold text-white/90">
            डॉक्टर पर्चा लिखें — काउंटर पर फौरन पहुँचे।
          </p>
          <p className="text-base mb-10 text-white/70">
            कई डॉक्टर एक साथ · रियल-टाइम · 400+ दवाएं · स्टॉक का हिसाब
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <a href={HOMEO_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-green-800 font-extrabold text-xl px-10 py-4 rounded-2xl shadow-xl hover:bg-green-50 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-sm text-white/60">👉 Chrome menu ⋮ → Add to Home Screen</p>
            </div>
            <a href={HOMEO_EXE_URL}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-lg px-8 py-3 rounded-2xl hover:bg-white/25 transition">
              🖥️ Windows के लिए डाउनलोड करें
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ इंस्टॉल करते समय यह संदेश आ सकता है — घबराएं नहीं</p>
          <p className="text-base text-gray-600 mb-3">Windows 11 में <strong>Smart App Control</strong> नाम की सुरक्षा होती है। यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-base text-gray-600 space-y-1">
            <li>१. Start menu में <strong>Windows Security</strong> खोलें</li>
            <li>२. <strong>App &amp; browser control</strong> पर क्लिक करें</li>
            <li>३. <strong>Smart App Control</strong> को <strong>बंद (Off)</strong> करें</li>
            <li>४. .exe फाइल दोबारा चलाएं</li>
            <li>५. इंस्टॉल के बाद वापस चालू कर सकते हैं</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-2 text-green-400">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-400 text-base mb-8">होम्योपैथी क्लिनिक के लिए खास बनाया गया</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-green-900/40 rounded-xl px-5 py-4">
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="text-green-400 font-bold text-base mb-1">{f.title}</div>
                <div className="text-gray-300 text-sm leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8 text-gray-800">कैसे शुरू करें?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-green-200 rounded-xl p-4 text-center shadow-sm">
                <div className="w-8 h-8 bg-green-700 text-white font-black rounded-full flex items-center justify-center mx-auto mb-2">{h.step}</div>
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="font-bold text-gray-800 text-sm mb-1">{h.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-green-600 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-5xl font-extrabold text-green-700 mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-4">एक बार — १ साल शामिल</p>
              <a href={HOMEO_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition mb-3">
                ७ दिन मुफ्त आज़माएं
              </a>
              <button onClick={pay}
                className="block w-full bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition">
                {"💳 अभी खरीदें — ₹4,999"}
              </button>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीनीकरण</h3>
              <div className="text-5xl font-extrabold text-green-700 mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-4">प्रति वर्ष</p>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition">
                💬 व्हाट्सएप करें
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-white/80 mb-6 text-base">७ दिन पूरी तरह मुफ्त — कोई कार्ड नहीं</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-base font-semibold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ ईमेल</a>
          </div>
        </div>
      </section>
    </main>
  );
}