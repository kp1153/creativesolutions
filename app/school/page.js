"use client";

const SCHOOL_EXE_URL = "https://github.com/kp1153/school-saas/releases/download/v1.0.0/EduSaaS.School.Setup.0.1.0.exe";
const SCHOOL_PWA_URL = "https://school.nishantsoftwares.in";

const features = [
  { icon: "🎓", title: "Student Management", desc: "Complete records — name, class, roll number, parent phone. Add one by one or import hundreds at once from a CSV file." },
  { icon: "💰", title: "Fee Collection & Receipt", desc: "Record fees, partial payments tracked automatically. Print receipts instantly. WhatsApp reminders to defaulters in one click." },
  { icon: "🏷️", title: "Fee Structure", desc: "Define class-wise monthly fees once — amount fills automatically when recording payment. No manual entry every time." },
  { icon: "✅", title: "Daily Attendance", desc: "Class-wise attendance every day. WhatsApp alert to absent students' parents automatically." },
  { icon: "🔑", title: "Teacher Login via PIN", desc: "Each teacher gets a 6-digit PIN. They log in from their mobile, mark attendance for their class only." },
  { icon: "📝", title: "Exams & Results", desc: "Schedule exams, enter marks — grade and pass/fail calculated automatically. Print report cards." },
  { icon: "📄", title: "Marksheet", desc: "Quarterly, half-yearly and annual marksheets for entire class. Print or share as PDF on WhatsApp." },
  { icon: "🏅", title: "Certificates", desc: "TC, Character, Bonafide and Birth Certificate — one click, ready to print with school logo and principal name." },
  { icon: "🎓", title: "Student & Parent Portal", desc: "Parents log in with roll number and phone — see homework, attendance and fee status. No app download needed." },
  { icon: "🚌", title: "Transport", desc: "Routes, stops, monthly fees, driver details. Assign students and generate transport receipts." },
  { icon: "📋", title: "Notice Board", desc: "Post school notices with priority levels. Parents see them instantly on their portal." },
  { icon: "📊", title: "Reports", desc: "Class-wise student count, fee collection, attendance percentage and exam results — all on one page." },
];

const howTo = [
  { step: "1", title: "Login with Google", desc: "Open the web app and click Admin Login. Sign in with your school Gmail — 7-day free trial starts immediately. No card required." },
  { step: "2", title: "Setup School Details", desc: "Go to Settings — enter school name, address, principal name and upload logo. Appears on every receipt and certificate automatically." },
  { step: "3", title: "Define Fee Structure", desc: "Go to Fee Structure → Add. Set monthly fee for each class — e.g. Class 5 = ₹500/month. Amount fills automatically when recording fees." },
  { step: "4", title: "Add Students & Teachers", desc: "Add students with roll number and parent phone. Add teachers with a 6-digit PIN — their mobile login key." },
  { step: "5", title: "Start Daily Work", desc: "Collect fees, mark attendance, record exams — all from mobile, from anywhere, any time." },
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
          <p className="text-center text-zinc-400 text-sm mb-8">12 features — one software, one price</p>
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

      {/* How to Use */}
      <section className="py-12 px-4 bg-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-white">How to Get Started?</h2>
          <p className="text-center text-zinc-400 text-sm mb-10">5 steps — up and running in 10 minutes</p>
          <div className="space-y-6">
            {howTo.map((h) => (
              <div key={h.step} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-extrabold text-white text-lg">
                  {h.step}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">{h.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher & Parent Login */}
      <section className="py-12 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2 text-indigo-400">Three Separate Logins</h2>
          <p className="text-center text-zinc-400 text-sm mb-8">Admin, Teacher and Parent — each sees only what they need</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 rounded-xl p-5 border border-indigo-500/20">
              <div className="text-2xl mb-2">🏫</div>
              <h3 className="text-white font-bold mb-2">Admin Login</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">Principal logs in with Google. Full access — students, fees, attendance, reports, certificates, settings.</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-5 border border-yellow-500/20">
              <div className="text-2xl mb-2">👨‍🏫</div>
              <h3 className="text-white font-bold mb-2">Teacher Login</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">Teacher enters phone + 6-digit PIN from mobile. Sees only their assigned class — marks attendance and assigns homework.</p>
            </div>
            <div className="bg-zinc-800 rounded-xl p-5 border border-green-500/20">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="text-white font-bold mb-2">Student / Parent Login</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">Parent logs in with child's roll number + registered phone. Sees homework, attendance, fee status and school notices.</p>
            </div>
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