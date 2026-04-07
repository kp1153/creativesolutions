"use client";

const LEGAL_PWA_URL = "https://judicial-phi.vercel.app/login";
const WINDOWS_EXE_URL = "https://pub-b1d62729c0a54dd6b851eb17bd62a93c.r2.dev/Legal%20Pro%20Setup%200.1.0.exe";

const features = [
  { icon: "⚖️", en: "Case Management", hi: "केस प्रबंधन", desc_en: "Case number, court, opposite party, filing date — everything in one place. District Court to Supreme Court.", desc_hi: "केस नंबर, अदालत, विपक्षी पार्टी, दाखिल तारीख — सब एक जगह। जिला अदालत से सुप्रीम कोर्ट तक।" },
  { icon: "📅", en: "Court Date Tracker", hi: "पेशी तारीख ट्रैकर", desc_en: "Record every hearing date. Email reminder arrives before the date — never miss a hearing.", desc_hi: "हर पेशी की तारीख दर्ज करो। तारीख से पहले email reminder आएगा — पेशी कभी नहीं छूटेगी।" },
  { icon: "👤", en: "Client Management", hi: "मुवक्किल प्रबंधन", desc_en: "Every client's profile — contact, cases, documents, fees — all linked together.", desc_hi: "हर मुवक्किल की जानकारी — संपर्क, केस, दस्तावेज़, फीस — सब एक साथ।" },
  { icon: "📋", en: "Case Diary", hi: "केस डायरी", desc_en: "After every hearing — notes on what happened, what was argued, why the next date was given.", desc_hi: "हर सुनवाई के बाद — क्या हुआ, क्या बहस हुई, अगली तारीख क्यों मिली।" },
  { icon: "💰", en: "Fee Ledger", hi: "फीस बही", desc_en: "How much charged, how much received, how much pending — client-wise clear account.", desc_hi: "कितना लिया, कितना मिला, कितना बाकी — मुवक्किल-वार साफ हिसाब।" },
  { icon: "📎", en: "Document Attach", hi: "दस्तावेज़ संलग्न", desc_en: "Vakalatnama, FIR copy, petition, judgment — attach to the case digitally.", desc_hi: "वकालतनामा, FIR कॉपी, अर्जी, आदेश — केस से डिजिटल रूप में जोड़ो।" },
  { icon: "📊", en: "Today's Cause List", hi: "आज की कॉज़ लिस्ट", desc_en: "All today's cases at a glance — prepare before going to court.", desc_hi: "आज के सभी केस एक नज़र में — कोर्ट जाने से पहले तैयारी।" },
  { icon: "📱", en: "Mobile Ready", hi: "मोबाइल पर भी चले", desc_en: "Works on Android like an app — install from Chrome, no app store needed.", desc_hi: "Android पर app की तरह चलता है — Chrome से install करो, कोई app store नहीं।" },
  { icon: "☁️", en: "Cloud Backup", hi: "क्लाउड बैकअप", desc_en: "All data saved securely in the cloud — accessible from any device, anywhere.", desc_hi: "सारा डेटा cloud में सुरक्षित — किसी भी डिवाइस से, कहीं से भी।" },
  { icon: "🔐", en: "Google Login", hi: "गूगल लॉगिन", desc_en: "One click login with Google — no password to remember, no registration form.", desc_hi: "Google से एक क्लिक में login — कोई पासवर्ड नहीं, कोई फॉर्म नहीं।" },
];

const courts = [
  "District Court · जिला अदालत",
  "Sessions Court · सत्र न्यायालय",
  "High Court · उच्च न्यायालय",
  "Supreme Court · सर्वोच्च न्यायालय",
  "Consumer Forum · उपभोक्ता फोरम",
  "Family Court · परिवार न्यायालय",
  "Labour Court · श्रम न्यायालय",
  "Revenue Court · राजस्व न्यायालय",
  "RERA", "NCLT", "NGT", "Debt Recovery Tribunal",
  "Magistrate Court", "Civil Court",
];

