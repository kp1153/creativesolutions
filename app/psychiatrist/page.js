import Link from "next/link";

export const metadata = {
  title:
    "Psychiatrist Pro - मानसिक स्वास्थ्य क्लिनिक प्रबंधन | Nishant Softwares",
  description:
    "Psychiatrist Pro - Complete clinic management system for psychiatrists",
};
const PSYCHIATRIST_PWA_URL = "https://psychiatrists.nishantsoftwares.in";
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
              href={PSYCHIATRIST_PWA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-green-400 transition active:scale-95"
            >
              📱 Mobile पर Install करें (Android)
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
            <li>✅ Doctor + Receptionist + Pharmacy + Psychologist Login</li>
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
                title: "Psychologist Module",
                desc: "PIN से login। मरीज का psychological assessment करें — mood, history, symptoms। Doctor को forward करें।",
              },
              {
                icon: "💊",
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
                भुगतान करें। भुगतान के बाद आपका account{" "}
                <strong>तुरंत activate</strong> हो जाएगा। Activate होने के बाद
                दोबारा login करें — Doctor Dashboard खुल जाएगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                ⚙️ Step 3 — Settings (पहली बार जरूरी)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor Dashboard में <strong>Settings ⚙️</strong> में जाएँ।{" "}
                <strong>
                  Clinic का नाम, Doctor का नाम, qualification, पता और phone
                  number
                </strong>{" "}
                भरें — ये सब prescription letterhead पर print होगा।{" "}
                <strong>Clinic logo</strong> upload करें।{" "}
                <strong>⚠ जरूरी — Staff PINs:</strong> नए clinic में सभी PIN{" "}
                <strong>खाली</strong> होते हैं। जब तक PIN set नहीं करते, staff
                login नहीं कर पाएगा। <strong>Receptionist PIN</strong> set करें
                (4 अंक)। <strong>Pharmacy PIN</strong> set करें (4 अंक)। अगर
                आपके clinic में <strong>Psychologist</strong> है तो{" "}
                <strong>Psychologist toggle ON</strong> करें और{" "}
                <strong>Psychologist PIN</strong> set करें।{" "}
                <strong>PIN कब बदलें?</strong> जब कोई staff छोड़कर जाए।{" "}
                <strong>Save</strong> करें। <strong>⚠ Clinic ID:</strong>{" "}
                Settings में आपकी <strong>Clinic ID</strong> दिखती है — यह
                number अपने staff को बताएँ। Staff login के समय यही ID डालेगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                📋 Step 4 — Receptionist कैसे काम करे
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Receptionist अपने मोबाइल या कंप्यूटर पर{" "}
                <strong>
                  psychiatrists.nishantsoftwares.in/receptionist/login
                </strong>{" "}
                खोले — या home page पर <strong>Receptionist</strong> button
                दबाए। <strong>Clinic ID</strong> डाले (Doctor से लें) और{" "}
                <strong>4-digit PIN</strong> डाले। Login होने पर मरीज का{" "}
                <strong>मोबाइल नंबर</strong> डालें — अगर पहले आ चुका है तो नाम
                अपने आप भर जाएगा। नए मरीज के लिए{" "}
                <strong>नाम और chief complaint</strong> भरें।{" "}
                <strong>&quot;Register Patient&quot;</strong> दबाएँ — मरीज queue
                में चला जाएगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🧠 Step 4b — Psychologist कैसे काम करे
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>
                  यह step सिर्फ उन clinics के लिए है जहाँ Psychologist है।
                </strong>{" "}
                Receptionist के register करने के बाद मरीज सीधे Psychologist के
                पास जाएगा। Psychologist{" "}
                <strong>
                  psychiatrists.nishantsoftwares.in/psychologist/login
                </strong>{" "}
                खोले। <strong>Clinic ID</strong> और{" "}
                <strong>Psychologist PIN</strong> डाले। Queue में मरीज का नाम
                दिखेगा — tap करें। <strong>Mood score</strong> (1-10),{" "}
                <strong>History</strong>, <strong>Symptoms</strong> और{" "}
                <strong>Notes</strong> भरें।{" "}
                <strong>&quot;Send to Doctor →&quot;</strong> दबाएँ — मरीज
                Doctor की queue में चला जाएगा।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                👨‍⚕️ Step 5 — Doctor पर्चा कैसे लिखे
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Doctor Dashboard में आज की queue से मरीज पर tap करें। अगर
                Psychologist का assessment है तो वो ऊपर{" "}
                <strong>purple card</strong> में दिखेगा।{" "}
                <strong>Chief Complaints</strong> और <strong>Diagnosis</strong>{" "}
                (ICD-10 code जैसे F20, F32) भरें। जरूरत हो तो{" "}
                <strong>MSE</strong> भरें। <strong>Add Medicines</strong>{" "}
                section में दवाएँ multi-select करें।{" "}
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
                खोले। <strong>Clinic ID</strong> और Doctor द्वारा दिया गया{" "}
                <strong>4-digit PIN</strong> डाले।{" "}
                <strong>Pharmacy Queue</strong> में Doctor द्वारा लिखी
                prescriptions दिखेंगी। मरीज का नाम click करें — पूरा पर्चा
                दिखेगा। दवाएँ निकालें, brand confirm करें,{" "}
                <strong>&quot;Print Bill&quot;</strong> दबाएँ।
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🛒 Step 7 — Walk-in Sale (बिना प्रिस्क्रिप्शन)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                कोई customer बिना doctor visit के सीधे दवा लेने आए तो Pharmacy
                dashboard से <strong>&quot;Walk-in Sale&quot;</strong> खोलें।
                Patient details optional हैं।{" "}
                <strong>&quot;Tap to select salt...&quot;</strong> पर tap करें —
                modal खुलेगा। Search box में दवा type करें या 142+ salts की list
                से चुनें। Salt select होते ही brand auto-fill हो जाएगा (अगर पहले
                से mapped है)। Quantity और price डालें — Amount अपने आप
                calculate होगा। <strong>&quot;+ Add Medicine&quot;</strong> से
                और दवाएँ जोड़ें। <strong>&quot;🖨️ Print Bill&quot;</strong>{" "}
                दबाएँ।
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
                App mobile की home screen पर install हो जाएगा।
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
                payment. Your account will be activated within 24 hours. After
                activation, login again — the Doctor Dashboard will open.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                ⚙️ Step 3 — Settings (Required on First Login)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Open <strong>Settings ⚙️</strong> from the Doctor Dashboard.
                Fill in{" "}
                <strong>
                  Clinic Name, Doctor Name, Qualification, Address and Phone
                </strong>{" "}
                — all appear on the prescription letterhead. Upload your{" "}
                <strong>Clinic Logo</strong>.{" "}
                <strong>⚠ Important — Staff PINs:</strong> New clinics have all
                PINs <strong>empty</strong> by default. Your staff cannot log in
                until you set the PINs. Set a <strong>Receptionist PIN</strong>{" "}
                (4 digits). Set a <strong>Pharmacy PIN</strong> (4 digits). If
                your clinic has a <strong>Psychologist</strong>, toggle{" "}
                <strong>Psychologist ON</strong> and set the{" "}
                <strong>Psychologist PIN</strong>. Change PINs whenever a staff
                member leaves. Click <strong>Save</strong>.{" "}
                <strong>⚠ Clinic ID:</strong> Your <strong>Clinic ID</strong> is
                shown in Settings — share this number with your staff. They will
                enter it at login along with their PIN.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                📋 Step 4 — Receptionist Workflow
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The receptionist opens{" "}
                <strong>
                  psychiatrists.nishantsoftwares.in/receptionist/login
                </strong>{" "}
                — or taps <strong>Receptionist</strong> on the home page. Enter
                the <strong>Clinic ID</strong> (given by doctor) and the{" "}
                <strong>4-digit PIN</strong>. After login, enter the
                patient&apos;s <strong>mobile number</strong> — if the patient
                has visited before, the name auto-fills. For a new patient,
                enter <strong>name and chief complaint</strong>. Tap{" "}
                <strong>&quot;Register Patient&quot;</strong> — the patient is
                added to the queue.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🧠 Step 4b — Psychologist Workflow
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Only for clinics that have a Psychologist.</strong>{" "}
                After the receptionist registers the patient, they go to the
                Psychologist first. The psychologist opens{" "}
                <strong>
                  psychiatrists.nishantsoftwares.in/psychologist/login
                </strong>
                . Enter the <strong>Clinic ID</strong> and{" "}
                <strong>Psychologist PIN</strong>. The queue shows waiting
                patients — tap a name. Fill in <strong>Mood score</strong>{" "}
                (1–10), <strong>History</strong>, <strong>Symptoms</strong> and{" "}
                <strong>Notes</strong>. Tap{" "}
                <strong>&quot;Send to Doctor →&quot;</strong> — the patient
                moves to the Doctor&apos;s queue.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                👨‍⚕️ Step 5 — Doctor Writing a Prescription
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tap a patient from today&apos;s queue. If a Psychologist
                assessment exists, it appears in a <strong>purple card</strong>{" "}
                at the top. Fill in <strong>Chief Complaints</strong> and{" "}
                <strong>Diagnosis</strong> (ICD-10 codes like F20, F32).
                Optionally fill <strong>MSE</strong>. In{" "}
                <strong>Add Medicines</strong>, multi-select drugs. Set{" "}
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
                . Enter the <strong>Clinic ID</strong> and the{" "}
                <strong>4-digit PIN</strong>. The{" "}
                <strong>Pharmacy Queue</strong> shows prescriptions written by
                the doctor. Click on a patient&apos;s name to see the full
                prescription. Pick medicines, confirm brands, click{" "}
                <strong>&quot;Print Bill&quot;</strong>.
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
                opens. Search or pick from 142+ salts. Brand auto-fills if
                previously mapped. Enter quantity and price. Add more medicines
                with <strong>&quot;+ Add Medicine&quot;</strong> and click{" "}
                <strong>&quot;🖨️ Print Bill&quot;</strong>.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                💾 Step 8 — Brand Mapping (one-time setup)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every salt has different brands (Olanzapine → Oleanz, Olzap).
                After selecting a salt, type the brand name and click{" "}
                <strong>&quot;💾 Save as my brand&quot;</strong>. Next time the
                same salt is selected, brand and price{" "}
                <strong>auto-fill</strong>. For a drug not in the list, use{" "}
                <strong>&quot;+ Add New Salt&quot;</strong> to add it
                permanently.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">
              <h3 className="text-xl font-bold text-indigo-700 mb-3">
                🔔 Step 9 — Follow-up Reminders
              </h3>
              <p className="text-gray-700 leading-relaxed">
                When the doctor sets a <strong>Follow-up Date</strong>, the
                system automatically sends an <strong>SMS reminder</strong> to
                the patient on that date every night at 9 PM — no action
                required.
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
                The app installs on your home screen like a native app.
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
          <a
            href={PSYCHIATRIST_PWA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-green-400 transition active:scale-95 border border-green-400"
          >
            📱 Mobile पर Install
          </a>
        </div>
      </section>
    </main>
  );
}
