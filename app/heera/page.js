"use client";
import { useEffect, useState } from "react";
const डाउनलोड_लिंक =
  "https://pub-31ce429b28bc4ce8bf56e0a2af375815.r2.dev/Heera%20Desk%20Setup%200.1.0.exe";
const खासियत = [
  {
    आइकन: "💎",
    शीर्षक: "कच्चा माल रिकॉर्ड",
    विवरण:
      "कितना कच्चा हीरा है — वजन, गुणवत्ता, लॉट नंबर सब दर्ज होगा। कुछ भी गुम नहीं होगा।",
  },
  {
    आइकन: "👨‍🏭",
    शीर्षक: "कारीगर का हिसाब",
    विवरण:
      "किस कारीगर को कितना लॉट दिया, कब वापस आएगा, मजदूरी कितनी बनी — सब एक जगह।",
  },
  {
    आइकन: "✨",
    शीर्षक: "पॉलिश माल रिकॉर्ड",
    विवरण: "पॉलिश हुए हीरों का पूरा रिकॉर्ड — आकार, रंग, चमक, कैरेट।",
  },
  {
    आइकन: "📒",
    शीर्षक: "पार्टी बही-खाता",
    विवरण:
      "किस पार्टी को क्या बेचा, भुगतान कब आया, कितना बाकी है — सब साफ दिखेगा।",
  },
  {
    आइकन: "💰",
    शीर्षक: "मजदूरी हिसाब",
    विवरण:
      "कारीगर को कितना देना है, कितना अग्रिम दिया, कितना बाकी है — हर महीने पर्ची छापो।",
  },
  {
    आइकन: "📉",
    शीर्षक: "घटान का हिसाब",
    विवरण: "कच्चे से पॉलिश में कितना वजन घटा — उत्पादन घाटे का पूरा हिसाब।",
  },
  {
    आइकन: "📦",
    शीर्षक: "खरीद का हिसाब",
    विवरण: "कच्चा माल कहाँ से आया, भाव क्या था, कितना माल आया — सब दर्ज।",
  },
  {
    आइकन: "📊",
    शीर्षक: "महीने का नफा-नुकसान",
    विवरण: "महीने के अंत में देखो — कितनी खरीद, कितनी बिक्री, कितना फायदा।",
  },
  {
    आइकन: "☁️",
    शीर्षक: "कहीं से भी खोलो",
    विवरण:
      "घर से, दुकान से, मोबाइल से — जहाँ इंटरनेट है वहाँ से खोलो। डेटा सुरक्षित रहेगा।",
  },
  {
    आइकन: "🔐",
    शीर्षक: "गूगल से लॉगिन",
    विवरण:
      "पासवर्ड याद रखने की ज़रूरत नहीं — अपने गूगल खाते से सीधे लॉगिन करो।",
  },
];

const कैसेचलाएं = [
  {
    नंबर: "1",
    आइकन: "⬇️",
    काम: "सॉफ्टवेयर डाउनलोड करो",
    विवरण: "नीचे दिए डाउनलोड बटन से फाइल डाउनलोड करो। इंस्टॉल करो — बस।",
  },
  {
    नंबर: "2",
    आइकन: "🔐",
    काम: "गूगल से लॉगिन करो",
    विवरण: "अपने जीमेल खाते से लॉगिन करो। कोई नया खाता नहीं बनाना।",
  },
  {
    नंबर: "3",
    आइकन: "💎",
    काम: "कच्चा माल दर्ज करो",
    विवरण: "कच्चा हीरा कहाँ से आया, कितना, क्या भाव था — पहली एंट्री करो।",
  },
  {
    नंबर: "4",
    आइकन: "👨‍🏭",
    काम: "कारीगर को लॉट दो",
    विवरण: "लॉट चुनो, कारीगर चुनो, वजन डालो — काम सौंप दिया।",
  },
  {
    नंबर: "5",
    आइकन: "✨",
    काम: "पॉलिश वापस लो",
    विवरण: "कारीगर ने काम करके दे दिया — वजन जाँचो, मजदूरी अपने आप बनेगी।",
  },
  {
    नंबर: "6",
    आइकन: "📒",
    काम: "पार्टी को बेचो",
    विवरण: "पॉलिश हीरे पार्टी को बेचो, बिल बनाओ, भुगतान का हिसाब रखो।",
  },
];

