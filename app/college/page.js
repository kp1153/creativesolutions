import Link from "next/link";

const COLLEGE_EXE_URL = "https://github.com/kp1153/college-saas/releases/download/v1.0.0/Nishant.PG.College.Setup.0.1.0.exe";

const features = [
  {
    icon: "🎓",
    title: "Student Management",
    desc: "Add students with complete details — name, course, semester, faculty, roll number, scholar number, PEN, Aadhaar, photo, father/mother name, phone. Import hundreds at once via CSV.",
  },
  {
    icon: "💰",
    title: "Fee Collection & Receipt",
    desc: "Record tuition, admission, exam and miscellaneous fees. Print professional receipts with college logo. See who paid, who hasn't. Send WhatsApp payment reminders in one click.",
  },
  {
    icon: "✅",
    title: "Daily Attendance",
    desc: "Mark course and semester-wise attendance every day. See present/absent count instantly. Auto WhatsApp alert to absent students' parents. View monthly attendance percentage.",
  },
  {
    icon: "🔑",
    title: "Professor Login via PIN",
    desc: "Each professor gets a unique 6-digit PIN from the Principal. They log in from their own mobile — no email, no password. They see only their assigned courses. Principal monitors everything.",
  },
  {
    icon: "📝",
    title: "Exams & Results",
    desc: "Schedule Internal, Mid Term, Practical and Annual exams. Enter marks for each student — grade and pass/fail calculated automatically. Print subject-wise result sheets.",
  },
  {
    icon: "📄",
    title: "Marksheet",
    desc: "Generate complete marksheets for any course and exam type. All subjects in one table — total marks, percentage, grade and result. Ready to print in one click.",
  },
  {
    icon: "🏅",
    title: "Certificates",
    desc: "Issue Transfer Certificate, Character Certificate, Bonafide Certificate and Migration Certificate in seconds. College name, logo and Principal's signature printed automatically.",
  },
  {
    icon: "📋",
    title: "Exam Forms",
    desc: "Track exam form submission every semester. Record whether exam fee is paid or not. Approve or reject forms. See pending forms alert on dashboard.",
  },
  {
    icon: "🗓️",
    title: "Timetable",
    desc: "Build course-wise weekly timetable. Assign subject and professor to each period. Professors see their own schedule after login.",
  },
  {
    icon: "📊",
    title: "Reports",
    desc: "Course-wise student count, fee collection summary, attendance percentage and exam results — all in one place. No manual calculation needed.",
  },
  {
    icon: "📣",
    title: "Notice Board",
    desc: "Post college notices with Normal, Important or Urgent priority. Students and professors see notices after login. Urgent notices highlighted in red.",
  },
  {
    icon: "📱",
    title: "Mobile + Desktop",
    desc: "Works as an Android app (Add to Home Screen) and as a Windows EXE. One purchase covers both. No separate app store needed.",
  },
];

const howTo = [
  {
    step: "1",
    icon: "🔐",
    title: "Login with Google",
    desc: "Open college.nishantsoftwares.in and click Admin Login. Sign in with your college Gmail account. Your 7-day free trial starts automatically — no card, no payment.",
  },
  {
    step: "2",
    icon: "⚙️",
    title: "Setup College Details",
    desc: "Go to Settings. Enter college name, university name (e.g. MGKVP), address, Principal name, affiliation number and upload your college logo. This appears on every receipt and certificate.",
  },
  {
    step: "3",
    icon: "🎓",
    title: "Add Students",
    desc: "Go to Students → Add New Student. Fill name, faculty (Arts/Commerce/Science/Agriculture), course (B.A./B.Com etc.), semester, roll number and phone. Or import hundreds at once from a CSV file.",
  },
  {
    step: "4",
    icon: "👨‍🏫",
    title: "Add Professors",
    desc: "Go to Professors → Add New. Enter name, designation (Assistant/Associate/Professor), qualification and set a 6-digit PIN. Go to their profile and assign which subjects and courses they teach.",
  },
  {
    step: "5",
    icon: "💰",
    title: "Record Fees",
    desc: "Go to Fees → Record Fee. Select student, enter amount and due date. Once paid, click Mark Paid — receipt generates automatically. Send WhatsApp reminder to defaulters from the Defaulters tab.",
  },
  {
    step: "6",
    icon: "✅",
    title: "Mark Attendance",
    desc: "Go to Attendance → Mark. Select date and course. Check present students, uncheck absent. Click Save. Parents of absent students can be alerted via WhatsApp in one click.",
  },
  {
    step: "7",
    icon: "📝",
    title: "Manage Exams",
    desc: "Go to Exams → Schedule New Exam. Select course, semester, subject, type and date. After exam, go to that exam and enter marks for each student. Grades and pass/fail are calculated automatically.",
  },
  {
    step: "8",
    icon: "📋",
    title: "Exam Forms",
    desc: "Go to Exam Forms → Add. Select student, semester and academic year. Mark whether exam fee is paid. Approve or reject forms from the list. Dashboard shows pending forms alert.",
  },
];

