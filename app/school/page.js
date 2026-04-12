"use client";
import { useEffect } from "react";

const SCHOOL_EXE_URL = "https://pub-ba88bef35aa84924b5e8bc26eb733d33.r2.dev/EduSaaS%20School%20Setup%200.1.0.exe";
const SCHOOL_PWA_URL = "https://school.nishantsoftwares.in";

const featuresHi = [
  { icon: "🎓", title: "छात्र प्रबंधन", desc: "हर छात्र का पूरा विवरण — नाम, कक्षा, अनुभाग, क्रमांक, अभिभावक का नाम और फोन। प्रवेश की तारीख भी। सब एक जगह।" },
  { icon: "📥", title: "सामूहिक प्रविष्टि", desc: "एक्सेल फाइल से सैकड़ों छात्रों की जानकारी एक बार में डालो — घंटों की मेहनत बचती है।" },
  { icon: "📋", title: "प्रवेश ट्रैकिंग", desc: "इस महीने कितने नए प्रवेश हुए, कितनी फीस बाकी है — एक नज़र में सब दिखे।" },
  { icon: "💰", title: "फीस प्रबंधन", desc: "किसने फीस दी, किसकी बाकी है, नियत तारीख कब है, बकायेदारों की सूची — सब एक जगह।" },
  { icon: "🧾", title: "फीस रसीद", desc: "भुगतान के बाद रसीद अपने आप तैयार हो जाती है। स्कूल का नाम, रसीद नंबर, छात्र का विवरण — प्रिंट करो।" },
  { icon: "✅", title: "दैनिक हाजिरी", desc: "कक्षावार और तारीखवार हाजिरी लो। आज कितने उपस्थित, कितने अनुपस्थित — तुरंत दिखे।" },
  { icon: "💬", title: "व्हाट्सऐप सूचना", desc: "अनुपस्थित बच्चों के अभिभावकों को एक क्लिक में हिंदी संदेश भेजो — संदेश अपने आप लिखा जाता है।" },
  { icon: "📝", title: "परीक्षा और परिणाम", desc: "परीक्षा निर्धारित करो, अंक डालो — श्रेणी, उत्तीर्ण-अनुत्तीर्ण, कक्षा औसत और अव्वल छात्र अपने आप निकलते हैं।" },
  { icon: "📄", title: "प्रगति पत्र", desc: "सभी विषयों के अंक, श्रेणी और टिप्पणी के साथ प्रगति पत्र अपने आप तैयार — प्रिंट के लिए तैयार।" },
  { icon: "📣", title: "सूचना पटल", desc: "स्कूल की सूचनाएं श्रेणी और प्राथमिकता के साथ पोस्ट करो — जरूरी सूचना लाल बैज के साथ दिखे।" },
  { icon: "🗓️", title: "समय-सारणी", desc: "कक्षावार और दिनवार समय-सारणी बनाओ — कौन से काल में कौन सा विषय और कौन से शिक्षक।" },
  { icon: "📊", title: "रिपोर्ट", desc: "कक्षावार छात्र संख्या, फीस संग्रह और बकाया, उपस्थिति प्रतिशत, परीक्षा औसत — एक पन्ने पर।" },
  { icon: "👨‍🏫", title: "शिक्षक प्रबंधन", desc: "शिक्षकों की जानकारी — विषय, योग्यता, फोन, नियुक्ति तारीख — सब दर्ज करो।" },
  { icon: "👨‍👩‍👧", title: "अभिभावक पोर्टल", desc: "अभिभावक घर बैठे अपने बच्चे की फीस, हाजिरी और परीक्षा परिणाम देख सकते हैं।" },
  { icon: "🎒", title: "छात्र पोर्टल", desc: "छात्र खुद अपना परिणाम, उपस्थिति प्रतिशत और स्कूल की सूचनाएं देख सकते हैं।" },
  { icon: "⚙️", title: "स्कूल सेटिंग", desc: "स्कूल का नाम, प्रधानाचार्य का नाम, संबद्धता संख्या — एक बार भरो, सभी रसीदों पर अपने आप छपे।" },
  { icon: "📱", title: "मोबाइल और कंप्यूटर", desc: "एक ही सॉफ्टवेयर — मोबाइल पर भी चलाओ, विंडोज़ कंप्यूटर पर भी। अलग से कोई खर्च नहीं।" },
];

