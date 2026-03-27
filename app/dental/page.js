"use client";

const DENTAL_PWA_URL = "https://dental-generic.vercel.app";

const features = [
  { hi: "मरीज का पूरा रिकॉर्ड — नाम, उम्र, मोबाइल, पता", en: "Complete patient record — name, age, mobile, address with auto patient number" },
  { hi: "Digital Prescription — दवाइयाँ चुनो, print करो", en: "Select medicines from 30+ pre-loaded dental medicines across 8 categories" },
  { hi: "Treatment Tracking — RCT, Capping, Scaling किस sitting पर", en: "Track treatments per tooth — procedure, sitting number, total sittings" },
  { hi: "Billing — total, paid, balance, payment mode", en: "Create bills with total amount, paid amount, balance due & payment mode" },
  { hi: "Print-ready Prescription — clinic का नाम, doctor का नाम", en: "Print-ready prescription with clinic name & doctor name from settings" },
  { hi: "Receptionist PIN Login — counter boy के लिए अलग access", en: "4-digit PIN login for receptionist — only patient registration access" },
  { hi: "Google OAuth — doctor के लिए secure login", en: "Secure Google login for doctor — full dashboard access" },
  { hi: "7-Day Free Trial — कोई card नहीं", en: "7-day free trial — no credit card required" },
  { hi: "PWA — Android और Desktop दोनों पर", en: "Progressive Web App — works on Android, iOS & Desktop browsers" },
  { hi: "Settings — clinic name, doctor name, PIN सब बदल सकते हो", en: "Settings page — update clinic name, doctor name & receptionist PIN anytime" },
];

const howTo = [
  { step: "01", hi: "Google से login करें — doctor का Gmail", en: "Login with doctor's Google account", icon: "🔐" },
  { step: "02", hi: "Settings → Clinic name, Doctor name, PIN भरो", en: "Go to Settings → Fill clinic info & set receptionist PIN", icon: "⚙️" },
  { step: "03", hi: "Patients → New Patient → Register करो", en: "Add patients — name, age, mobile, address", icon: "🧑‍⚕️" },
  { step: "04", hi: "Prescription / Treatment / Billing — जो चाहो करो", en: "Write prescriptions, add treatments, create bills", icon: "💊" },
  { step: "05", hi: "Print → Prescription print करो", en: "Print prescription directly from browser", icon: "🖨️" },
];

export default function DentalPage() {
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

      <section className="bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 Days Completely Free — No Card Required</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">🦷 Nishant Dental Pro<br />Clinic Management</h1>
          <p className="text-lg mb-1 font-semibold text-green-100">डेंटल क्लिनिक के लिए बना — मरीज, prescription, treatment और billing सब एक जगह।</p>
          <p className="text-base mb-8 text-green-200/70">Built specifically for dental clinics — Patients, Prescriptions, Treatments & Billing all in one place.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col items-center">
              <a href={DENTAL_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-green-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-green-50 transition">
                📱 Try Free — Open App
              </a>
              <p className="text-xs mt-1 text-green-200/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-green-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">Dental clinics के लिए specifically बनाया गया</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-green-500/20 rounded-xl px-5 py-4">
                <div className="text-green-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कैसे उपयोग करें / How to Use</h2>
          <p className="text-center text-gray-500 text-sm mb-8">5 आसान steps में शुरू करें</p>
          <div className="grid md:grid-cols-5 gap-3">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-green-200 rounded-xl p-4 text-center shadow-sm">
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
            <div className="rounded-2xl border-2 border-green-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">New Account / नया Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-green-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-1">एक बार — 1 साल included</p>
              <p className="text-gray-400 text-xs mb-4">One time — 1 year included</p>
              <a href="/payment?software=dental" className="block w-full bg-green-600 text-white font-bold py-2 rounded-xl hover:bg-green-500 transition">
                Start Free Trial — मुफ्त शुरू करें
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">नवीनीकरण / Renewal</h3>
              <div className="text-4xl font-extrabold text-green-600 mb-1">₹1,999</div>
              <p className="text-gray-400 text-sm mb-1">प्रति वर्ष</p>
              <p className="text-gray-400 text-xs mb-4">Per year</p>
              <a href="/payment?software=dental" className="block w-full bg-green-600 text-white font-bold py-2 rounded-xl hover:bg-green-500 transition">
                Renew Now — नवीनीकरण करें
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}