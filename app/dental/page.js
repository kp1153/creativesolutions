"use client";

const DENTAL_PWA_URL = "https://dental-saas-pi.vercel.app";
const DENTAL_EXE_URL =
  "https://pub-2bb08b9a599048e48fa0e6a4a9f137bb.r2.dev/Nishant%20Dental%20Pro%20Setup%201.0.0.exe";

const features = [
  {
    icon: "🧑‍⚕️",
    hi: "हर मरीज का पूरा रिकॉर्ड",
    en: "नाम, उम्र, मोबाइल, पता — सब एक जगह। Auto patient number (P0001, P0002...) ताकि कभी गड़बड़ी न हो।",
  },
  {
    icon: "💊",
    hi: "Digital Prescription — 30+ दवाइयाँ ready",
    en: "Amoxicillin, Ibuprofen, Pantoprazole जैसी 30+ dental medicines पहले से loaded। बस choose करो, dose भरो, print करो।",
  },
  {
    icon: "🦷",
    hi: "Treatment Tracking — कौन सा दाँत, कितनी sitting",
    en: "RCT, Capping, Scaling, Extraction — tooth number के साथ। Sitting 1/3, 2/3 track होती है।",
  },
  {
    icon: "💰",
    hi: "Billing — total, paid, due — एक click में",
    en: "₹ कितना बना, कितना मिला, कितना बाकी — हर patient का अलग हिसाब। Cash, UPI, Card सब modes।",
  },
  {
    icon: "🖨️",
    hi: "Print-ready Prescription",
    en: "Clinic का नाम, Doctor का नाम, date — सब automatically आता है। Browser से सीधे print।",
  },
  {
    icon: "🔢",
    hi: "Counter Boy के लिए PIN Login",
    en: "Receptionist को सिर्फ नया patient register करने का access। Billing, prescription, settings — कुछ नहीं छू सकता।",
  },
  {
    icon: "📱",
    hi: "Mobile पर भी — कोई app install नहीं",
    en: "Android में Chrome से Home Screen पर add करो — बिल्कुल app जैसा चलेगा। PWA technology।",
  },
  {
    icon: "🖥️",
    hi: "Windows Desktop App भी",
    en: ".exe download करो — offline-like experience। Internet से connect होकर data Turso cloud में safe।",
  },
];

const steps = [
  {
    step: "01",
    icon: "🔐",
    title: "Google से Login करें",
    hi: "अपने Gmail से login करें — यही doctor का account बनेगा।",
    en: "First 7 days completely free — no card, no payment.",
  },
  {
    step: "02",
    icon: "⚙️",
    title: "Settings भरें",
    hi: "Clinic का नाम, Doctor का नाम, और Receptionist का PIN set करें।",
    en: "This info appears on every prescription you print.",
  },
  {
    step: "03",
    icon: "🔢",
    title: "Counter Boy को PIN दें",
    hi: "Receptionist /login/pin से 4-digit PIN से login करेगा।",
    en: "He can only register new patients — nothing else.",
  },
  {
    step: "04",
    icon: "🧑‍⚕️",
    title: "Patient Register करें",
    hi: "Patients → New Patient → नाम, मोबाइल, उम्र भरो।",
    en: "Auto patient number assign होता है।",
  },
  {
    step: "05",
    icon: "💊",
    title: "Prescription / Treatment / Billing",
    hi: "Patient खोलो → जो चाहो करो — prescription लिखो, treatment add करो, bill बनाओ।",
    en: "Everything linked to the patient — no mess.",
  },
];

const pinGuide = [
  {
    icon: "✅",
    can: "नया Patient register कर सकता है",
    cannot: "Billing नहीं देख सकता",
  },
  {
    icon: "✅",
    can: "Patient list देख सकता है",
    cannot: "Prescription नहीं लिख सकता",
  },
  {
    icon: "✅",
    can: "Patient जोड़ सकता है",
    cannot: "Treatment record नहीं छू सकता",
  },
  {
    icon: "🔒",
    can: "बस इतना — और कुछ नहीं",
    cannot: "Settings नहीं बदल सकता",
  },
];

