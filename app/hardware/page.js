"use client";

const HARDWARE_EXE_URL = "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://nishant-ten.vercel.app";

const features = [
  { hi: "बिल बनाओ — दुकान का बिल झटपट बनेगा, छापो या व्हाट्सएप पर भेजो" },
  { hi: "माल का हिसाब — कौन सा सामान कितना बचा है, एक नज़र में दिखेगा" },
  { hi: "उधार का हिसाब — किसने कितना लेना है, सब लिखा रहेगा" },
  { hi: "ग्राहक का खाता — हर ग्राहक का पूरा लेन-देन एक जगह" },
  { hi: "खरीद का हिसाब — कहाँ से माल आया, कितने में आया" },
  { hi: "जीएसटी रिपोर्ट — सरकार को देने वाला हिसाब अपने आप तैयार होगा" },  
  { hi: "मालिक और कर्मचारी अलग — मालिक को पूरा दिखेगा, काउंटर वाले को सिर्फ बिलिंग" },
  { hi: "मोबाइल और कंप्यूटर दोनों पर चलेगा — कहीं से भी देखो" },
  { hi: "७ दिन बिल्कुल मुफ्त — कोई पैसा नहीं, कोई कार्ड नहीं" },
];

const howTo = [
  { step: "पहला काम", hi: "गूगल खाते से लॉगिन करो", detail: "जब ऐप खुले तो 'गूगल से लॉगिन करो' बटन दबाओ। अपना गूगल खाता चुनो — बस हो गया।", icon: "🔐" },
  { step: "दूसरा काम", hi: "अपना सामान डालो", detail: "सेटिंग्स में दुकान का नाम और पता भरो। फिर 'सामान' में जाकर अपने माल की सूची बनाओ — नाम, रेट, स्टॉक।", icon: "📦" },
  { step: "तीसरा काम", hi: "नया बिल बनाओ", detail: "नया बिल बटन दबाओ। ग्राहक का नाम डालो, सामान चुनो, मात्रा भरो — बिल तैयार।", icon: "🧾" },
  { step: "चौथा काम", hi: "छापो या भेजो", detail: "बिल बनने के बाद प्रिंट करो या व्हाट्सएप पर सीधे ग्राहक को भेजो।", icon: "📱" },
];

const kaamKaise = [
  {
    title: "बिल कैसे बनाएं",
    steps: [
      "ऊपर 'नया बिल' बटन दबाओ",
      "ग्राहक का नाम खोजो या नया नाम डालो",
      "सामान का नाम लिखो — नीचे सूची आएगी, उसमें से चुनो",
      "मात्रा डालो — रकम अपने आप जुड़ेगी",
      "नकद, उधार, UPI — जो चाहो चुनो",
      "'बिल बनाओ' दबाओ — बिल तैयार",
    ],
  },
  {
    title: "सामान कैसे जोड़ें",
    steps: [
      "नीचे 'सामान' वाला बटन दबाओ",
      "ऊपर 'नया सामान' दबाओ",
      "सामान का नाम, खरीद रेट, बिक्री रेट, स्टॉक भरो",
      "जीएसटी दर चुनो — 0%, 5%, 12%, 18%",
      "'सेव करें' दबाओ",
    ],
  },
  {
    title: "उधार कैसे देखें और वसूलें",
    steps: [
      "नीचे 'उधार' बटन दबाओ",
      "जिसका उधार बाकी है उसका नाम और रकम दिखेगी",
      "'व्हाट्सएप से याद दिलाएं' दबाओ — ग्राहक को message जाएगा",
      "जब पैसे आएं तो 'रकम चुकाएं' दबाओ और रकम डालो",
    ],
  },
  {
    title: "जीएसटी रिपोर्ट कैसे निकालें",
    steps: [
      "नीचे 'GST' बटन दबाओ",
      "महीना चुनो",
      "पूरी रिपोर्ट दिखेगी — CGST, SGST, कुल बिक्री",
      "अपने CA को दिखाओ या खुद भर दो",
    ],
  },
];

