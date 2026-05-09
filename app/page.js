"use client";
import { useEffect, useState } from "react";

const whyUs = [
  { icon: "🇮🇳", title: "Built for India", desc: "GST, HSN codes, Indian workflows — designed for the way Indian businesses actually work." },
  { icon: "📴", title: "Works Offline Too", desc: "No internet? The desktop app works fully without a connection." },
  { icon: "💸", title: "Best Price — Best Features", desc: "More features for less money. No hidden charges." },
  { icon: "🔒", title: "Your Data — Your Control", desc: "Data stays on your device. No third-party cloud. Complete privacy." },
  { icon: "📱", title: "Mobile + Desktop Both", desc: "Run it on mobile via PWA or install the desktop app — same software, one purchase." },
  { icon: "🛠️", title: "7-Day Free Trial", desc: "Try first — buy later. No card required, no commitment." },
  { icon: "📞", title: "Direct Support", desc: "Talk to us on WhatsApp — no IVR, no ticket system. Straight to the developer." },
  { icon: "🔄", title: "Always Updated", desc: "New features added automatically. No extra charge." },
];

const highlights = [
  { icon: "🎓", text: "Student Management" },
  { icon: "💰", text: "Fee Collection & Receipts" },
  { icon: "✅", text: "Daily Attendance + WhatsApp Alert" },
  { icon: "📝", text: "Exams & Marksheets" },
  { icon: "🏅", text: "TC / Bonafide / Character Certificates" },
  { icon: "👨‍👩‍👧", text: "Parent Portal" },
  { icon: "🚌", text: "Transport Management" },
  { icon: "⬆️", text: "One-Click Class Promotion" },
];

export default function Home() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch("/api/views")
      .then((r) => r.json())
      .then((d) => setViews(d.views));
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white font-sans">
      {views && (
        <div className="bg-zinc-800 text-center py-2 px-4 text-xs text-amber-400 font-semibold">
          👁️ Viewed {Number(views).toLocaleString()} times so far
        </div>
      )}

      {/* Hero */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-zinc-800 to-zinc-900">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            🆓 7 Days Free Trial — No Card Required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            🏫 Nishant<br />
            <span className="text-indigo-400">School Software</span>
          </h1>
          <p className="text-gray-400 text-lg mb-2">
            Complete School Management — Students, Fees, Attendance, Exams & More
          </p>
          <p className="text-gray-500 mb-8 text-sm">
            For CBSE private schools · Works on Mobile and Windows Desktop · One purchase
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {highlights.map((h, i) => (
              <span key={i} className="bg-indigo-900/60 border border-indigo-500/40 text-indigo-200 text-xs font-semibold px-3 py-1.5 rounded-full">
                {h.icon} {h.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/school"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold text-base px-8 py-3 rounded-2xl shadow-lg transition"
            >
              See All Features →
            </a>
            <a
              href="https://school.nishantsoftwares.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-extrabold text-base px-8 py-3 rounded-2xl shadow-lg transition"
            >
              🆓 Try Free for 7 Days
            </a>
          </div>

          <p className="text-indigo-300 font-extrabold text-2xl mt-10">
            ₹4,999 <span className="text-gray-500 font-normal text-base">one-time · then ₹2,500/year server cost</span>
          </p>
          <p className="text-red-400 text-sm mt-1">Others charge ₹15,000–₹25,000/year</p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-2">
            Why Choose Nishant Software?
          </h2>
          <p className="text-center text-gray-400 mb-10 text-sm">What sets us apart from the rest</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <div key={i} className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700 hover:border-amber-500/40 transition">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-white text-sm mb-1">{w.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-white mb-2">Get Started Today — Free</h2>
          <p className="text-amber-100 mb-6 text-sm">7 days completely free — no card required</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-white font-bold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}