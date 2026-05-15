import Link from "next/link";

const COLLEGE_EXE_URL = "https://github.com/kp1153/college-saas/releases/download/v1.0.0/Nishant.PG.College.Setup.0.1.0.exe";

const features = [
  {
    icon: "🎓",
    title: "विद्यार्थी प्रबंधन",
    desc: "विद्यार्थियों की पूरी जानकारी दर्ज करें — नाम, कोर्स, सेमेस्टर, फैकल्टी, रोल नंबर, PEN, आधार, फोटो, पिता/माता का नाम और फोन।",
  },
  {
    icon: "💰",
    title: "फीस संग्रह और रसीद",
    desc: "ट्यूशन, एडमिशन, परीक्षा और विविध शुल्क दर्ज करें। कॉलेज लोगो के साथ प्रोफेशनल रसीद प्रिंट करें। किसने दिया, किसने नहीं — एक नज़र में। Defaulters का WhatsApp link तैयार — message ready, सिर्फ Send करना है।",
  },
  {
    icon: "✅",
    title: "दैनिक उपस्थिति",
    desc: "हर दिन कोर्स और सेमेस्टर-वार उपस्थिति दर्ज करें। उपस्थित/अनुपस्थित की संख्या तुरंत देखें। अनुपस्थित विद्यार्थियों के अभिभावकों का WhatsApp link तैयार — एक click में message खुलेगा।",
  },
  {
    icon: "🔑",
    title: "Professor PIN Login",
    desc: "हर Professor को Principal द्वारा 6 अंकों का PIN मिलता है। वे अपने mobile से login करते हैं — कोई email नहीं, कोई password नहीं। वे सिर्फ अपने assigned courses देखते हैं। Principal सब monitor करते हैं।",
  },
  {
    icon: "📝",
    title: "परीक्षा और परिणाम",
    desc: "Internal, Mid Term, Practical और Annual परीक्षाएं schedule करें। हर विद्यार्थी के अंक दर्ज करें — grade और pass/fail अपने आप calculate होगा। Subject-wise result sheets प्रिंट करें।",
  },
  {
    icon: "📄",
    title: "अंकसूची",
    desc: "किसी भी course और exam type की complete marksheet generate करें। सभी subjects एक table में — कुल अंक, प्रतिशत, grade और परिणाम। एक click में print के लिए तैयार।",
  },
  {
    icon: "🏅",
    title: "प्रमाण पत्र",
    desc: "Transfer Certificate, Character Certificate, Bonafide Certificate और Migration Certificate seconds में जारी करें। कॉलेज का नाम, logo और Principal का नाम अपने आप print होगा।",
  },
  {
    icon: "📋",
    title: "परीक्षा फॉर्म",
    desc: "हर semester में exam form submission track करें। परीक्षा शुल्क paid है या नहीं — record करें। Forms approve या reject करें। Dashboard पर pending forms का alert देखें।",
  },
  {
    icon: "🗓️",
    title: "Timetable",
    desc: "Course-wise साप्ताहिक timetable बनाएं। हर period में subject और Professor assign करें। Professors login के बाद अपना schedule देखते हैं।",
  },
  {
    icon: "📊",
    title: "Reports — NAAC के लिए तैयार",
    desc: "Course-wise विद्यार्थी संख्या, फीस संग्रह, उपस्थिति प्रतिशत और परीक्षा परिणाम — सब एक जगह। NAAC accreditation के लिए ज़रूरी सभी data उपलब्ध।",
  },
  {
    icon: "📣",
    title: "सूचना पट्ट",
    desc: "Normal, Important या Urgent priority के साथ कॉलेज की सूचनाएं post करें। विद्यार्थी और Professors login के बाद सूचनाएं देखते हैं। Urgent सूचनाएं लाल रंग में highlighted।",
  },
  {
    icon: "📱",
    title: "Mobile + Desktop",
    desc: "Android app की तरह (Add to Home Screen) और Windows EXE की तरह — दोनों पर काम करता है। एक खरीद — दोनों पर। कोई अलग app store नहीं चाहिए।",
  },
];

