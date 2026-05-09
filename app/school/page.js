"use client";

const SCHOOL_EXE_URL = "https://github.com/kp1153/school-saas/releases/download/v1.0.0/EduSaaS.School.Setup.0.1.0.exe";
const SCHOOL_PWA_URL = "https://school.nishantsoftwares.in";

const features = [
  { icon: "🎓", title: "Student Management", desc: "Complete records — name, class, roll number, parent phone. Add one by one or import hundreds at once." },
  { icon: "💰", title: "Fee Collection & Receipt", desc: "Record fees, print receipts instantly. See who paid, who hasn't. WhatsApp reminders in one click." },
  { icon: "✅", title: "Daily Attendance", desc: "Class-wise attendance every day. WhatsApp alert to absent students' parents automatically." },
  { icon: "🔑", title: "Teacher Attendance via PIN", desc: "Each teacher gets a 6-digit PIN. They log in from their mobile, mark their class attendance only." },
  { icon: "📝", title: "Exams & Results", desc: "Schedule exams, enter marks — grade and pass/fail calculated automatically. Print report cards." },
  { icon: "📄", title: "Marksheet", desc: "Quarterly, half-yearly and annual marksheets for entire class. Print or share as PDF on WhatsApp." },
  { icon: "🏅", title: "Certificates", desc: "TC, Character, Bonafide and Birth Certificate — one click, ready to print with school logo." },
  { icon: "🚌", title: "Transport", desc: "Routes, stops, monthly fees, driver details. Assign students and generate transport receipts." },
  { icon: "📊", title: "Reports", desc: "Class-wise student count, fee collection, attendance percentage — all on one page." },
];

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">

      {/* Top bar */}
      <div className="bg-amber-600 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">
            🖥️ <span className="text-amber-400">Nishant</span> Software
          </a>
          <a href="/" className="text-sm text-zinc-400 hover:text-white border border-zinc-700 px-3 py-1.5 rounded-lg transition">
            ← All Products
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-14 px-4 text-center bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-indigo-500/20 text-indigo-400 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            🆓 7 Days Free Trial — No Card Required
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            🏫 Nishant School Software
          </h1>
          <p className="text-zinc-400 text-lg mb-2">
            Students · Fees · Attendance · Exams · Certificates
          </p>
          <p className="text-zinc-500 text-sm mb-8">
            Built for Indian schools — mobile first, affordable, simple
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href={SCHOOL_EXE_URL}
              className="inline-block bg-white text-zinc-900 font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-zinc-100 transition">
              🖥️ Download Windows App (.exe)
            </a>
            <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-indigo-500 transition">
              📱 Open Web App
            </a>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            Android: Chrome → ⋮ → Add to Home Screen
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-indigo-400">What's Included?</h2>
          <p className="text-center text-zinc-400 text-sm mb-8">9 features — one software, one price</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-zinc-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-bold text-sm mb-1">{f.title}</div>
                  <div className="text-zinc-400 text-xs leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-zinc-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-white">Pricing</h2>
          <p className="text-center text-zinc-400 text-sm mb-8">7 days completely free — no card required</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                New Account
              </div>
              <h3 className="text-lg font-bold mb-1 text-zinc-300 mt-2">First Year</h3>
              <div className="text-4xl font-extrabold text-indigo-400 mb-1">₹4,999</div>
              <p className="text-zinc-500 text-sm mb-4">One-time — 1 year included</p>
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition mb-3 text-sm">
                🆓 Try Free for 7 Days
              </a>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-zinc-700 text-white font-bold py-2.5 rounded-xl hover:bg-zinc-600 transition text-sm">
                💳 Buy Now — ₹4,999
              </a>
            </div>
            <div className="rounded-2xl border-2 border-zinc-600 p-6 text-center">
              <h3 className="text-lg font-bold mb-1 text-zinc-300 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-indigo-400 mb-1">₹2,500</div>
              <p className="text-zinc-500 text-sm mb-4">Per year — server cost only</p>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-sm">
                💬 WhatsApp to Renew
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">Start Today — 7 Days Free</h2>
          <p className="text-zinc-400 mb-6 text-sm">No card required. Direct support from the developer.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-white font-bold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
          </div>
        </div>
      </section>

    </main>
  );
}