export default function HeeraPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(s);
  }, []);

  const params =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  const emailFromUrl = params?.get("email") || "";

  const pay = async () => {
    const res = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5500, plan: "new", software: "heera" }),
    });
    const order = await res.json();
    const rzp = new window.Razorpay({
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 5500 * 100,
      currency: "INR",
      name: "निशांत सॉफ्टवेयर्स",
      description: "हीरा डेस्क — 1 साल",
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
            software: "heera",
          }),
        });
        alert("भुगतान सफल! सॉफ्टवेयर activate हो गया।");
      },
    });
    rzp.open();
  };
  return (
    <main
      className="min-h-screen bg-white text-gray-900"
      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
    >
      {/* ऊपरी पट्टी */}
      <div className="bg-cyan-600 py-2 px-4 text-center text-base font-bold text-white">
        📞 सम्पर्क करें:{" "}
        <a href="tel:+919996865069" className="underline">
          9996865069
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://wa.me/919996865069"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          💬 व्हाट्सएप
        </a>
      </div>

      {/* नेवबार */}
      <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="font-extrabold text-white text-xl">
            🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर्स
          </a>
          <a
            href="/"
            className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition"
          >
            ← सभी उत्पाद
          </a>
        </div>
      </nav>

      {/* मुख्य बैनर */}
      <section className="bg-gradient-to-br from-cyan-700 via-cyan-600 to-teal-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block bg-white/20 text-white text-base font-bold px-5 py-2 rounded-full mb-6">
            🆓 7 दिन बिल्कुल मुफ्त — कोई कार्ड नहीं चाहिए
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            💎 हीरा डेस्क
          </h1>
          <p className="text-2xl font-bold mb-3 text-cyan-100">
            हीरा उद्योग का पूरा हिसाब — एक जगह
          </p>
          <p className="text-lg mb-10 text-cyan-200">
            कच्चा माल, कारीगर, पॉलिश, पार्टी बही-खाता — सब कुछ आसान।
          </p>
          <a
            href={डाउनलोड_लिंक}
            className="inline-block bg-white text-cyan-700 font-extrabold text-2xl px-10 py-4 rounded-2xl shadow-xl hover:bg-cyan-50 transition mb-4"
          >
            ⬇️ अभी डाउनलोड करें — मुफ्त
          </a>
          <div className="flex flex-col items-center mt-4 gap-1">
            <a
              href="https://heera.nishantsoftwares.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-400 text-white font-extrabold text-2xl px-10 py-4 rounded-2xl shadow-xl transition"
            >
              📱 Android पर Install करें
            </a>
            <p className="text-sm text-cyan-200/70">
              👉 Chrome menu ⋮ → Add to Home Screen
            </p>
          </div>
          <p className="text-base text-cyan-200 mt-3">
            विंडोज़ कम्प्यूटर पर चलेगा • इंटरनेट ज़रूरी है
          </p>
        </div>
      </section>

      {/* खासियत */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-3 text-cyan-400">
            इसमें क्या-क्या है?
          </h2>
          <p className="text-center text-gray-400 text-lg mb-10">
            हीरा व्यापारियों और निर्माताओं के लिए बनाया गया
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {खासियत.map((ख, i) => (
              <div
                key={i}
                className="bg-gray-800 border border-cyan-500/20 rounded-2xl px-6 py-5"
              >
                <div className="text-3xl mb-2">{ख.आइकन}</div>
                <div className="text-cyan-400 font-extrabold text-xl mb-2">
                  {ख.शीर्षक}
                </div>
                <div className="text-gray-300 text-base leading-relaxed">
                  {ख.विवरण}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* कैसे चलाएं */}
      <section className="py-16 px-4 bg-cyan-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
            कैसे चलाएं?
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {कैसेचलाएं.map((क) => (
              <div
                key={क.नंबर}
                className="bg-white border border-cyan-200 rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-3">{क.आइकन}</div>
                <div className="text-cyan-600 font-extrabold text-lg mb-1">
                  चरण {क.नंबर}
                </div>
                <div className="font-extrabold text-gray-800 text-lg mb-2">
                  {क.काम}
                </div>
                <div className="text-gray-500 text-base leading-relaxed">
                  {क.विवरण}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* मूल्य */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
            मूल्य
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border-2 border-cyan-500 p-8 text-center shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                नया खाता
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-700 mt-2">
                पहली बार
              </h3>
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">
                ₹5,500
              </div>
              <p className="text-gray-400 text-base mb-6">
                एक बार — 1 साल शामिल
              </p>
              <a
                href={डाउनलोड_लिंक}
                className="block w-full bg-cyan-600 text-white font-extrabold text-lg py-3 rounded-xl hover:bg-cyan-500 transition"
              >
                ⬇️ मुफ्त आज़माएं
              </a>
              <button
                onClick={pay}
                className="block w-full mt-3 bg-cyan-800 text-white font-extrabold text-lg py-3 rounded-xl hover:bg-cyan-700 transition"
              >
                💳 अभी खरीदें — ₹5,500
              </button>
            </div>
            <div className="rounded-2xl border-2 border-gray-200 p-8 text-center shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-700 mt-2">
                नवीनीकरण
              </h3>
              <div className="text-5xl font-extrabold text-cyan-600 mb-2">
                ₹2,500
              </div>
              <p className="text-gray-400 text-base mb-6">प्रति वर्ष</p>
              <a
                href="https://wa.me/919996865069"
                className="block w-full bg-cyan-600 text-white font-extrabold text-lg py-3 rounded-xl hover:bg-cyan-500 transition"
              >
                💬 व्हाट्सएप करें
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* उपयोगकर्ता पुस्तिका */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
            📖 उपयोगकर्ता पुस्तिका
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                1. पहली बार कैसे शुरू करें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                ऊपर दिए डाउनलोड बटन से सॉफ्टवेयर डाउनलोड करें। फाइल खोलें —
                इंस्टॉल हो जाएगा। खुलेगा तो गूगल से लॉगिन का बटन दिखेगा। अपने
                जीमेल खाते से लॉगिन करें। पहली बार लॉगिन करने पर 7 दिन मुफ्त
                मिलेंगे।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                2. कच्चा माल कैसे दर्ज करें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                बाईं तरफ मेनू में "लॉट" पर क्लिक करें। "नया लॉट जोड़ें" बटन
                दबाएं। लॉट नंबर, वजन (कैरेट में), गुणवत्ता और आकार भरें। सेव
                करें — लॉट तैयार है।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                3. कारीगर कैसे जोड़ें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                मेनू में "कारीगर" पर क्लिक करें। "नया कारीगर" बटन दबाएं। कारीगर
                का नाम, मोबाइल नंबर और काम का प्रकार (आरी/घिसाई/पॉलिश) भरें। सेव
                करें।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                4. कारीगर को काम कैसे सौंपें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                मेनू में "काम सौंपें" पर क्लिक करें। कारीगर चुनें, लॉट चुनें,
                वजन डालें। सेव करें — कारीगर के खाते में दर्ज हो जाएगा।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                5. काम वापस आने पर क्या करें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                "काम सौंपें" में जाएं, वो एंट्री खोलें जो लंबित है। वापस आया वजन
                डालें। मजदूरी अपने आप बन जाएगी। महीने के अंत में पर्ची भी छाप
                सकते हैं।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                6. बिक्री कैसे दर्ज करें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                मेनू में "बिक्री" पर क्लिक करें। पार्टी का नाम, वजन, राशि और
                तारीख भरें। सेव करें — पार्टी के बही-खाते में दर्ज हो जाएगा।
                भुगतान आने पर अपडेट करें।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                7. रिपोर्ट कैसे देखें?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                मेनू में "रिपोर्ट" पर क्लिक करें। महीना चुनें — कुल खरीद, कुल
                बिक्री, कारीगरों की मजदूरी और नफा-नुकसान सब एक पेज पर दिखेगा।
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-xl font-extrabold text-cyan-600 mb-3">
                8. डेटा कहाँ सेव होता है?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                सारा डेटा क्लाउड पर सेव होता है — आपके कम्प्यूटर में नहीं। इसलिए
                कम्प्यूटर खराब हो जाए तो भी डेटा सुरक्षित रहेगा। कहीं से भी खोल
                सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* अंतिम डाउनलोड */}
      <section className="py-16 px-4 bg-cyan-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">
            अभी शुरू करें — मुफ्त
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            7 दिन मुफ्त आज़माएं। कोई कार्ड नहीं। कोई झंझट नहीं।
          </p>
          <a
            href={डाउनलोड_लिंक}
            className="inline-block bg-white text-cyan-700 font-extrabold text-2xl px-10 py-4 rounded-2xl shadow-xl hover:bg-cyan-50 transition"
          >
            ⬇️ अभी डाउनलोड करें
          </a>
          <p className="text-base text-cyan-200 mt-4">
            कोई सवाल हो तो व्हाट्सएप करें:{" "}
            <a
              href="https://wa.me/919996865069"
              className="underline font-bold"
            >
              9996865069
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
