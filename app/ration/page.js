"use client";

const RATION_PWA_URL = "#";

const features = [
  { hi: "Stock Management — आटा, चावल, दाल, तेल — हर item का stock", en: "Track stock of every item — wheat, rice, pulses, oil, sugar" },
  { hi: "Daily Sales — कितना बिका, किसको बिका", en: "Record daily sales — who bought what and how much" },
  { hi: "Customer Ledger — उधारी का पूरा हिसाब", en: "Complete ledger for each customer with credit balance" },
  { hi: "Monthly Report — महीने का पूरा हिसाब", en: "Monthly sales & purchase summary report" },
  { hi: "Purchase Entry — माल कब आया, कितना आया, कहाँ से", en: "Record purchases — date, quantity, supplier & rate" },
  { hi: "Low Stock Alert — जब stock कम हो तो alert", en: "Get alert when any item's stock goes below minimum level" },
  { hi: "Supplier Management — किस supplier से क्या लिया", en: "Track purchases supplier-wise with outstanding amounts" },
  { hi: "PWA — mobile पर app की तरह चलता है", en: "Works as an app on Android mobile — no Play Store needed" },
  { hi: "7-Day Free Trial — कोई card नहीं", en: "7-day free trial — no credit card required" },
  { hi: "Google Login — secure, कोई password याद नहीं करना", en: "Secure Google login — no separate password needed" },
];

const howTo = [
  { step: "01", hi: "Google से login करें", en: "Login with Google account", icon: "🔐" },
  { step: "02", hi: "Items add करो — आटा, चावल, दाल etc.", en: "Add your items with opening stock & minimum level", icon: "📦" },
  { step: "03", hi: "Daily sales और purchase entry करो", en: "Enter daily sales to customers & purchases from suppliers", icon: "📋" },
  { step: "04", hi: "Reports देखो — stock, ledger, monthly", en: "View stock status, customer ledger & monthly reports", icon: "📊" },
];

export default function RationPage() {
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
      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">🆓 7 दिन बिल्कुल मुफ्त — कोई card नहीं</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">🏪 Nishant Ration Pro<br />राशन दुकान प्रबंधन</h1>
          <p className="text-lg mb-1 font-semibold text-orange-100">राशन की दुकान के लिए बना — stock, बिक्री, उधारी और monthly report सब एक जगह।</p>
          <p className="text-base mb-8 text-orange-200/70">Built for ration shops — stock management, daily sales, credit tracking & monthly reports all in one place.</p>
          <div className="flex flex-col items-center gap-3">
            <a href={RATION_PWA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-block bg-white text-orange-700 font-bold text-lg px-8 py-3 rounded-2xl shadow-lg hover:bg-orange-50 transition">
              📱 Try Free — Open App
            </a>
            <p className="text-xs text-orange-200/70">👉 Chrome menu ⋮ → Add to Home Screen → Install</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-orange-400">खासियत / Features</h2>
          <p className="text-center text-gray-400 text-sm mb-8">राशन, किराना, grocery दुकानों के लिए</p>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-orange-500/20 rounded-xl px-5 py-4">
                <div className="text-orange-400 font-semibold text-sm mb-1">✦ {f.hi}</div>
                <div className="text-gray-400 text-xs">{f.en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 bg-orange-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">कैसे उपयोग करें</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {howTo.map((h) => (
              <div key={h.step} className="bg-white border border-orange-200 rounded-xl p-4 text-center shadow-sm">
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
            <div className="rounded-2xl border-2 border-orange-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">New Account</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार / First Time</h3>
              <div className="text-4xl font-extrabold text-orange-500 mb-1">₹3,999</div>
              <p className="text-gray-400 text-sm mb-4">एक बार — 1 साल included</p>
              <a href="/payment?software=ration" className="block w-full bg-orange-500 text-white font-bold py-2 rounded-xl hover:bg-orange-400 transition">Start Free Trial</a>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">Renewal</h3>
              <div className="text-4xl font-extrabold text-orange-500 mb-1">₹1,499</div>
              <p className="text-gray-400 text-sm mb-4">प्रति वर्ष</p>
              <a href="/payment?software=ration" className="block w-full bg-orange-500 text-white font-bold py-2 rounded-xl hover:bg-orange-400 transition">Renew Now</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}