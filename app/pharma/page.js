"use client";

const PHARMA_PWA_URL = "https://pharma.nishantsoftwares.in";
const WINDOWS_EXE_URL = "https://pub-5c3d94458d0849a39a4599f634afa58f.r2.dev/ClinicOS%20Setup%201.0.0.exe";

const features = [
  "जीएसटी-मोबाइल ऑटो मैपिंग — जीएसटीआईएन डालो, नाम, पता, फोन सब अपने आप भरेगा",
  "दवाई स्टॉक — बैच नंबर और एक्सपायरी के साथ",
  "एक्सपायरी अलर्ट — ३०, ६०, ९० दिन पहले चेतावनी",
  "जीएसटी बिलिंग — ०%, ५%, १२% अपने आप लगेगा",
  "पर्चा बिलिंग — डॉक्टर का पर्चा, सीधे बिल बनाओ",
  "खरीद एंट्री — वितरक से माल आए, सब दर्ज करो",
  "उधारी खाता — ग्राहक का पूरा हिसाब",
  "वितरक प्रबंधन — किससे क्या खरीदा, कितना बाकी",
  "बिक्री वापसी — क्रेडिट नोट अपने आप बनेगा",
  "क्लाउड डेटा — फोन टूटे या खो जाए, डेटा सुरक्षित",
];

const howTo = [
  { step: "०१", hi: "गूगल से लॉगिन करो", icon: "🔐" },
  { step: "०२", hi: "दवाइयाँ जोड़ो — बैच, दर, एक्सपायरी", icon: "💊" },
  { step: "०३", hi: "बिल बनाओ — जीएसटी अपने आप लगेगा", icon: "🧾" },
  { step: "०४", hi: "रिपोर्ट देखो — स्टॉक और मुनाफा", icon: "📊" },
];

const compare = [
  { label: "जीएसटी-मोबाइल ऑटो मैपिंग", them: false, us: true },
  { label: "क्लाउड बैकअप", them: false, us: true },
  { label: "बैच-वाइज़ स्टॉक", them: false, us: true },
  { label: "मोबाइल पर चलेगा", them: false, us: true },
  { label: "जीएसटी बिलिंग", them: true, us: true },
  { label: "एक्सपायरी अलर्ट", them: true, us: true },
  { label: "खरीद एंट्री", them: true, us: true },
  { label: "उधारी खाता", them: true, us: true },
];

