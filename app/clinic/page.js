"use client";

const CLINIC_PWA_URL = "https://medical-saas-32pt.vercel.app/login";
const CLINIC_EXE_URL = "https://pub-70d93acc97f04394bd956a27e7e6b849.r2.dev/ClinicOS%20Setup%201.0.0.exe";

const features = [
  { icon: "👥", hi: "मरीज़ की लाइन — टोकन अपने आप बनेगा, कोई झंझट नहीं", en: "मरीज़ आए, टोकन मिला, बारी आने पर बुलाओ — रिसेप्शन पर कोई भीड़-भाड़ नहीं" },
  { icon: "📋", hi: "डिजिटल पर्चा — लिखो, छापो या व्हाट्सएप पर भेजो", en: "कंप्यूटर पर पर्चा लिखो, एक क्लिक में मरीज़ के व्हाट्सएप पर पहुंच जाएगा" },
  { icon: "🧪", hi: "लैब टेस्ट — पर्चे से आर्डर, रिपोर्ट भी यहीं", en: "पर्चे में टेस्ट लिखो, रिपोर्ट आने पर उसी मरीज़ के रिकॉर्ड में जोड़ो" },
  { icon: "🧾", hi: "जीएसटी बिल — नकद, यूपीआई, उधार सब चलेगा", en: "बिल बनाने में बस कुछ सेकंड — नकद हो, यूपीआई हो या उधार, सब का हिसाब" },
  { icon: "💊", hi: "दवाखाना — पर्चे से सीधे बिल बन जाएगा", en: "डॉक्टर का पर्चा दवाखाने पर पहुंचा, एक क्लिक में बिल तैयार" },
  { icon: "📦", hi: "दवा का स्टॉक — एक्सपायरी की चेतावनी पहले मिलेगी", en: "कौन सी दवा कितनी बची, कब खराब होगी — सब दिखेगा" },
  { icon: "📊", hi: "रिपोर्ट — आज का, महीने का, फायदा-नुकसान सब", en: "बिक्री की रिपोर्ट, फायदा-नुकसान, उधार बाकी — एक जगह" },
  { icon: "📒", hi: "उधार का हिसाब — किसने कितना लेना है", en: "उधार का पूरा हिसाब, व्हाट्सएप से याद दिला सकते हो" },
  { icon: "🩺", hi: "कई डॉक्टर — अलग-अलग लाइन और पर्चे", en: "हर डॉक्टर की अलग लाइन, अलग पर्चे, अलग रिकॉर्ड" },
  { icon: "📱", hi: "मोबाइल और कंप्यूटर दोनों पर चलेगा", en: "मोबाइल पर भी खुलेगा, विंडोज़ पर भी — कहीं से भी देखो" },
];

const howTo = [
  { step: "पहला", icon: "🔑", hi: "गूगल से लॉगिन करो", en: "डॉक्टर अपने गूगल खाते से लॉगिन करें — कोई पासवर्ड याद नहीं रखना" },
  { step: "दूसरा", icon: "⚙️", hi: "क्लिनिक की जानकारी भरो", en: "क्लिनिक का नाम, डॉक्टर का नाम, पता, जीएसटीआईएन — एक बार भरो, हमेशा काम आएगा" },
  { step: "तीसरा", icon: "👤", hi: "मरीज़ को दर्ज करो", en: "नाम, उम्र, फ़ोन, तकलीफ लिखो — टोकन अपने आप मिल जाएगा" },
  { step: "चौथा", icon: "🩺", hi: "डॉक्टर देखे और पर्चा लिखे", en: "मरीज़ का नाम खोलो, पर्चा लिखो, टेस्ट लिखो" },
  { step: "पाँचवाँ", icon: "💊", hi: "दवाखाने पर बिल बने", en: "पर्चा दवाखाने पर पहुंचा, दवा दो और बिल बनाओ" },
  { step: "छठा", icon: "📊", hi: "रिपोर्ट देखो", en: "आज की बिक्री, फायदा, उधार — कभी भी देख सकते हो" },
];

const whyUs = [
  { icon: "💸", title: "सबसे सस्ता", desc: "₹4,999 में पूरा १ साल — कोई मासिक शुल्क नहीं, कोई छुपी हुई फीस नहीं।" },
  { icon: "🔴", title: "इंटरनेट न हो तो भी चलेगा", desc: "विंडोज़ वाला ऐप बिना इंटरनेट के भी काम करता है — डेटा सुरक्षित रहता है।" },
  { icon: "🇮🇳", title: "भारत के लिए बना", desc: "जीएसटी, एचएसएन कोड, हिंदी — भारतीय क्लिनिक की हर ज़रूरत।" },
  { icon: "🔒", title: "डेटा आपका — आपके पास", desc: "कोई बाहरी कंपनी को डेटा नहीं जाता — पूरी गोपनीयता।" },
  { icon: "📞", title: "सीधे बात करो", desc: "व्हाट्सएप पर सीधे बनाने वाले से बात — कोई कॉल सेंटर नहीं।" },
  { icon: "🔄", title: "अपडेट मुफ्त", desc: "जीएसटी बदले या नया फीचर आए — सब अपने आप अपडेट होगा, कोई अलग पैसा नहीं।" },
];