const manualHi = [
  { step: "१", icon: "🔐", title: "पहली बार लॉगिन करें", desc: "स्कूल का जीमेल खाता खोलें और 'गूगल से लॉगिन करें' पर क्लिक करें। कोई पासवर्ड बनाने की जरूरत नहीं। सात दिन का मुफ्त परीक्षण अपने आप शुरू हो जाएगा।" },
  { step: "२", icon: "⚙️", title: "स्कूल की जानकारी भरें", desc: "सेटिंग में जाएं — स्कूल का नाम, पता, प्रधानाचार्य का नाम और संबद्धता संख्या डालें। यह जानकारी सभी रसीदों और प्रगति पत्रों पर अपने आप छपेगी।" },
  { step: "३", icon: "🎓", title: "छात्रों को जोड़ें", desc: "छात्र → नया छात्र जोड़ें — नाम, कक्षा, अनुभाग, अभिभावक का फोन नंबर डालें। या एक्सेल फाइल से सैकड़ों छात्रों को एक साथ आयात करें।" },
  { step: "४", icon: "👨‍🏫", title: "शिक्षकों को जोड़ें", desc: "शिक्षक → नया शिक्षक जोड़ें — नाम, विषय, योग्यता और फोन नंबर डालें। समय-सारणी बनाते समय इन्हीं शिक्षकों के नाम दिखेंगे।" },
  { step: "५", icon: "💰", title: "फीस दर्ज करें", desc: "फीस → नई फीस एंट्री — छात्र चुनें, राशि, नियत तारीख डालें। भुगतान मिलने पर 'भुगतान मिला' चुनें — रसीद तुरंत तैयार हो जाएगी।" },
  { step: "६", icon: "✅", title: "रोज हाजिरी लें", desc: "हाजिरी → आज की हाजिरी — कक्षा चुनें, हर छात्र को उपस्थित या अनुपस्थित चिह्नित करें। अनुपस्थित छात्रों के अभिभावकों को व्हाट्सऐप संदेश का लिंक अपने आप तैयार हो जाएगा।" },
  { step: "७", icon: "📝", title: "परीक्षा निर्धारित करें और अंक डालें", desc: "परीक्षा → नई परीक्षा जोड़ें — नाम, कक्षा, विषय, तारीख, अधिकतम अंक डालें। परीक्षा के बाद परिणाम → अंक डालें — श्रेणी और उत्तीर्ण-अनुत्तीर्ण अपने आप निकलेगा।" },
  { step: "८", icon: "📄", title: "प्रगति पत्र प्रिंट करें", desc: "परीक्षा → परिणाम → प्रगति पत्र — किसी भी छात्र का प्रगति पत्र एक क्लिक में तैयार। सभी विषयों के अंक, श्रेणी और टिप्पणी के साथ — प्रिंट करें या सहेजें।" },
  { step: "९", icon: "📣", title: "सूचना पोस्ट करें", desc: "सूचना पटल → नई सूचना — शीर्षक, विवरण, श्रेणी और प्राथमिकता चुनें। अभिभावक और छात्र अपने पोर्टल में यह सूचना देख सकते हैं।" },
  { step: "१०", icon: "👨‍👩‍👧", title: "अभिभावक पोर्टल सक्रिय करें", desc: "छात्र प्रोफाइल में जाएं → अभिभावक → पासवर्ड सेट करें। अभिभावक school.nishantsoftwares.in/parent/login पर जाकर लॉगिन करें और अपने बच्चे की सारी जानकारी देखें।" },
];