export default function HardwarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* संपर्क पट्टी */}
      <div className="bg-amber-500 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      {/* नेवबार */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      {/* हीरो सेक्शन */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-base font-bold px-5 py-1.5 rounded-full mb-5">🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">🔧 निशांत हार्डवेयर प्रो<br /><span className="text-blue-200">दुकान प्रबंधन</span></h1>
          <p className="text-xl mb-3 font-semibold text-blue-100">हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, जीएसटी सब एक जगह।</p>
          <p className="text-base mb-10 text-blue-200/80">हार्डवेयर · सेनेटरी · रंग · बिजली · पाइप-फिटिंग</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={HARDWARE_EXE_URL} className="inline-block bg-white text-blue-700 font-extrabold text-xl px-10 py-4 rounded-2xl shadow-xl hover:bg-blue-50 transition">
              🖥️ विंडोज पर डाउनलोड करें
            </a>
            <div className="flex flex-col items-center">
              <a href={HARDWARE_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-extrabold text-xl px-10 py-4 rounded-2xl shadow-xl hover:bg-green-600 transition">
                📱 मोबाइल पर लगाएँ
              </a>
              <p className="text-sm mt-2 text-blue-200/70">👉 क्रोम मेनू ⋮ → होम स्क्रीन पर जोड़ें → इंस्टॉल करें</p>
            </div>
          </div>
        </div>
      </section>

      {/* विंडोज इंस्टॉल निर्देश */}
      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ विंडोज पर इंस्टॉल करते समय यह संदेश आ सकता है</p>
          <p className="text-base text-gray-600 mb-4">विंडोज 11 में <strong>Smart App Control</strong> नाम की सुरक्षा होती है जो नए सॉफ्टवेयर को रोकती है। घबराएं नहीं — यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <p className="text-base font-extrabold text-gray-800 mb-3">इस तरह ठीक करें — बस ५ काम करने हैं:</p>
          <ol className="text-base text-gray-700 space-y-2">
            <li>१. स्टार्ट बटन दबाओ और <strong>Windows Security</strong> लिखकर खोजो</li>
            <li>२. <strong>App &amp; browser control</strong> पर क्लिक करो</li>
            <li>३. <strong>Smart App Control</strong> को <strong>Off</strong> करो</li>
            <li>४. अब .exe फाइल दोबारा चलाओ — इंस्टॉल हो जाएगा</li>
            <li>५. इंस्टॉल होने के बाद Smart App Control वापस On कर सकते हो</li>
          </ol>
          <p className="text-sm text-gray-400 mt-4">कोई दिक्कत हो तो व्हाट्सएप करो — <a href="https://wa.me/919996865069" className="text-green-600 underline font-semibold">9996865069</a></p>
        </div>
      </section>

      {/* खासियतें */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-blue-400">क्या-क्या मिलेगा</h2>
          <p className="text-center text-gray-400 text-base mb-8">हार्डवेयर, सेनेटरी, रंग, बिजली की दुकानों के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-blue-500/20 rounded-xl px-5 py-4">
                <div className="text-blue-400 font-semibold text-base">✦ {f.hi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* कैसे शुरू करें */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-gray-800">कैसे शुरू करें</h2>
          <p className="text-center text-gray-500 text-base mb-8">बस ४ काम करने हैं — ५ मिनट में दुकान तैयार</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">{h.icon}</div>
                <div className="text-sm text-blue-600 font-extrabold mb-1">{h.step}</div>
                <div className="font-extrabold text-gray-800 text-sm mb-2">{h.hi}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{h.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* विस्तार से उपयोग */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-2 text-gray-800">विस्तार से समझो — कैसे उपयोग करें</h2>
          <p className="text-center text-gray-500 text-base mb-10">हर काम आसान हिंदी में समझाया गया है</p>
          <div className="grid md:grid-cols-2 gap-6">
            {kaamKaise.map((k, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-gray-800 text-lg mb-4">📌 {k.title}</h3>
                <ol className="space-y-2">
                  {k.steps.map((s, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="bg-blue-600 text-white text-xs font-extrabold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                      <span className="text-gray-700 text-base">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* कीमत */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-6 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-blue-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-1">₹3,999</div>
              <p className="text-gray-400 text-base mb-5">एक बार — 1 साल शामिल</p>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-extrabold py-3 rounded-xl hover:bg-blue-500 transition text-lg">मुफ्त में आज़माएँ</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीकरण</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-5">हर साल</p>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-extrabold py-3 rounded-xl hover:bg-blue-500 transition text-lg">अभी नवीकरण करें</a>
            </div>
          </div>
        </div>
      </section>

      {/* नीचे CTA */}
      <section className="bg-blue-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करो — बिल्कुल मुफ्त</h2>
          <p className="text-blue-200 mb-6 text-base">७ दिन पूरी तरह मुफ्त — कोई कार्ड नहीं, कोई वादा नहीं</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a href={HARDWARE_EXE_URL} className="bg-white text-blue-700 font-extrabold px-8 py-3 rounded-2xl hover:bg-blue-50 transition text-base">
              🖥️ विंडोज पर डाउनलोड करें
            </a>
            <a href={HARDWARE_PWA_URL} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-extrabold px-8 py-3 rounded-2xl hover:bg-green-600 transition text-base">
              📱 मोबाइल पर लगाएँ
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-base font-semibold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
          </div>
        </div>
      </section>

    </main>
  );
}