const howTo = [
  {
    step: "1", icon: "🔐", title: "Google से Login करें",
    desc: "college.nishantsoftwares.in खोलें और Admin Login पर click करें। अपने college Gmail से sign in करें। 7 दिन का free trial अपने आप शुरू — कोई card नहीं, कोई payment नहीं।",
  },
  {
    step: "2", icon: "⚙️", title: "College की जानकारी दर्ज करें",
    desc: "Settings में जाएं। College का नाम, university का नाम (जैसे MGKVP), पता, Principal का नाम, affiliation number दर्ज करें और college logo upload करें। यह हर receipt और certificate पर दिखेगा।",
  },
  {
    step: "3", icon: "🎓", title: "विद्यार्थी जोड़ें",
    desc: "Students → Add New Student में जाएं। नाम, faculty, course, semester, roll number और phone भरें। PEN और आधार नंबर भी दर्ज कर सकते हैं।",
  },
  {
    step: "4", icon: "👨‍🏫", title: "Professors जोड़ें",
    desc: "Professors → Add New में जाएं। नाम, designation, qualification दर्ज करें और 6 अंकों का PIN set करें। उनके profile में जाकर कौन से subjects और courses पढ़ाते हैं — assign करें।",
  },
  {
    step: "5", icon: "💰", title: "फीस दर्ज करें",
    desc: "Fees → Record Fee में जाएं। विद्यार्थी चुनें, राशि और due date दर्ज करें। Payment होने पर Mark Paid click करें — receipt अपने आप generate होगी। Defaulters tab से WhatsApp link खोलें और reminder भेजें।",
  },
  {
    step: "6", icon: "✅", title: "उपस्थिति दर्ज करें",
    desc: "Attendance → Mark में जाएं। Date और course चुनें। उपस्थित विद्यार्थियों को check करें, अनुपस्थित को uncheck करें। Save करें। अनुपस्थित विद्यार्थियों के अभिभावकों का WhatsApp link एक click में मिलेगा।",
  },
  {
    step: "7", icon: "📝", title: "परीक्षा प्रबंधन",
    desc: "Exams → Schedule New Exam में जाएं। Course, semester, subject, type और date चुनें। परीक्षा के बाद उस exam में जाएं और हर विद्यार्थी के अंक दर्ज करें। Grade और pass/fail अपने आप calculate।",
  },
  {
    step: "8", icon: "📋", title: "परीक्षा फॉर्म",
    desc: "Exam Forms → Add में जाएं। विद्यार्थी, semester और academic year चुनें। परीक्षा शुल्क paid है या नहीं — mark करें। List से forms approve या reject करें। Dashboard पर pending forms का alert।",
  },
];

const professorSteps = [
  { step: "1", text: "Principal, Professors section से Professor जोड़ते हैं और 6 अंकों का PIN set करते हैं।" },
  { step: "2", text: "Professor अपने mobile पर college.nishantsoftwares.in खोलते हैं और Professor Login click करते हैं।" },
  { step: "3", text: "Professor अपना mobile number और PIN दर्ज करते हैं — वे सिर्फ अपने assigned courses देखते हैं।" },
  { step: "4", text: "Professor उपस्थिति दर्ज करते हैं, विद्यार्थी देखते हैं और exam results check करते हैं। Principal को सब कुछ तुरंत दिखता है।" },
];