const featuresEn = [
  { icon: "🎓", title: "Student Management", desc: "Full student profile — name, class, section, roll number, parent name & phone. Admission date too. All in one place." },
  { icon: "📥", title: "Bulk Import", desc: "Import hundreds of students at once from an Excel file — saves hours of manual entry." },
  { icon: "📋", title: "Admissions Tracking", desc: "See new admissions this month, total enrolled & pending fee count at a glance." },
  { icon: "💰", title: "Fee Management", desc: "Who paid, who has not, due dates, defaulter list — all in one place." },
  { icon: "🧾", title: "Fee Receipt", desc: "Receipt auto-generates after payment. School name, receipt number, student details — ready to print." },
  { icon: "✅", title: "Daily Attendance", desc: "Mark attendance class & date-wise. See today's present, absent & unmarked count instantly." },
  { icon: "💬", title: "WhatsApp Alert", desc: "One-click WhatsApp message to parents of absent students — message auto-written in Hindi." },
  { icon: "📝", title: "Exams & Results", desc: "Schedule exams, enter marks — grade, pass/fail, class average & topper calculated automatically." },
  { icon: "📄", title: "Report Cards", desc: "Auto-generate print-ready report cards with all subjects, marks, grade & remarks." },
  { icon: "📣", title: "Notice Board", desc: "Post notices with category & priority — urgent notices shown with red badge." },
  { icon: "🗓️", title: "Timetable", desc: "Create class timetable — period-wise subject & teacher for every day of the week." },
  { icon: "📊", title: "Reports", desc: "Class-wise: student count, fees collected vs pending, attendance % & exam average — one page." },
  { icon: "👨‍🏫", title: "Teacher Management", desc: "Manage teacher profiles with subject, qualification, phone & joining date." },
  { icon: "👨‍👩‍👧", title: "Parent Portal", desc: "Parents view their child's fees, attendance & results from home — anytime." },
  { icon: "🎒", title: "Student Portal", desc: "Students view their own results, attendance % & school notices." },
  { icon: "⚙️", title: "School Settings", desc: "Set school name, principal name & affiliation number — appears on all receipts automatically." },
  { icon: "📱", title: "Mobile + Desktop", desc: "One purchase — works as Android app & Windows desktop. No extra cost for either." },
];

const manualEn = [
  { step: "1", icon: "🔐", title: "First Login", desc: "Click Sign in with Google using your school Gmail account. No password to create or remember. Your 7 day free trial starts automatically." },
  { step: "2", icon: "⚙️", title: "Setup School Details", desc: "Go to Settings — enter school name, address, principal name and affiliation number. These details appear automatically on all fee receipts and report cards." },
  { step: "3", icon: "🎓", title: "Add Students", desc: "Go to Students, then Add Student — enter name, class, section and parent phone number. Or import hundreds of students at once from an Excel file." },
  { step: "4", icon: "👨‍🏫", title: "Add Teachers", desc: "Go to Teachers, then Add Teacher — enter name, subject, qualification and phone number. These names appear when creating the class timetable." },
  { step: "5", icon: "💰", title: "Record Fee Payments", desc: "Go to Fees, then New Entry — select student, enter amount and due date. When payment is received, mark it as paid — receipt is generated instantly and ready to print." },
  { step: "6", icon: "✅", title: "Mark Daily Attendance", desc: "Go to Attendance, then Today — select class, mark each student present or absent. WhatsApp message links for absent students are generated automatically." },
  { step: "7", icon: "📝", title: "Schedule Exams and Enter Marks", desc: "Go to Exams, then Add Exam — enter name, class, subject, date and maximum marks. After the exam go to Results, then Enter Marks — grade and pass or fail are calculated automatically." },
  { step: "8", icon: "📄", title: "Print Report Cards", desc: "Go to Exams, then Results, then Report Card — one click and the report card is ready to print with all subjects, marks, grade and remarks." },
  { step: "9", icon: "📣", title: "Post Notices", desc: "Go to Notice Board, then New Notice — enter title, content, select category and priority. Parents and students can see this notice in their portal immediately." },
  { step: "10", icon: "👨‍👩‍👧", title: "Activate Parent Portal", desc: "Go to Student Profile, then Parent, then Set Password. The parent can then login at school.nishantsoftwares.in/parent/login to view their child's fees, attendance and exam results anytime." },
];

