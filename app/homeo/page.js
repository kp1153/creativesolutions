"use client";
import { useEffect } from "react";

const HOMEO_PWA_URL = "https://homeopathy.nishantsoftwares.in";
const HOMEO_EXE_URL = "https://pub-b05b804e53a14a4db299e550b4b5538e.r2.dev/HomeoClinic%20Pro%20Setup%200.1.0.exe";

export default function HomeoPage() {
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
      body: JSON.stringify({ amount: 4999, plan: "new", software: "homeo" }),
    });
    const order = await res.json();
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 4999 * 100,
      currency: "INR",
      name: "निशांत सॉफ्टवेयर्स",
      description: "HomeoClinic Pro — 1 साल",
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
            software: "homeo",
          }),
        });
        alert("भुगतान सफल! सॉफ्टवेयर चालू हो गया।");
      },
    });
    rzp.open();
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Topbar */}
      <div className="bg-green-700 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
        <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
        <span className="hidden sm:inline">|</span>
        <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर्स</a>
          <a href="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition">← सभी उत्पाद</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-5 py-1.5 rounded-full mb-5 border border-white/30">
            🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            🌿 HomeoClinic Pro<br />
            <span className="text-green-200">होम्योपैथी क्लिनिक का डिजिटल सहायक</span>
          </h1>
          <p className="text-xl mb-2 font-semibold text-white/90">डॉक्टर पर्चा लिखें — काउंटर पर फौरन पहुँचे।</p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <a href={HOMEO_PWA_URL} target="_blank" rel="noopener noreferrer" className="bg-white text-green-800 font-extrabold text-xl px-10 py-4 rounded-2xl shadow-xl hover:bg-green-50 transition">
              📱 Android पर Install करें
            </a>
            <a href={HOMEO_EXE_URL} className="flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold text-lg px-8 py-3 rounded-2xl hover:bg-white/25 transition">
              🖥️ Windows के लिए डाउनलोड करें
            </a>
          </div>
        </div>
      </section>

      {/* Installation Warning */}
      <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
          <p className="text-xl font-extrabold text-gray-800 mb-3">⚠️ इंस्टॉल करते समय यह संदेश आ सकता है — घबराएं नहीं</p>
          <p className="text-base text-gray-600 mb-3">Windows 11 में Smart App Control नाम की सुरक्षा होती है। यह सॉफ्टवेयर पूरी तरह सुरक्षित है।</p>
          <ol className="text-base text-gray-600 space-y-1 list-decimal ml-5">
            <li>Start menu में Windows Security खोलें</li>
            <li>App & browser control पर क्लिक करें</li>
            <li>Smart App Control को बंद (Off) करें</li>
            <li>.exe फाइल दोबारा चलाएं</li>
            <li>इंस्टॉल के बाद वापस चालू कर सकते हैं</li>
          </ol>
        </div>
      </section>

      {/* How It Works (Steps) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-12">यह कैसे काम करता है?</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-200 rounded-2xl">
                    <div className="text-4xl mb-4">🔐</div>
                    <h3 className="text-xl font-bold mb-2">गूगल से लॉगिन करें</h3>
                    <p className="text-gray-600">मालिक पहले लॉगिन करें — फिर डॉक्टरों को मंजूरी दें।</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-2xl">
                    <div className="text-4xl mb-4">⚙️</div>
                    <h3 className="text-xl font-bold mb-2">क्लिनिक की जानकारी भरें</h3>
                    <p className="text-gray-600">क्लिनिक का नाम, पता, रजिस्ट्रेशन नंबर डालें।</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-2xl">
                    <div className="text-4xl mb-4">👨‍⚕️</div>
                    <h3 className="text-xl font-bold mb-2">डॉक्टर जोड़ें</h3>
                    <p className="text-gray-600">डॉक्टर गूगल से लॉगिन करें — मालिक उन्हें मंजूरी दें।</p>
                </div>
                <div className="p-6 border border-gray-200 rounded-2xl">
                    <div className="text-4xl mb-4">📋</div>
                    <h3 className="text-xl font-bold mb-2">काम शुरू करें</h3>
                    <p className="text-gray-600">डॉक्टर पर्चा लिखें — काउंटर पर फौरन दिखे।</p>
                </div>
            </div>
        </div>
      </section>

      {/* PIN Rules — Simple Explanation */}
      <section className="py-16 px-4 bg-amber-50 border-y-4 border-amber-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block text-5xl mb-3">🔐</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">PIN क्या है? कैसे बनाएं?</h2>
            <p className="text-gray-700 text-lg">4 अंकों का छोटा पासवर्ड — जैसे ATM कार्ड का PIN।</p>
          </div>

          {/* मुख्य बात */}
          <div className="bg-white rounded-2xl border-2 border-amber-400 p-6 mb-6 shadow">
            <p className="text-xl font-black text-gray-900 mb-4">🎯 सीधी बात</p>
            <ul className="space-y-3 text-gray-800 text-base">
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold mt-0.5">✓</span>
                <span><strong>मालिक Gmail से login करता है</strong> — उसे PIN की जरूरत नहीं।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold mt-0.5">✓</span>
                <span><strong>डॉक्टर और काउंटर स्टाफ सिर्फ PIN से login करते हैं</strong> — Gmail की जरूरत नहीं (पहली बार को छोड़कर)।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 text-xl font-bold mt-0.5">✓</span>
                <span><strong>मालिक ही सबका PIN बनाता है</strong> — डॉक्टर या स्टाफ खुद नहीं बना सकते।</span>
              </li>
            </ul>
          </div>

          {/* नियम */}
          <div className="bg-white rounded-2xl border-2 border-amber-400 p-6 mb-6 shadow">
            <p className="text-xl font-black text-gray-900 mb-4">📏 PIN बनाने के नियम</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                <p className="text-sm font-bold text-green-700 mb-2">✓ क्या सही है</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• सिर्फ अंक (0-9)</li>
                  <li>• ठीक 4 अंक होने चाहिए</li>
                  <li>• जैसे: 2580, 7413, 9046</li>
                  <li>• हर व्यक्ति का PIN अलग हो</li>
                </ul>
              </div>
              <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4">
                <p className="text-sm font-bold text-red-700 mb-2">✗ क्या गलत है</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• अक्षर या चिन्ह नहीं चलेंगे</li>
                  <li>• 3 अंक या 5 अंक नहीं</li>
                  <li>• 1234 या 0000 न रखें (आसान है)</li>
                  <li>• दो डॉक्टरों का एक ही PIN नहीं</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PIN कैसे सेट करें — मालिक के लिए */}
          <div className="bg-white rounded-2xl border-2 border-orange-400 p-6 mb-6 shadow">
            <p className="text-xl font-black text-orange-700 mb-2">👑 मालिक के लिए: PIN कैसे सेट करें?</p>
            <p className="text-sm text-gray-600 mb-4">तीन आसान कदम:</p>
            <ol className="space-y-4 text-gray-800 text-base">
              <li className="flex items-start gap-3">
                <span className="bg-orange-500 text-white font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">१</span>
                <span>Owner Panel खोलें → ऊपर <strong>"🔐 PIN Setup"</strong> वाली tab पर क्लिक करें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-orange-500 text-white font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">२</span>
                <span>जिस डॉक्टर या स्टाफ को PIN देना है, उसके सामने के खाने में <strong>4 अंक</strong> डालें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-orange-500 text-white font-black w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">३</span>
                <span><strong>"Set"</strong> बटन दबाएं → हो गया। ✅</span>
              </li>
            </ol>
            <div className="mt-5 bg-orange-50 border border-orange-300 rounded-xl p-4 text-sm text-orange-900">
              💡 <strong>PIN बदलना है?</strong> वही तरीका — नया PIN डालें और Set करें। पुराना PIN अपने आप बदल जाएगा।
            </div>
          </div>

          {/* याद रखने की बातें */}
          <div className="bg-white rounded-2xl border-2 border-amber-400 p-6 shadow">
            <p className="text-xl font-black text-gray-900 mb-4">⚠️ ज़रूरी बातें</p>
            <ul className="space-y-3 text-gray-800 text-base">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">•</span>
                <span><strong>डॉक्टर को पहले Approve करें, फिर PIN दें।</strong> बिना Approve किए PIN काम नहीं करेगा।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">•</span>
                <span><strong>PIN किसी को लिखकर न दें</strong> — सीधे मुंह से बताएं। कागज पर लिखा PIN कोई भी देख सकता है।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">•</span>
                <span><strong>डॉक्टर के जाने पर उसका PIN तुरंत बदल दें</strong> — ताकि पुराना कर्मचारी अंदर न आ सके।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">•</span>
                <span><strong>कोई PIN भूल गया?</strong> मालिक Settings में जाकर नया PIN सेट कर देगा — पुराना अपने आप खत्म।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl mt-0.5">•</span>
                <span><strong>दो लोगों का एक जैसा PIN नहीं हो सकता।</strong> सॉफ्टवेयर खुद रोक देगा।</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Roles Section */}
      <section className="py-16 px-4 bg-green-50">
        <h2 className="text-center text-3xl font-black text-green-900 mb-4">आप कौन हैं?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">सॉफ्टवेयर में तीन तरह के लोग काम करते हैं — मालिक, डॉक्टर और काउंटर स्टाफ। हर किसी का login अलग है। नीचे अपना रोल देखें।</p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          {/* मालिक */}
          <div className="bg-orange-50 border-2 border-orange-400 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">👑</span>
              <span className="text-2xl font-black text-orange-700">मालिक</span>
            </div>
            <p className="text-sm text-orange-700 font-semibold mb-5">Login: हमेशा Gmail से</p>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-600 mt-0.5">१.</span>
                <span>सॉफ्टवेयर खोलें → <strong>"Google से Login करें"</strong> बटन दबाएं → अपनी Gmail से sign in करें। यह सिर्फ एक बार होता है।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-600 mt-0.5">२.</span>
                <span>Settings में जाकर क्लिनिक का नाम, पता और रजिस्ट्रेशन नंबर भरें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-600 mt-0.5">३.</span>
                <span>जब डॉक्टर पहली बार Gmail से login करे, तो मालिक के panel में उनका नाम दिखेगा — <strong>Approve</strong> करें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-600 mt-0.5">४.</span>
                <span><strong>डॉक्टर और काउंटर स्टाफ का 4 अंकों का PIN सेट करें</strong> — Settings → Staff → PIN बदलें। यह PIN ही उनका रोज़ का पासवर्ड है।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-orange-600 mt-0.5">५.</span>
                <span>दवाओं का स्टॉक जोड़ें, सभी पर्चे और रिपोर्ट देखें।</span>
              </li>
            </ul>
            <div className="mt-5 bg-orange-100 border border-orange-300 rounded-xl p-3 text-xs text-orange-800">
              ⚠️ <strong>ज़रूरी:</strong> जब तक मालिक किसी का PIN सेट नहीं करता, वह व्यक्ति login नहीं कर सकता। पहले Approve करें, फिर PIN दें।
            </div>
          </div>

          {/* डॉक्टर */}
          <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🩺</span>
              <span className="text-2xl font-black text-green-700">डॉक्टर</span>
            </div>
            <p className="text-sm text-green-700 font-semibold mb-5">Login: पहली बार Gmail से, उसके बाद हर बार PIN से</p>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-bold text-green-600 mt-0.5">१.</span>
                <span><strong>सिर्फ पहली बार:</strong> सॉफ्टवेयर खोलें → "Google से Login करें" → अपनी Gmail से sign in करें। यह सिर्फ एक बार करना है ताकि मालिक आपको पहचान सके।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-green-600 mt-0.5">२.</span>
                <span>मालिक आपको Approve करेगा और एक <strong>4 अंकों का PIN</strong> देगा। यह PIN संभालकर रखें।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-green-600 mt-0.5">३.</span>
                <span><strong>रोज़ का login:</strong> सॉफ्टवेयर खोलें → "Doctor PIN Login" → अपना 4 अंकों का PIN डालें। Gmail की जरूरत नहीं।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-green-600 mt-0.5">४.</span>
                <span>मरीज का नाम या मोबाइल नंबर डालकर खोजें, या नया मरीज बनाएं।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-green-600 mt-0.5">५.</span>
                <span>शिकायत लिखें → दवा चुनें → पोटेंसी, मात्रा और समय भरें → Save करें। पर्चा उसी पल काउंटर पर पहुँच जाएगा।</span>
              </li>
            </ul>
            <div className="mt-5 bg-green-100 border border-green-300 rounded-xl p-3 text-xs text-green-800">
              💡 <strong>PIN भूल गए?</strong> मालिक से कहें — वह Settings में जाकर नया PIN सेट कर देगा। Gmail से दोबारा login की जरूरत नहीं।
            </div>
          </div>

          {/* काउंटर स्टाफ */}
          <div className="bg-blue-50 border-2 border-blue-400 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">💊</span>
              <span className="text-2xl font-black text-blue-700">काउंटर स्टाफ</span>
            </div>
            <p className="text-sm text-blue-700 font-semibold mb-5">Login: हमेशा सिर्फ PIN से — Gmail की कोई जरूरत नहीं</p>
            <ul className="space-y-4 text-gray-700 text-sm">
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 mt-0.5">१.</span>
                <span>सबसे पहले मालिक से अपना <strong>4 अंकों का PIN</strong> लें। बिना PIN के login नहीं होगा।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 mt-0.5">२.</span>
                <span>सॉफ्टवेयर खोलें → <strong>"Counter PIN Login"</strong> → अपना PIN डालें → अंदर आ जाएं। इतना ही काफी है।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 mt-0.5">३.</span>
                <span>नए पर्चे की सूची अपने आप दिखेगी — जैसे ही डॉक्टर save करेगा।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 mt-0.5">४.</span>
                <span>दवाएं निकालें → Dispense करें → चाहें तो Print निकालें या मरीज को स्क्रीन दिखाएं।</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-blue-600 mt-0.5">५.</span>
                <span>कोई दवा खत्म होने वाली हो तो मालिक को बताएं।</span>
              </li>
            </ul>
            <div className="mt-5 bg-blue-100 border border-blue-300 rounded-xl p-3 text-xs text-blue-800">
              💡 <strong>PIN नहीं मिला या भूल गए?</strong> मालिक से संपर्क करें — वही PIN बनाता और बदलता है। आपको कोई Gmail account की जरूरत नहीं है।
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-green-400">क्या-क्या मिलेगा?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 border border-green-900/40 rounded-xl p-6">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-2">डिजिटल पर्चा</h3>
              <p className="text-gray-300 text-sm">डॉक्टर पर्चा लिखते हैं — काउंटर पर तुरंत पहुँच जाता है। कागज की जरूरत नहीं।</p>
            </div>
            <div className="bg-gray-800 border border-green-900/40 rounded-xl p-6">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="font-bold text-lg mb-2">कई डॉक्टर एक साथ</h3>
              <p className="text-gray-300 text-sm">1 से 5 डॉक्टर अपने-अपने लॉगिन से एक साथ काम कर सकते हैं।</p>
            </div>
            <div className="bg-gray-800 border border-green-900/40 rounded-xl p-6">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="font-bold text-lg mb-2">400+ दवाएं पहले से भरी</h3>
              <p className="text-gray-300 text-sm">होम्योपैथी की सभी दवाएं और पोटेंसी ड्रॉपडाउन में पहले से मौजूद हैं।</p>
            </div>
            <div className="bg-gray-800 border border-green-900/40 rounded-xl p-6">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-bold text-lg mb-2">काउंटर पर फौरन</h3>
              <p className="text-gray-300 text-sm">डॉक्टर सेव करें — उसी पल काउंटर पर दिख जाए। कोई देरी नहीं।</p>
            </div>
            <div className="bg-gray-800 border border-green-900/40 rounded-xl p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-bold text-lg mb-2">मरीज खोजें</h3>
              <p className="text-gray-300 text-sm">नाम या मोबाइल नंबर से मरीज को पलभर में खोजें।</p>
            </div>
            <div className="bg-gray-800 border border-green-900/40 rounded-xl p-6">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="font-bold text-lg mb-2">दवाओं का हिसाब</h3>
              <p className="text-gray-300 text-sm">कौन सी दवा है, कौन सी खत्म है — सब एक जगह दिखेगा।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-800">कीमत</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border-2 border-green-600 p-8 text-center shadow-lg relative bg-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full">नया खाता</div>
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">पहली बार</h3>
              <div className="text-5xl font-extrabold text-green-700 my-4">₹4,999</div>
              <p className="text-gray-500 mb-6">एक बार — १ साल शामिल</p>
              <button onClick={pay} className="block w-full bg-gray-800 text-white font-bold py-4 rounded-xl hover:bg-gray-700 transition text-lg">💳 अभी खरीदें — ₹4,999</button>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-8 text-center shadow-sm bg-white">
              <h3 className="text-xl font-bold mb-1 text-gray-700 mt-2">नवीनीकरण</h3>
              <div className="text-5xl font-extrabold text-green-700 my-4">₹2,500</div>
              <p className="text-gray-500 mb-6">प्रति वर्ष</p>
              <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition text-lg">💬 व्हाट्सएप करें</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-green-700 py-16 px-4 text-center text-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">आज ही शुरू करें — मुफ्त में</h2>
          <p className="text-white/80 mb-8 text-lg">७ दिन पूरी तरह मुफ्त — कोई कार्ड नहीं</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-lg font-semibold">
            <a href="tel:+919996865069" className="hover:underline">📞 9996865069</a>
            <span className="hidden sm:inline">|</span>
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hover:underline">💬 व्हाट्सएप</a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:prasad.kamta@gmail.com" className="hover:underline">✉️ ईमेल</a>
          </div>
        </div>
      </section>
    </main>
  );
}