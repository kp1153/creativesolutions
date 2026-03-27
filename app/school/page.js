"use client";

const SCHOOL_EXE_URL = "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const SCHOOL_PWA_URL = "https://school-saas-azure.vercel.app";

const features = [
  { hi: "Student Management — admission से TC तक पूरा record", en: "Complete student record — admission, class, section, roll number to TC" },
  { hi: "Fee Collection — class-wise fees, late fine, receipts", en: "Collect fees class-wise, apply late fines, generate receipts" },
  { hi: "Fee Tracking — किसने दिया, किसका बाकी है", en: "Track who paid, who is due — fee defaulter list ready" },
  { hi: "Attendance System — daily teacher attendance entry", en: "Daily attendance marking subject-wise or class-wise" },
  { hi: "Exam Management — marks entry, result generation", en: "Enter marks, generate results, calculate percentage & grade" },
  { hi: "Report Cards — automatic generate, print करो", en: "Auto-generate report cards with marks, grade & remarks" },
  { hi: "Parent Portal — parents को result, fee status दिखे", en: "Parents can view result, attendance & fee status online" },
  { hi: "Staff Management — teachers, salary, attendance", en: "Teacher records, salary management & attendance tracking" },
  { hi: "TC & Certificate Generation — print-ready", en: "Generate Transfer Certificate & other certificates instantly" },
  { hi: "PWA + Windows .exe — mobile और desktop दोनों पर", en: "Works as Android PWA and Windows desktop app" },
];

const howTo = [
  { step: "01", hi: "Login — Principal/Admin Google account से", en: "Login with Principal's Google account", icon: "🔐" },
  { step: "02", hi: "Classes, Sections, Fee structure setup करो", en: "Setup classes, sections & fee structure for the year", icon: "🏫" },
  { step: "03", hi: "Students add करो — admission details भरो", en: "Add students with admission details & assign to class", icon: "👨‍🎓" },
  { step: "04", hi: "Daily use — attendance, fees, exams", en: "Daily attendance, fee collection & exam marks entry", icon: "📋" },
];

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
      </div>
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 Days Completely Free — No Card Required</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">🏫 Nishant School Pro<br />School Management</h1>
          <p className="text-lg mb-1 font-semibold text-indigo-100">CBSE प्राइवेट स्कूलों के लिए बना — Students, Fees, Attendance, Exams, Results और Parent Portal सब एक जगह।</p>
          <p className="text-base mb-8 text-indigo-200/70">Built for CBSE private schools — Students, Fees, Attendance, Exams, Results & Parent Portal all in one place.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCHOOL_EXE_URL} className="inline-block bg-white text-indigo-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-indigo-50 transition">
              🖥️ Windows पर Download करें (.exe)
            </a>
            <div className="flex flex-col items-center">
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-xs mt-1 text-indigo-200/70">👉 Chrome menu ⋮ → Add to Home Screen</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">CBSE Private Schools के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-indigo-500/20 rounded-xl px-5 py-4">
                <div className="text-indigo-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कैसे उपयोग करें</h2>
          <p className="text-center text-gray-500 text-sm mb-8">4 आसान steps</p>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-indigo-200 rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl mb-2">{h.icon}</div>
                <div className="text-xs text-gray-400 font-bold mb-1">STEP {h.step}</div>
                <div className="font-bold text-gray-800 text-xs mb-1">{h.hi}</div>
                <div className="text-xs text-gray-500">{h.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹5,500</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=school" className="block w-full bg-indigo-600 text-white font-bold py-2 rounded-xl hover:bg-indigo-500 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=school" className="block w-full bg-indigo-600 text-white font-bold py-2 rounded-xl hover:bg-indigo-500 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}