export default function CollegePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-lg font-bold mb-5">
            🎓 निशांत PG College Software
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-600 mb-6 leading-tight">
            कॉलेज की हर ज़रूरत
            <br />
            <span className="text-amber-500">एक Software में — Mobile पर</span>
          </h1>
          <p className="text-lg text-amber-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            विद्यार्थी · फीस · उपस्थिति · परीक्षा · प्रमाण पत्र · परीक्षा फॉर्म — UP के private colleges के लिए।
          </p>
          <p className="text-lg font-bold text-amber-600 mb-8">
            NAAC accreditation के लिए ज़रूरी सभी records digital रखें।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <a href="https://college.nishantsoftwares.in/login"
              className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 font-bold text-lg shadow-sm">
              Admin Login →
            </a>
            <a href="https://college.nishantsoftwares.in/professor-login"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg hover:bg-amber-600 font-bold text-lg shadow-sm">
              🔑 Professor Login
            </a>
            <a href="https://college.nishantsoftwares.in/student/login"
              className="bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-800 font-bold text-lg shadow-sm">
              🎓 विद्यार्थी Login
            </a>
            <a href={COLLEGE_EXE_URL}
              className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-700 font-bold text-lg shadow-sm">
              🖥️ Windows App Download करें
            </a>
          </div>
          <p className="text-lg text-amber-600 mt-4">
            Android पर install करें: Chrome → ⋮ → Add to Home Screen
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-amber-600 mb-2">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-amber-600 text-lg mb-8">{features.length} features — एक software, एक price</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-amber-100">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-extrabold text-amber-600 text-lg mb-2">{f.title}</h3>
                <p className="text-amber-600 text-lg leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How To */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-amber-600 mb-2">कैसे शुरू करें?</h2>
          <p className="text-center text-amber-600 text-lg mb-8">8 steps — 15 मिनट में पूरा setup</p>
          <div className="space-y-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white rounded-xl border border-amber-100 p-5 shadow-sm flex gap-4 items-start">
                <div className="w-11 h-11 bg-amber-600 text-white font-black rounded-full flex items-center justify-center shrink-0 text-lg">
                  {h.step}
                </div>
                <div>
                  <div className="font-extrabold text-amber-600 text-lg mb-1.5">
                    {h.icon} {h.title}
                  </div>
                  <div className="text-amber-600 text-lg leading-relaxed">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professor Login Explainer */}
        <div className="mb-16 bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <h2 className="text-2xl font-extrabold text-amber-600 mb-1">🔑 Professor Attendance कैसे काम करती है?</h2>
          <p className="text-amber-600 text-lg mb-5">कोई email नहीं — सिर्फ PIN।</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professorSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-4 shadow-sm flex gap-3 items-start">
                <div className="w-9 h-9 bg-amber-600 text-white font-black rounded-full flex items-center justify-center shrink-0 text-lg">
                  {s.step}
                </div>
                <p className="text-lg text-amber-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Windows App */}
        <div className="mb-16 bg-gray-900 rounded-2xl p-6 text-white">
          <h2 className="text-2xl font-extrabold mb-2">🖥️ Windows App — EXE Installer</h2>
          <p className="text-gray-400 text-lg mb-4">
            Computer पर भी exactly वही experience जो mobile पर है। एक click में पूरा software खुलेगा।
          </p>
          <div className="bg-yellow-900/40 border border-yellow-600/40 rounded-xl p-4 mb-4 text-yellow-200">
            <p className="font-bold text-lg mb-2">⚠️ Windows Smart App Control Warning</p>
            <p className="text-lg leading-relaxed">
              Install करते समय Windows "Unknown Publisher" warning दे सकता है। यह normal है।
              Install करने के लिए: <strong>More info → Run anyway</strong> पर click करें।
            </p>
          </div>
          <a href={COLLEGE_EXE_URL}
            className="inline-block bg-white text-gray-900 font-extrabold px-6 py-3 rounded-xl text-lg hover:bg-gray-100 transition">
            ⬇️ Download — Nishant PG College Setup
          </a>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center text-amber-600 mb-2">मूल्य</h2>
          <p className="text-center text-amber-600 text-lg mb-8">7 दिन बिल्कुल मुफ्त — कोई card नहीं चाहिए</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl border-2 border-amber-600 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-lg font-bold px-4 py-1 rounded-full">
                नया खाता
              </div>
              <h3 className="text-2xl font-extrabold mb-1 text-amber-600 mt-2">पहला वर्ष</h3>
              <div className="text-6xl font-extrabold text-amber-600 mb-1">₹4,999</div>
              <p className="text-amber-600 text-lg mb-1">एकमुश्त — 1 साल शामिल</p>
              <p className="text-amber-600 text-lg mb-4">Mobile + Desktop दोनों</p>
              <a href="https://college.nishantsoftwares.in/login"
                className="block w-full bg-amber-600 text-white font-extrabold py-3 rounded-xl hover:bg-amber-700 transition mb-3 text-lg">
                7 दिन मुफ्त आज़माएं
              </a>
              <a href="https://nishantsoftwares.in/payment?software=college"
                target="_blank" rel="noopener noreferrer"
                className="block w-full bg-gray-800 text-white font-extrabold py-3 rounded-xl hover:bg-gray-700 transition text-lg">
                💳 अभी खरीदें — ₹4,999
              </a>
            </div>
            <div className="rounded-2xl border-2 border-amber-200 p-6 text-center shadow-sm">
              <h3 className="text-2xl font-extrabold mb-1 text-amber-600 mt-2">नवीनीकरण</h3>
              <div className="text-6xl font-extrabold text-amber-600 mb-1">₹2,500</div>
              <p className="text-amber-600 text-lg mb-4">प्रति वर्ष</p>
              <a href="https://nishantsoftwares.in/payment?software=college"
                target="_blank" rel="noopener noreferrer"
                className="block w-full bg-amber-600 text-white font-extrabold py-3 rounded-xl hover:bg-amber-700 transition text-lg">
                💳 नवीनीकरण करें
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-amber-600 rounded-2xl p-10 text-white">
          <h2 className="text-3xl font-extrabold mb-3">आज शुरू करें — 7 दिन Free</h2>
          <p className="text-white mb-6 text-lg">
            कोई card नहीं। कोई setup fee नहीं। Developer से सीधे support।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-lg text-white font-bold">
            <a href="tel:+919996865069" className="hover:text-amber-200">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:text-amber-200">💬 WhatsApp</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:text-amber-200">✉️ prasad.kamta@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}