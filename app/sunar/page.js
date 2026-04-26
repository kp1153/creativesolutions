"use client";
import { useEffect, useState } from "react";

const SUNAR_PWA_URL = "https://sunar.nishantsoftwares.in";
const SUNAR_EXE_URL = "https://pub-f93bf69cda354eeaadadab7f833d5bbf.r2.dev/%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%B0%E0%A5%8D%E0%A4%A3%E0%A4%B6%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A5%80%20Setup%200.1.0.exe";

const features = [
  { icon: "🏦", title: "गिरवी का हिसाब", desc: "किसने क्या रखा, कितना ब्याज बना — एक नज़र में। WhatsApp पर हिसाब भेजो।" },
  { icon: "🔨", title: "कारीगर का हिसाब", desc: "किसको कितना सोना दिया, क्या बनाने को, मजदूरी कितनी बनी।" },
  { icon: "📈", title: "आज का भाव", desc: "सोने-चाँदी का रोज़ का भाव खुद डालो — बिल में अपने आप जुड़ेगा।" },
  { icon: "🧾", title: "बिल बनाओ", desc: "वजन डालो, टंच चुनो, मेकिंग चार्ज जोड़ो — GST बिल तैयार।" },
  { icon: "💬", title: "WhatsApp बिल", desc: "बिल या गिरवी की रसीद सीधे ग्राहक के WhatsApp पर भेजो।" },
  { icon: "☁️", title: "डेटा सुरक्षित", desc: "फोन टूटे या खो जाए — डेटा क्लाउड पर सुरक्षित रहेगा।" },
];

