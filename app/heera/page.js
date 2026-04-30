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

const उपयोगकर्ता_पुस्तिका = [
  {
    नंबर: "1",
    शीर्षक: "पहली बार कैसे शुरू करें?",
    विवरण: [
      "ऊपर दिए बड़े हरे बटन से सॉफ्टवेयर डाउनलोड करें।",
      "डाउनलोड हुई फाइल पर डबल-क्लिक करें — इंस्टॉल हो जाएगा।",
      "सॉफ्टवेयर खुलेगा तो बीच में एक बड़ा बटन दिखेगा — \"गूगल से लॉगिन करें\"।",
      "उस पर क्लिक करें और अपना जीमेल खाता चुनें।",
      "पहली बार लॉगिन करने पर आपको 7 दिन बिल्कुल मुफ्त मिलेंगे — कोई कार्ड नहीं चाहिए।",
      "लॉगिन होते ही आप सीधे डैशबोर्ड पर पहुँच जाएंगे।",
    ],
  },
  {
    नंबर: "2",
    शीर्षक: "लॉट (कच्चा माल) कैसे दर्ज करें?",
    विवरण: [
      "बाईं तरफ मेनू में \"लॉट\" पर क्लिक करें।",
      "ऊपर दाईं तरफ \"नया लॉट जोड़ें\" बटन दबाएं।",
      "लॉट नंबर भरें — जैसे L-001, L-002 आदि। यह आपकी पहचान है।",
      "कच्चे हीरे का वजन कैरेट में भरें।",
      "आकार चुनें — Round, Oval, Pear आदि।",
      "गुणवत्ता चुनें — VVS1, VS1, SI1 आदि।",
      "रंग चुनें — D, E, F, G आदि।",
      "\"सेव करें\" दबाएं — लॉट तैयार है।",
      "एक बार लॉट बन गया तो उसे कारीगर को दे सकते हैं।",
    ],
  },
  {
    नंबर: "3",
    शीर्षक: "कारीगर कैसे जोड़ें?",
    विवरण: [
      "मेनू में \"कारीगर\" पर क्लिक करें।",
      "\"नया कारीगर\" बटन दबाएं।",
      "कारीगर का पूरा नाम भरें।",
      "मोबाइल नंबर भरें — WhatsApp मैसेज भेजने के काम आएगा।",
      "काम का प्रकार चुनें — आरी, घिसाई, पॉलिश, या जाँच।",
      "हर काम की दर (रेट) भरें — जैसे आरी का रेट ₹X प्रति कैरेट।",
      "\"सेव करें\" दबाएं।",
      "एक ही कारीगर अलग-अलग काम करता हो तो अलग-अलग एंट्री बनाएं।",
    ],
  },
  {
    नंबर: "4",
    शीर्षक: "कारीगर को काम कैसे सौंपें?",
    विवरण: [
      "मेनू में \"काम\" या \"असाइनमेंट\" पर क्लिक करें।",
      "\"नया काम सौंपें\" बटन दबाएं।",
      "कारीगर चुनें — जिसे काम देना है।",
      "लॉट चुनें — कौन सा हीरा देना है।",
      "वजन भरें — कितने कैरेट दे रहे हैं।",
      "काम का प्रकार चुनें — आरी/घिसाई/पॉलिश/जाँच।",
      "\"सेव करें\" दबाएं — कारीगर के खाते में दर्ज हो जाएगा।",
      "अब यह काम \"लंबित\" में दिखेगा जब तक वापस न आए।",
    ],
  },
  {
    नंबर: "5",
    शीर्षक: "काम वापस आने पर क्या करें?",
    विवरण: [
      "मेनू में \"काम\" पर जाएं।",
      "\"लंबित\" वाली एंट्री खोलें जो वापस आई है।",
      "\"वापसी दर्ज करें\" पर क्लिक करें।",
      "वापस आया वजन भरें — ध्यान से तोलकर भरें।",
      "मजदूरी अपने आप बन जाएगी — रेट × वजन के हिसाब से।",
      "\"सेव करें\" दबाएं — काम \"पूर्ण\" हो जाएगा।",
      "कारीगर की बकाया मजदूरी अपने आप अपडेट हो जाएगी।",
    ],
  },
  {
    नंबर: "6",
    शीर्षक: "मजदूरी कैसे चुकाएं?",
    विवरण: [
      "मेनू में \"कारीगर\" पर जाएं।",
      "जिस कारीगर को पैसे देने हैं उसे खोलें।",
      "उसकी कुल बकाया मजदूरी दिखेगी।",
      "\"भुगतान करें\" पर क्लिक करें।",
      "राशि भरें। अगर अग्रिम (एडवांस) दिया था तो वो भी दिखेगा — अपने आप कट जाएगा।",
      "\"सेव करें\" दबाएं — भुगतान दर्ज हो जाएगा।",
      "चाहें तो पर्ची भी प्रिंट कर सकते हैं।",
    ],
  },
  {
    नंबर: "7",
    शीर्षक: "बिक्री कैसे दर्ज करें?",
    विवरण: [
      "मेनू में \"बिक्री\" पर क्लिक करें।",
      "\"नई बिक्री\" बटन दबाएं।",
      "बिल नंबर भरें।",
      "पार्टी का नाम और पता भरें।",
      "अगर GST वाली पार्टी है तो GSTIN भी भरें।",
      "तारीख, वजन और राशि भरें।",
      "घरेलू बिक्री है या निर्यात — चुनें।",
      "\"सेव करें\" दबाएं — बही-खाते में दर्ज हो जाएगा।",
      "भुगतान आने पर उसी एंट्री में जाकर स्थिति अपडेट करें।",
    ],
  },
  {
    नंबर: "8",
    शीर्षक: "लैब सर्टिफिकेट कैसे दर्ज करें?",
    विवरण: [
      "मेनू में \"लैब\" पर क्लिक करें।",
      "\"नया सर्टिफिकेट\" बटन दबाएं।",
      "लॉट चुनें जिसका हीरा लैब भेजा है।",
      "लैब का नाम चुनें — GIA, IGI, HRD, SGL, GTLI।",
      "भेजने की तारीख भरें।",
      "सर्टिफिकेट नंबर, कैरेट, रंग, शुद्धता सब भरें।",
      "जब सर्टिफिकेट वापस आए तो \"मिला\" पर अपडेट करें।",
      "यह निर्यात के लिए जरूरी होता है।",
    ],
  },
  {
    नंबर: "9",
    शीर्षक: "रिपोर्ट कैसे देखें?",
    विवरण: [
      "मेनू में \"रिपोर्ट\" पर क्लिक करें।",
      "महीना और साल चुनें।",
      "एक पेज पर सब दिखेगा — कुल बिक्री, कुल मजदूरी, कुल खर्च, और नफा-नुकसान।",
      "कारीगर के हिसाब से भी अलग रिपोर्ट देख सकते हैं।",
      "लॉट के हिसाब से घटान (कच्चे से पॉलिश में कितना वजन घटा) भी दिखेगा।",
    ],
  },
  {
    नंबर: "10",
    शीर्षक: "सेटिंग कैसे बदलें?",
    विवरण: [
      "मेनू में \"सेटिंग\" पर क्लिक करें।",
      "अपना नाम और दुकान का नाम भर सकते हैं।",
      "WhatsApp नंबर डालें — कारीगरों को मैसेज भेजने के काम आएगा।",
      "\"सेव करें\" दबाएं।",
      "लॉगआउट करना हो तो नीचे \"लॉगआउट करें\" बटन दबाएं।",
    ],
  },
  {
    नंबर: "11",
    शीर्षक: "डेटा कहाँ सेव होता है? क्या सुरक्षित है?",
    विवरण: [
      "सारा डेटा क्लाउड सर्वर पर सेव होता है — आपके कम्प्यूटर में नहीं।",
      "कम्प्यूटर खराब हो जाए, चोरी हो जाए — डेटा सुरक्षित रहेगा।",
      "घर से, दुकान से, मोबाइल से — कहीं से भी खोल सकते हैं।",
      "सिर्फ आपके गूगल खाते से लॉगिन होगा — कोई और नहीं देख सकता।",
      "इंटरनेट बंद हो तो सॉफ्टवेयर काम नहीं करेगा — इंटरनेट जरूरी है।",
    ],
  },
  {
    नंबर: "12",
    शीर्षक: "कोई समस्या आए तो क्या करें?",
    विवरण: [
      "WhatsApp करें: 9996865069",
      "सुबह 10 बजे से शाम 6 बजे तक सहायता मिलेगी।",
      "स्क्रीनशॉट लेकर भेजें — जल्दी समाधान होगा।",
    ],
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
                💳 अभी खरीदें — ₹4,999
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

      {/* उपयोगकर्ता पुस्तिका — नई */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-2 text-gray-800">
            📖 उपयोगकर्ता पुस्तिका
          </h2>
          <p className="text-center text-gray-500 text-lg mb-10">
            पहली बार इस्तेमाल कर रहे हैं? यहाँ सब समझाया है — एकदम आसान भाषा में।
          </p>
          <div className="space-y-5">
            {उपयोगकर्ता_पुस्तिका.map((अ) => (
              <div
                key={अ.नंबर}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-xl font-extrabold text-cyan-600 mb-4 flex items-center gap-2">
                  <span className="bg-cyan-600 text-white text-sm font-extrabold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {अ.नंबर}
                  </span>
                  {अ.शीर्षक}
                </h3>
                <ul className="space-y-2">
                  {अ.विवरण.map((लाइन, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-base leading-relaxed">
                      <span className="text-cyan-500 font-extrabold mt-0.5 flex-shrink-0">▶</span>
                      <span>{लाइन}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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