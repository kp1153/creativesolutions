"use client";

const BILLING_EXE_URL = "https://pub-ef61c868f2a7481d8c2857d0de28bd51.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A4%BF%E0%A4%82%E0%A4%97%20Setup%201.0.0.exe";
const BILLING_PORTABLE_URL = "https://pub-ef61c868f2a7481d8c2857d0de28bd51.r2.dev/NishantBilling-Portable-1.0.0.exe";
const BILLING_PWA_URL = "https://billing.nishantsoftwares.in";

export default function BillingPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">

      {/* Hero */}
      <section className="py-14 px-4 text-center bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🧾</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            निशांत बिलिंग
          </h1>
          <p className="text-blue-400 font-bold text-lg mb-2">GST Billing Software — किसी भी दुकान के लिए</p>
          <p className="text-zinc-400 text-sm mb-8">हलवाई, कपड़ा, किराना, हार्डवेयर — सबके लिए एक ही सॉफ्टवेयर</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <a
              href={BILLING_EXE_URL}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl text-sm transition"
            >
              💻 Windows Installer डाउनलोड करें (.exe)
            </a>
            <a
              href={BILLING_PORTABLE_URL}
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold px-6 py-3.5 rounded-2xl text-sm transition"
            >
              📦 Portable Version डाउनलोड करें
            </a>
            <a
              href={BILLING_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-2xl text-sm transition"
            >
              📱 Mobile पर खोलें (PWA)
            </a>
          </div>
          <p className="text-zinc-500 text-xs">Windows Installer = install होगा | Portable = बिना install, सीधे चलाओ</p>
        </div>
      </section>

      {/* User Manual */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10">

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-amber-400 mb-2">📖 यूज़र मैनुअल</h2>
            <p className="text-zinc-400 text-sm">पहली बार इस्तेमाल करने वाले ध्यान से पढ़ें — एक बार पढ़ा, हमेशा के लिए सीखा</p>
          </div>

          {/* Step 1 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-extrabold text-white mb-1">📥 पहला काम — सॉफ्टवेयर खोलें</h3>
            <p className="text-zinc-400 text-xs mb-4">सबसे पहले यह करें</p>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>▶ ऊपर दिए <span className="text-blue-400 font-bold">Windows Installer</span> बटन पर क्लिक करें — फाइल डाउनलोड होगी।</p>
              <p>▶ डाउनलोड हुई फाइल पर <span className="text-white font-bold">डबल क्लिक</span> करें। अगर Windows ने रोका तो <span className="text-white font-bold">"More Info" → "Run Anyway"</span> क्लिक करें।</p>
              <p>▶ Install हो जाने के बाद Desktop पर <span className="text-white font-bold">निशांत बिलिंग</span> का icon दिखेगा — उस पर डबल क्लिक करें।</p>
              <p>▶ सॉफ्टवेयर खुलेगा और <span className="text-white font-bold">Google से Login</span> का बटन दिखेगा।</p>
              <p>▶ अपना Gmail account से login करें — बस हो गया।</p>
              <p className="bg-zinc-700 rounded-xl p-3 text-zinc-300">💡 <span className="text-white font-bold">Portable Version</span> वालों को install नहीं करना — सीधे EXE फाइल पर डबल क्लिक करो, चल जाएगा।</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-extrabold text-white mb-1">🏪 दूसरा काम — दुकान की जानकारी भरें</h3>
            <p className="text-zinc-400 text-xs mb-4">यह एक बार करना है — बिल पर आपकी दुकान का नाम छपेगा</p>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>▶ Login के बाद नीचे <span className="text-white font-bold">⚙️ सेटिंग</span> पर क्लिक करें।</p>
              <p>▶ यहाँ भरें:</p>
              <div className="bg-zinc-700 rounded-xl p-4 space-y-2">
                <p>🏷️ <span className="text-white font-bold">दुकान का नाम</span> — जैसे "राम हलवाई", "श्याम क्लॉथ स्टोर"</p>
                <p>📞 <span className="text-white font-bold">मोबाइल नंबर</span> — ग्राहक को WhatsApp पर दिखेगा</p>
                <p>📍 <span className="text-white font-bold">पता</span> — दुकान का पूरा पता</p>
                <p>🔢 <span className="text-white font-bold">GSTIN</span> — अगर GST नंबर है तो भरें, नहीं है तो खाली छोड़ें</p>
                <p>🖼️ <span className="text-white font-bold">Logo</span> — दुकान की फोटो या logo लगाएं (PNG/JPG)</p>
              </div>
              <p>▶ सब भरने के बाद <span className="text-white font-bold">सेव करें</span> बटन दबाएं।</p>
            </div>
          </div>

          {/* Step 3 — SAMAN */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-extrabold text-white mb-1">📦 तीसरा काम — सामान की लिस्ट बनाएं</h3>
            <p className="text-zinc-400 text-xs mb-4">यह सबसे जरूरी काम है — पहले सामान डालो, फिर बिल बनेगा</p>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>▶ नीचे <span className="text-white font-bold">📦 सामान</span> पर क्लिक करें।</p>
              <p>▶ <span className="text-white font-bold">+ नया सामान</span> बटन दबाएं।</p>
              <p>▶ यह भरें:</p>
              <div className="bg-zinc-700 rounded-xl p-4 space-y-2">
                <p>🏷️ <span className="text-white font-bold">सामान का नाम</span> — जैसे "जलेबी", "बासमती चावल 5kg", "सफेद कुर्ता"</p>
                <p>⚖️ <span className="text-white font-bold">इकाई (Unit)</span> — किलो, लीटर, पीस, दर्जन — जो सही हो</p>
                <p>💰 <span className="text-white font-bold">भाव (Price)</span> — एक किलो/पीस का दाम</p>
                <p>📊 <span className="text-white font-bold">GST %</span> — अगर GST नहीं लगता तो 0 लिखें</p>
              </div>
              <p>▶ <span className="text-white font-bold">सेव करें</span> दबाएं — सामान लिस्ट में आ जाएगा।</p>
              <p>▶ इसी तरह <span className="text-white font-bold">सभी सामान एक-एक करके</span> डालें।</p>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mt-2">
                <p className="text-amber-400 font-bold mb-2">💡 हलवाई भाई के लिए उदाहरण:</p>
                <div className="space-y-1 text-zinc-300">
                  <p>• जलेबी — किलो — ₹160 — GST 0%</p>
                  <p>• गुलाब जामुन — पीस — ₹10 — GST 0%</p>
                  <p>• बर्फी — किलो — ₹400 — GST 0%</p>
                  <p>• समोसा — पीस — ₹15 — GST 0%</p>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mt-2">
                <p className="text-blue-400 font-bold mb-2">💡 कपड़े की दुकान वाले भाई के लिए उदाहरण:</p>
                <div className="space-y-1 text-zinc-300">
                  <p>• सफेद कुर्ता (S) — पीस — ₹350 — GST 5%</p>
                  <p>• सफेद कुर्ता (M) — पीस — ₹380 — GST 5%</p>
                  <p>• धोती — पीस — ₹250 — GST 5%</p>
                  <p>• साड़ी — पीस — ₹600 — GST 5%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 — GRAHAK */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-extrabold text-white mb-1">👥 चौथा काम — ग्राहक जोड़ें (वैकल्पिक)</h3>
            <p className="text-zinc-400 text-xs mb-4">उधारी वाले या पक्के ग्राहकों के लिए — नकद ग्राहक के लिए जरूरी नहीं</p>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>▶ नीचे <span className="text-white font-bold">👥 ग्राहक</span> पर क्लिक करें।</p>
              <p>▶ <span className="text-white font-bold">+ नया ग्राहक</span> दबाएं।</p>
              <p>▶ नाम, मोबाइल नंबर, पता भरें — <span className="text-white font-bold">सेव करें।</span></p>
              <p className="bg-zinc-700 rounded-xl p-3">💡 नकद बिक्री के लिए ग्राहक जोड़ना जरूरी नहीं — बिल बनाते समय <span className="text-white font-bold">"नकद / वॉक-इन"</span> option चुन सकते हैं।</p>
            </div>
          </div>

          {/* Step 5 — BILL */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-extrabold text-white mb-1">🧾 पाँचवाँ काम — बिल बनाएं</h3>
            <p className="text-zinc-400 text-xs mb-4">यही सबसे ज्यादा करेंगे — रोज़ का काम</p>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>▶ होम स्क्रीन पर <span className="text-white font-bold">नीला बटन "नया बिल बनाएं"</span> दबाएं।</p>
              <p>▶ <span className="text-white font-bold">ग्राहक चुनें</span> — या नकद बिक्री के लिए खाली छोड़ें।</p>
              <p>▶ <span className="text-white font-bold">सामान चुनें</span> — जो-जो सामान बेचा उस पर क्लिक करें, रंग बदल जाएगा।</p>
              <p>▶ <span className="text-white font-bold">मात्रा डालें</span> — कितना किलो/पीस बेचा।</p>
              <p>▶ <span className="text-white font-bold">छूट</span> — अगर कोई छूट दी है तो रुपये में लिखें, नहीं तो 0।</p>
              <p>▶ <span className="text-white font-bold">भुगतान</span> — पैसे मिल गए = "✓ मिल गया" | उधार = "⏳ बाकी है"।</p>
              <p>▶ <span className="text-white font-bold">बिल बनाएं</span> बटन दबाएं — बिल तैयार!</p>
              <div className="bg-zinc-700 rounded-xl p-4 space-y-2">
                <p className="text-white font-bold">बिल बनने के बाद आप कर सकते हैं:</p>
                <p>📤 <span className="text-white font-bold">WhatsApp पर भेजें</span> — ग्राहक को सीधे message जाएगा</p>
                <p>🖨️ <span className="text-white font-bold">प्रिंट करें</span> — Thermal printer (80mm) पर छपेगा</p>
                <p>✓ <span className="text-white font-bold">पैसे मिल गए</span> — उधार को चुकाया mark करें</p>
              </div>
            </div>
          </div>

          {/* Step 6 — REPORT */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-xl font-extrabold text-white mb-1">📊 छठा काम — रिपोर्ट देखें</h3>
            <p className="text-zinc-400 text-xs mb-4">दिन/महीने की कमाई एक नज़र में</p>
            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
              <p>▶ नीचे <span className="text-white font-bold">📊 रिपोर्ट</span> पर क्लिक करें।</p>
              <p>▶ यहाँ दिखेगा — आज की बिक्री, इस महीने की बिक्री, कितना उधार बाकी है।</p>
              <p>▶ होम स्क्रीन पर भी <span className="text-white font-bold">आज की बिक्री</span> हमेशा दिखती रहती है।</p>
            </div>
          </div>

          {/* Common Problems */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-xl font-extrabold text-white mb-1">❓ अक्सर पूछे जाने वाले सवाल</h3>
            <p className="text-zinc-400 text-xs mb-4">इन्हें पहले पढ़ लो — फोन करने की जरूरत नहीं पड़ेगी</p>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-white font-bold">Q: सामान नहीं दिख रहा बिल बनाते समय?</p>
                <p className="text-zinc-400">→ पहले <span className="text-white">📦 सामान</span> में जाकर सामान जोड़ो — बिना सामान डाले बिल नहीं बनेगा।</p>
              </div>
              <div>
                <p className="text-white font-bold">Q: GST नहीं लगता मेरी दुकान पर?</p>
                <p className="text-zinc-400">→ सामान जोड़ते समय GST % में <span className="text-white">0</span> लिखो — GST नहीं जुड़ेगा।</p>
              </div>
              <div>
                <p className="text-white font-bold">Q: गलती से बाकी लिखा, अब पैसे मिल गए?</p>
                <p className="text-zinc-400">→ बिल खोलो → <span className="text-white">✓ पैसे मिल गए</span> बटन दबाओ — status बदल जाएगा।</p>
              </div>
              <div>
                <p className="text-white font-bold">Q: Internet नहीं है तो चलेगा?</p>
                <p className="text-zinc-400">→ Desktop app के लिए internet जरूरी है — data cloud पर save होता है। Mobile PWA के लिए भी internet चाहिए।</p>
              </div>
              <div>
                <p className="text-white font-bold">Q: Printer कौन सा लगेगा?</p>
                <p className="text-zinc-400">→ कोई भी <span className="text-white">80mm Thermal Printer</span> — जैसे Xprinter, TVS RP45 — सब चलेंगे।</p>
              </div>
              <div>
                <p className="text-white font-bold">Q: दूसरे मोबाइल/computer पर data दिखेगा?</p>
                <p className="text-zinc-400">→ हाँ — उसी Gmail से login करो, सारा data मिलेगा।</p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-r from-green-900/40 to-zinc-800 rounded-2xl p-6 border border-green-500/30 text-center">
            <h3 className="text-xl font-extrabold text-white mb-2">📞 फिर भी कोई दिक्कत?</h3>
            <p className="text-zinc-400 text-sm mb-5">WhatsApp पर message करो — सीधे developer से बात होगी</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919996865069"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-2xl text-sm transition"
              >
                💬 WhatsApp करें — 9996865069
              </a>
              <a
                href="tel:+919996865069"
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-bold px-6 py-3 rounded-2xl text-sm transition"
              >
                📞 Call करें
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}