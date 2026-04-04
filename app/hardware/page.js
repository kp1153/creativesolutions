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
  { hi: "बारकोड से बिलिंग — बारकोड स्कैन करो, सामान अपने आप जुड़ेगा" },
  { hi: "मालिक और कर्मचारी अलग — मालिक को पूरा दिखेगा, काउंटर वाले को सिर्फ बिलिंग" },
  { hi: "मोबाइल और कंप्यूटर दोनों पर चलेगा — कहीं से भी देखो" },
  { hi: "७ दिन बिल्कुल मुफ्त — कोई पैसा नहीं, कोई कार्ड नहीं" },
];

const howTo = [
  { step: "पहला काम", hi: "गूगल खाते से लॉगिन करो", icon: "🔐" },
  { step: "दूसरा काम", hi: "अपना सामान डालो — नाम, रेट, स्टॉक", icon: "📦" },
  { step: "तीसरा काम", hi: "नया बिल बनाओ — ग्राहक चुनो, सामान जोड़ो", icon: "🧾" },
  { step: "चौथा काम", hi: "छापो या व्हाट्सएप पर भेजो", icon: "📱" },
];

export default function HardwarePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">🔧 निशांत हार्डवेयर प्रो<br />दुकान प्रबंधन</h1>
          <p className="text-lg mb-8 font-semibold text-blue-100">हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, जीएसटी रिपोर्ट सब एक जगह।</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={HARDWARE_EXE_URL} className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-blue-50 transition">
              🖥️ विंडोज पर डाउनलोड करें
            </a>
            <div className="flex flex-col items-center">
              <a href={HARDWARE_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 मोबाइल पर लगाएँ
              </a>
              <p className="text-xs mt-1 text-blue-200/70">👉 क्रोम मेनू ⋮ → होम स्क्रीन पर जोड़ें</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-blue-400">क्या-क्या मिलेगा</h2>
          <p className="text-center text-gray-400 text-sm mb-8">हार्डवेयर, सेनेटरी, रंग, बिजली की दुकानों के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-blue-500/20 rounded-xl px-5 py-4">
                <div className="text-blue-400 font-semibold text-sm">✦ {f.hi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कैसे शुरू करें</h2>
          <p className="text-center text-gray-500 text-sm mb-8">बस ४ काम करने हैं</p>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="text-xs text-gray-400 font-bold mb-1">{h.step}</div>
                <div className="font-bold text-gray-800 text-xs">{h.hi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-blue-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-1">₹3,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — १ साल शामिल</p>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-bold py-2 rounded-xl hover:bg-blue-500 transition">मुफ्त में आज़माएँ</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">नवीकरण</h3>
              <div className="text-4xl font-extrabold text-blue-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-4">हर साल</p>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-bold py-2 rounded-xl hover:bg-blue-500 transition">अभी नवीकरण करें</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}