export default function DentalPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Top contact bar */}
      <div className="bg-green-700 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp पर पूछें</a>
        <span className="hidden sm:inline">|</span>
        <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">
            🖥️ <span className="text-amber-400">Nishant</span> Software
          </a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">
            ← सभी Products
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 tracking-wider uppercase">
            🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            🦷 Dental Pro
            <br />
            <span className="text-green-200">सिर्फ Dental Clinic के लिए</span>
          </h1>
          <p className="text-lg font-semibold text-green-100 mb-2">
            मरीज का record, prescription, treatment, billing — सब एक जगह।
          </p>
          <p className="text-sm text-green-200/70 mb-8">
            Paper register बंद करो। Software शुरू करो। आज — मुफ्त में।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DENTAL_EXE_URL}
              className="inline-block bg-gray-900 text-green-400 font-bold text-base px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition">
              🖥️ Windows पर Download (.exe)
            </a>
            <div className="flex flex-col items-center">
              <a href={DENTAL_PWA_URL} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-green-800 font-bold text-base px-8 py-3 rounded-2xl shadow-lg hover:bg-green-50 transition">
                📱 Mobile पर Install करें (Android)
              </a>
              <p className="text-xs mt-1 text-green-200/60">Chrome → menu ⋮ → Add to Home Screen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain point section */}
      <section className="py-10 px-4 bg-red-50 border-b border-red-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-extrabold text-red-700 mb-6">😤 क्या यही हाल है आपके clinic का?</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-left">
            {[
              "📒 Paper register में मरीज ढूंढना — pages पलटते रहो",
              "🖊️ हर बार prescription हाथ से लिखो — same medicines बार-बार",
              "💸 किसने कितना दिया, कितना बाकी है — हिसाब गड़बड़",
              "😬 Counter boy ने billing में हाथ डाल दिया — पता भी नहीं चला",
              "📞 पुराने मरीज का mobile number याद नहीं — register कहाँ है?",
              "🖨️ Prescription print करना हो — format बनाते रहो",
            ].map((p, i) => (
              <div key={i} className="bg-white border border-red-200 rounded-xl px-4 py-3 text-sm text-red-800 font-medium">
                {p}
              </div>
            ))}
          </div>
          <p className="text-red-600 font-bold text-lg mt-6">Dental Pro इन सब से मुक्ति देता है। ₹4,999 में — एक बार।</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-green-400">क्या-क्या मिलता है?</h2>
          <p className="text-center text-gray-400 text-sm mb-8">सिर्फ Dental Clinic के लिए बना — सब कुछ relevant</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-green-500/20 rounded-xl px-5 py-4">
                <div className="text-green-400 font-bold text-base mb-1">{f.icon} {f.hi}</div>
                <div className="text-gray-300 text-sm">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to use — Doctor */}
      <section className="py-12 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-gray-800">Doctor कैसे use करें?</h2>
          <p className="text-center text-gray-500 text-sm mb-8">पहले दिन से 5 steps में शुरू — 10 मिनट में setup</p>
          <div className="flex flex-col gap-4">
            {steps.map((s) => (
              <div key={s.step} className="bg-white border border-green-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
                <div className="text-3xl shrink-0">{s.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded-full">STEP {s.step}</span>
                    <span className="font-extrabold text-gray-800">{s.title}</span>
                  </div>
                  <div className="text-gray-700 text-sm font-medium">{s.hi}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{s.en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIN Guide — Receptionist */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-yellow-400">🔢 Counter Boy का PIN Login</h2>
          <p className="text-center text-gray-400 text-sm mb-2">Receptionist को सिर्फ मरीज register करने का access</p>
          <p className="text-center text-gray-500 text-xs mb-8">Settings → Receptionist PIN set करो → Counter boy को दो → बस</p>

          <div className="bg-gray-800 border border-yellow-500/30 rounded-2xl p-6 mb-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {pinGuide.map((p, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-green-400 font-bold shrink-0">✅</span>
                    <span className="text-green-300">{p.can}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-red-400 font-bold shrink-0">🚫</span>
                    <span className="text-red-300">{p.cannot}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5">
            <h3 className="text-yellow-400 font-extrabold mb-3">PIN कैसे set करें?</h3>
            <ol className="flex flex-col gap-2 text-sm text-gray-300">
              <li className="flex gap-3"><span className="text-yellow-400 font-bold shrink-0">1.</span> Doctor अपने Google account से login करें</li>
              <li className="flex gap-3"><span className="text-yellow-400 font-bold shrink-0">2.</span> Dashboard → Settings ⚙️ पर जाएं</li>
              <li className="flex gap-3"><span className="text-yellow-400 font-bold shrink-0">3.</span> "Receptionist PIN" वाले box में 4 digit का PIN भरें (जैसे 1234)</li>
              <li className="flex gap-3"><span className="text-yellow-400 font-bold shrink-0">4.</span> Save करें</li>
              <li className="flex gap-3"><span className="text-yellow-400 font-bold shrink-0">5.</span> Counter boy को बताएं — वो <strong className="text-white">/login/pin</strong> पर जाकर PIN से login करेगा</li>
              <li className="flex gap-3"><span className="text-yellow-400 font-bold shrink-0">6.</span> PIN बदलना हो — Settings में जाकर फिर से save करें</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-center mb-1 text-gray-800">Pricing — एकदम सीधा</h2>
          <p className="text-center text-gray-500 text-sm mb-8">कोई hidden charge नहीं। कोई monthly नहीं। सालाना।</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-green-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                पहली बार
              </div>
              <div className="text-4xl font-extrabold text-green-600 mt-4 mb-1">₹4,999</div>
              <p className="text-gray-500 text-sm mb-1">एक बार — 1 साल included</p>
              <ul className="text-gray-600 text-xs mb-5 text-left mt-3 flex flex-col gap-1">
                <li>✅ 7 दिन free trial</li>
                <li>✅ 1 साल full access</li>
                <li>✅ Unlimited patients</li>
                <li>✅ Windows + Android दोनों</li>
              </ul>
              <a href="/payment?software=dental"
                className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-500 transition">
                मुफ्त में शुरू करें →
              </a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-green-600 mt-4 mb-1">₹1,999</div>
              <p className="text-gray-500 text-sm mb-1">Renewal — प्रति वर्ष</p>
              <ul className="text-gray-600 text-xs mb-5 text-left mt-3 flex flex-col gap-1">
                <li>✅ पुराना सारा data safe रहेगा</li>
                <li>✅ 1 साल और access</li>
                <li>✅ नए features automatic</li>
              </ul>
              <a href="/payment?software=dental"
                className="block w-full bg-gray-800 text-white font-bold py-3 rounded-xl hover:bg-gray-700 transition">
                Renewal करें →
              </a>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-6">
            Payment के बाद immediately active होता है। कोई wait नहीं।<br />
            सवाल हो तो WhatsApp करें — <a href="https://wa.me/919996865069" className="text-green-600 font-bold hover:underline">+91 9996865069</a>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 px-4 bg-green-700 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-green-200 text-sm mb-6">7 दिन free। कोई card नहीं। कोई commitment नहीं।</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={DENTAL_EXE_URL}
              className="bg-gray-900 text-green-400 font-bold px-8 py-3 rounded-2xl hover:bg-gray-800 transition">
              🖥️ Windows Download
            </a>
            <a href={DENTAL_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-white text-green-800 font-bold px-8 py-3 rounded-2xl hover:bg-green-50 transition">
              📱 Mobile पर Install
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 text-sm font-bold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ Email</a>
          </div>
        </div>
      </section>

    </main>
  );
}