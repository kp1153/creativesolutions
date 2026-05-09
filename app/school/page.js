// app/school/page.js

"use client";
import { useEffect } from "react";

const SCHOOL_EXE_URL =
  "https://drive.google.com/file/d/18ny4flYm2vV-5dWnIYnspMQuNzkWGX_U/view?usp=drive_link";
const SCHOOL_PWA_URL = "https://school.nishantsoftwares.in";

const features = [
  {
    icon: "🎓",
    title: "Student Management",
    desc: "Complete student profile — name, class, section, roll number, father's name, phone, date of birth. Add one by one or import hundreds from a file in minutes.",
  },
  {
    icon: "💰",
    title: "Fee Collection & Receipt",
    desc: "Record monthly fees, generate printed receipts instantly. See who paid, who hasn't, and send WhatsApp reminders to defaulters — all in one place.",
  },
  {
    icon: "✅",
    title: "Daily Attendance + WhatsApp Alert",
    desc: "Mark class-wise attendance every day. One click sends a WhatsApp message to absent students' parents — message is auto-written, nothing to type.",
  },
  {
    icon: "🔑",
    title: "Teacher Attendance via PIN",
    desc: "Each teacher gets a 6-digit PIN from the Principal. They log in from their own mobile, see only their class, mark attendance — Principal sees it instantly.",
  },
  {
    icon: "📝",
    title: "Exams & Results",
    desc: "Schedule exams, enter marks — grade, pass/fail, class average and topper are calculated automatically. No manual calculation needed.",
  },
  {
    icon: "📄",
    title: "Marksheet — Print Ready",
    desc: "Quarterly, half-yearly and annual marksheets for the entire class at once. Print directly or send as PDF to parents on WhatsApp.",
  },
  {
    icon: "🏅",
    title: "Certificates — One Click",
    desc: "Transfer Certificate, Character, Bonafide and Birth Certificate — generated instantly with school name, Principal's name and logo. Ready to print.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parent Portal",
    desc: "Parents check their child's fees, attendance and exam results from their mobile — without coming to school. No separate app needed.",
  },
  {
    icon: "🚌",
    title: "Transport Management",
    desc: "Manage bus routes, stops, monthly fees, driver and vehicle details. Assign students to routes and generate transport receipts.",
  },
  {
    icon: "📱",
    title: "Mobile + Desktop — One Purchase",
    desc: "Works as an Android app on mobile and as a Windows application on computer. One purchase covers both — no extra cost.",
  },
];

