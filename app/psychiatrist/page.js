import Link from "next/link";

export const metadata = {
  title:
    "Psychiatrist Pro - मानसिक स्वास्थ्य क्लिनिक प्रबंधन | Nishant Softwares",
  description:
    "Psychiatrist Pro - Complete clinic management system for psychiatrists",
};

const EXE_URL =
  "https://pub-7dcd195985a44c1c81fd0ef44e78fa01.r2.dev/Psychiatrist%20Pro%20Setup%201.0.0.exe";

export default function PsychiatristPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🧠</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Psychiatrist Pro
          </h1>
          <p className="text-indigo-200 text-lg md:text-xl mb-2">
            मानसिक स्वास्थ्य क्लिनिक प्रबंधन सॉफ्टवेयर
          </p>
          <p className="text-indigo-200 text-base mb-8">
            Complete Clinic Management System for Psychiatrists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EXE_URL}
              download
              className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-50 transition active:scale-95 shadow-lg"
            >
              ⬇ Download for Windows
            </a>
            <a
              href="https://psychiatrists.nishantsoftwares.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-400 transition active:scale-95 border border-indigo-400"
            >
              🌐 Open Web App
            </a>
          </div>
          <p className="text-indigo-300 text-sm mt-4">
            एकमुश्त भुगतान ₹4,999 — कोई मासिक शुल्क नहीं
          </p>
        </div>
      </section>

      {/* Windows Warning */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-yellow-800 text-sm text-center font-semibold">
            ⚠ Windows Smart App Control: यदि install करते समय warning आए तो
            &quot;More info&quot; → &quot;Run anyway&quot; क्लिक करें। यह
            software पूरी तरह सुरक्षित है।
          </p>
          <p className="text-yellow-700 text-xs text-center mt-1">
            ⚠ Windows Smart App Control Warning: Click &quot;More info&quot; →
            &quot;Run anyway&quot; if prompted. This software is completely
            safe.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg p-8 text-center border-2 border-indigo-200">
          <p className="text-gray-500 text-sm mb-1">
            एकमुश्त मूल्य / One-time Price
          </p>
          <p className="text-5xl font-bold text-indigo-700 mb-1">₹4,999</p>
          <p className="text-gray-400 text-sm mb-6">
            जीवनभर उपयोग / Lifetime Access
          </p>
          <ul className="text-left text-sm text-gray-600 flex flex-col gap-2 mb-6">
            <li>✅ असीमित मरीज / Unlimited Patients</li>
            <li>✅ असीमित पर्चे / Unlimited Prescriptions</li>
            <li>✅ Doctor + Receptionist + Pharmacy Login</li>
            <li>✅ Multi-select Medicine Picker (142+ दवाएँ)</li>
            <li>✅ Walk-in Sale & Brand Mapping</li>
            <li>✅ SMS Follow-up Reminders</li>
            <li>✅ Windows App + Web App + Mobile PWA</li>
            <li>✅ Free Updates</li>
          </ul>
          <Link
            href="/payment?product=psychiatrist-pro&amount=4999"
            className="block bg-indigo-600 text-white font-bold py-4 rounded-2xl text-lg hover:bg-indigo-700 transition active:scale-95"
          >
            अभी खरीदें / Buy Now
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            मुख्य विशेषताएँ / Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "👨‍⚕️",
                title: "Doctor Dashboard",
                desc: "Google Login से सुरक्षित। Multi-select picker से एक साथ कई दवाएँ, smart defaults के साथ।",
              },
              {
                icon: "📋",
                title: "Receptionist Module",
                desc: "PIN से login। मरीज का नाम और मोबाइल नंबर दर्ज करें — बस इतना काफी है।",
              },
              {
                icon: "💊",
                title: "Pharmacy Module",
                desc: "PIN से login। Doctor की prescriptions + Walk-in sale + Brand mapping, सब एक जगह।",
              },
              {
                icon: "🧠",
                title: "142+ Psychiatric Drugs",
                desc: "Latest और प्रचलित दवाएँ — Bipolar, Depression, Antipsychotics, Epilepsy, ADHD, PTSD, De-addiction सब।",
              },
              {
                icon: "🔔",
                title: "Follow-up Reminders",
                desc: "Follow-up date आने पर मरीज को SMS reminder automatically भेजा जाता है।",
              },
              {
                icon: "🖨️",
                title: "Print Prescription",
                desc: "Professional prescription print करें — doctor का नाम, दवाएँ, जाँच सब सहित।",
              },
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
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-8 text-center">
            📖 उपयोगकर्ता पुस्तिका (हिंदी)
          </h2>

          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔧 Step 1 — Software Install करें
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Download</strong> बटन पर क्लिक करके{" "}
                <strong>Psychiatrist Pro Setup 1.0.0.exe</strong> file download
                करें। File पर double-click करके install करें। यदि Windows Smart
                App Control की warning आए तो
                <strong> &quot;More info&quot;</strong> पर क्लिक करें, फिर{" "}
                <strong>&quot;Run anyway&quot;</strong> पर क्लिक करें।
                Installation पूरी होने के बाद Desktop पर{" "}
                <strong>Psychiatrist Pro</strong> का icon दिखेगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔐 Step 2 — Doctor Login (पहली बार)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Software खोलें। <strong>&quot;Sign in with Google&quot;</strong>{" "}
                बटन पर क्लिक करें और अपने Gmail account से login करें। पहली बार
                login करने पर account बन जाएगा लेकिन{" "}
                <strong>activate नहीं होगा</strong>। Account activate करने के
                लिए <strong>nishantsoftwares.in</strong> पर जाकर ₹4,999 का
                भुगतान करें। भुगतान के बाद आपका account 24 घंटे में activate हो
                जाएगा। Activate होने के बाद दोबारा login करें — Doctor Dashboard
                खुल जाएगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                ⚙️ Step 3 — Settings (पहली बार जरूरी)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor Dashboard में <strong>Settings</strong> में जाएँ।
                <strong>
                  Clinic का नाम, Doctor का नाम, qualification, पता और phone
                  number
                </strong>{" "}
                भरें — ये सब prescription letterhead पर print होगा।
                <strong>Clinic logo</strong> upload करें।
                <strong>⚠ जरूरी:</strong> नए clinic में तीनों PIN{" "}
                <strong>खाली</strong> होते हैं। जब तक आप PIN set नहीं करते, आपका
                staff login नहीं कर पाएगा।
                <strong>Receptionist PIN</strong> set करें (4 अंक) — यह PIN
                receptionist को मुंह से बताएँ, लिखकर न दें।
                <strong>Pharmacy PIN</strong> set करें (4 अंक) — यह PIN
                pharmacist को मुंह से बताएँ। अगर आपके क्लिनिक में{" "}
                <strong>Psychologist</strong> भी है तो{" "}
                <strong>Psychologist PIN</strong> भी set करें।
                <strong>PIN कब बदलें?</strong> जब कोई staff छोड़कर जाए, या आपको
                लगे PIN किसी और को पता चल गया है।
                 Save करें।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                📋 Step 4 — Receptionist कैसे काम करे
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Receptionist अपने मोबाइल या कंप्यूटर पर{" "}
                <strong>psychiatrists.nishantsoftwares.in/receptionist</strong>{" "}
                खोले। Doctor द्वारा दिया गया <strong>4-digit PIN</strong> डाले।
                Login होने पर <strong>&quot;+ New Patient&quot;</strong> बटन
                दबाए। मरीज का{" "}
                <strong>पूरा नाम, 10-digit मोबाइल नंबर, उम्र, लिंग</strong> भरे
                (पता optional)।
                <strong>&quot;Register &amp; Add to Queue&quot;</strong> दबाए —
                मरीज Doctor की queue में आ जाएगा। पहले से registered मरीज के लिए
                Search box में नाम/फोन डालकर{" "}
                <strong>&quot;Add to Today&apos;s Queue&quot;</strong> दबाए।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                👨‍⚕️ Step 5 — Doctor पर्चा कैसे लिखे
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor Dashboard में आज की queue से मरीज पर tap करें।
                <strong>Chief Complaints</strong> और <strong>Diagnosis</strong>{" "}
                (ICD-10 code जैसे F20, F32) भरें। जरूरत हो तो{" "}
                <strong>MSE</strong> (Mood, Affect, Insight) one-tap buttons से
                भरें।
                <strong>Tests/Investigations</strong> लिखें (CBC, LFT, TSH आदि)।
                <strong>Add Medicines</strong> section में search या condition
                tab (Bipolar, Depression, Insomnia etc.) से filter करें।
                <strong>🆕 Latest / 🔹 प्रचलित</strong> tabs से चुनें कि कौन सी
                पीढ़ी की दवाएँ दिखें। दवाओं पर tap करके{" "}
                <strong>multi-select</strong> करें (✓ tick आएगा)। नीचे{" "}
                <strong>&quot;Add X Selected →&quot;</strong> button दबाएँ —
                सारी दवाएँ smart defaults (timing, food, duration) के साथ
                prescription list में आ जाएँगी। जरूरत हो तो हर दवा की
                dose/timing बदलें।
                <strong>Follow-up Date</strong> set करें।{" "}
                <strong>&quot;Save&quot;</strong> या{" "}
                <strong>&quot;Save &amp; Print&quot;</strong> दबाएँ।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                💊 Step 6 — Pharmacy दवा कैसे दे
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Pharmacist{" "}
                <strong>
                  psychiatrists.nishantsoftwares.in/pharmacy/login
                </strong>{" "}
                खोले। Doctor द्वारा दिया गया <strong>4-digit PIN</strong> डाले।
                <strong>Pharmacy Queue</strong> में Doctor द्वारा लिखी
                prescriptions दिखेंगी। मरीज का नाम click करें — पूरा पर्चा
                दिखेगा। दवाएँ निकालें, brand confirm करें,{" "}
                <strong>&quot;Print Bill&quot;</strong> दबाएँ — bill letterhead
                के साथ print होगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🛒 Step 7 — Walk-in Sale (बिना प्रिस्क्रिप्शन)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                कोई customer बिना doctor visit के सीधे दवा लेने आए तो Pharmacy
                dashboard से <strong>&quot;Walk-in Sale&quot;</strong> खोलें।
                Patient details optional हैं।
                <strong>&quot;Tap to select salt...&quot;</strong> पर tap करें —
                modal खुलेगा। Search box में दवा type करें या 142+ salts की list
                से चुनें। Salt select होते ही brand auto-fill हो जाएगा (अगर पहले
                से mapped है)। Quantity और price डालें — Amount अपने आप
                calculate होगा।
                <strong>&quot;+ Add Medicine&quot;</strong> से और दवाएँ जोड़ें।{" "}
                <strong>&quot;🖨️ Print Bill&quot;</strong> दबाएँ।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                💾 Step 8 — Brand Mapping (एक-बार का setup)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                हर salt का brand अलग होता है (Olanzapine → Oleanz, Olzap)।
                Walk-in sale में salt select करने के बाद brand type करें, फिर
                brand field के ऊपर{" "}
                <strong>&quot;💾 Save as my brand&quot;</strong> link दबाएँ।
                अगली बार जब वही salt select करेंगे, brand और price{" "}
                <strong>auto-fill</strong> हो जाएँगे। अगर कोई नई दवा list में
                नहीं है तो modal में <strong>&quot;+ Add New Salt&quot;</strong>{" "}
                से उसे permanent list में add करें।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔔 Step 9 — Follow-up Reminder
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor जब पर्चे में <strong>Follow-up Date</strong> set करते
                हैं, तो उस date पर system automatically मरीज के मोबाइल नंबर पर{" "}
                <strong>SMS reminder</strong> भेज देता है। यह काम रात 9 बजे
                automatically होता है — Doctor को कुछ नहीं करना।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                📱 Step 10 — Mobile पर Install करें (PWA)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Mobile browser में{" "}
                <strong>psychiatrists.nishantsoftwares.in</strong> खोलें।
                Browser के menu में{" "}
                <strong>&quot;Add to Home Screen&quot;</strong> या{" "}
                <strong>&quot;Install App&quot;</strong> option पर click करें।
                App mobile की home screen पर install हो जाएगा। अब बिना browser
                खोले सीधे app की तरह use कर सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Manual English */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-8 text-center">
            📖 User Manual (English)
          </h2>

          <div className="flex flex-col gap-6">
            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔧 Step 1 — Install the Software
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Click the <strong>Download</strong> button to download{" "}
                <strong>Psychiatrist Pro Setup 1.0.0.exe</strong>. Double-click
                the file to install. If Windows Smart App Control shows a
                warning, click <strong>&quot;More info&quot;</strong> and then{" "}
                <strong>&quot;Run anyway&quot;</strong>. After installation, the{" "}
                <strong>Psychiatrist Pro</strong> icon will appear on your
                Desktop.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔐 Step 2 — Doctor Login (First Time)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Open the software. Click{" "}
                <strong>&quot;Sign in with Google&quot;</strong> and login with
                your Gmail account. On first login, your account will be created
                but <strong>not yet activated</strong>. To activate, visit{" "}
                <strong>nishantsoftwares.in</strong> and complete the ₹4,999
                payment. Your account will be activated within 24 hours of
                payment. After activation, login again — the Doctor Dashboard
                will open.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                ⚙️ Step 3 — Settings (Required on First Login)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Open Settings from the Doctor Dashboard. Fill in{" "}
                <strong>
                  Clinic Name, Doctor Name, Qualification, Address and Phone
                </strong>{" "}
                — all appear on the prescription letterhead. Upload your{" "}
                <strong>Clinic Logo</strong>.{" "}
                <strong>⚠ Important:</strong> New clinics have all PINs{" "}
                <strong>empty</strong> by default. Your staff cannot log in
                until you set the PINs. Set a{" "}
                <strong>Receptionist PIN</strong> (4 digits) and share it
                verbally with your receptionist — do not write it down. Set a{" "}
                <strong>Pharmacy PIN</strong> (4 digits) and share it verbally
                with your pharmacist. If your clinic also has a{" "}
                <strong>Psychologist</strong>, set the{" "}
                <strong>Psychologist PIN</strong> too.{" "}
                <strong>When to change PINs?</strong> When a staff member
                leaves, or if you suspect someone else knows the PIN. Click
                Save.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                📋 Step 4 — Receptionist Workflow
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The receptionist opens{" "}
                <strong>psychiatrists.nishantsoftwares.in/receptionist</strong>{" "}
                on their mobile or computer. Enter the{" "}
                <strong>4-digit PIN</strong> provided by the doctor. Click{" "}
                <strong>&quot;+ New Patient&quot;</strong> and fill in the
                patient&apos;s{" "}
                <strong>
                  full name, 10-digit mobile number, age and gender
                </strong>{" "}
                (address optional). Click{" "}
                <strong>&quot;Register &amp; Add to Queue&quot;</strong> — the
                patient appears in the doctor&apos;s queue. For an existing
                patient, search by name/phone and click{" "}
                <strong>&quot;Add to Today&apos;s Queue&quot;</strong>.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                👨‍⚕️ Step 5 — Doctor Writing a Prescription
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tap a patient from today&apos;s queue. Fill in{" "}
                <strong>Chief Complaints</strong> and <strong>Diagnosis</strong>{" "}
                (ICD-10 codes like F20, F32). Optionally fill{" "}
                <strong>MSE</strong> (Mood, Affect, Insight) using one-tap
                buttons. Enter <strong>Tests/Investigations</strong>. In{" "}
                <strong>Add Medicines</strong>, search or filter by condition
                (Bipolar, Depression, Insomnia etc.). Use{" "}
                <strong>🆕 Latest / 🔹 Common</strong> tabs to pick drug
                generation. Tap drugs to <strong>multi-select</strong> (✓ tick
                appears). Press <strong>&quot;Add X Selected →&quot;</strong> —
                all drugs go to the prescription list with smart defaults
                (timing, food, duration). Adjust dose/timing if needed. Set{" "}
                <strong>Follow-up Date</strong>. Click{" "}
                <strong>&quot;Save&quot;</strong> or{" "}
                <strong>&quot;Save &amp; Print&quot;</strong>.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                💊 Step 6 — Pharmacy Dispensing Medicines
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The pharmacist opens{" "}
                <strong>
                  psychiatrists.nishantsoftwares.in/pharmacy/login
                </strong>
                . Enter the <strong>4-digit PIN</strong> provided by the doctor.
                The <strong>Pharmacy Queue</strong> shows prescriptions written
                by the doctor. Click on a patient&apos;s name to see the full
                prescription. Pick the medicines, confirm brands, click{" "}
                <strong>&quot;Print Bill&quot;</strong> — the bill prints with
                letterhead.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🛒 Step 7 — Walk-in Sale (without prescription)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If a customer walks in without a doctor visit, open{" "}
                <strong>&quot;Walk-in Sale&quot;</strong> from the pharmacy
                dashboard. Patient details are optional. Tap{" "}
                <strong>&quot;Tap to select salt...&quot;</strong> — a modal
                opens. Search or pick from the list of 142+ salts. On selection,
                the brand auto-fills (if previously mapped). Enter quantity and
                price — amount calculates automatically. Add more medicines with{" "}
                <strong>&quot;+ Add Medicine&quot;</strong> and click{" "}
                <strong>&quot;🖨️ Print Bill&quot;</strong>.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                💾 Step 8 — Brand Mapping (one-time setup)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every salt has different brands (Olanzapine → Oleanz, Olzap).
                After selecting a salt in walk-in sale, type the brand name,
                then click <strong>&quot;💾 Save as my brand&quot;</strong>{" "}
                above the brand field. Next time the same salt is selected,
                brand and price <strong>auto-fill</strong>. For a drug not in
                the list, use <strong>&quot;+ Add New Salt&quot;</strong> in the
                modal to add it permanently.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔔 Step 9 — Follow-up Reminders
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When the doctor sets a <strong>Follow-up Date</strong> in a
                prescription, the system automatically sends an{" "}
                <strong>SMS reminder</strong> to the patient&apos;s mobile
                number on that date. This happens automatically every night at 9
                PM — no action required from the doctor.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                📱 Step 10 — Install on Mobile (PWA)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Open <strong>psychiatrists.nishantsoftwares.in</strong> in your
                mobile browser. Tap{" "}
                <strong>&quot;Add to Home Screen&quot;</strong> or{" "}
                <strong>&quot;Install App&quot;</strong> from the browser menu.
                The app will be installed on your home screen. You can now use
                it like a native app without opening the browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 px-4 bg-indigo-700 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">
          अभी शुरू करें / Get Started Today
        </h2>
        <p className="text-indigo-200 mb-6">
          एकमुश्त ₹4,999 — जीवनभर उपयोग करें
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/payment?product=psychiatrist-pro&amount=4999"
            className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-50 transition active:scale-95"
          >
            अभी खरीदें / Buy Now — ₹4,999
          </Link>
          <a
            href={EXE_URL}
            download
            className="bg-indigo-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-indigo-400 transition active:scale-95 border border-indigo-400"
          >
            ⬇ Download Windows App
          </a>
        </div>
      </section>
    </main>
  );
}