const manualSteps = [
  {
    step: "१",
    icon: "📲",
    title: "सॉफ्टवेयर इंस्टॉल करें",
    color: "amber",
    points: [
      { label: "Android मोबाइल पर", text: "Chrome browser में वेबसाइट खोलें → ऊपर दाईं तरफ तीन बिंदु (⋮) दबाएं → \"Add to Home Screen\" चुनें → ऐप होम स्क्रीन पर आ जाएगा।" },
      { label: "Windows कंप्यूटर पर", text: "नीचे दिया .exe डाउनलोड करें और चलाएं। अगर Windows रोके तो Start Menu → Windows Security → App & browser control → Smart App Control बंद करें → .exe दोबारा चलाएं → इंस्टॉल के बाद वापस चालू कर सकते हैं।" },
      { label: "ध्यान दें", text: "सॉफ्टवेयर पूरी तरह सुरक्षित है — Windows की यह चेतावनी नए सॉफ्टवेयर के लिए आम है।" },
    ],
  },
  {
    step: "२",
    icon: "🔐",
    title: "गूगल से लॉगिन करें",
    color: "amber",
    points: [
      { label: "कैसे करें", text: "ऐप खोलें → \"Google से लॉगिन करें\" बटन दबाएं → अपना Gmail अकाउंट चुनें → लॉगिन हो जाएगा।" },
      { label: "पासवर्ड नहीं बनाना", text: "कोई अलग पासवर्ड याद नहीं रखना — जो Gmail है, वही काम करेगा।" },
      { label: "मुफ्त परीक्षण", text: "पहली बार लॉगिन करते ही 7 दिन का मुफ्त परीक्षण अपने आप शुरू हो जाता है — कोई कार्ड नहीं चाहिए।" },
    ],
  },
  {
    step: "३",
    icon: "⚙️",
    title: "दुकान की जानकारी भरें — एक बार",
    color: "amber",
    points: [
      { label: "कहाँ जाएं", text: "नीचे मेनू में ⚙️ सेटिंग पर जाएं।" },
      { label: "क्या-क्या भरें", text: "दुकान का नाम, मालिक का नाम, मोबाइल नंबर, पूरा पता और GSTIN (अगर हो तो)।" },
      { label: "फायदा", text: "यह जानकारी एक बार भरने के बाद हर बिल पर अपने आप छपती है — बार-बार टाइप नहीं करना पड़ता।" },
      { label: "GSTIN", text: "GSTIN वैकल्पिक है — न हो तो खाली छोड़ दें।" },
    ],
  },
  {
    step: "४",
    icon: "📈",
    title: "आज का भाव डालें — रोज़ सुबह",
    color: "amber",
    points: [
      { label: "यह पहला काम है", text: "बिल बनाने से पहले भाव ज़रूर डालें — वरना बिल में रेट नहीं आएगा।" },
      { label: "सोने का भाव", text: "📈 भाव पेज जाएं → सोना चुनें → टंच चुनें (24K / 22K / 18K / 916 / 750) → प्रति 10 ग्राम का भाव डालें → सेव करें।" },
      { label: "चाँदी का भाव", text: "चाँदी चुनें → शुद्धता चुनें (999 / 925 / 800) → भाव डालें → सेव करें।" },
      { label: "कई टंच डाल सकते हैं", text: "जितने टंच चाहें, अलग-अलग सेव करें। बिल बनाते वक्त जो टंच चुनेंगे, उसी का भाव अपने आप आएगा।" },
    ],
  },
  {
    step: "५",
    icon: "🏦",
    title: "गिरवी का हिसाब रखें",
    color: "amber",
    points: [
      { label: "नई एंट्री", text: "गिरवी पेज जाएं → '+ नई एंट्री' दबाएं → ग्राहक का नाम, मोबाइल नंबर, गहने का विवरण (जैसे: सोने की अंगूठी), वजन और दी गई रकम भरें।" },
      { label: "ब्याज दर", text: "1% से 3% तक प्रति माह — जो बटन दबाएं वह चुन जाएगा। डिफ़ॉल्ट 1.5% है।" },
      { label: "ब्याज अपने आप बनता है", text: "सॉफ्टवेयर हर गिरवी का ब्याज खुद कैलकुलेट करता है — दिन गिनना नहीं पड़ता, आंशिक महीने का भी सही हिसाब लगता है।" },
      { label: "गिरवी बंद करना", text: "जब ग्राहक सामान छुड़ाने आए — उस एंट्री पर 'गिरवी बंद करें' दबाएं। रिकॉर्ड 'बंद' टैब में सुरक्षित रहेगा।" },
      { label: "खोजें", text: "ऊपर search बॉक्स में नाम या मोबाइल नंबर से कोई भी एंट्री तुरंत ढूंढें।" },
    ],
  },
  {
    step: "६",
    icon: "🧾",
    title: "बिल बनाएं",
    color: "amber",
    points: [
      { label: "नया बिल", text: "बिल पेज जाएं → ग्राहक का नाम और मोबाइल नंबर डालें → सामान का नाम लिखें (जैसे: सोने का हार)।" },
      { label: "धातु और टंच चुनें", text: "सोना या चाँदी चुनें → टंच चुनें (जैसे 22K) — उस टंच का भाव अपने आप आ जाएगा।" },
      { label: "वजन और मेकिंग", text: "ग्रॉस वजन, नेट वजन और मेकिंग चार्ज भरें। GST (3%) अपने आप जुड़ जाती है।" },
      { label: "भुगतान का तरीका", text: "नकद, UPI, चेक — जो हो वह चुनें। बिल पर दिखेगा।" },
      { label: "WhatsApp पर भेजें", text: "बिल बनने के बाद 'WhatsApp पर भेजें' दबाएं — ग्राहक को सीधे बिल का मैसेज चला जाएगा। मोबाइल नंबर भरा हो तो यह काम करेगा।" },
      { label: "बिल इतिहास", text: "'इतिहास' टैब में सभी पुराने बिल देख सकते हैं।" },
    ],
  },
  {
    step: "७",
    icon: "🔨",
    title: "कारीगर का हिसाब रखें",
    color: "amber",
    points: [
      { label: "कारीगर जोड़ें", text: "कारीगर पेज जाएं → '+ कारीगर' दबाएं → नाम और मोबाइल नंबर भरें → सेव करें। यह एक बार करना है।" },
      { label: "काम सौंपें", text: "'+ काम' दबाएं → कारीगर चुनें → क्या बनाना है (विवरण), धातु का प्रकार और दिया गया वजन (ग्राम में) भरें → सेव करें।" },
      { label: "काम वापस लें", text: "जब काम पूरा होकर आए — उस एंट्री पर 'वापसी दर्ज करें' दबाएं → वापस आया वजन और मजदूरी भरें। घाटे (wastage) का हिसाब अपने आप निकलेगा।" },
      { label: "कारीगर से फ़िल्टर", text: "किसी एक कारीगर का पूरा काम देखने के लिए उसके नाम पर दबाएं — सिर्फ उसी की एंट्री दिखेगी।" },
      { label: "पेंडिंग और पूरा", text: "'चल रहा है' और 'पूरा हुआ' — दो टैब में सारा हिसाब अलग-अलग दिखता है।" },
    ],
  },
];