const manual = [
  {
    title: "🔐 FIRST LOGIN — How to Get Started",
    steps: [
      "Open school.nishantsoftwares.in on your mobile or computer",
      "Click the large ADMIN LOGIN button in the centre",
      "Click SIGN IN WITH GOOGLE — choose your Gmail account",
      "You are inside immediately — 7 days completely FREE",
      "No password to remember. No credit card asked.",
    ],
  },
  {
    title: "⚙️ SCHOOL SETUP — Do This First",
    steps: [
      "Click SETTINGS in the menu",
      "Enter your school's full name",
      "Enter the complete address",
      "Type the Principal's full name",
      "Enter the Principal's mobile number",
      "Add your affiliation number and school code",
      "Upload your school logo",
      "Click SAVE — your name and logo now appear on every receipt and certificate automatically",
    ],
  },
  {
    title: "👨‍🏫 ADD TEACHER + SET PIN",
    steps: [
      "Click TEACHERS in the menu",
      "Click ADD TEACHER",
      "Enter the teacher's full name, qualification and phone number",
      "Set a 6-digit PIN for the teacher — the Principal decides this",
      "Click SAVE",
      "Give the PIN to the teacher — this is their login key",
      "Go to the teacher's profile and assign which class and subject they teach",
      "The teacher can now log in from their own mobile using only this PIN",
    ],
  },
  {
    title: "🎓 ADD STUDENTS — One by One",
    steps: [
      "Click STUDENTS in the menu",
      "Click ADD STUDENT on the top right",
      "Enter the student's full name",
      "Choose class — Nursery, KG, Class 1 to Class 12",
      "Choose section — A, B, C, D or E",
      "Enter roll number",
      "Enter father's name and mobile number",
      "Click SAVE — student is added",
    ],
  },
  {
    title: "📥 BULK IMPORT — Add Entire Class at Once",
    steps: [
      "Click STUDENTS in the menu",
      "Click the IMPORT button",
      "Select the class and section from the dropdown",
      "Prepare a simple list in this format: Name, Roll Number, Phone",
      "Paste the list in the text box",
      "Click IMPORT — all students are added instantly",
      "100 students entered in under 1 minute",
    ],
  },
  {
    title: "✅ DAILY ATTENDANCE — Admin",
    steps: [
      "Click ATTENDANCE in the menu",
      "Click MARK",
      "Today's date is selected automatically",
      "Filter by class if needed",
      "All students appear with a checkbox next to their name",
      "Click ALL PRESENT at the top — then uncheck only the absent ones",
      "Click SAVE ATTENDANCE — done",
      "Absent students' parents can be sent a WhatsApp message with one click",
    ],
  },
  {
    title: "🔑 TEACHER ATTENDANCE — via PIN Login",
    steps: [
      "Teacher opens school.nishantsoftwares.in/teacher-login on their mobile",
      "They enter their 6-digit PIN given by the Principal",
      "They see only their assigned class — no other class visible",
      "Click ALL PRESENT — then uncheck absent students",
      "Click SAVE ATTENDANCE",
      "Principal sees the attendance on their dashboard instantly",
      "If a teacher forgets their PIN — Principal can check it in the teacher's profile",
    ],
  },
  {
    title: "💰 FEE COLLECTION + PRINT RECEIPT",
    steps: [
      "Click FEES in the menu",
      "Click ADD or RECORD FEE PAYMENT",
      "Search and select the student's name",
      "Choose the month — April, May, June etc.",
      "Choose fee type — Monthly Fee, Admission Fee, Exam Fee, Transport Fee",
      "Enter the amount",
      "Enter the date payment was received",
      "Click SAVE — receipt is generated automatically",
      "Click PRINT to print the receipt or share as PDF on WhatsApp",
      "Students with pending fees are listed on the same page",
    ],
  },
  {
    title: "📝 EXAM SCHEDULE + ENTER MARKS",
    steps: [
      "Click EXAMS in the menu",
      "Click ADD EXAM",
      "Enter exam name — like Unit Test 1 or Half Yearly 2026",
      "Choose the class and subject",
      "Enter exam date and maximum marks",
      "Click SAVE — exam is scheduled",
      "After the exam, click that exam and enter marks for each student",
      "Click SAVE MARKS — grade, percentage and pass/fail are calculated automatically",
    ],
  },
  {
    title: "📄 MARKSHEET — Print for Entire Class",
    steps: [
      "Click MARKSHEET in the menu",
      "Choose the class and exam",
      "All students' marksheets appear",
      "Click any student to view their full marksheet",
      "Click PRINT — prints on A4 paper",
      "School name, Principal's name, all subject marks, grade and total are filled automatically",
      "Send as PDF to parents on WhatsApp — they do not need to come to school",
    ],
  },
  {
    title: "🏅 ISSUE CERTIFICATES",
    steps: [
      "Click CERTIFICATES in the menu",
      "Click ISSUE CERTIFICATE",
      "Search and select the student",
      "Choose certificate type — Transfer Certificate, Character, Bonafide or Birth Certificate",
      "All student details fill automatically — name, class, date of birth",
      "Add any extra remarks if needed",
      "Click GENERATE — certificate is ready",
      "Click PRINT — comes with school logo and Principal's name",
    ],
  },
  {
    title: "🗓️ HOW TO CREATE TIMETABLE",
    steps: [
      "Click TIMETABLE in the menu",
      "Go to ADD",
      "Choose class — like Class 7 - A",
      "For each period and each day, choose subject + teacher",
      "Monday Period 1: Math - Sharma sir",
      "Repeat for Tuesday, Wednesday and so on",
      "Click SAVE — timetable is ready",
      "Every student and parent automatically sees their class timetable",
    ],
  },
  {
    title: "🚌 HOW TO MANAGE TRANSPORT",
    steps: [
      "Click TRANSPORT in the menu",
      "Click ADD to create routes — like Route 1: Civil Lines to School",
      "Enter monthly fees for each route",
      "Add driver name and vehicle number too",
      "On the Students tab — assign which student takes which route",
      "Transport fees calculate automatically every month",
      "You can print receipts too",
    ],
  },
  {
    title: "⬆️ HOW TO PROMOTE STUDENTS AT YEAR-END",
    steps: [
      "Click PROMOTE in the menu",
      "Choose the class to promote — like Class 5",
      "All students in that class appear",
      "Tick those who passed (default: all ticked)",
      "Untick those who failed (they stay in the same class)",
      "Click PROMOTE — all move to Class 6 together",
      "No need to do this one by one",
    ],
  },
  {
    title: "📊 HOW TO VIEW AND DOWNLOAD REPORTS",
    steps: [
      "Click REPORTS in the menu",
      "Choose the report — Attendance, Fees, Exam Results",
      "Choose date range — like 1 April to 30 April",
      "Choose class or keep All Classes",
      "Click GENERATE — report is ready",
      "Click DOWNLOAD PDF at the top",
      "PDF is created — email to Principal or Trustees",
    ],
  },
  {
    title: "❓ SUPPORT — We Are Always Available",
    steps: [
      "WhatsApp us immediately — 9996865069",
      "Send your problem in writing or attach a screenshot",
      "We respond within minutes",
      "For urgent issues — call directly on the same number",
      "Support hours: 9 AM to 9 PM every day",
      "Email: prasad.kamta@gmail.com",
    ],
  },
];