export default function ClinicPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <div className="bg-teal-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
            ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            🏥 क्लिनिकओएस<br />
            <span className="text-teal-200">स्मार्ट क्लिनिक प्रबंधन</span>
          </h1>
          <p className="text-xl mb-2 font-semibold text-teal-100">
            ३ से ४ डॉक्टर तक के अस्पताल के लिए — मरीज़ की लाइन, पर्चा, दवाखाना, बिल — सब एक जगह।
          </p>
          <p className="text-base mb-8 text-teal-200/80">
            एक बार सेट करो, रोज़ काम आएगा।
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CLINIC_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold text-lg px-8 py-3.5 rounded-2xl shadow-lg hover:bg-teal-50 transition active:scale-95"
            >
              📱 मुफ्त में आज़माएं
            </a>
            <a
              href={CLINIC_EXE_URL}
              className="inline-flex items-center justify-center gap-2 bg-teal-600 border-2 border-white/40 text-white font-bold text-lg px-8 py-3.5 rounded-2xl shadow-lg hover:bg-teal-500 transition active:scale-95"
            >
              💻 विंडोज़ पर डाउनलोड करें
            </a>
          </div>
          <p className="text-sm text-teal-200/60 mt-3">
            मोबाइल पर: Chrome मेनू ⋮ → होम स्क्रीन पर जोड़ें &nbsp;|&nbsp; विंडोज़: सेटअप फाइल चलाओ
          </p>
        </div>
      </section>

      <section className="py-6 px-4 bg-gray-900 border-b border-gray-700">
        <div className="max-w-3xl mx-auto" style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(20,184,166,0.3)",borderRadius:"14px",padding:"20px 24px"}}>
          <p className="font-extrabold text-white text-sm mb-2">⚠️ Windows install करते समय यह संदेश आ सकता है</p>
          <p className="text-gray-300 text-sm mb-3">Windows 11 में <strong className="text-white">Smart App Control</strong> नाम की सुरक्षा होती है जो नए software को रोकती है। घबराएं नहीं — software पूरी तरह सुरक्षित है।</p>
          <p className="text-white font-bold text-sm mb-1">इस तरह install करें:</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            १. Start menu में <strong className="text-white">Windows Security</strong> खोजें और खोलें<br />
            २. <strong className="text-white">App &amp; browser control</strong> पर click करें<br />
            ३. <strong className="text-white">Smart App Control</strong> को <strong className="text-white">Off</strong> करें<br />
            ४. अब .exe file दोबारा चलाएं — install हो जाएगा<br />
            ५. install होने के बाद Smart App Control वापस On कर सकते हैं
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-teal-400">
            क्या-क्या मिलेगा?
          </h2>
          <p className="text-center text-gray-400 text-base mb-10">
            एक सॉफ्टवेयर — पूरे क्लिनिक की ज़रूरत
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-teal-500/20 rounded-xl px-5 py-4 flex gap-4 items-start">
                <span className="text-3xl">{f.icon}</span>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{f.hi}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">
            कैसे काम करता है?
          </h2>
          <p className="text-center text-gray-400 text-base mb-10">
            शुरू से अंत तक — बस ६ कदम
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {howTo.map((h, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-teal-400 transition">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{h.icon}</span>
                  <span className="text-xs font-bold text-teal-600 uppercase">{h.step}</span>
                </div>
                <p className="font-bold text-gray-800 text-sm mb-1">{h.hi}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{h.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">
            क्लिनिकओएस ही क्यों?
          </h2>
          <p className="text-center text-gray-400 text-base mb-10">
            जो बात हमें बाकी सबसे अलग करती है
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-teal-400 transition">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-800 text-base mb-1">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">कीमत</h2>
          <p className="text-center text-gray-400 text-base mb-10">कोई मासिक शुल्क नहीं — एक बार खरीदो, साल भर चलाओ</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-teal-500 p-6 text-center shadow-lg relative bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                नया खाता
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-1">एक बार — १ साल शामिल</p>
              <p className="text-gray-400 text-sm mb-5">७ दिन मुफ्त — कोई कार्ड नहीं</p>
              <a
                href={CLINIC_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-500 transition mb-2 text-base"
              >
                मुफ्त में आज़माएं
              </a>
              <a
                href="/payment?software=clinic"
                className="block w-full border border-teal-500 text-teal-600 font-bold py-3 rounded-xl hover:bg-teal-50 transition text-base"
              >
                अभी खरीदें — ₹4,999
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीकरण</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">₹1,999</div>
              <p className="text-gray-400 text-base mb-1">हर साल</p>
              <p className="text-gray-400 text-sm mb-5">समाप्ति से पहले नवीकरण करें</p>
              <a
                href="/payment?software=clinic&plan=renewal"
                className="block w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-500 transition text-base"
              >
                अभी नवीकरण करें — ₹1,999
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-teal-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — बिल्कुल मुफ्त</h2>
          <p className="text-teal-200 mb-6 text-base">७ दिन पूरी तरह मुफ्त — कोई कार्ड नहीं, कोई वादा नहीं</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <a
              href={CLINIC_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-700 font-bold px-8 py-3 rounded-2xl hover:bg-teal-50 transition text-base"
            >
              📱 मुफ्त में खोलें
            </a>
            <a
              href={CLINIC_EXE_URL}
              className="bg-teal-600 border-2 border-white/40 text-white font-bold px-8 py-3 rounded-2xl hover:bg-teal-500 transition text-base"
            >
              💻 विंडोज़ पर डाउनलोड करें
            </a>
          </div>
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