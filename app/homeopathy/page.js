"use client";
import { useEffect } from "react";

const HOMEO_PWA_URL = "https://homeopathy.nishantsoftwares.in";
const HOMEO_EXE_URL = "https://pub-b05b804e53a14a4db299e550b4b5538e.r2.dev/HomeoClinic%20Pro%20Setup%200.1.0.exe";

export default function HomeoPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

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
      handler: async (response) => {
        alert("भुगतान सफल! सॉफ्टवेयर चालू हो गया।");
      },
    });
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Topbar */}
      <div className="bg-green-700 py-2 px-4 text-center text-sm font-bold text-white flex flex-wrap justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="text-white/50">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      {/* Nav */}
      <nav className="bg-gray-900 border-b border-gray-800 py-3 px-4 flex justify-between items-center">
        <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर्स</a>
        <a href="/" className="text-xs text-gray-400 border border-gray-700 px-3 py-1.5 rounded-lg hover:text-white transition">← सभी उत्पाद</a>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16 px-4 text-center">
        <div className="max-w-[720px] mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-5 py-1.5 text-xs font-bold mb-5">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-[clamp(28px,6vw,52px)] font-black leading-tight mb-4">
            🌿 HomeoClinic Pro<br />
            <span className="text-green-200">होम्योपैथी क्लिनिक का डिजिटल सहायक</span>
          </h1>
          <p className="text-lg font-semibold text-white/90 mb-2">डॉक्टर पर्चा लिखें — काउंटर पर फौरन पहुँचे।</p>
          <p className="text-[15px] text-white/70 mb-10">कई डॉक्टर एक साथ · रियल-टाइम · 400+ दवाएं · स्टॉक का हिसाब</p>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <a href={HOMEO_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-green-800 font-black text-lg px-10 py-4 rounded-2xl hover:bg-green-50 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-xs text-white/60">👉 Chrome menu ⋮ → Add to Home Screen</p>
            </div>
            <a href={HOMEO_EXE_URL} className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-base px-8 py-3 rounded-2xl hover:bg-white/25 transition">
              🖥️ Windows के लिए डाउनलोड करें
            </a>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="bg-yellow-50 border-b-4 border-yellow-400 py-8 px-4">
        <div className="max-w-[720px] mx-auto bg-white border-2 border-yellow-400 rounded-2xl p-6">
          <p className="text-lg font-black text-gray-800 mb-3">⚠️ इंस्टॉल करते समय यह संदेश आ सकता है — घबराएं नहीं</p>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-3">Windows 11 में <strong>Smart App Control</strong> नाम की सुरक्षा होती है। यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-[15px] text-gray-600 pl-5 leading-[2]">
            <li>१. Start menu में <strong>Windows Security</strong> खोलें</li>
            <li>२. <strong>App & browser control</strong> पर क्लिक करें</li>
            <li>३. <strong>Smart App Control</strong> को <strong>बंद (Off)</strong> करें</li>
            <li>४. .exe फाइल दोबारा चलाएं</li>
            <li>५. इंस्टॉल के बाद वापस चालू कर सकते हैं</li>
          </ol>
        </div>
      </section>

      {/* Role Guide */}
      <section className="bg-green-50 py-14 px-4">
        <h2 className="text-center text-3xl font-black text-green-900 mb-2">👇 आप कौन हैं? यहाँ से शुरू करें</h2>
        <p className="text-center text-gray-600 mb-10">अपना role देखें और सीधे काम पर लग जाएं</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          
          <div className="bg-orange-50 border-2 border-orange-400 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4"><span className="text-4xl">👑</span><span className="text-2xl font-black text-orange-800">मालिक</span></div>
            <ul className="flex flex-col gap-3">
              {[ "Google से Login करें", "क्लिनिक का नाम, पता और रजिस्ट्रेशन नंबर भरें", "डॉक्टर और काउंटर स्टाफ को मंजूरी दें", "PIN Setup में जाएं — डॉक्टर और काउंटर स्टाफ को 4 अंकों का PIN दें", "दवाओं का स्टॉक जोड़ें और मैनेज करें", "सभी पर्चे और रिपोर्ट देखें" ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="min-w-[28px] h-7 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm">{i+1}</div>
                  <span className="font-bold text-gray-800 text-base leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🩺</span><span className="text-2xl font-black text-green-800">डॉक्टर</span></div>
            <ul className="flex flex-col gap-3">
              {[ "Google से Login करें — मालिक से मंजूरी लें", "मरीज का नाम या मोबाइल से खोजें या नया बनाएं", "शिकायत लिखें और दवाएं चुनें", "पोटेंसी, मात्रा और समय भरें", "Save करें — पर्चा काउंटर पर फौरन पहुँच जाएगा" ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="min-w-[28px] h-7 bg-green-500 text-white rounded-full flex items-center justify-center font-black text-sm">{i+1}</div>
                  <span className="font-bold text-gray-800 text-base leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-50 border-2 border-blue-500 rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4"><span className="text-4xl">💊</span><span className="text-2xl font-black text-blue-800">काउंटर स्टाफ</span></div>
            <ul className="flex flex-col gap-3">
              {[ "4 अंकों का PIN डालकर Login करें", "नए पर्चे की सूची देखें", "दवाएं निकालें और Dispense करें", "Print निकालें या मरीज को दिखाएं", "स्टॉक कम हो तो मालिक को बताएं" ].map((t, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="min-w-[28px] h-7 bg-blue-500 text-white rounded-full flex items-center justify-center font-black text-sm">{i+1}</div>
                  <span className="font-bold text-gray-800 text-base leading-snug">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl font-black text-green-400 mb-2">क्या-क्या मिलेगा?</h2>
          <p className="text-gray-400 mb-8">होम्योपैथी क्लिनिक के लिए खास बनाया गया</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[ {i:"📋",t:"डिजिटल पर्चा",d:"डॉक्टर पर्चा लिखते हैं — काउंटर पर तुरंत पहुँच जाता है। कागज की जरूरत नहीं।"}, {i:"👨‍⚕️",t:"कई डॉक्टर एक साथ",d:"1 से 5 डॉक्टर अपने-अपने लॉगिन से एक साथ काम कर सकते हैं。"}, {i:"💊",t:"400+ दवाएं पहले से भरी",d:"होम्योपैथी की सभी दवाएं और पोटेंसी ड्रॉपडाउन में पहले से मौजूद हैं。"}, {i:"🔄",t:"काउंटर पर फौरन",d:"डॉक्टर सेव करें — उसी पल काउंटर पर दिख जाए। कोई देरी नहीं。"}, {i:"🔍",t:"मरीज खोजें",d:"नाम या मोबाइल नंबर से मरीज को पलभर में खोजें。"}, {i:"📦",t:"दवाओं का हिसाब",d:"कौन सी दवा है, कौन सी खत्म है — सब एक जगह दिखेगा。"} ].map((f, idx) => (
              <div key={idx} className="bg-gray-800 border border-green-900/40 rounded-xl p-5 text-left">
                <div className="text-3xl mb-2">{f.i}</div>
                <div className="text-green-400 font-bold text-[15px] mb-1">{f.t}</div>
                <div className="text-gray-300 text-[13px] leading-relaxed">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-[720px] mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-8">कैसे शुरू करें?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[ {s:"१",i:"🔐",t:"गूगल से लॉगिन करें",d:"मालिक पहले लॉगिन करें — फिर डॉक्टरों को मंजूरी दें。"}, {s:"२",i:"⚙️",t:"क्लिनिक की जानकारी भरें",d:"क्लिनिक का नाम, पता, रजिस्ट्रेशन नंबर डालें。"}, {s:"३",i:"👨‍⚕️",t:"डॉक्टर जोड़ें",d:"डॉक्टर गूगल से लॉगिन करें — मालिक उन्हें मंजूरी दें。"}, {s:"४",i:"📋",t:"काम शुरू करें",d:"डॉक्टर पर्चा लिखें — काउंटर पर फौरन दिखे。"} ].map((h, i) => (
              <div key={i} className="bg-white border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="w-8 h-8 bg-green-700 text-white font-black rounded-full flex items-center justify-center mx-auto mb-2 text-sm">{h.s}</div>
                <div className="text-2xl mb-2">{h.i}</div>
                <div className="font-bold text-gray-900 text-[13px] mb-1">{h.t}</div>
                <div className="text-gray-500 text-[12px] leading-relaxed">{h.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-8">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-green-600 rounded-2xl p-7 relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[13px] font-bold px-4 py-1 rounded-full whitespace-nowrap">नया खाता</div>
              <div className="text-lg font-bold text-gray-600 mt-4">पहली बार</div>
              <div className="text-5xl font-black text-green-700 my-1">₹4,999</div>
              <div className="text-gray-400 text-[15px] mb-5">एक बार — १ साल शामिल</div>
              <a href={HOMEO_PWA_URL} target="_blank" className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl mb-3 hover:opacity-90">७ दिन मुफ्त आज़माएं</a>
              <button onClick={pay} className="block w-full bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800">💳 अभी खरीदें — ₹4,999</button>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-7">
              <div className="text-lg font-bold text-gray-600 mt-4">नवीनीकरण</div>
              <div className="text-5xl font-black text-green-700 my-1">₹2,500</div>
              <div className="text-gray-400 text-[15px] mb-5">प्रति वर्ष</div>
              <a href="https://wa.me/919996865069" target="_blank" className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:opacity-90">💬 व्हाट्सएप करें</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-12 px-4 text-center text-white">
        <div className="max-w-[560px] mx-auto">
          <h2 className="text-2xl font-black mb-2">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-white/80 mb-6">७ दिन पूरी तरह मुफ्त — कोई कार्ड नहीं</p>
          <div className="flex flex-wrap justify-center gap-4 font-semibold text-[15px]">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="opacity-50">|</span>
            <a href="https://wa.me/919996865069" target="_blank">💬 व्हाट्सएप</a>
            <span className="opacity-50">|</span>
            <a href="mailto:prasad.kamta@gmail.com">✉️ ईमेल</a>
          </div>
        </div>
      </section>
    </main>
  );
}