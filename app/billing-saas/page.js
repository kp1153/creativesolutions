"use client";

const BILLING_EXE_URL =
  "https://pub-ef61c868f2a7481d8c2857d0de28bd51.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20%E0%A4%AC%E0%A4%BF%E0%A4%B2%E0%A4%BF%E0%A4%82%E0%A4%97%20Setup%201.0.0.exe";
const BILLING_PORTABLE_URL =
  "https://pub-ef61c868f2a7481d8c2857d0de28bd51.r2.dev/NishantBilling-Portable-1.0.0.exe";
const BILLING_PWA_URL = "https://billing.nishantsoftwares.in";

export default function BillingPage() {
  return (
    <main
      className="min-h-screen bg-zinc-900 text-white"
      style={{ fontFamily: "sans-serif", fontWeight: 700 }}
    >
      {/* Hero */}
      <section className="py-14 px-4 text-center bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🧾</div>
          <h1 className="text-4xl md:text-6xl font-black mb-3 leading-tight">
            निशांत बिलिंग
          </h1>
          <p className="text-blue-400 font-black text-xl mb-2">
            GST Billing Software — किसी भी दुकान के लिए
          </p>
          <p className="text-zinc-300 text-base font-bold mb-6">
            हलवाई, कपड़ा, किराना, हार्डवेयर — सबके लिए एक ही सॉफ्टवेयर
          </p>

          {/* Price */}
          <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl px-8 py-4 mb-6">
            <p className="text-white text-4xl font-black">₹4,999/पहले साल</p>
            <p className="text-blue-200 text-lg font-black mt-1">
              नवीकरण मात्र ₹2,500/साल
            </p>
            <p className="text-blue-200 text-sm font-bold mt-1">
              🎉 सीमित समय की छूट — अभी लें
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <a
              href={BILLING_EXE_URL}
              className="bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-2xl text-base transition"
            >
              💻 Windows Installer डाउनलोड करें (.exe)
            </a>
            <a
              href={BILLING_PORTABLE_URL}
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-black px-6 py-3.5 rounded-2xl text-base transition"
            >
              📦 Portable Version डाउनलोड करें
            </a>
            <a
              href={BILLING_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-black px-6 py-3.5 rounded-2xl text-base transition"
            >
              📱 Mobile पर Install करें (Android)
            </a>
          </div>
          <p className="text-zinc-400 text-sm font-bold">
            Windows Installer = install होगा | Portable = बिना install, सीधे
            चलाओ
          </p>
        </div>
      </section>

      {/* हम जैसा कोई नहीं */}
      <section className="py-12 px-4 bg-gradient-to-b from-zinc-900 to-zinc-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              🏆 बाज़ार में हमसे बेहतर कोई नहीं
            </h2>
            <p className="text-zinc-300 text-base font-bold">
              हर वो चीज़ जो आपकी दुकान को चाहिए — एक जगह
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-800 border border-blue-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">📦</p>
              <p className="text-white text-lg font-black mb-1">
                स्टॉक ट्रैकिंग
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                बिल बनते ही स्टॉक अपने आप घटता है। कम स्टॉक पर तुरंत चेतावनी —
                कभी माल खत्म होने का पता नहीं चला? अब चलेगा।
              </p>
            </div>

            <div className="bg-zinc-800 border border-green-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">💵📱💳📋</p>
              <p className="text-white text-lg font-black mb-1">
                4 तरह का भुगतान
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                नकद, UPI, कार्ड, उधार — चारों एक ही बिल पर। जिस तरह पैसे मिले,
                उसी तरह record होगा।
              </p>
            </div>

            <div className="bg-zinc-800 border border-orange-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">📋</p>
              <p className="text-white text-lg font-black mb-1">
                उधारी खाता (Ledger)
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                हर ग्राहक का कितना बाकी है — एक नज़र में। कुल बकाया ऊपर दिखता
                है। कोई हिसाब नहीं भूलेगा।
              </p>
            </div>

            <div className="bg-zinc-800 border border-purple-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">📊</p>
              <p className="text-white text-lg font-black mb-1">
                GSTR-1 Export
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                महीने का GST data एक click में CSV में। CA को भेजो, खुद भरो — जो
                चाहो करो। झंझट खत्म।
              </p>
            </div>

            <div className="bg-zinc-800 border border-amber-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">📈</p>
              <p className="text-white text-lg font-black mb-1">असली रिपोर्ट</p>
              <p className="text-zinc-300 text-sm font-bold">
                महीनेवार बिक्री, मिला हुआ vs बाकी — progress bar के साथ। आज
                कितना हुआ, इस महीने कितना — सब दिखता है।
              </p>
            </div>

            <div className="bg-zinc-800 border border-green-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">📤</p>
              <p className="text-white text-lg font-black mb-1">WhatsApp बिल</p>
              <p className="text-zinc-300 text-sm font-bold">
                बिल बना और सीधे ग्राहक के WhatsApp पर। एक बटन — काम खत्म। कोई
                copy-paste नहीं।
              </p>
            </div>

            <div className="bg-zinc-800 border border-red-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">🖨️</p>
              <p className="text-white text-lg font-black mb-1">
                Thermal Print
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                80mm thermal printer पर सीधे print। दुकानदार का logo, नाम, GSTIN
                — सब छपेगा।
              </p>
            </div>

            <div className="bg-zinc-800 border border-zinc-500/40 rounded-2xl p-5">
              <p className="text-2xl mb-2">☁️</p>
              <p className="text-white text-lg font-black mb-1">
                हर जगह, हर device
              </p>
              <p className="text-zinc-300 text-sm font-bold">
                Mobile, Desktop, Laptop — जहाँ चाहो खोलो। Gmail से login करो,
                सारा data हाज़िर। कोई pen drive नहीं, कोई backup नहीं।
              </p>
            </div>
          </div>

          {/* Comparison table */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700 mb-4">
            <h3 className="text-xl font-black text-white mb-4 text-center">
              तुलना करके देखो
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left text-zinc-400 font-black pb-3 pr-4">
                      खूबी
                    </th>
                    <th className="text-center text-blue-400 font-black pb-3 px-3">
                      निशांत बिलिंग
                    </th>
                    <th className="text-center text-zinc-500 font-black pb-3 px-3">
                      बाकी सॉफ्टवेयर
                    </th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {[
                    ["स्टॉक ट्रैकिंग", "✅", "✅"],
                    ["उधारी Ledger", "✅", "✅"],
                    ["GSTR-1 Export", "✅", "✅"],
                    ["4 Payment Modes", "✅", "✅"],
                    ["WhatsApp बिल", "✅", "❌"],
                    ["हिंदी UI", "✅", "❌"],
                    ["2 मिनट Setup", "✅", "❌"],
                    ["Mobile + Desktop दोनों", "✅", "❌"],
                    ["कीमत/साल", "₹2,500", "₹7,999+"],
                  ].map(([feature, us, them]) => (
                    <tr key={feature} className="border-b border-zinc-700/50">
                      <td className="text-zinc-300 font-bold py-2.5 pr-4">
                        {feature}
                      </td>
                      <td className="text-center font-black py-2.5 px-3 text-green-400">
                        {us}
                      </td>
                      <td className="text-center font-black py-2.5 px-3 text-zinc-400">
                        {them}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* User Manual */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-amber-400 mb-2">
              📖 यूज़र मैनुअल
            </h2>
            <p className="text-zinc-300 text-base font-bold">
              पहली बार इस्तेमाल करने वाले ध्यान से पढ़ें — एक बार पढ़ा, हमेशा के
              लिए सीखा
            </p>
          </div>

          {/* Step 1 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-2xl font-black text-white mb-1">
              📥 पहला काम — सॉफ्टवेयर खोलें
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              सबसे पहले यह करें
            </p>
            <div className="space-y-3 text-base text-zinc-300 leading-relaxed font-bold">
              <p>
                ▶ ऊपर दिए{" "}
                <span className="text-blue-400 font-black">
                  Windows Installer
                </span>{" "}
                बटन पर क्लिक करें — फाइल डाउनलोड होगी।
              </p>
              <p>
                ▶ डाउनलोड हुई फाइल पर{" "}
                <span className="text-white font-black">डबल क्लिक</span> करें।
                अगर Windows ने रोका तो{" "}
                <span className="text-white font-black">
                  "More Info" → "Run Anyway"
                </span>{" "}
                क्लिक करें।
              </p>
              <p>
                ▶ Install हो जाने के बाद Desktop पर{" "}
                <span className="text-white font-black">निशांत बिलिंग</span> का
                icon दिखेगा — उस पर डबल क्लिक करें।
              </p>
              <p>
                ▶ सॉफ्टवेयर खुलेगा और{" "}
                <span className="text-white font-black">Google से Login</span>{" "}
                का बटन दिखेगा।
              </p>
              <p>▶ अपना Gmail account से login करें — बस हो गया।</p>
              <p className="bg-zinc-700 rounded-xl p-3 text-zinc-300 font-bold">
                💡{" "}
                <span className="text-white font-black">Portable Version</span>{" "}
                वालों को install नहीं करना — सीधे EXE फाइल पर डबल क्लिक करो, चल
                जाएगा।
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-2xl font-black text-white mb-1">
              🏪 दूसरा काम — दुकान की जानकारी भरें
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              यह एक बार करना है — बिल पर आपकी दुकान का नाम छपेगा
            </p>
            <div className="space-y-3 text-base text-zinc-300 leading-relaxed font-bold">
              <p>
                ▶ Login के बाद नीचे{" "}
                <span className="text-white font-black">⚙️ सेटिंग</span> पर
                क्लिक करें।
              </p>
              <p>▶ यहाँ भरें:</p>
              <div className="bg-zinc-700 rounded-xl p-4 space-y-2">
                <p>
                  🏷️ <span className="text-white font-black">दुकान का नाम</span>{" "}
                  — जैसे "राम हलवाई", "श्याम क्लॉथ स्टोर"
                </p>
                <p>
                  📞 <span className="text-white font-black">मोबाइल नंबर</span>{" "}
                  — ग्राहक को WhatsApp पर दिखेगा
                </p>
                <p>
                  📍 <span className="text-white font-black">पता</span> — दुकान
                  का पूरा पता
                </p>
                <p>
                  🔢 <span className="text-white font-black">GSTIN</span> — अगर
                  GST नंबर है तो भरें, नहीं है तो खाली छोड़ें
                </p>
                <p>
                  🖼️ <span className="text-white font-black">Logo</span> — दुकान
                  की फोटो या logo लगाएं (PNG/JPG)
                </p>
              </div>
              <p>
                ▶ सब भरने के बाद{" "}
                <span className="text-white font-black">सेव करें</span> बटन
                दबाएं।
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-2xl font-black text-white mb-1">
              📦 तीसरा काम — सामान की लिस्ट बनाएं
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              यह सबसे जरूरी काम है — पहले सामान डालो, फिर बिल बनेगा
            </p>
            <div className="space-y-3 text-base text-zinc-300 leading-relaxed font-bold">
              <p>
                ▶ नीचे <span className="text-white font-black">📦 सामान</span>{" "}
                पर क्लिक करें।
              </p>
              <p>
                ▶ <span className="text-white font-black">+ नया सामान</span> बटन
                दबाएं।
              </p>
              <p>▶ यह भरें:</p>
              <div className="bg-zinc-700 rounded-xl p-4 space-y-2">
                <p>
                  🏷️ <span className="text-white font-black">सामान का नाम</span>{" "}
                  — जैसे "जलेबी", "बासमती चावल 5kg"
                </p>
                <p>
                  ⚖️ <span className="text-white font-black">इकाई (Unit)</span>{" "}
                  — किलो, लीटर, पीस, दर्जन
                </p>
                <p>
                  💰 <span className="text-white font-black">भाव (Price)</span>{" "}
                  — एक किलो/पीस का दाम
                </p>
                <p>
                  📊 <span className="text-white font-black">GST %</span> — नहीं
                  लगता तो 0 लिखें
                </p>
                <p>
                  📦{" "}
                  <span className="text-white font-black">शुरुआती स्टॉक</span> —
                  अभी कितना माल है —{" "}
                  <span className="text-blue-400 font-black">नई खूबी</span>
                </p>
                <p>
                  ⚠️{" "}
                  <span className="text-white font-black">
                    कम स्टॉक चेतावनी
                  </span>{" "}
                  — कितने पर alert आए —{" "}
                  <span className="text-blue-400 font-black">नई खूबी</span>
                </p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mt-2">
                <p className="text-amber-400 font-black mb-2">
                  💡 हलवाई भाई के लिए उदाहरण:
                </p>
                <div className="space-y-1 text-zinc-300 font-bold">
                  <p>• जलेबी — किलो — ₹160 — GST 0%</p>
                  <p>• गुलाब जामुन — पीस — ₹10 — GST 0%</p>
                  <p>• बर्फी — किलो — ₹400 — GST 0%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-2xl font-black text-white mb-1">
              👥 चौथा काम — ग्राहक जोड़ें (वैकल्पिक)
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              उधारी वाले या पक्के ग्राहकों के लिए — नकद ग्राहक के लिए जरूरी नहीं
            </p>
            <div className="space-y-3 text-base text-zinc-300 leading-relaxed font-bold">
              <p>
                ▶ नीचे <span className="text-white font-black">👥 ग्राहक</span>{" "}
                पर क्लिक करें।
              </p>
              <p>
                ▶ <span className="text-white font-black">+ नया ग्राहक</span>{" "}
                दबाएं।
              </p>
              <p>
                ▶ नाम, मोबाइल नंबर, पता भरें —{" "}
                <span className="text-white font-black">सेव करें।</span>
              </p>
              <p className="bg-zinc-700 rounded-xl p-3 font-bold">
                💡 ग्राहक page पर अब{" "}
                <span className="text-orange-400 font-black">कुल बकाया</span> और
                हर ग्राहक का{" "}
                <span className="text-orange-400 font-black">
                  उधारी balance
                </span>{" "}
                दिखता है —{" "}
                <span className="text-blue-400 font-black">नई खूबी</span>
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-2xl font-black text-white mb-1">
              🧾 पाँचवाँ काम — बिल बनाएं
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              यही सबसे ज्यादा करेंगे — रोज़ का काम
            </p>
            <div className="space-y-3 text-base text-zinc-300 leading-relaxed font-bold">
              <p>
                ▶ होम स्क्रीन पर{" "}
                <span className="text-white font-black">
                  नीला बटन "नया बिल बनाएं"
                </span>{" "}
                दबाएं।
              </p>
              <p>
                ▶ <span className="text-white font-black">ग्राहक चुनें</span> —
                उधारी वाले ग्राहक के नाम के आगे बकाया राशि भी दिखेगी।
              </p>
              <p>
                ▶ <span className="text-white font-black">सामान चुनें</span> —
                कम स्टॉक वाले सामान पर ⚠️ दिखेगा।
              </p>
              <p>
                ▶ <span className="text-white font-black">मात्रा डालें</span> —
                बिल बनने पर स्टॉक अपने आप घटेगा।
              </p>
              <p>
                ▶ <span className="text-white font-black">छूट</span> — रुपये में
                लिखें।
              </p>
              <p>
                ▶{" "}
                <span className="text-white font-black">
                  भुगतान का तरीका चुनें
                </span>{" "}
                — <span className="text-blue-400 font-black">नई खूबी:</span>
              </p>
              <div className="bg-zinc-700 rounded-xl p-4 grid grid-cols-2 gap-2">
                <p>
                  💵 <span className="text-white font-black">नकद</span>
                </p>
                <p>
                  📱 <span className="text-white font-black">UPI</span>
                </p>
                <p>
                  💳 <span className="text-white font-black">कार्ड</span>
                </p>
                <p>
                  📋 <span className="text-white font-black">उधार</span>
                </p>
              </div>
              <p>
                ▶ <span className="text-white font-black">बिल बनाएं</span> — हो
                गया!
              </p>
              <div className="bg-zinc-700 rounded-xl p-4 space-y-2">
                <p className="text-white font-black">बिल बनने के बाद:</p>
                <p>
                  📤{" "}
                  <span className="text-white font-black">
                    WhatsApp पर भेजें
                  </span>{" "}
                  — ग्राहक को सीधे message
                </p>
                <p>
                  🖨️ <span className="text-white font-black">प्रिंट करें</span>{" "}
                  — 80mm Thermal printer पर
                </p>
                <p>
                  ✓ <span className="text-white font-black">पैसे मिल गए</span> —
                  उधार को चुकाया mark करें
                </p>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
            <h3 className="text-2xl font-black text-white mb-1">
              📊 छठा काम — रिपोर्ट और GSTR Export
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              दिन/महीने की कमाई + GST file करने का data
            </p>
            <div className="space-y-3 text-base text-zinc-300 leading-relaxed font-bold">
              <p>
                ▶ नीचे <span className="text-white font-black">📊 रिपोर्ट</span>{" "}
                पर क्लिक करें।
              </p>
              <p>
                ▶ यहाँ दिखेगा — आज की बिक्री, महीनेवार बिक्री, मिला vs बाकी का
                bar।
              </p>
              <p>
                ▶ <span className="text-blue-400 font-black">नई खूबी:</span>{" "}
                महीना चुनो और{" "}
                <span className="text-white font-black">GSTR-1 CSV Export</span>{" "}
                करो — CA को भेजो या खुद GST भरो।
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-zinc-800 rounded-2xl p-6 border border-red-500/30">
            <h3 className="text-2xl font-black text-white mb-1">
              ❓ अक्सर पूछे जाने वाले सवाल
            </h3>
            <p className="text-zinc-400 text-sm font-bold mb-4">
              इन्हें पहले पढ़ लो — फोन करने की जरूरत नहीं पड़ेगी
            </p>
            <div className="space-y-4 text-base font-bold">
              {[
                [
                  "सामान नहीं दिख रहा बिल बनाते समय?",
                  "→ पहले 📦 सामान में जाकर सामान जोड़ो — बिना सामान डाले बिल नहीं बनेगा।",
                ],
                [
                  "GST नहीं लगता मेरी दुकान पर?",
                  "→ सामान जोड़ते समय GST % में 0 लिखो।",
                ],
                [
                  "गलती से बाकी लिखा, अब पैसे मिल गए?",
                  "→ बिल खोलो → ✓ पैसे मिल गए बटन दबाओ।",
                ],
                [
                  "Internet नहीं है तो चलेगा?",
                  "→ Desktop और Mobile दोनों के लिए internet जरूरी है — data cloud पर save होता है।",
                ],
                [
                  "Printer कौन सा लगेगा?",
                  "→ कोई भी 80mm Thermal Printer — Xprinter, TVS RP45 — सब चलेंगे।",
                ],
                [
                  "दूसरे मोबाइल/computer पर data दिखेगा?",
                  "→ हाँ — उसी Gmail से login करो, सारा data मिलेगा।",
                ],
                [
                  "स्टॉक गलत हो जाए तो?",
                  "→ सामान की list में जाओ, उस सामान को खोलो और stock manually ठीक करो।",
                ],
                [
                  "GSTR Export में क्या होता है?",
                  "→ उस महीने के सभी बिल, GST amount, ग्राहक का नाम — CSV में। CA को भेज दो।",
                ],
              ].map(([q, a]) => (
                <div key={q}>
                  <p className="text-white font-black">Q: {q}</p>
                  <p className="text-zinc-400 font-bold">{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="bg-gradient-to-r from-green-900/40 to-zinc-800 rounded-2xl p-6 border border-green-500/30 text-center">
            <h3 className="text-2xl font-black text-white mb-2">
              📞 फिर भी कोई दिक्कत?
            </h3>
            <p className="text-zinc-300 text-base font-bold mb-5">
              WhatsApp पर message करो — सीधे developer से बात होगी
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919996865069"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-black px-6 py-3 rounded-2xl text-base transition"
              >
                💬 WhatsApp करें — 9996865069
              </a>
              <a
                href="tel:+919996865069"
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-black px-6 py-3 rounded-2xl text-base transition"
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