const comparison = [
  { feature: "Student Management", market: true, ours: true },
  { feature: "Fee Receipt", market: true, ours: true },
  { feature: "Daily Attendance", market: true, ours: true },
  { feature: "Exams / Results", market: true, ours: true },
  { feature: "Parent Portal", market: true, ours: true },
  { feature: "TC / Character / Bonafide / Birth Certificate", market: false, ours: true },
  { feature: "Quarterly / Annual Marksheet — Entire Class", market: false, ours: true },
  { feature: "Transport Module + Receipt", market: false, ours: true },
  { feature: "Student Promotion (year-end, 1 click)", market: false, ours: true },
  { feature: "Year-wise Historical Data", market: false, ours: true },
  { feature: "WhatsApp Reminder — Fees + Attendance", market: false, ours: true },
  { feature: "Windows .EXE — Works Offline", market: false, ours: true },
  { feature: "Android PWA + Windows — One Purchase", market: false, ours: true },
  {
    feature: "Price",
    market: false,
    ours: true,
    marketLabel: "₹15,000–₹25,000/year",
    oursLabel: "One-time ₹4,999 · Server cost ₹2,500/year",
  },
  {
    feature: "Support",
    market: false,
    ours: true,
    marketLabel: "Call center / Ticket",
    oursLabel: "📞 Phone · 📧 Email · 💬 WhatsApp",
  },
];

