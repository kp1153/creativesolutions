import Link from 'next/link';

export const metadata = {
  title: 'Psychiatrist Pro - मानसिक स्वास्थ्य क्लिनिक प्रबंधन | Nishant Softwares',
  description: 'Psychiatrist Pro - Complete clinic management system for psychiatrists',
};

const EXE_URL = 'https://pub-7dcd195985a44c1c81fd0ef44e78fa01.r2.dev/Psychiatrist%20Pro%20Setup%201.0.0.exe';

export default function PsychiatristPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🧠</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Psychiatrist Pro</h1>
          <p className="text-indigo-200 text-lg md:text-xl mb-2">मानसिक स्वास्थ्य क्लिनिक प्रबंधन सॉफ्टवेयर</p>
          <p className="text-indigo-200 text-base mb-8">Complete Clinic Management System for Psychiatrists</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EXE_URL} download
              className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-50 transition active:scale-95 shadow-lg">
              ⬇ Download for Windows
            </a>
            <a href="https://psychiatrists.nishantsoftwares.in"
              target="_blank" rel="noopener noreferrer"
              className="bg-indigo-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-400 transition active:scale-95 border border-indigo-400">
              🌐 Open Web App
            </a>
          </div>
          <p className="text-indigo-300 text-sm mt-4">एकमुश्त भुगतान ₹4,999 — कोई मासिक शुल्क नहीं</p>
        </div>
      </section>

      {/* Windows Warning */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-800 text-sm text-center font-semibold">
            ⚠ Windows Smart App Control: यदि install करते समय warning आए तो "More info" → "Run anyway" क्लिक करें। यह software पूरी तरह सुरक्षित है।
          </p>
          <p className="text-yellow-700 text-xs text-center mt-1">
            ⚠ Windows Smart App Control Warning: Click "More info" → "Run anyway" if prompted. This software is completely safe.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg p-8 text-center border-2 border-indigo-200">
          <p className="text-gray-500 text-sm mb-1">एकमुश्त मूल्य / One-time Price</p>
          <p className="text-5xl font-bold text-indigo-700 mb-1">₹4,999</p>
          <p className="text-gray-400 text-sm mb-6">जीवनभर उपयोग / Lifetime Access</p>
          <ul className="text-left text-sm text-gray-600 flex flex-col gap-2 mb-6">
            <li>✅ असीमित मरीज / Unlimited Patients</li>
            <li>✅ असीमित पर्चे / Unlimited Prescriptions</li>
            <li>✅ Doctor + Receptionist + Pharmacy Login</li>
            <li>✅ SMS Follow-up Reminders</li>
            <li>✅ Windows App + Web App + Mobile PWA</li>
            <li>✅ Free Updates</li>
          </ul>
          <Link href="/payment?product=psychiatrist-pro&amount=4999"
            className="block bg-indigo-600 text-white font-bold py-4 rounded-2xl text-lg hover:bg-indigo-700 transition active:scale-95">
            अभी खरीदें / Buy Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">मुख्य विशेषताएँ / Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '👨‍⚕️', title: 'Doctor Dashboard', desc: 'Google Login से सुरक्षित। पर्चा लिखें, जाँच लिखें, दवाएँ लिखें, follow-up date set करें।' },
              { icon: '📋', title: 'Receptionist Module', desc: 'PIN से login। मरीज का नाम और मोबाइल नंबर दर्ज करें — बस इतना काफी है।' },
              { icon: '💊', title: 'Pharmacy Module', desc: 'PIN से login। Doctor द्वारा लिखी दवाएँ देखें और dispense करें।' },
              { icon: '📱', title: 'Mobile PWA', desc: 'Mobile पर install होता है। बिना internet भी basic features काम करते हैं।' },
              { icon: '🔔', title: 'Follow-up Reminders', desc: 'Follow-up date आने पर मरीज को SMS reminder automatically भेजा जाता है।' },
              { icon: '🖨️', title: 'Print Prescription', desc: 'Professional prescription print करें — doctor का नाम, दवाएँ, जाँच सब सहित।' },
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-5 text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Manual Hindi */}
      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-8 text-center">📖 उपयोगकर्ता पुस्तिका (हिंदी)</h2>

          <div className="flex flex-col gap-6">

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔧 Step 1 — Software Install करें</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Download</strong> बटन पर क्लिक करके <strong>Psychiatrist Pro Setup 1.0.0.exe</strong> file download करें।
                File पर double-click करके install करें। यदि Windows Smart App Control की warning आए तो
                <strong> "More info"</strong> पर क्लिक करें, फिर <strong>"Run anyway"</strong> पर क्लिक करें।
                Installation पूरी होने के बाद Desktop पर <strong>Psychiatrist Pro</strong> का icon दिखेगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔐 Step 2 — Doctor Login (पहली बार)</h3>
              <p className="text-gray-700 leading-relaxed">
                Software खोलें। <strong>"Sign in with Google"</strong> बटन पर क्लिक करें और अपने Gmail account से login करें।
                पहली बार login करने पर account बन जाएगा लेकिन <strong>activate नहीं होगा</strong>।
                Account activate करने के लिए <strong>nishantsoftwares.in</strong> पर जाकर ₹4,999 का भुगतान करें।
                भुगतान के बाद आपका account 24 घंटे में activate हो जाएगा।
                Activate होने के बाद दोबारा login करें — Doctor Dashboard खुल जाएगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">⚙️ Step 3 — Settings (पहली बार जरूरी)</h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor Dashboard में नीचे <strong>Settings</strong> icon पर क्लिक करें।
                यहाँ आपको <strong>Clinic ID</strong> दिखेगा — यह नंबर अपने Receptionist और Pharmacist को दें।
                <strong>Receptionist PIN</strong> set करें (4 अंक) — यह PIN Receptionist को बताएँ।
                <strong>Pharmacy PIN</strong> set करें (4 अंक) — यह PIN Pharmacist को बताएँ।
                <strong>Clinic Name</strong> भरें। Save करें।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📋 Step 4 — Receptionist कैसे काम करे</h3>
              <p className="text-gray-700 leading-relaxed">
                Receptionist अपने मोबाइल या कंप्यूटर पर <strong>psychiatrists.nishantsoftwares.in</strong> खोले।
                <strong>"Receptionist"</strong> बटन पर क्लिक करे। <strong>Clinic ID</strong> और <strong>PIN</strong> डाले।
                Login होने पर <strong>"New Patient Entry"</strong> screen खुलेगी।
                मरीज का <strong>नाम</strong> और <strong>10 अंकों का मोबाइल नंबर</strong> भरे।
                चाहे तो मुख्य शिकायत (complaints) भी लिख सकते हैं।
                <strong>"Register Patient"</strong> बटन दबाएँ — Token number generate होगा और Doctor की queue में entry चली जाएगी।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">👨‍⚕️ Step 5 — Doctor पर्चा कैसे लिखे</h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor Dashboard में <strong>Patient Queue</strong> दिखेगी।
                किसी भी मरीज के नाम पर क्लिक करें।
                <strong>Tests/Investigations</strong> लिखें (जैसे CBC, Blood Sugar आदि)।
                <strong>Medicines</strong> section में <strong>"+ Add"</strong> बटन दबाकर दवाएँ जोड़ें —
                दवा का नाम, dose, timing (Morning/Afternoon/Evening/Night) और duration select करें।
                <strong>Doctor Notes</strong> में follow-up instructions लिखें।
                <strong>Follow-up Date</strong> set करें — इस date पर मरीज को SMS reminder जाएगा।
                <strong>"Save"</strong> बटन दबाएँ — पर्चा Pharmacy queue में चला जाएगा।
                <strong>"Save & Print"</strong> दबाने पर पर्चा print भी होगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">💊 Step 6 — Pharmacy दवा कैसे दे</h3>
              <p className="text-gray-700 leading-relaxed">
                Pharmacist अपने मोबाइल या कंप्यूटर पर <strong>psychiatrists.nishantsoftwares.in</strong> खोले।
                <strong>"Pharmacy"</strong> बटन पर क्लिक करे। Clinic ID और PIN डाले।
                <strong>Pharmacy Queue</strong> में Doctor द्वारा complete किए गए पर्चे दिखेंगे।
                मरीज का नाम click करें — पूरा पर्चा दिखेगा।
                हर दवा पर click करके <strong>tick</strong> करें जैसे-जैसे दी जाए।
                सब दवाएँ देने के बाद <strong>"Mark as Dispensed"</strong> बटन दबाएँ।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔔 Step 7 — Follow-up Reminder</h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor जब पर्चे में <strong>Follow-up Date</strong> set करते हैं, तो उस date पर
                system automatically मरीज के मोबाइल नंबर पर <strong>SMS reminder</strong> भेज देता है।
                यह काम रात 9 बजे automatically होता है — Doctor को कुछ नहीं करना।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📱 Step 8 — Mobile पर Install करें (PWA)</h3>
              <p className="text-gray-700 leading-relaxed">
                Mobile browser में <strong>psychiatrists.nishantsoftwares.in</strong> खोलें।
                Browser के menu में <strong>"Add to Home Screen"</strong> या <strong>"Install App"</strong> option पर click करें।
                App mobile की home screen पर install हो जाएगा।
                अब बिना browser खोले सीधे app की तरह use कर सकते हैं।
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* User Manual English */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-8 text-center">📖 User Manual (English)</h2>

          <div className="flex flex-col gap-6">

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔧 Step 1 — Install the Software</h3>
              <p className="text-gray-700 leading-relaxed">
                Click the <strong>Download</strong> button to download <strong>Psychiatrist Pro Setup 1.0.0.exe</strong>.
                Double-click the file to install. If Windows Smart App Control shows a warning,
                click <strong>"More info"</strong> and then <strong>"Run anyway"</strong>.
                After installation, the <strong>Psychiatrist Pro</strong> icon will appear on your Desktop.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔐 Step 2 — Doctor Login (First Time)</h3>
              <p className="text-gray-700 leading-relaxed">
                Open the software. Click <strong>"Sign in with Google"</strong> and login with your Gmail account.
                On first login, your account will be created but <strong>not yet activated</strong>.
                To activate, visit <strong>nishantsoftwares.in</strong> and complete the ₹4,999 payment.
                Your account will be activated within 24 hours of payment.
                After activation, login again — the Doctor Dashboard will open.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">⚙️ Step 3 — Settings (Required on First Login)</h3>
              <p className="text-gray-700 leading-relaxed">
                In the Doctor Dashboard, click the <strong>Settings</strong> icon at the bottom.
                Your <strong>Clinic ID</strong> will be displayed — share this number with your Receptionist and Pharmacist.
                Set a <strong>Receptionist PIN</strong> (4 digits) and share it with your receptionist.
                Set a <strong>Pharmacy PIN</strong> (4 digits) and share it with your pharmacist.
                Enter your <strong>Clinic Name</strong> and click Save.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📋 Step 4 — Receptionist Workflow</h3>
              <p className="text-gray-700 leading-relaxed">
                The receptionist opens <strong>psychiatrists.nishantsoftwares.in</strong> on their mobile or computer.
                Click <strong>"Receptionist"</strong>, enter the <strong>Clinic ID</strong> and <strong>PIN</strong>.
                The <strong>New Patient Entry</strong> screen will open.
                Enter the patient's <strong>name</strong> and <strong>10-digit mobile number</strong>.
                Optionally add chief complaints.
                Click <strong>"Register Patient"</strong> — a token number will be generated and the entry will appear in the Doctor's queue.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">👨‍⚕️ Step 5 — Doctor Writing a Prescription</h3>
              <p className="text-gray-700 leading-relaxed">
                The Doctor Dashboard shows the <strong>Patient Queue</strong>.
                Click on any patient's name to open their prescription.
                Enter <strong>Tests/Investigations</strong> (e.g. CBC, Blood Sugar).
                In the <strong>Medicines</strong> section, click <strong>"+ Add"</strong> to add medicines —
                enter medicine name, dose, timing (Morning/Afternoon/Evening/Night) and duration.
                Write follow-up instructions in <strong>Doctor Notes</strong>.
                Set a <strong>Follow-up Date</strong> — an SMS reminder will be sent to the patient on that date.
                Click <strong>"Save"</strong> — the prescription moves to the Pharmacy queue.
                Click <strong>"Save & Print"</strong> to also print the prescription.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">💊 Step 6 — Pharmacy Dispensing Medicines</h3>
              <p className="text-gray-700 leading-relaxed">
                The pharmacist opens <strong>psychiatrists.nishantsoftwares.in</strong> on their device.
                Click <strong>"Pharmacy"</strong>, enter the Clinic ID and PIN.
                The <strong>Pharmacy Queue</strong> shows prescriptions completed by the doctor.
                Click on a patient's name to see the full prescription.
                Tap each medicine to <strong>tick it off</strong> as it is dispensed.
                After dispensing all medicines, click <strong>"Mark as Dispensed"</strong>.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">🔔 Step 7 — Follow-up Reminders</h3>
              <p className="text-gray-700 leading-relaxed">
                When the doctor sets a <strong>Follow-up Date</strong> in a prescription,
                the system automatically sends an <strong>SMS reminder</strong> to the patient's mobile number on that date.
                This happens automatically every night at 9 PM — no action required from the doctor.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">📱 Step 8 — Install on Mobile (PWA)</h3>
              <p className="text-gray-700 leading-relaxed">
                Open <strong>psychiatrists.nishantsoftwares.in</strong> in your mobile browser.
                Tap <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong> from the browser menu.
                The app will be installed on your home screen.
                You can now use it like a native app without opening the browser.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 px-4 bg-indigo-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">अभी शुरू करें / Get Started Today</h2>
        <p className="text-indigo-200 mb-6">एकमुश्त ₹4,999 — जीवनभर उपयोग करें</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/payment?product=psychiatrist-pro&amount=4999"
            className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-50 transition active:scale-95">
            अभी खरीदें / Buy Now — ₹4,999
          </Link>
          <a href={EXE_URL} download
            className="bg-indigo-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-400 transition active:scale-95 border border-indigo-400">
            ⬇ Download Windows App
          </a>
        </div>
      </section>

    </main>
  );
}