"use client";

const PHARMA_PWA_URL = "https://pharmacy-bay.vercel.app";
const WINDOWS_EXE_URL = "https://pub-5c3d94458d0849a39a4599f634afa58f.r2.dev/ClinicOS%20Setup%201.0.0.exe";

const features = [
  { hi: "जीएसटी-मोबाइल ऑटो मैपिंग — जीएसटीआईएन डालो, सब भरा", en: "Enter GSTIN once — name, address & phone auto-filled instantly" },
  { hi: "दवाई स्टॉक — बैच और एक्सपायरी के साथ", en: "Track every medicine by batch number, expiry date & rack location" },
  { hi: "एक्सपायरी अलर्ट — ३०/६०/९० दिन पहले", en: "Alerts before medicines expire — never sell outdated stock again" },
  { hi: "जीएसटी बिलिंग — ०%, ५%, १२% स्वचालित", en: "GST auto-calculated on every bill — GSTR-1 ready monthly export" },
  { hi: "पर्चा बिलिंग — डॉक्टर का पर्चा, सीधे बिल", en: "Prescription-linked billing — medicines added from doctor's slip" },
  { hi: "खरीद एंट्री — वितरक से माल, सब दर्ज", en: "Record distributor purchases with batch, expiry & price details" },
  { hi: "उधारी खाता — ग्राहक का हिसाब", en: "Customer credit ledger with outstanding balance tracking" },
  { hi: "वितरक प्रबंधन — किससे क्या, कितना बाकी", en: "Distributor-wise purchase history with pending payment tracking" },
  { hi: "बिक्री वापसी — क्रेडिट नोट स्वचालित", en: "Sales return with automatic credit note & stock adjustment" },
  { hi: "क्लाउड डेटा — फोन टूटे तो भी सुरक्षित", en: "Cloud-backed data — no loss even if device is damaged or lost" },
];

const howTo = [
  { step: "०१", hi: "गूगल से लॉगिन करो", en: "One-click Google login", icon: "🔐" },
  { step: "०२", hi: "दवाइयाँ जोड़ो — बैच, दर, एक्सपायरी", en: "Add medicines with batch number, expiry date & MRP", icon: "💊" },
  { step: "०३", hi: "बिल बनाओ → जीएसटी स्वचालित", en: "Create bill → select medicines → GST auto-calculated", icon: "🧾" },
  { step: "०४", hi: "रिपोर्ट देखो — स्टॉक, मुनाफा", en: "View stock status, expiry alerts & monthly reports", icon: "📊" },
];

const compare = [
  { label: "जीएसटी-मोबाइल ऑटो मैपिंग", them: false, us: true },
  { label: "क्लाउड बैकअप", them: false, us: true },
  { label: "बैच-वाइज़ स्टॉक", them: false, us: true },
  { label: "मोबाइल पीडब्ल्यूए", them: false, us: true },
  { label: "जीएसटी बिलिंग", them: true, us: true },
  { label: "एक्सपायरी अलर्ट", them: true, us: true },
  { label: "खरीद एंट्री", them: true, us: true },
  { label: "उधारी खाता", them: true, us: true },
];

export default function PharmaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 ९९९६८६५०६९</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप करो</a>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-rose-700 text-white py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-5 py-1.5 rounded-full mb-5 border border-white/30">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            💊 निशांत फार्मा प्रो<br />
            <span className="text-amber-300">दवा दुकान — अब स्मार्ट तरीके से</span>
          </h1>
          <p className="text-lg mb-2 font-semibold text-red-100">
            जो काम पुराने सॉफ्टवेयर में घंटों लगते थे — यहाँ सेकंड में होते हैं।
          </p>
          <p className="text-sm mb-10 text-red-200/80">
            जीएसटी ऑटो मैपिंग · क्लाउड बैकअप · बैच-वाइज़ स्टॉक · मोबाइल और डेस्कटॉप दोनों
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href={PHARMA_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-700 font-extrabold text-lg px-10 py-3.5 rounded-2xl shadow-xl hover:bg-amber-50 transition"
            >
              📱 मुफ्त आज़माओ — ऐप खोलो
            </a>
            <a
              href={WINDOWS_EXE_URL}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-sm px-8 py-3 rounded-2xl hover:bg-white/25 transition"
            >
              🖥️ Windows के लिए डाउनलोड करो
            </a>
            <p className="text-xs text-red-200/70">👉 Chrome मेनू ⋮ → होम स्क्रीन पर जोड़ें → इंस्टॉल करें</p>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-extrabold text-center mb-2 text-gray-800">पुराने सॉफ्टवेयर की परेशानियाँ — यहाँ खत्म</h2>
          <p className="text-center text-gray-500 text-sm mb-6">देश में सबसे ज्यादा उपयोग होने वाले फार्मेसी सॉफ्टवेयर में यह सब नहीं है</p>
          <div className="overflow-x-auto rounded-2xl shadow border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="text-left px-5 py-3 font-semibold rounded-tl-2xl">सुविधा</th>
                  <th className="text-center px-5 py-3 font-semibold text-gray-400">पुराना सॉफ्टवेयर</th>
                  <th className="text-center px-5 py-3 font-semibold text-amber-400 rounded-tr-2xl">निशांत फार्मा प्रो</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 text-gray-700 font-medium">{row.label}</td>
                    <td className="px-5 py-3 text-center text-xl">{row.them ? "✅" : "❌"}</td>
                    <td className="px-5 py-3 text-center text-xl">{row.us ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-red-400">खासियतें</h2>
          <p className="text-center text-gray-400 text-sm mb-8">मेडिकल स्टोर और फार्मेसी के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-red-500/20 rounded-xl px-5 py-4">
                <div className="text-red-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-red-200 rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="text-xs text-gray-400 font-bold mb-1">चरण {h.step}</div>
                <div className="font-bold text-gray-800 text-xs mb-1">{h.hi}</div>
                <div className="text-xs text-gray-500">{h.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">मूल्य</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-red-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल शामिल</p>
              <a href="/payment?software=pharma" className="block w-full bg-red-600 text-white font-bold py-2 rounded-xl hover:bg-red-500 transition">मुफ्त परीक्षण शुरू करो</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">नवीनीकरण</h3>
              <div className="text-4xl font-extrabold text-red-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=pharma" className="block w-full bg-red-600 text-white font-bold py-2 rounded-xl hover:bg-red-500 transition">अभी नवीनीकरण करो</a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}