"use client";

const CLINIC_PWA_URL = "https://medical-saas-32pt.vercel.app";
const CLINIC_EXE_URL = "exeUrl: "https://pub-70d93acc97f04394bd956a27e7e6b849.r2.dev/ClinicOS%20Setup%201.0.0.exe"";

const features = [
  { icon: "👥", hi: "OPD Queue — Token System", en: "Patient queue with auto token numbers — no chaos at reception" },
  { icon: "📋", hi: "Digital Prescription — print या WhatsApp", en: "Write prescriptions digitally — print or send via WhatsApp instantly" },
  { icon: "🧪", hi: "Lab Tests — order और result एक जगह", en: "Order lab tests from prescription — attach results to patient record" },
  { icon: "🧾", hi: "GST Billing — cash, UPI, credit", en: "Generate GST bills in seconds — cash, UPI or credit supported" },
  { icon: "💊", hi: "Pharmacy Integration — prescription से bill", en: "Pharmacy counter gets prescription directly — one-click billing" },
  { icon: "📦", hi: "Medicine Stock — expiry alert", en: "Track medicine stock with batch, expiry & low stock alerts" },
  { icon: "📊", hi: "Reports — daily, monthly, profit/loss", en: "Sales reports, profit/loss, credit outstanding — all in one place" },
  { icon: "🔒", hi: "Credit Tracking — उधारी का हिसाब", en: "Track credit with aging analysis — WhatsApp reminder to patients" },
  { icon: "🩺", hi: "Multi-Doctor Support", en: "Multiple doctors — separate queues, prescriptions & records" },
  { icon: "📱", hi: "Mobile First — PWA + Windows App", en: "Works on mobile browser as PWA + Windows desktop installer" },
];

const howTo = [
  { step: "01", icon: "🔐", hi: "Google से login करें", en: "Doctor logs in with Google account — no password needed" },
  { step: "02", icon: "⚙️", hi: "Clinic details भरें — Settings में", en: "Fill clinic name, doctor name, GSTIN, address in Settings" },
  { step: "03", icon: "👤", hi: "Patient register करें", en: "Add patient — name, age, phone, complaint — token auto assign" },
  { step: "04", icon: "🩺", hi: "Doctor examine करे — prescription लिखे", en: "Doctor opens patient, writes prescription, orders tests" },
  { step: "05", icon: "💊", hi: "Pharmacy bill बनाए", en: "Pharmacy gets prescription — dispenses medicines & creates GST bill" },
  { step: "06", icon: "📊", hi: "Reports देखें", en: "View daily sales, profit/loss, credit outstanding anytime" },
];

const whyUs = [
  { icon: "💸", title: "सबसे सस्ता", desc: "₹4,999 में पूरा 1 साल — कोई monthly charge नहीं, कोई hidden fee नहीं।" },
  { icon: "📴", title: "Offline भी काम करे", desc: "Windows app internet के बिना भी चलती है — data safe रहता है।" },
  { icon: "🇮🇳", title: "India के लिए बना", desc: "GST, HSN codes, हिंदी support — Indian clinic की हर ज़रूरत।" },
  { icon: "🔒", title: "Data आपका — आपके पास", desc: "कोई third-party cloud नहीं — पूरी privacy guaranteed।" },
  { icon: "📞", title: "Direct Support", desc: "WhatsApp पर directly developer से बात — कोई IVR नहीं।" },
  { icon: "🔄", title: "Free Updates", desc: "GST changes, नए features — सब automatic update, कोई extra charge नहीं।" },
];

export default function ClinicPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Top Bar */}
      <div className="bg-teal-700 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-widest uppercase">
            🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
            🏥 ClinicOS<br />
            <span className="text-teal-200">Smart Clinic Management</span>
          </h1>
          <p className="text-lg mb-1 font-semibold text-teal-100">
            3-4 doctors तक के hospital के लिए — OPD, prescription, pharmacy, billing सब एक जगह।
          </p>
          <p className="text-sm mb-8 text-teal-200/80">
            For small hospitals & clinics — patient queue, digital prescriptions, GST billing & reports all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            
              href={CLINIC_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg hover:bg-teal-50 transition active:scale-95"
            >
              📱 Try Free — Open App
            </a>
            
              href={CLINIC_EXE_URL}
              className="inline-flex items-center justify-center gap-2 bg-teal-600 border-2 border-white/40 text-white font-bold text-base px-8 py-3.5 rounded-2xl shadow-lg hover:bg-teal-500 transition active:scale-95"
            >
              💻 Download Windows App
            </a>
          </div>
          <p className="text-xs text-teal-200/60 mt-3">
            Mobile पर: Chrome ⋮ → Add to Home Screen &nbsp;|&nbsp; Windows: Setup file install करें
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-teal-400">
            क्या-क्या मिलता है?
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10">
            एक software — पूरे clinic की ज़रूरत
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-teal-500/20 rounded-xl px-5 py-4 flex gap-4 items-start">
                <span className="text-2xl mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-teal-400 font-semibold text-sm mb-0.5">{f.hi}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{f.en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-14 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">
            कैसे यूज़ करें?
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            5 मिनट में setup — कोई training नहीं चाहिए
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-teal-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{h.icon}</span>
                  <span className="text-xs font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded-full">STEP {h.step}</span>
                </div>
                <div className="font-bold text-gray-800 text-sm mb-1">{h.hi}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{h.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">
            ClinicOS क्यों चुनें?
          </h2>
          <p className="text-center text-gray-400 text-sm mb-10">
            जो बात हमें बाकी सबसे अलग बनाती है
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {whyUs.map((w, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-teal-400 transition">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-gray-800 text-sm mb-1">{w.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2 text-gray-800">Pricing</h2>
          <p className="text-center text-gray-400 text-sm mb-10">कोई monthly charge नहीं — एक बार खरीदो, साल भर चलाओ</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-teal-500 p-6 text-center shadow-lg relative bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                New Account
              </div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-1">एक बार — 1 साल included</p>
              <p className="text-gray-300 text-xs mb-5">7 दिन free trial — कोई card नहीं</p>
              <a
                href={CLINIC_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-500 transition mb-2"
              >
                Start Free Trial
              </a>
              
                href="/payment?software=clinic"
                className="block w-full border border-teal-500 text-teal-600 font-bold py-3 rounded-xl hover:bg-teal-50 transition text-sm"
              >
                Buy Now — ₹4,999
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm bg-white">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-teal-600 mb-1">₹1,999</div>
              <p className="text-gray-400 text-sm mb-1">प्रति वर्ष</p>
              <p className="text-gray-300 text-xs mb-5">Expiry से पहले renew करें</p>
              <a
                href="/payment?software=clinic&plan=renewal"
                className="block w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-500 transition"
              >
                Renew Now — ₹1,999
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-teal-200 mb-6 text-sm">7 दिन पूरी तरह मुफ्त — कोई card नहीं, कोई commitment नहीं</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href={CLINIC_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-700 font-bold px-8 py-3 rounded-2xl hover:bg-teal-50 transition"
            >
              📱 Open App Free
            </a>
            <a
              href={CLINIC_EXE_URL}
              className="bg-teal-600 border-2 border-white/40 text-white font-bold px-8 py-3 rounded-2xl hover:bg-teal-500 transition"
            >
              💻 Download Windows App
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-semibold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ Email</a>
          </div>
        </div>
      </section>

    </main>
  );
}