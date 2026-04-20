"use client";

import { useEffect, Suspense } from "react";

// --- Data ---
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

// --- Payment Button Component (Pure JS, no 'as') ---
function PaymentButton() {
  const handlePayment = async () => {
    let emailFromUrl = "";
    if (typeof window !== "undefined") {
      emailFromUrl = new URLSearchParams(window.location.search).get("email") || "";
    }

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 4999, plan: "new", software: "homeo" }),
      });
      const order = await res.json();

      // Pure JavaScript way - no 'as' syntax
      const Razorpay = window.Razorpay;
      if (!Razorpay) {
        console.error("Razorpay SDK not loaded yet");
        alert("पेज रीफ्रेश करके दोबारा कोशिश करें।");
        return;
      }

      const rzp = new Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 4999 * 100,
        currency: "INR",
        name: "निशांत सॉफ्टवेयर्स",
        description: "HomeoClinic Pro — 1 साल",
        order_id: order.id,
        prefill: { email: emailFromUrl },
        handler: async function(response) {
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
    } catch (error) {
      console.error("Payment error:", error);
      alert("भुगतान शुरू करने में त्रुटि हुई। कृपया बाद में प्रयास करें।");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="block w-full bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition"
    >
      💳 अभी खरीदें — ₹4,999
    </button>
  );
}

// --- Main Component ---
export default function HomeoClinicProLanding() {
  useEffect(() => {
    // Load Razorpay script
    if (!document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]')) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top Bar */}
      <div className="bg-green-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर्स</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      {/* Hero Section */}
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
              <a href={HOMEO_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-green-800 font-extrabold text-xl px-10 py-4 rounded-2xl shadow-xl hover:bg-green-50 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-sm text-white/60">👉 Chrome menu ⋮ → Add to Home Screen</p>
            </div>
            <a href={HOMEO_EXE_URL} className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-lg px-8 py-3 rounded-2xl hover:bg-white/25 transition">
              🖥️ Windows के लिए डाउनलोड करें
            </a>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ इंस्टॉल करते समय यह संदेश आ सकता है — घबराएं नहीं</p>
          <p className="text-base text-gray-600 mb-3">Windows 11 में <strong>Smart App Control</strong> नाम की सुरक्षा होती है। यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-base text-gray-600 space-y-1 list-decimal list-inside">
            <li>Start menu में <strong>Windows Security</strong> खोलें</li>
            <li><strong>App &amp; browser control</strong> पर क्लिक करें</li>
            <li><strong>Smart App Control</strong> को <strong>बंद (Off)</strong> करें</li>
            <li>.exe फाइल दोबारा चलाएं</li>
            <li>इंस्टॉल के बाद वापस चालू कर सकते हैं</li>
          </ol>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center text-green-900 mb-2">👇 आप कौन हैं? यहाँ से शुरू करें</h2>
          <p className="text-center text-gray-600 text-base mb-12">अपना role देखें और सीधे काम पर लग जाएं</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Owner Card */}
            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4"><span className="text-4xl">👑</span><h3 className="text-2xl font-black text-amber-700">मालिक</h3></div>
              <ul className="space-y-3">
                {["Google से Login करें", "क्लिनिक का नाम, पता और रजिस्ट्रेशन नंबर भरें", "डॉक्टर और काउंटर स्टाफ को मंजूरी दें", "दवाओं का स्टॉक जोड़ें और मैनेज करें", "सभी पर्चे और रिपोर्ट देखें"].map((text, idx) => (
                  <li key={idx} className="flex gap-2 items-start"><span className="bg-amber-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">{idx+1}</span><span className="text-gray-800 font-medium">{text}</span></li>
                ))}
              </ul>
            </div>
            {/* Doctor Card */}
            <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🩺</span><h3 className="text-2xl font-black text-green-700">डॉक्टर</h3></div>
              <ul className="space-y-3">
                {["Google से Login करें — मालिक से मंजूरी लें", "मरीज का नाम या मोबाइल से खोजें या नया बनाएं", "शिकायत लिखें और दवाएं चुनें", "पोटेंसी, मात्रा और समय भरें", "Save करें — पर्चा काउंटर पर फौरन पहुँच जाएगा"].map((text, idx) => (
                  <li key={idx} className="flex gap-2 items-start"><span className="bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">{idx+1}</span><span className="text-gray-800 font-medium">{text}</span></li>
                ))}
              </ul>
            </div>
            {/* Counter Staff Card */}
            <div className="bg-blue-50 border-2 border-blue-400 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4"><span className="text-4xl">💊</span><h3 className="text-2xl font-black text-blue-700">काउंटर स्टाफ</h3></div>
              <ul className="space-y-3">
                {["4 अंकों का PIN डालकर Login करें", "नए पर्चे की सूची देखें", "दवाएं निकालें और Dispense करें", "Print निकालें या मरीज को दिखाएं", "स्टॉक कम हो तो मालिक को बताएं"].map((text, idx) => (
                  <li key={idx} className="flex gap-2 items-start"><span className="bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-0.5 flex-shrink-0">{idx+1}</span><span className="text-gray-800 font-medium">{text}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-2 text-green-400">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-400 text-base mb-12">होम्योपैथी क्लिनिक के लिए खास बनाया गया</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-green-900/40 rounded-xl p-5 hover:border-green-500/50 transition">
                <div className="text-4xl mb-3">{f.icon}</div>
                <div className="text-green-400 font-bold text-lg mb-1">{f.title}</div>
                <div className="text-gray-300 text-sm leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">कैसे शुरू करें?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-green-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 bg-green-700 text-white font-black rounded-full flex items-center justify-center mx-auto mb-3 text-lg">{h.step}</div>
                <div className="text-3xl mb-3">{h.icon}</div>
                <div className="font-bold text-gray-800 text-base mb-1">{h.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* New Account Card */}
            <div className="rounded-2xl border-2 border-green-600 p-6 text-center shadow-lg relative bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-5 py-1 rounded-full whitespace-nowrap">नया खाता</div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-3">पहली बार</h3>
              <div className="text-5xl font-extrabold text-green-700 mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-5">एक बार — १ साल शामिल</p>
              <a href={HOMEO_PWA_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition mb-3">७ दिन मुफ्त आज़माएं</a>
              <Suspense fallback={<button className="block w-full bg-gray-800 text-white font-bold py-3 rounded-xl">लोड हो रहा...</button>}>
                <PaymentButton />
              </Suspense>
            </div>
            {/* Renewal Card */}
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीनीकरण</h3>
              <div className="text-5xl font-extrabold text-green-700 mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-5">प्रति वर्ष</p>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:opacity-90 transition">💬 व्हाट्सएप करें</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-green-700 py-16 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-3">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-white/80 mb-8 text-lg">७ दिन पूरी तरह मुफ्त — कोई कार्ड नहीं</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-base font-semibold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
            <span className="hidden sm:inline text-white/50">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ ईमेल</a>
          </div>
        </div>
      </section>
    </main>
  );
}