export default function SunarPage() {
  const [openStep, setOpenStep] = useState(null);
  const [payError, setPayError] = useState("");

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const emailFromUrl = params?.get("email") || "";

  const pay = async () => {
    setPayError("");
    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 4999, plan: "new", software: "sunar" }),
      });
      if (!res.ok) throw new Error("ऑर्डर नहीं बना");
      const order = await res.json();
      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 4999 * 100,
        currency: "INR",
        name: "निशांत सॉफ्टवेयर्स",
        description: "स्वर्णशिल्पी — 1 साल",
        order_id: order.id,
        prefill: { email: emailFromUrl },
        handler: async (response) => {
          try {
            const vRes = await fetch("/api/razorpay/verify-payment", {
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
                software: "sunar",
              }),
            });
            if (!vRes.ok) throw new Error();
            alert("✅ भुगतान सफल! सॉफ्टवेयर activate हो गया। अब लॉगिन करें।");
          } catch {
            setPayError("भुगतान तो हुआ, पर activate नहीं हो सका। WhatsApp पर संपर्क करें।");
          }
        },
      });
      rzp.open();
    } catch {
      setPayError("कुछ गड़बड़ हुई। दोबारा कोशिश करें या WhatsApp करें।");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Top contact bar */}
      <div className="bg-[#AA7D6E] py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर्स</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#8B5E52] via-[#AA7D6E] to-[#C4957F] text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-base font-bold px-5 py-1.5 rounded-full mb-5 border border-white/30">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            💎 स्वर्णशिल्पी<br />
            <span className="text-amber-200">सुनार की दुकान — अब डिजिटल</span>
          </h1>
          <p className="text-xl mb-2 font-semibold text-white/90">
            गिरवी, कारीगर, भाव, बिल — सब एक जगह।
          </p>
          <p className="text-base mb-10 text-white/70">
            हिंदी में · मोबाइल पर · WhatsApp बिल · GST ready
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <a href={SUNAR_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-[#AA7D6E] font-extrabold text-2xl px-10 py-4 rounded-2xl shadow-xl hover:bg-amber-50 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-sm text-white/60">👉 Chrome menu ⋮ → Add to Home Screen</p>
            </div>
            <a href={SUNAR_EXE_URL}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-xl px-8 py-3 rounded-2xl hover:bg-white/25 transition">
              🖥️ Windows के लिए डाउनलोड करो
            </a>
          </div>
        </div>
      </section>

      {/* Windows warning */}
      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ Windows पर इंस्टॉल करते समय रुकावट आ सकती है</p>
          <p className="text-base text-gray-600 mb-3">Windows 11 में <strong>Smart App Control</strong> नाम की सुरक्षा होती है। घबराएं नहीं — सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-base text-gray-600 space-y-1">
            <li>१. Start menu में <strong>Windows Security</strong> खोलें</li>
            <li>२. <strong>App &amp; browser control</strong> पर क्लिक करें</li>
            <li>३. <strong>Smart App Control</strong> को <strong>Off</strong> करें</li>
            <li>४. .exe फाइल दोबारा चलाएं</li>
            <li>५. इंस्टॉल के बाद वापस On कर सकते हैं</li>
          </ol>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-2 text-[#C4957F]">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-400 text-base mb-8">सुनार की दुकान के लिए बनाया गया</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-[#AA7D6E]/20 rounded-xl px-5 py-4">
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="text-[#C4957F] font-bold text-base mb-1">{f.title}</div>
                <div className="text-gray-300 text-sm leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== USER MANUAL ===== */}
      <section className="py-14 px-4 bg-amber-50">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-extrabold text-center text-gray-800">📖 पूरा गाइड — शुरू से अंत तक</h2>
          <p className="text-center text-gray-500 text-sm mt-2 mb-10">हर चरण पर टैप करें — पूरी जानकारी देखें</p>

          <div className="space-y-3">
            {manualSteps.map((s) => {
              const isOpen = openStep === s.step;
              return (
                <div
                  key={s.step}
                  className="bg-white border border-amber-200 rounded-2xl shadow-sm overflow-hidden"
                >
                  {/* Header — हमेशा दिखता है */}
                  <button
                    onClick={() => setOpenStep(isOpen ? null : s.step)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                  >
                    <div className="w-9 h-9 bg-[#AA7D6E] text-white font-black rounded-full flex items-center justify-center text-base shrink-0">
                      {s.step}
                    </div>
                    <span className="text-2xl shrink-0">{s.icon}</span>
                    <span className="font-black text-gray-800 text-base flex-1 leading-tight">{s.title}</span>
                    <span className="text-[#AA7D6E] text-xl font-black shrink-0">
                      {isOpen ? "▲" : "▼"}
                    </span>
                  </button>

                  {/* Detail — टैप करने पर खुलता है */}
                  {isOpen && (
                    <div className="border-t border-amber-100 px-5 py-4 space-y-3">
                      {s.points.map((p, i) => (
                        <div key={i} className="flex gap-3">
                          <span className="mt-0.5 w-2 h-2 rounded-full bg-[#AA7D6E] shrink-0 mt-2" />
                          <div>
                            <span className="font-black text-gray-700 text-sm">{p.label} — </span>
                            <span className="text-gray-500 text-sm leading-relaxed">{p.text}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick tip box */}
          <div className="mt-8 bg-[#AA7D6E]/10 border border-[#AA7D6E]/30 rounded-2xl px-5 py-4">
            <p className="text-sm font-black text-[#8B5E52] mb-2">💡 रोज़ का सबसे ज़रूरी काम</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              हर सुबह सबसे पहले <strong>📈 भाव</strong> पेज पर जाकर आज का सोने-चाँदी का भाव डालें —
              इसके बाद ही बिल सही बनेगा।
            </p>
          </div>

        </div>
      </section>

      {/* Pricing */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-8 text-gray-800">मूल्य</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-[#AA7D6E] p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#AA7D6E] text-white text-sm font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-5xl font-extrabold text-[#AA7D6E] mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-4">एक बार — १ साल शामिल</p>
              <a href={SUNAR_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full bg-[#AA7D6E] text-white font-bold py-3 rounded-xl hover:opacity-90 transition mb-3">
                मुफ्त में आज़माएं
              </a>
              <button
                onClick={pay}
                className="w-full bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition"
              >
                💳 अभी खरीदें — ₹4,999
              </button>
              {payError && (
                <p className="text-red-500 text-xs mt-3 font-semibold">⚠️ {payError}</p>
              )}
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीनीकरण</h3>
              <div className="text-5xl font-extrabold text-[#AA7D6E] mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-4">प्रति वर्ष</p>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-[#AA7D6E] text-white font-bold py-3 rounded-xl hover:opacity-90 transition">
                💬 व्हाट्सएप करें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#AA7D6E] py-12 px-4 text-center text-white">
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