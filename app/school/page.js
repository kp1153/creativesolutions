"use client";

const SCHOOL_EXE_URL = "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const SCHOOL_PWA_URL = "https://school-saas-azure.vercel.app";

const features = [
  { icon: "🎓", hi: "Student Management — admission, class, section, roll number, parent contact — पूरा record", en: "Full student profile — name, class, section, roll number, parent name & phone" },
  { icon: "📥", hi: "Bulk CSV Import — Excel से सैकड़ों students एक बार में add करो", en: "Import hundreds of students at once from a CSV file — saves hours of manual entry" },
  { icon: "📋", hi: "Admissions Tracking — इस महीने के नए admissions, fee pending count — एक नज़र में", en: "See new admissions (last 30 days), total enrolled & pending fee count at a glance" },
  { icon: "💰", hi: "Fee Management — pending, paid, due date, defaulter list — सब एक जगह", en: "Record fee payments, track pending dues, view defaulter list & collect class-wise" },
  { icon: "🧾", hi: "Fee Receipt Print — payment के बाद receipt generate & print करो", en: "Auto-generate printable fee receipt with school logo, receipt number & student details" },
  { icon: "✅", hi: "Daily Attendance — class-wise, date-wise — present/absent — real-time summary", en: "Mark attendance class & date-wise. See today's present, absent & unmarked count instantly" },
  { icon: "💬", hi: "WhatsApp Alert — absent बच्चों के parents को एक click में Hindi message", en: "One-click WhatsApp links to message parents of absent students — message auto-written in Hindi" },
  { icon: "📝", hi: "Exams & Results — schedule, marks entry, grade, pass/fail, average, topper — auto", en: "Schedule exams, enter marks — grade, pass/fail, class average & topper calculated automatically" },
  { icon: "📄", hi: "Report Cards — auto-generate, print-ready — marks, grade, remarks सब", en: "Auto-generate print-ready report cards with all subjects, marks, grade & remarks" },
  { icon: "📣", hi: "Notice Board — urgent / important / general — priority badge के साथ", en: "Post school notices with category & priority — urgent notices shown with red badge" },
  { icon: "🗓️", hi: "Timetable — class-wise, day-wise, period-wise — subject & teacher name के साथ", en: "Create & view class timetable — period-wise subject & teacher for every day of the week" },
  { icon: "📊", hi: "Reports — class-wise students, fees, attendance %, exam summary — एक page", en: "Class-wise: student count, fees collected vs pending, attendance % & exam avg & topper" },
  { icon: "👨‍🏫", hi: "Teacher Management — subject, qualification, phone, joining date", en: "Manage teacher profiles with subject, qualification, phone & joining date" },
  { icon: "👨‍👩‍👧", hi: "Parent Portal — parents अपने बच्चे का result, fee status, attendance online देखें", en: "Parents login to see their child's results, fee dues & attendance percentage anytime" },
  { icon: "🎒", hi: "Student Portal — students अपना result, attendance %, notices खुद देखें", en: "Students login to view their own results, attendance % & school notices" },
  { icon: "⚙️", hi: "School Settings — name, logo, principal, affiliation no. — receipt पर दिखे", en: "Set school name, upload logo, principal name & affiliation no. — appears on all receipts" },
  { icon: "📱", hi: "PWA + Windows .exe — एक ही software — mobile पर भी, desktop पर भी", en: "One purchase — works as Android PWA & Windows desktop app. No extra cost for either" },
];

const howTo = [
  { step: "01", icon: "🔐", hi: "Google से login करो", detail_hi: "Principal का Google account — एक click, कोई password याद नहीं", detail_en: "Login with Principal's Google account. Instant access — no username setup" },
  { step: "02", icon: "⚙️", hi: "School setup करो", detail_hi: "Settings में school name, logo, principal, affiliation number भरो", detail_en: "These details appear automatically on fee receipts & report cards" },
  { step: "03", icon: "👨‍🎓", hi: "Students add करो", detail_hi: "एक-एक manually या Excel/CSV से सैकड़ों एक साथ import करो", detail_en: "Parent phone saved here — used later for WhatsApp absent alerts" },
  { step: "04", icon: "💰", hi: "Fees record करो", detail_hi: "प्रत्येक student के लिए fee entry करो, due date set करो", detail_en: "Receipt auto-generates on payment. Defaulter list always ready" },
  { step: "05", icon: "✅", hi: "रोज़ attendance mark करो", detail_hi: "Class चुनो, present/absent mark करो — WhatsApp links तुरंत तैयार", detail_en: "One click per absent student — Hindi message auto-written to parent" },
  { step: "06", icon: "📝", hi: "Exams schedule करो, marks भरो", detail_hi: "Exam add करो, marks enter करो — grade, result, report card automatic", detail_en: "Report cards ready to print. Parent & Student portal update automatically" },
];