const comingSoon = [
  { icon: "💬", label: "व्हाट्सऐप बिजनेस — सीधे संदेश भेजो, लिंक नहीं" },
  { icon: "📚", label: "पुस्तक और वर्दी मॉड्यूल" },
  { icon: "💳", label: "ऑनलाइन फीस संग्रह" },
  { icon: "🚌", label: "परिवहन और मार्ग प्रबंधन" },
];

export default function SchoolPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const emailFromUrl = params?.get("email") || "";

  const pay = async () => {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 4999, plan: "new", software: "school" }),
    });
    const order = await res.json();
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 4999 * 100,
      currency: "INR",
      name: "निशांत सॉफ्टवेयर्स",
      description: "स्कूल प्रो — १ साल",
      order_id: order.id,
      prefill: { email: emailFromUrl },
      handler: async (response) => {
        await fetch("/api/razorpay/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            email: emailFromUrl,
            name: "",
            phone: "",
            plan: "new",
            software: "school",
          }),
        });
        alert("भुगतान सफल! सॉफ्टवेयर सक्रिय हो गया।");
      },
    });
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      <div className="bg-amber-500 py-2 px-4 text-center text-sm font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline text-amber-300">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सऐप पर बात करें</a>
      </div>

      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-lg">🖥️ <span className="text-amber-400">Nishant</span> Software</a>
          <a href="/" className="text-xs text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी Products</a>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 text-white py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">🏫 निशांत स्कूल प्रो</h1>
          <p className="text-lg font-bold text-white mb-2">विद्यालय प्रबंधन सॉफ्टवेयर</p>
          <p className="text-sm mb-2 text-indigo-100">छात्र · फीस · हाजिरी · परीक्षा · सूचना पटल · समय-सारणी · अभिभावक पोर्टल</p>
          <p className="text-xs mb-8 text-indigo-200/80">१७ सुविधाएं · सीबीएसई निजी विद्यालयों के लिए · मोबाइल और कंप्यूटर दोनों पर</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={SCHOOL_EXE_URL} className="inline-block bg-white text-indigo-700 font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-indigo-50 transition">
              🖥️ विंडोज़ डाउनलोड (.exe)
            </a>
            <div className="flex flex-col items-center gap-1">
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white font-bold text-base px-7 py-3 rounded-2xl shadow-lg hover:bg-green-600 transition">
                📱 Android पर Install करें
              </a>
              <p className="text-xs text-indigo-200/70">Chrome ⋮ → Add to Home Screen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">क्या-क्या मिलेगा?</h2>
          <p className="text-center text-gray-400 text-sm mb-8">१७ सुविधाएं — एक सॉफ्टवेयर में, एक कीमत पर</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresHi.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-bold text-sm mb-1">{f.title}</div>
                  <div className="text-gray-300 text-xs leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">📖 उपयोगकर्ता पुस्तिका</h2>
          <p className="text-center text-gray-500 text-sm mb-8">पहले दिन से शुरू करें — आसान भाषा में</p>
          <div className="space-y-4">
            {manualHi.map((h) => (
              <div key={h.step} className="bg-white border border-indigo-200 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 bg-indigo-600 text-white font-extrabold text-base rounded-full flex items-center justify-center shrink-0">{h.step}</div>
                <div>
                  <div className="text-lg font-extrabold text-gray-800 mb-1">{h.icon} {h.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4 bg-yellow-50 border-y-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ स्थापना के समय यह संदेश आ सकता है — घबराएं नहीं</p>
          <p className="text-base text-gray-600 mb-3">विंडोज़ ११ में <strong>Smart App Control</strong> नाम की एक सुरक्षा होती है। यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-base text-gray-600 space-y-1">
            <li>१. Start menu में <strong>Windows Security</strong> खोलें</li>
            <li>२. <strong>App &amp; browser control</strong> पर क्लिक करें</li>
            <li>३. <strong>Smart App Control</strong> को <strong>बंद (Off)</strong> करें</li>
            <li>४. .exe फाइल दोबारा चलाएं</li>
            <li>५. स्थापना के बाद वापस चालू कर सकते हैं</li>
          </ol>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">कीमत — Pricing</h2>
          <p className="text-center text-gray-500 text-sm mb-8">कोई छिपा हुआ शुल्क नहीं · एक बार भुगतान, पूरा साल उपयोग</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-indigo-500 p-6 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">नया खाता</div>
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹4,999</div>
              <p className="text-gray-400 text-sm mb-3">एक बार — १ साल शामिल</p>
              <ul className="text-xs text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ सभी १७ सुविधाएं खुली</li>
                <li>✅ व्हाट्सऐप अनुपस्थिति सूचना</li>
                <li>✅ अभिभावक और छात्र पोर्टल</li>
                <li>✅ फीस रसीद प्रिंट</li>
                <li>✅ विंडोज़ और एंड्रॉयड दोनों</li>
                <li>✅ व्हाट्सऐप पर निःशुल्क सहयोग</li>
              </ul>
              <a href={SCHOOL_PWA_URL} target="_blank" rel="noopener noreferrer" className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-sm mb-3">
                🆓 ७ दिन मुफ्त आज़माएं
              </a>
              <button onClick={pay} className="block w-full bg-gray-800 text-white font-bold py-2.5 rounded-xl hover:bg-gray-700 transition text-sm">
                {"💳 अभी खरीदें — ₹4,999"}
              </button>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-6 text-center shadow-sm">
              <h3 className="text-lg font-bold mb-1 text-gray-700 mt-2">नवीनीकरण — Renewal</h3>
              <div className="text-4xl font-extrabold text-indigo-600 mb-1">₹2,500</div>
              <p className="text-gray-400 text-sm mb-3">प्रति वर्ष — Per year</p>
              <ul className="text-xs text-gray-600 text-left space-y-1.5 mb-5">
                <li>✅ सभी सुविधाएं जारी</li>
                <li>✅ नई सुविधाएं अपने आप मिलेंगी</li>
                <li>✅ डेटा सुरक्षित रहेगा</li>
                <li>✅ व्हाट्सऐप सहयोग प्राथमिकता से</li>
              </ul>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="block w-full bg-indigo-600 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 transition text-sm">
                💬 व्हाट्सऐप करें
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-center text-gray-700 mb-1">🚀 जल्द आ रहा है</h2>
          <p className="text-center text-gray-400 text-xs mb-5">अभी निर्माण में — पुराने उपयोगकर्ताओं को निःशुल्क अपडेट मिलेगा</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {comingSoon.map((c, i) => (
              <div key={i} className="bg-white border border-dashed border-gray-300 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-lg shrink-0">{c.icon}</span>
                <span className="text-sm text-gray-500 flex-1">{c.label}</span>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium shrink-0">जल्द</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-indigo-400">What's Included?</h2>
          <p className="text-center text-gray-400 text-sm mb-8">17 features — one software, one price</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuresEn.map((f, i) => (
              <div key={i} className="bg-gray-800 border border-indigo-500/20 rounded-xl px-4 py-4 flex gap-3 items-start">
                <span className="text-xl shrink-0 mt-0.5">{f.icon}</span>
                <div>
                  <div className="text-indigo-300 font-bold text-sm mb-1">{f.title}</div>
                  <div className="text-gray-300 text-xs leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1 text-gray-800">📖 User Manual</h2>
          <p className="text-center text-gray-500 text-sm mb-8">Get started from day one — step by step</p>
          <div className="space-y-4">
            {manualEn.map((h) => (
              <div key={h.step} className="bg-white border border-indigo-200 rounded-xl p-5 flex gap-4 items-start shadow-sm">
                <div className="w-10 h-10 bg-indigo-600 text-white font-extrabold text-base rounded-full flex items-center justify-center shrink-0">{h.step}</div>
                <div>
                  <div className="text-lg font-extrabold text-gray-800 mb-1">{h.icon} {h.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-700 py-12 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">आज ही शुरू करें — ७ दिन मुफ्त</h2>
          <p className="text-indigo-200 mb-6 text-sm">कोई कार्ड नहीं · कोई प्रतिबद्धता नहीं · व्हाट्सऐप पर सीधे डेवलपर से बात</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 text-sm font-bold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ prasad.kamta@gmail.com</a>
            <span className="hidden sm:inline text-indigo-400">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 WhatsApp</a>
          </div>
        </div>
      </section>

    </main>
  );
}