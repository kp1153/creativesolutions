"use client";

const CLINIC_PWA_URL = "#";

const features = [
  { hi: "OPD Management — आज के मरीज, token system", en: "Daily OPD — patient queue management with token number system" },
  { hi: "Patient Record — पूरी history एक जगह", en: "Complete patient history — visits, diagnoses, prescriptions & treatments" },
  { hi: "Digital Prescription — medicines चुनो, print करो", en: "Write digital prescriptions — select medicines, print or WhatsApp" },
  { hi: "Billing — consultation fee, tests, medicines", en: "Billing for consultation, diagnostic tests & medicines" },
  { hi: "Appointment Booking — आगे की date देना", en: "Schedule future appointments — date, time & reminder" },
  { hi: "Lab Reports — test results patient record में", en: "Attach lab reports to patient record for future reference" },
  { hi: "Multi-Doctor Support — clinic में एक से ज़्यादा doctor", en: "Multiple doctors can use same system with separate records" },
  { hi: "Receptionist Login — PIN से limited access", en: "Receptionist PIN login — OPD registration & billing only" },
  { hi: "Monthly Reports — कितने मरीज, कितनी कमाई", en: "Monthly patient count, revenue & diagnosis summary reports" },
  { hi: "PWA + Windows .exe — mobile और desktop", en: "Works as Android PWA and Windows desktop app" },
];

const howTo = [
  { step: "01", hi: "Doctor Google से login करें", en: "Doctor logs in with Google account", icon: "🔐" },
  { step: "02", hi: "Receptionist PIN set करो — Settings में", en: "Set receptionist PIN in Settings for counter access", icon: "⚙️" },
  { step: "03", hi: "Receptionist मरीज register करे — OPD token मिले", en: "Receptionist registers patient → OPD token assigned", icon: "🧑‍⚕️" },
  { step: "04", hi: "Doctor prescription लिखे, billing करे", en: "Doctor writes prescription & creates bill", icon: "💊" },
];

export default function ClinicPage() {
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
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">🏥 Nishant Clinic Pro<br />सामान्य क्लिनिक प्रबंधन</h1>
          <p className="text-lg mb-1 font-semibold text-teal-100">सामान्य क्लिनिक के लिए — OPD, prescription, billing और appointment सब एक जगह।</p>
          <p className="text-base mb-8 text-teal-200/70">For general clinics — OPD management, digital prescriptions, billing & appointments all in one place.</p>
          <div className="flex flex-col items-center gap-3">
            <a href={CLINIC_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-teal-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-teal-50 transition">
              📱 Try Free — Open App
            </a>
            <p className="text-xs text-teal-200/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-teal-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">General physicians, specialists, multi-specialty clinics के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-teal-500/20 rounded-xl px-5 py-4">
                <div className="text-teal-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-teal-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-teal-200 rounded-xl p-4 text-center shadow-sm">
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
            <div className="rounded-2xl border-2 border-teal-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=clinic" className="block w-full bg-teal-600 text-white font-bold py-2 rounded-xl hover:bg-teal-500 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">₹1,999</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=clinic" className="block w-full bg-teal-600 text-white font-bold py-2 rounded-xl hover:bg-teal-500 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}