const compare = [
  { label: "Court Date Reminder · पेशी reminder", them: false, us: true },
  { label: "Fee Ledger · फीस बही", them: false, us: true },
  { label: "Cloud Backup · क्लाउड बैकअप", them: false, us: true },
  { label: "Mobile PWA · मोबाइल ऐप", them: false, us: true },
  { label: "Case Diary · केस डायरी", them: true, us: true },
  { label: "Document Attach · दस्तावेज़", them: true, us: true },
  { label: "Client Management · मुवक्किल", them: true, us: true },
];

const steps = [
  {
    step: "01", icon: "💻",
    en: "Download & Install",
    hi: "डाउनलोड और इंस्टॉल करें",
    en_detail: "Click the 'Download for Windows' button. A .exe file will download. Double-click it to install. If Windows shows a warning, click 'More info' → 'Run anyway'.",
    hi_detail: "नीचे दिए 'Windows पर Download करें' बटन पर क्लिक करें। एक .exe फाइल डाउनलोड होगी। उस पर double-click करें। अगर Windows कोई warning दिखाए तो 'More info' → 'Run anyway' पर क्लिक करें।",
  },
  {
    step: "02", icon: "🔐",
    en: "Login with Google",
    hi: "Google से Login करें",
    en_detail: "Open the app. Click 'Sign in with Google'. Select your Gmail account. That's it — you are now logged in. No password, no registration.",
    hi_detail: "ऐप खोलें। 'Google से Login करो' पर क्लिक करें। अपना Gmail account चुनें। बस — आप logged in हो गए। कोई password नहीं, कोई registration नहीं।",
  },
  {
    step: "03", icon: "👤",
    en: "Add Your First Client",
    hi: "पहला मुवक्किल जोड़ें",
    en_detail: "Go to 'New Client' from the sidebar. Fill in the client's name and mobile number. Save. Your client is now in the system.",
    hi_detail: "Sidebar से 'New Client' पर जाएं। मुवक्किल का नाम और मोबाइल नंबर भरें। Save करें। आपका मुवक्किल system में आ गया।",
  },
  {
    step: "04", icon: "⚖️",
    en: "Add a Case",
    hi: "केस दर्ज करें",
    en_detail: "Go to 'New Case'. Select the client, enter the case title, court name, case number, and next hearing date. Save the case.",
    hi_detail: "'New Case' पर जाएं। मुवक्किल चुनें, केस का नाम, अदालत, केस नंबर और अगली पेशी की तारीख भरें। Case Save करें।",
  },
  {
    step: "05", icon: "📋",
    en: "After Every Hearing",
    hi: "हर पेशी के बाद",
    en_detail: "Open the case. Click 'Add Hearing'. Write what happened in court and enter the next date. This takes 30 seconds. Your diary is always up to date.",
    hi_detail: "केस खोलें। 'Add Hearing' पर क्लिक करें। अदालत में क्या हुआ लिखें और अगली तारीख डालें। यह 30 सेकंड का काम है। आपकी डायरी हमेशा अप-टु-डेट रहेगी।",
  },
  {
    step: "06", icon: "💰",
    en: "Record Fees",
    hi: "फीस दर्ज करें",
    en_detail: "In the case, go to Fee Ledger. Enter how much you charged and how much was paid. The pending amount is calculated automatically.",
    hi_detail: "केस में Fee Ledger में जाएं। कितना charge किया और कितना मिला — भरें। बकाया रकम खुद calculate हो जाएगी।",
  },
  {
    step: "07", icon: "📅",
    en: "Check Today's Cause List",
    hi: "आज की कॉज़ लिस्ट देखें",
    en_detail: "Every morning open the dashboard. Today's Cause List shows all cases with hearings today. No need to search — everything is visible at once.",
    hi_detail: "हर सुबह dashboard खोलें। Today's Cause List में आज की सभी पेशियाँ दिखेंगी। खोजने की जरूरत नहीं — सब एक नज़र में।",
  },
];

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@500;600;700;800&display=swap');
        .hf { font-family: 'Playfair Display', Georgia, serif; }
        .bf { font-family: 'DM Sans', sans-serif; font-weight: 600; }
        .gold { color: #c9a84c; }
        .gold-bg { background: #c9a84c; }
        .card { background: rgba(255,255,255,0.04); border: 1px solid rgba(201,168,76,0.15); transition: all 0.25s ease; }
        .card:hover { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.4); transform: translateY(-2px); }
        .stamp { background: linear-gradient(135deg, #1a1206 0%, #2d1f08 100%); border: 2px solid #c9a84c; box-shadow: 0 0 0 4px rgba(201,168,76,0.1); }
        .hero-bg { background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.12) 0%, transparent 70%), #0a0a0f; }
        .divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent); }
        .pill { background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); color: #c9a84c; }
        .cta-primary { background: linear-gradient(135deg, #c9a84c 0%, #e8c96a 50%, #c9a84c 100%); color: #0a0a0f; font-weight: 800; transition: all 0.2s; box-shadow: 0 4px 24px rgba(201,168,76,0.3); }
        .cta-primary:hover { box-shadow: 0 6px 32px rgba(201,168,76,0.5); transform: translateY(-1px); }
        .cta-secondary { background: transparent; border: 2px solid rgba(201,168,76,0.5); color: #c9a84c; font-weight: 700; transition: all 0.2s; }
        .cta-secondary:hover { background: rgba(201,168,76,0.1); border-color: #c9a84c; }
        .step-box { background: rgba(255,255,255,0.03); border: 1px solid rgba(201,168,76,0.2); border-radius: 16px; padding: 24px; }
        .hi-text { color: #e0d4b0; font-size: 0.9em; }
      `}</style>

      {/* Top Bar */}
      <div className="bf bg-[#c9a84c] py-2 px-4 text-center text-sm font-bold text-[#0a0a0f] flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">·</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp Support</a>
      </div>

      {/* Nav */}
      <nav className="bf sticky top-0 z-50 border-b border-white/5 px-4 py-3" style={{ background: "rgba(10,10,15,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-black text-white text-lg hf">🖥️ <span className="gold">Nishant</span> Software</span>
          <a href="/" className="bf text-sm text-gray-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition">← All Products</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }} />
        <div className="max-w-4xl mx-auto">
          <div className="pill inline-block bf text-sm px-5 py-2 rounded-full mb-6">
            ⚖️ For Every Lawyer in India — District Court to Supreme Court
          </div>
          <h1 className="hf text-5xl md:text-7xl font-black mb-2 leading-tight">
            Nishant<br /><span className="gold">Legal Pro</span>
          </h1>
          <p className="bf text-base text-[#c9a84c] mb-2">भारत के हर वकील के लिए — जिला अदालत से सर्वोच्च न्यायालय तक</p>
          <p className="bf text-xl md:text-2xl text-gray-200 mb-2 max-w-2xl mx-auto">
            Cases · Clients · Hearings · Fee Ledger — All in One Place
          </p>
          <p className="bf text-base text-[#e0d4b0] mb-10 max-w-2xl mx-auto">
            केस · मुवक्किल · पेशी · फीस — सब एक जगह
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href={WINDOWS_EXE_URL} className="cta-primary bf inline-block text-lg px-10 py-4 rounded-2xl shadow-xl">
              💻 Download for Windows (.exe)
            </a>
            <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer" className="cta-secondary bf inline-block text-lg px-10 py-4 rounded-2xl">
              🌐 Open in Browser / Mobile
            </a>
          </div>
          <p className="bf text-sm text-gray-500">7-day free trial · No credit card · No commitment<br /><span className="hi-text">7 दिन मुफ्त · कोई card नहीं · कोई commitment नहीं</span></p>
        </div>
      </section>

      <div className="divider" />

      {/* Pain Points */}
      <section className="py-14 px-4 bg-[#0d0d12]">
        <div className="max-w-4xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl text-center mb-2 font-black">Are These Your Problems?</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-10">क्या ये आपकी परेशानियाँ हैं?</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "😰", en: "Missed a hearing date?", hi: "पेशी की तारीख भूल गए?", fix_en: "Get email reminder before every hearing automatically.", fix_hi: "हर पेशी से पहले खुद email reminder आएगा।" },
              { icon: "📞", en: "Client calling again and again?", hi: "मुवक्किल बार-बार फोन करता है?", fix_en: "Client can check case status online anytime.", fix_hi: "मुवक्किल खुद online केस की स्थिति देख सकता है।" },
              { icon: "💸", en: "Fee records are a mess?", hi: "फीस का हिसाब गड़बड़ है?", fix_en: "Every client's dues visible at a glance.", fix_hi: "हर मुवक्किल का बकाया एक नज़र में।" },
              { icon: "📁", en: "Drowning in paper files?", hi: "कागज़ों के ढेर में डूबे हो?", fix_en: "FIR, petition, order — store everything digitally.", fix_hi: "FIR, अर्जी, आदेश — सब digital एक जगह।" },
            ].map((p, i) => (
              <div key={i} className="card rounded-2xl p-6 flex gap-4 items-start">
                <div className="text-3xl">{p.icon}</div>
                <div>
                  <div className="bf text-red-400 font-bold text-base mb-0.5">{p.en}</div>
                  <div className="bf text-[#e0d4b0] text-sm mb-2">{p.hi}</div>
                  <div className="bf text-green-400 text-sm">✓ {p.fix_en}</div>
                  <div className="bf text-[#c9a84c] text-xs mt-0.5">{p.fix_hi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Features */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="max-w-5xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl text-center mb-2 font-black">Everything a Lawyer Needs</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-10">एक वकील को जो चाहिए — सब यहाँ है</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card rounded-2xl p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <div className="bf font-black text-white text-lg mb-0.5">{f.en}</div>
                <div className="bf text-[#c9a84c] text-sm font-bold mb-2">{f.hi}</div>
                <div className="bf text-gray-300 text-sm leading-relaxed">{f.desc_en}</div>
                <div className="bf text-[#e0d4b0] text-xs leading-relaxed mt-1">{f.desc_hi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Courts */}
      <section className="py-12 px-4 bg-[#0d0d12]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="hf text-3xl font-black mb-2">Works for Every Court</h2>
          <p className="bf text-[#e0d4b0] text-base mb-8">हर अदालत के लिए</p>
          <div className="flex flex-wrap justify-center gap-3">
            {courts.map((c, i) => (
              <span key={i} className="bf text-sm px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ccc" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How to Use — Step by Step */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl text-center mb-2 font-black">How to Use Legal Pro</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-2">Legal Pro कैसे इस्तेमाल करें</p>
          <p className="bf text-center text-gray-500 text-sm mb-12">Step-by-step guide for every lawyer · हर वकील के लिए आसान गाइड</p>

          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div key={s.step} className="step-box flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#c9a84c] text-[#0a0a0f] font-black text-base flex items-center justify-center hf">{s.step}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{s.icon}</span>
                    <span className="bf font-black text-white text-lg">{s.en}</span>
                  </div>
                  <div className="bf text-[#c9a84c] font-bold text-sm mb-3">{s.hi}</div>
                  <div className="bf text-gray-200 text-sm leading-relaxed mb-1">{s.en_detail}</div>
                  <div className="bf text-[#e0d4b0] text-xs leading-relaxed">{s.hi_detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Comparison */}
      <section className="py-14 px-4 bg-[#0d0d12]">
        <div className="max-w-3xl mx-auto">
          <h2 className="hf text-3xl text-center mb-2 font-black">Legal Pro vs Old Software</h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-8">पुराने software से तुलना</p>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <table className="w-full bf">
              <thead>
                <tr style={{ background: "rgba(201,168,76,0.08)" }}>
                  <th className="text-left px-5 py-4 text-gray-200 font-bold text-base">Feature</th>
                  <th className="text-center px-5 py-4 text-gray-400 font-bold text-base">Old Software</th>
                  <th className="text-center px-5 py-4 gold font-black text-base">Legal Pro</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
                    <td className="px-5 py-4 text-gray-200 text-sm bf font-semibold">{row.label}</td>
                    <td className="px-5 py-4 text-center text-xl">{row.them ? "✅" : "❌"}</td>
                    <td className="px-5 py-4 text-center text-xl">✅</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Pricing */}
      <section className="py-16 px-4 bg-[#0a0a0f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="hf text-3xl text-center mb-2 font-black">Pricing · <span className="gold">मूल्य</span></h2>
          <p className="bf text-center text-[#e0d4b0] text-base mb-10">One year subscription · एक साल की सदस्यता</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stamp rounded-2xl p-7 text-center relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-bg text-[#0a0a0f] text-sm font-black px-5 py-1 rounded-full bf">New Account · नया Account</div>
              <h3 className="hf text-xl mb-3 text-gray-300 mt-2">First Time · पहली बार</h3>
              <div className="hf text-5xl font-black gold mb-1">₹4,999</div>
              <p className="bf text-gray-400 text-sm mb-1">One time · एक बार</p>
              <p className="bf text-[#e0d4b0] text-xs mb-6">1 year included · 1 साल included · 7-day free trial</p>
              <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer" className="cta-primary bf block w-full py-3 rounded-xl text-center text-base mb-3">
                Start Free Trial · मुफ्त शुरू करो
              </a>
              <a href="https://www.web-developer-kp.com/payment?software=legal" className="cta-secondary bf block w-full py-3 rounded-xl text-center text-base">
                Buy Now — ₹4,999
              </a>
            </div>
            <div className="card rounded-2xl p-7 text-center">
              <h3 className="hf text-xl mb-3 text-gray-300 mt-2">Renewal · नवीनीकरण</h3>
              <div className="hf text-5xl font-black gold mb-1">₹1,999</div>
              <p className="bf text-gray-400 text-sm mb-1">Per year · प्रति वर्ष</p>
              <p className="bf text-[#e0d4b0] text-xs mb-6">All features · Cloud backup · सभी सुविधाएं</p>
              <a href="https://www.web-developer-kp.com/payment?software=legal&plan=renewal" className="cta-secondary bf block w-full py-3 rounded-xl text-center text-base">
                Renew Now — ₹1,999
              </a>
            </div>
          </div>
          <div className="mt-8 card rounded-2xl p-5 text-center bf">
            <p className="text-gray-300 text-base">
              💬 <strong className="text-white">Need a demo?</strong> WhatsApp us, we will show you live. ·
              <strong className="text-[#e0d4b0]"> Demo चाहिए?</strong> WhatsApp करो, live दिखाएंगे।
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="gold ml-1 hover:underline">wa.me/919996865069</a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-bg py-20 px-4 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h2 className="hf text-3xl md:text-4xl mb-2 font-black">No more paper. Go Digital.</h2>
          <p className="bf text-[#e0d4b0] text-xl mb-2">अब और कागज़ नहीं। <span className="gold">Digital चलो।</span></p>
          <p className="bf text-gray-500 text-sm mb-8">7-day free trial · No card required · कोई card नहीं · 7 दिन मुफ्त</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={LEGAL_PWA_URL} target="_blank" rel="noopener noreferrer" className="cta-primary bf inline-block text-lg px-12 py-4 rounded-xl">
              ⚖️ Start Free Trial · मुफ्त शुरू करो
            </a>
            <a href={WINDOWS_EXE_URL} className="cta-secondary bf inline-block text-lg px-12 py-4 rounded-xl">
              💻 Download Windows App
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bf py-6 px-4 text-center text-gray-500 text-sm border-t border-white/5 bg-[#0a0a0f]">
        © 2026 Nishant Softwares · Made for India · भारत के लिए बना ·
        <a href="tel:+919996865069" className="gold hover:underline ml-1">9996865069</a>
      </footer>
    </main>
  );
}