export default function PharmaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <div className="bg-amber-500 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 ९९९६८६५०६९</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप करो</a>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर</a>
          <a href="/" className="text-base text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-rose-700 text-white py-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "20px 20px" }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-base font-bold px-5 py-1.5 rounded-full mb-5 border border-white/30">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            💊 निशांत फार्मा प्रो<br />
            <span className="text-amber-300">दवा दुकान — अब स्मार्ट तरीके से</span>
          </h1>
          <p className="text-2xl mb-2 font-semibold text-red-100">
            जो काम पुराने सॉफ्टवेयर में घंटों लगते थे — यहाँ सेकंड में होते हैं।
          </p>
          <p className="text-lg mb-10 text-red-200/80">
            जीएसटी ऑटो मैपिंग · क्लाउड बैकअप · बैच-वाइज़ स्टॉक · मोबाइल और डेस्कटॉप दोनों
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
              <a
                href={PHARMA_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-700 font-extrabold text-2xl px-10 py-4 rounded-2xl shadow-xl hover:bg-amber-50 transition"
              >
                📱 Android पर Install करें
              </a>
              <p className="text-sm mt-1 text-red-200/70">
                👉 Chrome menu ⋮ → Add to Home Screen
              </p>
            </div>
            <a
              href={WINDOWS_EXE_URL}
              className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-xl px-8 py-3 rounded-2xl hover:bg-white/25 transition"
            >
              🖥️ Windows के लिए डाउनलोड करो
            </a>
            <p className="text-base text-red-200/70">👉 मोबाइल पर: Chrome मेनू ⋮ → होम स्क्रीन पर जोड़ें → इंस्टॉल करें</p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ Windows पर इंस्टॉल करते समय रुकावट आ सकती है</p>
          <p className="text-lg text-gray-600 mb-4">Windows 11 में <strong>Smart App Control</strong> नाम की सुरक्षा होती है जो नए सॉफ्टवेयर को रोकती है। घबराएं नहीं — यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <p className="text-lg font-bold text-gray-800 mb-3">इस तरह ठीक करें:</p>
          <ol className="text-lg text-gray-600 space-y-2">
            <li>१. Start menu में <strong>Windows Security</strong> खोजें और खोलें</li>
            <li>२. <strong>App &amp; browser control</strong> पर क्लिक करें</li>
            <li>३. <strong>Smart App Control</strong> को <strong>Off</strong> करें</li>
            <li>४. अब .exe फाइल दोबारा चलाएं — इंस्टॉल हो जाएगा</li>
            <li>५. इंस्टॉल होने के बाद Smart App Control वापस On कर सकते हैं</li>
          </ol>
        </div>
      </section>

      <section className="py-10 px-4 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-2 text-gray-800">पुराने सॉफ्टवेयर की परेशानियाँ — यहाँ खत्म</h2>
          <p className="text-lg text-center text-gray-500 mb-6">देश में सबसे ज्यादा उपयोग होने वाले फार्मेसी सॉफ्टवेयर में यह सब नहीं है</p>
          <div className="overflow-x-auto rounded-2xl shadow border border-gray-200">
            <table className="w-full text-base">
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
                    <td className="px-5 py-3 text-gray-700 font-medium text-base">{row.label}</td>
                    <td className="px-5 py-3 text-center text-2xl">{row.them ? "✅" : "❌"}</td>
                    <td className="px-5 py-3 text-center text-2xl">{row.us ? "✅" : "❌"}</td>
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
          <p className="text-lg text-center text-gray-400 mb-8">मेडिकल स्टोर और फार्मेसी के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-red-500/20 rounded-xl px-5 py-4">
                <div className="text-red-400 font-semibold text-lg">✦ {f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-red-200 rounded-xl p-4 text-center shadow-sm">
                <div className="text-3xl mb-2">{h.icon}</div>
                <div className="text-base text-gray-400 font-bold mb-1">चरण {h.step}</div>
                <div className="font-bold text-gray-800 text-base">{h.hi}</div>
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
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-base font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="hf text-5xl font-extrabold text-red-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-4">एक बार — १ साल शामिल</p>
              <a href="/payment?software=pharma" className="block w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-500 transition text-lg">मुफ्त परीक्षण शुरू करो</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीनीकरण</h3>
              <div className="hf text-5xl font-extrabold text-red-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-4">प्रति वर्ष</p>
              <a href="/payment?software=pharma" className="block w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-500 transition text-lg">अभी नवीनीकरण करो</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-900">📖 उपयोगकर्ता पुस्तिका</h2>
          <p className="text-center text-gray-500 text-lg mb-10">निशांत फार्मा प्रो — पूरा गाइड</p>

          {/* Step 1 */}
          <div className="mb-8 bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="text-2xl font-extrabold text-red-700 mb-3">🔐 चरण १ — लॉगिन करें</h3>
            <p className="text-lg font-bold text-gray-700 mb-2">पहली बार उपयोग करने पर:</p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ सॉफ्टवेयर खोलें और <span className="text-red-600">Google से लॉगिन करें</span> बटन दबाएं।</li>
              <li className="font-bold">▸ अपना Google खाता चुनें — लॉगिन हो जाएगा।</li>
              <li className="font-bold">▸ पहली बार ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं चाहिए।</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="mb-8 bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-2xl font-extrabold text-blue-700 mb-3">⚙️ चरण २ — सेटिंग भरें</h3>
            <p className="text-lg font-bold text-gray-700 mb-2">सबसे पहले अपनी दुकान की जानकारी डालें:</p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ Dashboard → Settings पर जाएं।</li>
              <li className="font-bold">▸ <span className="text-blue-600">दुकान का नाम, मालिक का नाम, पता, फोन</span> भरें।</li>
              <li className="font-bold">▸ GSTIN और Drug License Number डालें — यह बिल पर छपेगा।</li>
              <li className="font-bold">▸ Save बटन दबाएं।</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="mb-8 bg-green-50 rounded-2xl p-6 border border-green-100">
            <h3 className="text-2xl font-extrabold text-green-700 mb-3">💊 चरण ३ — दवाइयाँ जोड़ें</h3>
            <p className="text-lg font-bold text-gray-700 mb-2">स्टॉक में दवाइयाँ दर्ज करें:</p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ Dashboard → Medicines → Add Medicine पर जाएं।</li>
              <li className="font-bold">▸ <span className="text-green-600">दवाई का नाम, कंपनी, बैच नंबर, एक्सपायरी तारीख, MRP और स्टॉक</span> भरें।</li>
              <li className="font-bold">▸ GST % चुनें — आमतौर पर दवाइयों पर ५% या १२% होता है।</li>
              <li className="font-bold">▸ Rack नंबर डालें — ताकि दुकान में जल्दी मिले।</li>
              <li className="font-bold">▸ Save करें।</li>
            </ul>
            <p className="text-base font-bold text-amber-700 mt-3">⚠️ Low Stock और Near Expiry की चेतावनी अपने आप आएगी।</p>
          </div>

          {/* Step 4 */}
          <div className="mb-8 bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h3 className="text-2xl font-extrabold text-amber-700 mb-3">📦 चरण ४ — खरीद दर्ज करें</h3>
            <p className="text-lg font-bold text-gray-700 mb-2">वितरक से माल आने पर:</p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ Dashboard → New Purchase पर जाएं।</li>
              <li className="font-bold">▸ वितरक का नाम, इनवॉइस नंबर भरें।</li>
              <li className="font-bold">▸ दवाई का नाम, बैच, एक्सपायरी, मात्रा, खरीद मूल्य और MRP डालें।</li>
              <li className="font-bold">▸ Save करें — <span className="text-amber-600">स्टॉक अपने आप बढ़ जाएगा।</span></li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="mb-8 bg-purple-50 rounded-2xl p-6 border border-purple-100">
            <h3 className="text-2xl font-extrabold text-purple-700 mb-3">🧾 चरण ५ — बिल बनाएं</h3>
            <p className="text-lg font-bold text-gray-700 mb-2">ग्राहक को दवाई देते समय:</p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ Dashboard → New Bill पर जाएं।</li>
              <li className="font-bold">▸ मरीज़ का नाम और फोन नंबर डालें।</li>
              <li className="font-bold">▸ दवाई का नाम टाइप करें — सूची अपने आप आएगी।</li>
              <li className="font-bold">▸ मात्रा डालें — MRP और GST अपने आप लगेगा।</li>
              <li className="font-bold">▸ Payment का तरीका चुनें — <span className="text-purple-600">Cash, UPI या Credit।</span></li>
              <li className="font-bold">▸ Create Bill दबाएं — बिल बन जाएगा और स्टॉक कम हो जाएगा।</li>
              <li className="font-bold">▸ WhatsApp बटन से बिल सीधे ग्राहक को भेजें।</li>
            </ul>
            <p className="text-base font-bold text-red-700 mt-3">⚠️ Schedule H/H1 दवाई होने पर डॉक्टर का नाम और पर्चा नंबर जरूरी है — अपने आप पूछेगा।</p>
          </div>

          {/* Step 6 */}
          <div className="mb-8 bg-teal-50 rounded-2xl p-6 border border-teal-100">
            <h3 className="text-2xl font-extrabold text-teal-700 mb-3">📋 चरण ६ — Promise Order</h3>
            <p className="text-lg font-bold text-gray-700 mb-2">दवाई स्टॉक में नहीं है तो:</p>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ बिल बनाते समय अगर दवाई Out of Stock है तो <span className="text-teal-600">Promise Order बटन</span> दिखेगा।</li>
              <li className="font-bold">▸ दबाने पर ग्राहक का नाम और दवाई का नाम save हो जाएगा।</li>
              <li className="font-bold">▸ Dashboard → Promise Orders में pending list दिखेगी।</li>
              <li className="font-bold">▸ स्टॉक आने पर Fulfilled + WhatsApp दबाएं — ग्राहक को अपने आप सूचना जाएगी।</li>
            </ul>
          </div>

          {/* Step 7 */}
          <div className="mb-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-2xl font-extrabold text-gray-700 mb-3">📊 चरण ७ — रिपोर्ट देखें</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ Dashboard → Reports पर जाएं।</li>
              <li className="font-bold">▸ <span className="text-gray-600">आज की बिक्री, महीने की बिक्री, उधारी</span> एक नज़र में दिखेगी।</li>
              <li className="font-bold">▸ Top 10 सबसे ज़्यादा बिकने वाली दवाइयाँ देखें।</li>
              <li className="font-bold">▸ Cash, UPI और Credit का अलग-अलग हिसाब मिलेगा।</li>
            </ul>
          </div>

          {/* Step 8 */}
          <div className="mb-8 bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <h3 className="text-2xl font-extrabold text-orange-700 mb-3">👤 चरण ८ — मरीज़ का रिकॉर्ड</h3>
            <ul className="space-y-2 text-lg text-gray-700">
              <li className="font-bold">▸ Dashboard → Patients → Add Patient से नया मरीज़ जोड़ें।</li>
              <li className="font-bold">▸ मरीज़ की पूरी purchase history एक जगह दिखेगी।</li>
              <li className="font-bold">▸ उधारी कितनी बाकी है — सीधे दिखेगा।</li>
              <li className="font-bold">▸ <span className="text-orange-600">Send Refill Reminder</span> से WhatsApp पर दवाई लेने की याद दिलाएं।</li>
            </ul>
          </div>

          {/* Help */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 text-center">
            <h3 className="text-2xl font-extrabold mb-2">❓ कोई परेशानी हो तो</h3>
            <p className="text-lg font-bold text-gray-300 mb-4">हम हर दिन सुबह १० बजे से शाम ७ बजे तक उपलब्ध हैं।</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919996865069" className="bg-amber-500 text-white font-extrabold text-lg px-6 py-3 rounded-xl hover:bg-amber-400 transition">📞 ९९९६८६५०६९</a>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-extrabold text-lg px-6 py-3 rounded-xl hover:bg-green-400 transition">💬 WhatsApp करें</a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}