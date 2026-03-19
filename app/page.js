"use client";

const HARDWARE_EXE_URL = "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://nishant-ten.vercel.app";
const SCHOOL_EXE_URL = "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";

const hardwareFeatures = [
  { icon: "🧾", title: "बिलिंग", desc: "GST के साथ तुरंत बिल बनाओ — CGST, SGST automatic" },
  { icon: "📦", title: "स्टॉक", desc: "सामान का पूरा हिसाब — कम हो तो alert" },
  { icon: "👥", title: "ग्राहक सूची", desc: "हर ग्राहक की पूरी history एक जगह" },
  { icon: "💸", title: "उधारी", desc: "किसने कितना लिया, कितना बाकी — WhatsApp reminder" },
  { icon: "📊", title: "रिपोर्ट", desc: "रोज, महीने, साल की बिक्री रिपोर्ट" },
  { icon: "🖨️", title: "Print & PDF", desc: "बिल print करो या PDF download करो" },
];

const schoolFeatures = [
  { icon: "🎓", title: "Student Management", desc: "Admission, records, class & section — all in one place" },
  { icon: "✅", title: "Attendance", desc: "Daily attendance by class and date" },
  { icon: "💰", title: "Fee Management", desc: "Collect fees, print receipts, track pending payments" },
  { icon: "📝", title: "Exams & Results", desc: "Enter marks, auto grade, print report cards" },
  { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Parents can view fees, attendance & results anytime" },
  { icon: "📋", title: "Notice Board", desc: "Post announcements instantly — urgent notices highlighted" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <section className="bg-amber-500 py-3 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3 text-white font-bold text-lg">
          <a href="tel:+919996865069" className="flex items-center gap-2 hover:underline">📞 9996865069</a>
          <span className="hidden sm:inline">|</span>
          <a href="mailto:prasad.kamta@gmail.com" className="flex items-center gap-2 hover:underline">✉️ prasad.kamta@gmail.com</a>
          <span className="hidden sm:inline">|</span>
          <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">💬 WhatsApp करें</a>
        </div>
      </section>

      {/* HARDWARE */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं चाहिए
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            निशांत हार्डवेयर<br />प्रबंधन सॉफ्टवेयर
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl mx-auto">
            हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, GST रिपोर्ट सब एक जगह।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={HARDWARE_EXE_URL} className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition">
              🖥️ Windows पर डाउनलोड करें (.exe)
            </a>
            <div className="flex flex-col items-center">
              <a href={HARDWARE_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 Android / Tablet पर खोलें
              </a>
              <p className="text-green-100 text-xs mt-2">👉 Chrome menu ⋮ → <strong>Add to Home Screen</strong> → Install</p>
            </div>
          </div>
          <p className="text-blue-200 text-sm mt-4">Windows 10/11 — 64-bit &nbsp;|&nbsp; Android Chrome पर भी चलता है</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">क्या-क्या मिलता है?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareFeatures.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">दो तरीके — एक सॉफ्टवेयर</h2>
          <p className="text-center text-gray-500 mb-10">Windows पर दुकान में चलाओ, Android पर राह चलते देखो</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-2 border-blue-600 p-8 shadow-lg">
              <div className="text-5xl mb-4">🖥️</div>
              <h3 className="text-2xl font-bold mb-2 text-blue-700">Windows Software</h3>
              <p className="text-gray-500 text-sm mb-4">दुकान के computer पर install करो — internet बंद हो तो भी 72 घंटे काम करता है</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ एक बार install — हमेशा के लिए</li>
                <li>✅ Internet बंद हो तो भी 72 घंटे चलेगा</li>
                <li>✅ बड़ी screen पर आसान billing</li>
                <li>✅ Printer से सीधे bill print</li>
                <li>✅ Windows 10 / 11 — 64-bit</li>
              </ul>
              <a href={HARDWARE_EXE_URL} className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl text-center hover:bg-blue-700 transition">
                ⬇️ Download करें (.exe)
              </a>
            </div>
            <div className="rounded-2xl border-2 border-green-500 p-8 shadow-lg">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-2 text-green-700">Android / Tablet App</h3>
              <p className="text-gray-500 text-sm mb-4">कोई install नहीं — Chrome में खोलो और Home Screen पर add करो</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ 10 इंच tablet पर बिल्कुल सही</li>
                <li>✅ राह चलते stock और उधारी देखो</li>
                <li>✅ रिपोर्ट कहीं से भी check करो</li>
                <li>✅ कोई app install नहीं — Chrome में खुलता है</li>
                <li>✅ Home Screen पर icon बनाओ — app जैसा लगेगा</li>
              </ul>
              <a href={HARDWARE_PWA_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 text-white font-bold py-3 rounded-xl text-center hover:bg-green-600 transition">
                📱 Android पर खोलें
              </a>
              <p className="text-gray-400 text-xs mt-3 text-center">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-blue-600 p-8 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">पहली बार</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-1">₹5,500</div>
              <p className="text-gray-400 text-sm mb-6">एक बार — 1 साल शामिल</p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Windows + Android दोनों</li>
                <li>✅ सभी features</li>
                <li>✅ अपडेट मुफ्त</li>
                <li>✅ WhatsApp support</li>
                <li>✅ 7 दिन free trial</li>
              </ul>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">
                Trial शुरू करें
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-gray-700">नवीनीकरण</h3>
              <div className="text-5xl font-extrabold text-blue-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-6">प्रति वर्ष</p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Windows + Android दोनों</li>
                <li>✅ सभी features</li>
                <li>✅ अपडेट मुफ्त</li>
                <li>✅ WhatsApp support</li>
                <li>✅ होस्टिंग + रखरखाव</li>
              </ul>
              <a href="/payment?software=hardware" className="block w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition">
                Trial शुरू करें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL SOFTWARE */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🆓 7 Days Completely Free — No Card Required
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            EduSaaS School<br />Management Software
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-xl mx-auto">
            Built for CBSE private schools — Students, Fees, Attendance, Exams, Results & Parent Portal all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCHOOL_EXE_URL} className="inline-block bg-white text-indigo-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-indigo-50 transition">
              🖥️ Download for Windows (.exe)
            </a>
          </div>
          <p className="text-indigo-200 text-sm mt-4">Windows 10/11 — 64-bit</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Everything Your School Needs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolFeatures.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-xl font-bold mb-1 text-gray-900">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-600 p-8 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-xl font-bold mb-2 text-gray-700">First Time</h3>
              <div className="text-5xl font-extrabold text-indigo-600 mb-1">₹5,500</div>
              <p className="text-gray-400 text-sm mb-6">One time — 1 year included</p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ All modules included</li>
                <li>✅ Free updates</li>
                <li>✅ WhatsApp support</li>
                <li>✅ 7 days free trial</li>
              </ul>
              <a href="/payment?software=school" className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition">
                Start Free Trial
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Renewal</h3>
              <div className="text-5xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-6">Per year</p>
              <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ All modules included</li>
                <li>✅ Free updates</li>
                <li>✅ WhatsApp support</li>
                <li>✅ Hosting + maintenance</li>
              </ul>
              <a href="/payment?software=school" className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition">
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">मुफ्त Invoice Generator</h2>
          <p className="text-gray-500 mb-6 text-sm">GST invoice तुरंत बनाओ — कोई signup नहीं, बिल्कुल मुफ्त</p>
          <a href="https://pdf-invoice-generator.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-700 transition">
            Invoice बनाओ →
          </a>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-16 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-blue-100 mb-8">7 दिन पूरी तरह मुफ्त। कोई card नहीं, कोई झंझट नहीं।</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={HARDWARE_EXE_URL} className="inline-block bg-white text-blue-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition">
              🖥️ Sanitary Shop Software
            </a>
            <a href={SCHOOL_EXE_URL} className="inline-block bg-white text-indigo-700 font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:bg-indigo-50 transition">
              🏫 School Software
            </a>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-sm">
            <a href="tel:+919996865069" className="text-white font-bold hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="text-white font-bold hover:underline">✉️ prasad.kamta@gmail.com</a>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:underline">💬 WhatsApp करें</a>
          </div>
        </div>
      </section>

    </main>
  );
}