const comingSoon = [
  { icon: "💬", label: "WhatsApp Business API — actual message भेजो, link नहीं" },
  { icon: "📚", label: "Book & Uniform Module — India-only, कोई competitor नहीं" },
  { icon: "💳", label: "Razorpay — Online Fee Collection" },
  { icon: "🚌", label: "Transport / Route Management" },
];

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Top bar */}
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp पर बात करें</a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🆓 7 Days Completely Free — No Card Required
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">🏫 Nishant School Pro</h1>
          <p className="text-lg font-bold text-white mb-2">School Management System</p>
          <p className="text-sm mb-2 text-indigo-100">
            Students · Fees · Attendance · Exams · Notice Board · Timetable · Parent Portal
          </p>
          <p className="text-xs mb-8 text-indigo-200/80">
            17 features · CBSE private schools के लिए · Mobile + Desktop दोनों पर
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCHOOL_EXE_URL} className="inline-block bg-white text-indigo-700 font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-indigo-50 transition">
              🖥️ Windows Download (.exe)
            </a>
            <div className="flex flex-col items-center gap-1">
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-xs text-indigo-200/70">Chrome ⋮ → Add to Home Screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">17 features — एक software में, एक कीमत पर</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-semibold text-sm mb-1">{f.hi}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{f.en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कैसे उपयोग करें?</h2>
          <p className="text-center text-gray-500 text-sm mb-8">6 steps — पहले दिन से शुरू करो</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-indigo-200 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{h.icon}</span>
                  <span className="text-xs font-bold text-indigo-400">STEP {h.step}</span>
                </div>
                <div className="font-bold text-gray-800 text-sm mb-1">{h.hi}</div>
                <div className="text-xs text-gray-600 leading-relaxed mb-1">{h.detail_hi}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{h.detail_en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Pricing</h2>
          <p className="text-center text-gray-500 text-sm mb-8">कोई hidden charge नहीं · एक बार pay, पूरा साल use</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                New Account
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹5,500</div>
              <p className="text-gray-400 text-sm mb-3">एक बार — 1 साल included</p>
              <ul className="text-xs text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ 17 features सब unlocked</li>
                <li>✅ WhatsApp absent alerts</li>
                <li>✅ Parent + Student portal</li>
                <li>✅ Fee receipt print</li>
                <li>✅ Windows + Android दोनों</li>
                <li>✅ Free setup support (WhatsApp)</li>
              </ul>
              <a href="/payment?software=school" className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-sm">
                🆓 7 दिन Free Trial शुरू करें
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-3">प्रति वर्ष</p>
              <ul className="text-xs text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ सभी features जारी</li>
                <li>✅ नए features automatically free</li>
                <li>✅ Data safe रहेगा</li>
                <li>✅ Priority WhatsApp support</li>
              </ul>
              <a href="/payment?software=school" className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-sm">
                Renew Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-center text-gray-700 mb-1">🚀 जल्द आ रहा है</h2>
          <p className="text-center text-gray-400 text-xs mb-5">अभी development में — existing users को free update मिलेगा</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comingSoon.map((c, i) => (
              <div key={i} className="bg-white border border-dashed border-gray-300 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-lg shrink-0">{c.icon}</span>
                <span className="text-sm text-gray-500 flex-1">{c.label}</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium shrink-0">Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — 7 दिन मुफ्त</h2>
          <p className="text-indigo-200 mb-6 text-sm">
            कोई card नहीं · कोई commitment नहीं · WhatsApp पर direct developer से बात
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 text-sm font-bold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
          </div>
        </div>
      </section>

    </main>
  );
}