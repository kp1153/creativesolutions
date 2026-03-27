"use client";

const LEGAL_PWA_URL = "#";

const features = [
  { hi: "Case Management — हर case का पूरा record", en: "Complete case record — case number, court, opposite party, filing date & status" },
  { hi: "Client Management — client की details और cases", en: "Client profiles with all linked cases, contact details & payment history" },
  { hi: "Court Date Tracker — अगली date याद रहे", en: "Track all upcoming court dates — get reminder before hearing date" },
  { hi: "Document Management — case के documents attach करो", en: "Attach documents to each case — FIR, petition, judgement copies" },
  { hi: "Fee Management — कितना लिया, कितना बाकी", en: "Track fees charged, advance received & balance due per case" },
  { hi: "Cause List — आज कौन से cases हैं", en: "Today's cause list — all cases scheduled for today's hearing" },
  { hi: "Case History — हर hearing का क्या हुआ", en: "Hearing-wise notes — what happened, what was argued, next date reason" },
  { hi: "Client Portal — client को status दिखे", en: "Clients can check their case status & next hearing date online" },
  { hi: "Monthly Billing — महीने की fees का summary", en: "Monthly fee collection summary — received, pending & overdue" },
  { hi: "PWA — mobile पर app की तरह", en: "Works as Android PWA — check case details from court on mobile" },
];

const howTo = [
  { step: "01", hi: "Login — advocate का Google account", en: "Login with advocate's Google account", icon: "🔐" },
  { step: "02", hi: "Client add करो — name, contact, matter", en: "Add client with contact details & nature of matter", icon: "👤" },
  { step: "03", hi: "Case file करो — court, opposite party, dates", en: "Create case — enter court details, opposite party & hearing dates", icon: "⚖️" },
  { step: "04", hi: "हर hearing के बाद notes और next date डालो", en: "After each hearing — add notes, outcome & next date", icon: "📋" },
];

export default function LegalPage() {
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
      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-violet-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">⚖️ Nishant Legal Pro<br />वकीलों के लिए</h1>
          <p className="text-lg mb-1 font-semibold text-purple-100">वकीलों के लिए — cases, clients, court dates, documents और fee management सब एक जगह।</p>
          <p className="text-base mb-8 text-purple-200/70">For advocates & law firms — cases, clients, court dates, document management & fee tracking all in one place.</p>
          <div className="flex flex-col items-center gap-3">
            <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-purple-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-purple-50 transition">
              📱 Try Free — Open App
            </a>
            <p className="text-xs text-purple-200/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-purple-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Advocates, law firms, legal consultants के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-purple-500/20 rounded-xl px-5 py-4">
                <div className="text-purple-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-purple-200 rounded-xl p-4 text-center shadow-sm">
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
            <div className="rounded-2xl border-2 border-purple-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-purple-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=legal" className="block w-full bg-purple-600 text-white font-bold py-2 rounded-xl hover:bg-purple-500 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-purple-600 mb-1">₹1,999</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=legal" className="block w-full bg-purple-600 text-white font-bold py-2 rounded-xl hover:bg-purple-500 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}