const professorSteps = [
  { step: "1", text: "Principal adds professor and sets a 6-digit PIN from the Professors section." },
  { step: "2", text: "Professor opens college.nishantsoftwares.in on their mobile and clicks Professor Login." },
  { step: "3", text: "Professor enters their mobile number and PIN — they see only their assigned courses." },
  { step: "4", text: "Professor marks attendance, views students and checks exam results. Principal sees everything instantly." },
];

export default function CollegePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-5">
            🎓 Nishant PG College Software
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Everything Your College Needs
            <br />
            <span className="text-indigo-600">In One Place — On Mobile</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Students · Fees · Attendance · Exams · Certificates · Exam Forms — designed for UP's private PG colleges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
            <a
              href="https://college.nishantsoftwares.in/login"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-medium text-sm shadow-sm"
            >
              Admin Login →
            </a>
            <a
              href="https://college.nishantsoftwares.in/professor-login"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 font-medium text-sm shadow-sm"
            >
              🔑 Professor Login
            </a>
            <
              href="https://college.nishantsoftwares.in/student/login"
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium text-sm shadow-sm"
            >
              🎓 Student Login
            </a>
            <a
              href={COLLEGE_EXE_URL}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 font-medium text-sm shadow-sm"
            >
              🖥️ Download Windows App
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Android पर install करें: Chrome → ⋮ → Add to Home Screen
          </p>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-400 text-sm mb-8">12 features — एक software, एक price</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-2">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How To — User Manual */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">कैसे शुरू करें?</h2>
          <p className="text-center text-gray-400 text-sm mb-8">8 steps — 15 मिनट में पूरा setup</p>
          <div className="space-y-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white rounded-xl border border-indigo-100 p-4 shadow-sm flex gap-4 items-start">
                <div className="w-9 h-9 bg-indigo-600 text-white font-black rounded-full flex items-center justify-center shrink-0 text-sm">
                  {h.step}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1">
                    {h.icon} {h.title}
                  </div>
                  <div className="text-gray-500 text-xs leading-relaxed">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professor Login Explainer */}
        <div className="mb-16 bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
          <h2 className="text-xl font-bold text-gray-900 mb-1">🔑 Professor Attendance कैसे काम करती है?</h2>
          <p className="text-gray-500 text-sm mb-5">कोई email नहीं — सिर्फ PIN।</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {professorSteps.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-4 shadow-sm flex gap-3 items-start">
                <div className="w-7 h-7 bg-indigo-600 text-white font-black rounded-full flex items-center justify-center shrink-0 text-sm">
                  {s.step}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Windows App */}
        <div className="mb-16 bg-gray-900 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-2">🖥️ Windows App — EXE installer</h2>
          <p className="text-gray-400 text-sm mb-4">
            Computer पर भी exactly वही experience जो mobile पर है। College का पूरा software एक click में खुलेगा।
          </p>
          <div className="bg-yellow-900/40 border border-yellow-600/40 rounded-xl p-4 mb-4 text-sm text-yellow-200">
            <p className="font-bold mb-2">⚠️ Windows Smart App Control Warning</p>
            <p className="text-xs leading-relaxed">
              Install करते समय Windows "Unknown Publisher" warning दे सकता है। यह normal है क्योंकि software digitally signed नहीं है।
              Install करने के लिए: <strong>More info → Run anyway</strong> पर click करें।
            </p>
          </div>
          <a
            href={COLLEGE_EXE_URL}
            className="inline-block bg-white text-gray-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
          >
            ⬇️ Download — Nishant PG College Setup
          </a>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Pricing</h2>
          <p className="text-center text-gray-400 text-sm mb-8">7 days completely free — कोई card नहीं चाहिए</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="rounded-2xl border-2 border-indigo-600 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                New Account
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">First Year</h3>
              <div className="text-5xl font-extrabold text-indigo-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-1">One-time — 1 year included</p>
              <p className="text-gray-400 text-xs mb-4">Mobile + Desktop दोनों</p>
              <a
                href="https://college.nishantsoftwares.in/login"
                className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition mb-3 text-sm"
              >
                Try Free for 7 Days
              </a>
              <a
                href="https://nishantsoftwares.in/payment?software=college"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition text-sm"
              >
                💳 Buy Now — ₹4,999
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-5xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-4">Per year</p>
              <a
                href="https://nishantsoftwares.in/payment?software=college"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition text-sm"
              >
                💳 Renew Now
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-indigo-900 rounded-2xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-2">आज शुरू करें — 7 दिन Free</h2>
          <p className="text-indigo-300 mb-6 text-sm">
            कोई card नहीं। कोई setup fee नहीं। Developer से सीधे support।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-indigo-300">
            <a href="tel:+919996865069" className="hover:text-white">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:text-white">💬 WhatsApp</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:text-white">✉️ prasad.kamta@gmail.com</a>
          </div>
        </div>

      </div>
    </div>
  );
}