export default function SchoolPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const emailFromUrl = params?.get("email") || "";

  const pay = async () => {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 4999, plan: "new", software: "school" }),
    });
    const order = await res.json();
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 4999 * 100,
      currency: "INR",
      name: "Nishant Softwares",
      description: "Nishant School Software — 1 Year",
      order_id: order.id,
      prefill: { email: emailFromUrl },
      handler: async (response) => {
        await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            email: emailFromUrl,
            name: "",
            phone: "",
            plan: "new",
            software: "school",
          }),
        });
        alert("Payment successful! Software has been activated.");
      },
    });
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top bar */}
      <div className="bg-amber-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a href="tel:+919996865069" className="hover:underline">
          📞 9996865069
        </a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">
          ✉️ prasad.kamta@gmail.com
        </a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a
          href="https://wa.me/919996865069"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          💬 Chat on WhatsApp
        </a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">
            🖥️ <span className="text-amber-400">Nishant</span> Software
          </a>
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition"
          >
            ← All Products
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-base font-semibold px-4 py-1 rounded-full mb-4">
            🆓 7 Days Completely Free — No Card Required
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
            🏫 Nishant School Software
          </h1>
          <p className="text-xl font-bold text-white mb-2">
            School Management Software
          </p>
          <p className="text-base mb-2 text-indigo-100">
            Students · Fees · Attendance · Exams · Notice Board · Timetable · Parent Portal
          </p>
          <p className="text-sm mb-8 text-indigo-200/80">
            21 Features · For CBSE Private Schools · Works on Mobile and Desktop
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCHOOL_EXE_URL}
              className="inline-block bg-white text-indigo-700 font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-indigo-50 transition"
            >
              🖥️ Download for Windows (.exe)
            </a>
            <div className="flex flex-col items-center gap-1">
              <a
                href={SCHOOL_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition"
              >
                📱 Install on Android
              </a>
              <p className="text-sm text-indigo-200/70">
                Chrome ⋮ → Add to Home Screen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">
            Other Software vs Nishant School Software
          </h2>
          <p className="text-center text-gray-500 text-base mb-3">
            Everything they have — we have too
          </p>
          <p className="text-center text-red-600 font-extrabold text-lg mb-8">
            But what we have — they don&apos;t. And the price? Unbeatable.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-10">
            <table className="w-full text-base">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-3 text-left font-bold text-base">Feature</th>
                  <th className="px-4 py-3 text-center font-bold text-base">Other Software</th>
                  <th className="px-4 py-3 text-center font-bold text-base bg-green-600">
                    Nishant School Software
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-t border-gray-100 ${!row.market && row.ours ? "bg-green-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td
                      className={`px-4 py-3 font-semibold text-base ${!row.market && row.ours ? "text-green-800" : "text-gray-800"}`}
                    >
                      {!row.market && row.ours && (
                        <span className="text-orange-500 mr-1">🔥</span>
                      )}
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {row.marketLabel ? (
                        <span className="text-red-600 font-bold text-sm">{row.marketLabel}</span>
                      ) : row.market ? (
                        <span className="text-green-600 font-bold text-xl">✅</span>
                      ) : (
                        <span className="text-red-500 font-bold text-xl">❌</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center bg-green-50">
                      {row.oursLabel ? (
                        <span className="text-green-700 font-extrabold text-sm">{row.oursLabel}</span>
                      ) : (
                        <span className="text-green-600 font-bold text-xl">✅</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-extrabold text-center text-gray-900 mb-6">
            🔥 Only in Ours — Not in Others
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                icon: "🖥️",
                title: "Works Without Internet",
                desc: "Windows .EXE available — even if power or internet goes out, work doesn't stop. All others are cloud-only.",
              },
              {
                icon: "💸",
                title: "Unbeatable Price",
                desc: "Others charge ₹15,000–₹25,000 per year. With ours — one-time ₹4,999, then only ₹2,500 server cost annually.",
              },
              {
                icon: "🏅",
                title: "TC, Character, Bonafide, Birth Certificate",
                desc: "One click, print-ready — with school letterhead. Cheaper software doesn't have this.",
              },
              {
                icon: "📊",
                title: "Quarterly / Annual Marksheet",
                desc: "Entire class at once, subject-wise, with pass/fail — all on one page.",
              },
              {
                icon: "🚌",
                title: "Transport Module",
                desc: "Route, stop, monthly fee, driver, vehicle number, student-wise receipt — everything.",
              },
              {
                icon: "⬆️",
                title: "Student Promotion",
                desc: "At year-end, move the entire class to the next grade in one click — nothing manual.",
              },
              {
                icon: "📅",
                title: "Year-wise Historical Data",
                desc: "Marksheets and fee records from 2–3 years ago — all accessible.",
              },
              {
                icon: "💬",
                title: "WhatsApp Reminder for Both",
                desc: "Fee pending — reminder. Child absent — reminder. Message is written automatically.",
              },
              {
                icon: "📱",
                title: "Android + Windows — One Purchase",
                desc: "Same software — works on mobile and computer. No extra cost.",
              },
              {
                icon: "🤝",
                title: "Talk Directly to the Developer",
                desc: "📞 Phone · 📧 Email · 💬 WhatsApp — no call center, no ticket system.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-4 flex gap-3 items-start shadow-sm"
              >
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-extrabold text-gray-900 text-base mb-1">{item.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Offer */}
      <section className="py-12 px-4 bg-zinc-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-white/20 text-white text-base font-bold px-4 py-1 rounded-full mb-4">
            🎁 Special Gift for Buyers
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Buy Nishant School Software —<br />
            Get Your School Website SEO Free
          </h2>
          <p className="text-white/90 text-base mb-6 max-w-xl mx-auto">
            Get your school to rank higher on Google — no extra charge. With every software purchase, you get all this free:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
            {[
              "✅ Google My Business profile setup — school visible on Google Maps",
              "✅ Local SEO — appear in 'best school in [your city]' searches",
              "✅ Basic on-page SEO for your school website",
              "✅ Title, description, keywords — all optimized",
              "✅ Market price: ₹5,000–₹10,000",
              "✅ For you: absolutely free",
            ].map((item, i) => (
              <div key={i} className="bg-white/20 rounded-xl px-4 py-3 text-base font-semibold">
                {item}
              </div>
            ))}
          </div>
          <button
            onClick={pay}
            className="bg-white text-orange-600 font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:bg-orange-50 transition"
          >
            💳 Buy Now — ₹4,999 and Get SEO Free
          </button>
        </div>
      </section>

      {/* Self-hosting offer */}
      <section className="py-10 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-extrabold text-amber-400 mb-3">
            🖥️ Want Your Own Server? Full Control in Your Hands?
          </h2>
          <p className="text-gray-300 text-base mb-4 max-w-xl mx-auto">
            If you don&apos;t want to depend on anyone — we will set up a dedicated server on{" "}
            <strong>Digital Ocean</strong> exclusively for your school and{" "}
            <strong>hand over the keys to you</strong>. Your data, your server, your complete control.
          </p>
          <div className="bg-white/10 rounded-2xl px-6 py-4 inline-block mb-6 text-left">
            <p className="text-white font-extrabold text-base mb-2">What you get:</p>
            <ul className="text-gray-300 text-base space-y-1">
              <li>✅ Dedicated server on Digital Ocean — only for your school</li>
              <li>✅ Setup, deployment, domain — all handled by us</li>
              <li>✅ Login credentials handed to you after work is done</li>
              <li>
                ✅ Our charge — only{" "}
                <strong className="text-amber-400">₹10,000 one-time</strong>
              </li>
              <li>
                ✅ Server cost — school pays Digital Ocean directly (approx ₹800–₹1,500/month)
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition text-base"
            >
              💬 Ask on WhatsApp
            </a>
            <a
              href="tel:+919996865069"
              className="bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition text-base"
            >
              📞 9996865069
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">
            What&apos;s Included?
          </h2>
          <p className="text-center text-gray-400 text-base mb-8">
            21 features — one software, one price
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gray-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start"
              >
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-bold text-base mb-1">{f.title}</div>
                  <div className="text-gray-300 text-sm leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manual */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-3xl p-8 text-center mb-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">📖 User Manual</h2>
            <p className="text-indigo-100 text-lg font-semibold">
              Step-by-step guide to every feature — in plain English
            </p>
            <p className="text-indigo-200 text-sm mt-2">
              Show this manual to the Principal to teach them how to use the software
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {manual.map((k, i) => (
              <div
                key={i}
                className="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-extrabold text-indigo-800 mb-5 pb-3 border-b-2 border-indigo-100">
                  {k.title}
                </h3>
                <ol className="space-y-4">
                  {k.steps.map((s, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-base font-extrabold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        {j + 1}
                      </span>
                      <span className="text-gray-900 text-lg leading-relaxed font-semibold">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-green-50 border-2 border-green-400 rounded-2xl p-5 text-center">
            <p className="font-extrabold text-gray-800 text-base mb-2">
              Facing any problem? Tell us right away
            </p>
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white font-extrabold px-6 py-3 rounded-xl text-base hover:bg-green-600 transition"
            >
              💬 WhatsApp — 9996865069
            </a>
          </div>
        </div>
      </section>

      {/* Windows warning */}
      <section className="py-8 px-4 bg-yellow-50 border-y-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">
            ⚠️ You May See This Message During Installation — Don&apos;t Worry
          </p>
          <p className="text-base text-gray-600 mb-3">
            Windows 11 has a security feature called <strong>Smart App Control</strong>. This software is completely safe.
          </p>
          <ol className="text-base text-gray-600 space-y-1">
            <li>1. Open <strong>Windows Security</strong> from the Start menu</li>
            <li>2. Click <strong>App &amp; browser control</strong></li>
            <li>3. Turn <strong>Smart App Control</strong> <strong>Off</strong></li>
            <li>4. Run the .exe file again</li>
            <li>5. You can turn it back on after installation</li>
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">Pricing</h2>
          <p className="text-center text-gray-500 text-base mb-2">No hidden charges</p>
          <p className="text-center text-red-600 font-extrabold text-base mb-8">
            Others charge ₹15,000–₹25,000 per year — ours is just ₹4,999 one-time, then only ₹2,500 server cost annually
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                New Account
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">First Time</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-base mb-1">One-time — 1 year included</p>
              <p className="text-gray-500 text-base mb-3">
                After that, server cost <strong>₹2,500/year</strong>
              </p>
              <ul className="text-sm text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ All 21 features unlocked</li>
                <li>✅ TC, Marksheet, Transport — everything</li>
                <li>✅ Windows and Android both</li>
                <li>✅ 📞 📧 💬 Talk directly to the developer</li>
                <li className="text-green-700 font-bold">🎁 School website SEO — free</li>
              </ul>
              <a
                href={SCHOOL_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-base mb-3"
              >
                🆓 Try Free for 7 Days
              </a>
              <button
                onClick={pay}
                className="block w-full bg-gray-800 text-white font-bold py-2.5 rounded-xl hover:bg-gray-700 transition text-base"
              >
                💳 Buy Now — ₹4,999
              </button>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-base mb-3">Server cost — per year</p>
              <ul className="text-sm text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ All features continue</li>
                <li>✅ New features added automatically</li>
                <li>✅ Data stays safe</li>
                <li>✅ 📞 📧 💬 Priority support</li>
              </ul>
              <a
                href="https://wa.me/919996865069"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-base"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-indigo-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">
            Get Started Today — 7 Days Free
          </h2>
          <p className="text-indigo-200 mb-6 text-base">
            No card · No commitment · Talk directly to the developer
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 text-base font-bold">
            <a href="tel:+919996865069" className="hover:underline">
              📞 9996865069
            </a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">
              ✉️ prasad.kamta@gmail.com
            </a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a
              href="https://wa.me/919996865069"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}