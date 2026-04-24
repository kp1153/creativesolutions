"use client";
import { useState } from "react";
import Script from "next/script";

const HARDWARE_EXE_URL =
  "https://pub-36b3216d45d24541a20e55f6b3f26d07.r2.dev/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%20Setup%200.1.0.exe";
const HARDWARE_PWA_URL = "https://hardware.nishantsoftwares.in";

const PLANS = {
  new: { label: "नया License — पहली बार (1 साल शामिल)", amount: 4999 },
  renew: { label: "नवीनीकरण — सालाना", amount: 2500 },
};

const features = [
  { hi: "बिल बनाओ — दुकान का बिल झटपट बनेगा, छापो या व्हाट्सएप पर भेजो" },
  { hi: "माल का हिसाब — कौन सा सामान कितना बचा है, एक नज़र में दिखेगा" },
  { hi: "उधार का हिसाब — किसने कितना लेना है, सब लिखा रहेगा" },
  { hi: "ग्राहक का खाता — हर ग्राहक का पूरा लेन-देन एक जगह" },
  { hi: "खरीद का हिसाब — कहाँ से माल आया, कितने में आया" },
  { hi: "जीएसटी रिपोर्ट — सरकार को देने वाला हिसाब अपने आप तैयार होगा" },
  {
    hi: "मालिक और कर्मचारी अलग — मालिक को पूरा दिखेगा, काउंटर वाले को सिर्फ बिलिंग",
  },
  { hi: "मोबाइल और कंप्यूटर दोनों पर चलेगा — कहीं से भी देखो" },
  { hi: "7 दिन बिल्कुल मुफ्त — कोई पैसा नहीं, कोई कार्ड नहीं" },
];

const howTo = [
  {
    step: "पहला काम",
    hi: "गूगल खाते से लॉगिन करो",
    detail:
      "जब ऐप खुले तो 'गूगल से लॉगिन करो' बटन दबाओ। अपना गूगल खाता चुनो — बस हो गया।",
    icon: "🔐",
  },
  {
    step: "दूसरा काम",
    hi: "अपना सामान डालो",
    detail:
      "सेटिंग्स में दुकान का नाम और पता भरो। फिर 'सामान' में जाकर अपने माल की सूची बनाओ — नाम, रेट, स्टॉक।",
    icon: "📦",
  },
  {
    step: "तीसरा काम",
    hi: "नया बिल बनाओ",
    detail:
      "नया बिल बटन दबाओ। ग्राहक का नाम डालो, सामान चुनो, मात्रा भरो — बिल तैयार।",
    icon: "🧾",
  },
  {
    step: "चौथा काम",
    hi: "छापो या भेजो",
    detail: "बिल बनने के बाद प्रिंट करो या व्हाट्सएप पर सीधे ग्राहक को भेजो।",
    icon: "📱",
  },
];

const manual = [
  {
    title: "🔐 पहली बार कैसे शुरू करें",
    steps: [
      "अपने फोन या कंप्यूटर में यह पता खोलें — hardware.nishantsoftwares.in",
      "बीच में बड़ा काला बटन दिखेगा — 'Google से Login करें' — उस पर दबाएं",
      "अपना Gmail खाता चुनें (जो आप रोज़ use करते हैं)",
      "बस — आप अंदर आ गए! 7 दिन तक बिल्कुल मुफ्त उपयोग करें",
      "कोई पैसा नहीं देना, कोई कार्ड नहीं माँगेगा — पहले इस्तेमाल करें, अच्छा लगे तो ही खरीदें",
    ],
  },
  {
    title: "🏪 अपनी दुकान का नाम और पता कैसे भरें",
    steps: [
      "ऊपर दाहिनी तरफ गियर जैसा निशान ⚙️ दबाएं — यह 'सेटिंग्स' है",
      "सबसे ऊपर दुकान का पूरा नाम लिखें — जैसे 'राम हार्डवेयर एंड सेनेटरी'",
      "नीचे पता भरें — गली नंबर, मोहल्ला या बाज़ार का नाम",
      "शहर लिखें — जैसे 'वाराणसी' या 'कानपुर'",
      "अपना 10 अंक का मोबाइल नंबर डालें — ग्राहक इसी पर कॉल करेगा",
      "अगर आपका GST नंबर है तो वो भी भरें (नहीं है तो खाली छोड़ दें)",
      "नीचे नीला 'सेव करें' बटन दबाएं",
      "अब जो भी बिल बनेगा, उस पर यह सारी जानकारी ऊपर छपेगी",
    ],
  },
  {
    title: "📦 अपनी दुकान का सामान कैसे डालें",
    steps: [
      "नीचे मेनू में से 'सामान' पर दबाएं",
      "ऊपर दाहिनी तरफ नीला '+ नया सामान' बटन दबाएं",
      "सामान का पूरा नाम लिखें — जैसे 'GI पाइप 1 इंच' या 'एस्बेस्टस सीमेंट 50kg'",
      "श्रेणी चुनें — पाइप, सेनेटरी, पेंट, बिजली आदि में से",
      "इकाई चुनें — नग, मीटर, किलो, लीटर जो भी हो",
      "खरीद मूल्य भरें — यानी आप दुकान में कितने रुपये का लाए",
      "बिक्री मूल्य भरें — यानी ग्राहक को कितने में बेचते हैं",
      "अभी दुकान में कितना माल पड़ा है वो 'शुरुआती मात्रा' में भरें",
      "GST दर चुनें — 0%, 5%, 12%, 18% या 28% (ज़्यादातर सामान 18% पर लगता है)",
      "अगर HSN कोड पता है तो लिखें, नहीं तो छोड़ दें",
      "आखिर में नीला 'जोड़ें' बटन दबाएं — सामान सूची में आ गया",
    ],
  },
  {
    title: "🧾 ग्राहक को बिल कैसे बनाएं",
    steps: [
      "नीचे मेनू में 'नया बिल' दबाएं",
      "सबसे पहले ग्राहक का नाम डालें — अगर पुराना ग्राहक है तो नाम लिखते ही सूची में दिखेगा, उस पर दबा दें",
      "नया ग्राहक है तो नाम लिखकर 'सूची में भी जोड़ें' दबाएं (अगली बार काम आएगा)",
      "अगर बिना नाम के पर्ची चाहिए तो 'सिर्फ बिल पर' दबाएं",
      "अब सामान जोड़ें — ऊपर खोज बॉक्स में सामान का नाम लिखें",
      "नीचे सूची आएगी — जो सामान चाहिए उस पर दबा दें, बिल में आ जाएगा",
      "मात्रा बदलनी हो तो सामान के आगे संख्या बदल दें — रकम अपने आप जुड़ेगी",
      "और सामान जोड़ने हैं तो दोबारा खोजें और दबाएं",
      "सब सामान जुड़ जाएं तो दाहिनी तरफ देखें — कुल रकम दिख रही होगी",
      "भुगतान का तरीका चुनें — नकद / यूपीआई / उधार / आंशिक",
      "'आंशिक' का मतलब — कुछ अभी, कुछ बाद में (वहाँ अभी दी रकम लिखें)",
      "सबसे नीचे हरा बड़ा बटन 'बिल बनाओ' दबाएं",
      "बिल तैयार हो गया — अब 'प्रिंट करें' दबाकर छाप दें या मोबाइल पर दिखा दें",
    ],
  },
  {
    title: "💰 उधार का हिसाब कैसे रखें और पैसा कैसे वसूलें",
    steps: [
      "जब बिल बनाते समय 'उधार' चुनेंगे — पूरा पैसा उधार में जाएगा",
      "'आंशिक' चुनेंगे — कुछ अभी मिला, बाकी उधार में जाएगा",
      "बाद में देखने के लिए नीचे मेनू में 'उधार' पर दबाएं",
      "ऊपर लाल पट्टी में कुल बाकी रकम दिखेगी — पूरी दुकान की कितनी उधार है",
      "नीचे सूची होगी — किस ग्राहक का कितना बाकी है",
      "हर ग्राहक पर हरा बटन होगा — 'WhatsApp से याद दिलाएं'",
      "उस पर दबाते ही WhatsApp खुलेगा, संदेश पहले से तैयार होगा, बस Send दबाएं",
      "जब ग्राहक पैसे लेकर आए — उसके नाम के नीचे 'रकम चुकाएं' दबाएं",
      "कितने रुपये दिए वो लिखें (पूरे या कुछ हिस्सा)",
      "'जमा' दबाएं — उधार अपने आप कम हो जाएगा",
      "जब पूरा पैसा चुक जाए — वो ग्राहक 'चुकाए गए उधार' सूची में चला जाएगा",
    ],
  },
  {
    title: "👥 ग्राहक कैसे जोड़ें, बदलें और हटाएं",
    steps: [
      "नीचे मेनू में 'ग्राहक' दबाएं",
      "ऊपर 'नया ग्राहक जोड़ें' वाला बॉक्स दिखेगा",
      "ग्राहक का पूरा नाम लिखें",
      "10 अंक का मोबाइल नंबर डालें (WhatsApp भेजने के काम आएगा)",
      "पता लिखें (मर्ज़ी पर है)",
      "नीला 'जोड़ें' बटन दबाएं",
      "नीचे सारे ग्राहक सूची में दिखेंगे",
      "किसी का नंबर गलत हो तो 'बदलें' दबाकर ठीक करें",
      "गलती से जुड़ गया हो तो 'हटाएं' दबाएं",
      "खोज के लिए ऊपर बॉक्स में नाम या मोबाइल नंबर डालें",
    ],
  },
  {
    title: "📋 पुराने बिल कैसे देखें और दोबारा छापें",
    steps: [
      "नीचे मेनू में 'बिल' दबाएं",
      "ऊपर दिखेगा — कुल कितने बिल बने और आज कितने रुपये की बिक्री हुई",
      "खोज बॉक्स में बिल नंबर या ग्राहक का नाम लिखकर पुराना बिल ढूंढ़ सकते हैं",
      "नीचे छोटी गोलियों से filter करें — सिर्फ नकद के, सिर्फ उधार के, या सब",
      "किसी भी बिल पर 'प्रिंट करें' दबाएं — पूरा बिल खुलेगा",
      "वहाँ से दोबारा छाप सकते हैं",
      "हर बिल के पास दिखेगा — आज का, कल का, या कितने दिन पुराना",
    ],
  },
  {
    title: "📊 GST रिपोर्ट कैसे निकालें (CA को देने के लिए)",
    steps: [
      "नीचे मेनू में 'GST' दबाएं",
      "ऊपर 2 बड़े कार्ड दिखेंगे — कुल बिक्री और कुल GST का",
      "नीचे हर महीने की अलग-अलग रिपोर्ट होगी",
      "हर महीने में दिखेगा — कितने बिल बने, कितनी बिक्री, कितना CGST, कितना SGST",
      "यही डेटा अपने CA को दिखा दें — वो GST return भर देगा",
      "कोई हिसाब खुद करने की ज़रूरत नहीं — सब अपने आप जुड़ता रहता है",
    ],
  },
  {
    title: "⚠️ स्टॉक कम हो जाए तो कैसे पता चले",
    steps: [
      "डैशबोर्ड के ऊपर 'कम स्टॉक' का कार्ड दिखता है — कितने सामान खत्म होने वाले हैं",
      "'सामान' पेज पर जाएं",
      "ऊपर लाल पट्टी दिखेगी — '3 सामान कम स्टॉक में' (अगर हों)",
      "जिन सामानों की मात्रा 5 से कम बची है वो सबसे ऊपर, लाल रंग में दिखेंगे",
      "उस सामान पर 'बदलें' दबाएं",
      "नई मात्रा डालें (जितना नया माल आया है)",
      "'सेव करें' दबाएं — स्टॉक अपडेट हो गया",
    ],
  },
  {
    title: "🖨️ बिल कैसे छापें या WhatsApp पर भेजें",
    steps: [
      "बिल बनने के बाद वो अपने आप खुल जाता है",
      "ऊपर 'प्रिंट करें' बटन दबाएं",
      "अगर प्रिंटर लगा है तो सीधे छप जाएगा",
      "मोबाइल पर हैं तो PDF बन जाएगी — उसे WhatsApp या Email पर भेज सकते हैं",
      "पुराना बिल छापने के लिए 'बिल' सूची में जाकर उस बिल पर दबाएं",
    ],
  },
  {
    title: "📱 मोबाइल और कंप्यूटर दोनों पर कैसे चलाएं",
    steps: [
      "यह software मोबाइल, tablet और computer — तीनों पर चलता है",
      "किसी भी browser (Chrome, Firefox) में hardware.nishantsoftwares.in खोलें",
      "Gmail से Login करें — एक ही खाते से सब जगह काम करेगा",
      "मोबाइल पर ग्राहक के पास खड़े होकर बिल बनाएं",
      "दुकान पर बैठे-बैठे computer पर GST रिपोर्ट देखें",
      "सारा डेटा एक ही जगह रहता है — कहीं से भी देख सकते हैं",
    ],
  },
  {
    title: "🔒 दुकान मालिक और काउंटर बॉय को अलग-अलग access कैसे दें",
    steps: [
      "पहली बार आप (मालिक) Gmail से Login करें — आपको पूरा access मिल जाता है",
      "काउंटर बॉय के लिए — सेटिंग्स में जाकर उसका 4 अंक का PIN सेट करें",
      "काउंटर बॉय लॉगिन पेज पर 'PIN Login' दबाएगा",
      "Clinic ID और 4 अंक का PIN डालेगा — वो अंदर आ जाएगा",
      "काउंटर बॉय को सिर्फ बिल बनाने का access मिलेगा",
      "GST रिपोर्ट, मुनाफा, ख़रीद के रेट — यह सब सिर्फ मालिक को दिखेगा",
    ],
  },
  {
    title: "❓ कोई दिक्कत आए तो क्या करें",
    steps: [
      "तुरंत इस नंबर पर WhatsApp करें — 9996865069",
      "अपनी दिक्कत लिखें या screenshot भेजें",
      "हम तुरंत जवाब देंगे",
      "अगर बड़ी समस्या है तो phone call भी कर सकते हैं",
      "सुबह 9 बजे से रात 9 बजे तक सपोर्ट मिलेगा",
    ],
  },
];
export default function HardwarePage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [plan, setPlan] = useState("new");
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    if (!form.name || !form.phone) {
      alert("नाम और फोन नंबर जरूरी है");
      return;
    }
    setLoading(true);
    try {
      const orderRes = await fetch("/api/razorpay/hardware", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: PLANS[plan].amount, plan, ...form }),
      });
      const order = await orderRes.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "निशांत हार्डवेयर सॉफ्टवेयर",
        description: PLANS[plan].label,
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch("/api/razorpay/hardware/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              ...form,
              plan: PLANS[plan].label,
            }),
          });
          const data = await verifyRes.json();
          if (data.success) {
            alert(
              "Payment सफल! हम जल्द activate करेंगे। WhatsApp पर confirm आएगा।",
            );
          } else {
            alert("कुछ गलत हुआ। WhatsApp करें।");
          }
        },
        prefill: { name: form.name, contact: form.phone, email: form.email },
        theme: { color: "#1d4ed8" },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch {
      alert("कुछ गलत हुआ। दोबारा कोशिश करें।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <main className="min-h-screen bg-white text-gray-900 font-sans">
        {/* संपर्क पट्टी */}
        <div className="bg-amber-500 py-2 px-4 text-center text-base font-bold text-white flex flex-col sm:flex-row justify-center items-center gap-3">
          <a href="tel:+919996865069" className="hover:underline">
            📞 9996865069
          </a>
          <span className="hidden sm:inline">|</span>
          <a
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            💬 व्हाट्सएप
          </a>
        </div>

        {/* नेवबार */}
        <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="font-extrabold text-white text-xl">
              🖥️ <span className="text-amber-400">निशांत</span> सॉफ्टवेयर
            </a>
            <a
              href="/"
              className="text-sm text-gray-400 hover:text-white border border-gray-700 px-3 py-1.5 rounded-lg transition"
            >
              ← सभी उत्पाद
            </a>
          </div>
        </nav>

        {/* हीरो सेक्शन */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-white/20 text-white text-base font-bold px-5 py-1.5 rounded-full mb-5">
              🆓 ७ दिन बिल्कुल मुफ्त — कोई कार्ड नहीं
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              🔧 निशांत हार्डवेयर प्रो
              <br />
              <span className="text-blue-200">दुकान प्रबंधन</span>
            </h1>
            <p className="text-xl mb-3 font-semibold text-blue-100">
              हार्डवेयर की दुकान के लिए बना — बिल, स्टॉक, उधारी, जीएसटी सब एक
              जगह।
            </p>
            <p className="text-base mb-10 text-blue-200/80">
              हार्डवेयर · सेनेटरी · रंग · बिजली · पाइप-फिटिंग
            </p>
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                <a
                  href={HARDWARE_EXE_URL}
                  className="inline-block bg-white text-blue-700 font-extrabold text-xl px-10 py-4 rounded-2xl shadow-xl hover:bg-blue-50 transition"
                >
                  🖥️ विंडोज पर डाउनलोड करें
                </a>
                <a
                  href={HARDWARE_PWA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-extrabold text-xl px-10 py-4 rounded-2xl shadow-2xl hover:from-green-300 hover:to-emerald-400 transition active:scale-95"
                >
                  <span className="text-3xl">📲</span>
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-xs font-semibold opacity-80 uppercase tracking-widest">
                      मोबाइल ऐप
                    </span>
                    <span>अभी इंस्टॉल करें — मुफ्त</span>
                  </span>
                </a>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-center max-w-sm">
                <p className="text-white font-bold text-base mb-1">
                  📱 मोबाइल पर इंस्टॉल कैसे करें?
                </p>
                <p className="text-blue-200 text-sm">
                  ऊपर हरा बटन दबाओ → Chrome में खुलेगा → नीचे{" "}
                  <strong>"होम स्क्रीन पर जोड़ें"</strong> दबाओ → बस हो गया!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* विंडोज इंस्टॉल निर्देश */}
        <section className="py-8 px-4 bg-yellow-50 border-b-4 border-yellow-400">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow">
            <p className="text-xl font-extrabold text-gray-800 mb-3">
              ⚠️ विंडोज पर इंस्टॉल करते समय यह संदेश आ सकता है
            </p>
            <p className="text-base text-gray-600 mb-4">
              विंडोज 11 में <strong>Smart App Control</strong> नाम की सुरक्षा
              होती है जो नए सॉफ्टवेयर को रोकती है। घबराएं नहीं — यह सॉफ्टवेयर
              पूरी तरह सुरक्षित है।
            </p>
            <p className="text-base font-extrabold text-gray-800 mb-3">
              इस तरह ठीक करें — बस ५ काम करने हैं:
            </p>
            <ol className="text-base text-gray-700 space-y-2">
              <li>
                १. स्टार्ट बटन दबाओ और <strong>Windows Security</strong> लिखकर
                खोजो
              </li>
              <li>
                २. <strong>App &amp; browser control</strong> पर क्लिक करो
              </li>
              <li>
                ३. <strong>Smart App Control</strong> को <strong>Off</strong>{" "}
                करो
              </li>
              <li>४. अब .exe फाइल दोबारा चलाओ — इंस्टॉल हो जाएगा</li>
              <li>
                ५. इंस्टॉल होने के बाद Smart App Control वापस On कर सकते हो
              </li>
            </ol>
            <p className="text-sm text-gray-400 mt-4">
              कोई दिक्कत हो तो व्हाट्सएप करो —{" "}
              <a
                href="https://wa.me/919996865069"
                className="text-green-600 underline font-semibold"
              >
                9996865069
              </a>
            </p>
          </div>
        </section>

        {/* खासियतें */}
        <section className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center mb-1 text-blue-400">
              क्या-क्या मिलेगा
            </h2>
            <p className="text-center text-gray-400 text-base mb-8">
              हार्डवेयर, सेनेटरी, रंग, बिजली की दुकानों के लिए
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-blue-500/20 rounded-xl px-5 py-4"
                >
                  <div className="text-blue-400 font-semibold text-base">
                    ✦ {f.hi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* कैसे शुरू करें */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-center mb-1 text-gray-800">
              कैसे शुरू करें
            </h2>
            <p className="text-center text-gray-500 text-base mb-8">
              बस ४ काम करने हैं — 5 मिनट में दुकान तैयार
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {howTo.map((h) => (
                <div
                  key={h.step}
                  className="bg-white border border-blue-200 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="text-3xl mb-2">{h.icon}</div>
                  <div className="text-sm text-blue-600 font-extrabold mb-1">
                    {h.step}
                  </div>
                  <div className="font-extrabold text-gray-800 text-sm mb-2">
                    {h.hi}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    {h.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* उपयोग पुस्तिका */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-3xl p-8 text-center mb-10 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                📖 उपयोग पुस्तिका
              </h2>
              <p className="text-blue-100 text-lg font-semibold">
                हर काम आसान हिंदी में — एक-एक कदम समझाया गया है
              </p>
              <p className="text-blue-200 text-sm mt-2">
                यह पुस्तिका दिखाकर आप ग्राहक को software चलाना सिखा सकते हैं
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {manual.map((k, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-extrabold text-blue-800 mb-5 pb-3 border-b-2 border-blue-100">
                    {k.title}
                  </h3>
                  <ol className="space-y-4">
                    {k.steps.map((s, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-base font-extrabold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                          {j + 1}
                        </span>
                        <span className="text-gray-900 text-lg leading-relaxed font-semibold">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            {/* सहायता बॉक्स */}
            <div className="mt-8 bg-green-50 border-2 border-green-400 rounded-2xl p-5 text-center">
              <p className="font-extrabold text-gray-800 text-base mb-2">
                कोई दिक्कत आए तो तुरंत बताओ
              </p>
              <a
                href="https://wa.me/919996865069"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-extrabold px-6 py-3 rounded-xl text-base hover:bg-green-600 transition"
              >
                💬 WhatsApp — 9996865069
              </a>
            </div>
          </div>
        </section>

        {/* कीमत + भुगतान */}
        <section className="py-12 px-4 bg-blue-50">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-extrabold text-center mb-2 text-gray-800">
              कीमत और भुगतान
            </h2>
            <p className="text-center text-gray-500 text-base mb-6">
              सीधे यहाँ से खरीदो — UPI, कार्ड, नेट बैंकिंग सब चलेगा
            </p>

            <div className="bg-white rounded-3xl shadow-lg p-6">
              {/* Plan चुनो */}
              <div className="flex gap-3 mb-6">
                {Object.entries(PLANS).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setPlan(key)}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm border-2 transition ${
                      plan === key
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {key === "new" ? "नया" : "नवीनीकरण"}
                    <br />
                    <span className="text-lg font-extrabold">
                      ₹{val.amount}
                    </span>
                  </button>
                ))}
              </div>

              {/* फॉर्म */}
              <div className="space-y-3 mb-6">
                <input
                  type="text"
                  placeholder="नाम *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base outline-none focus:border-blue-400"
                />
                <input
                  type="tel"
                  placeholder="फोन नंबर *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base outline-none focus:border-blue-400"
                />
                <input
                  type="email"
                  placeholder="Email (वैकल्पिक)"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base outline-none focus:border-blue-400"
                />
              </div>

              <button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-blue-600 text-white font-extrabold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 text-lg mb-3"
              >
                {loading
                  ? "Processing..."
                  : `₹${PLANS[plan].amount} — अभी भुगतान करें`}
              </button>

              <a
                href="https://wa.me/919996865069"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white font-extrabold py-3 rounded-xl hover:bg-green-600 transition text-base"
              >
                💬 WhatsApp पर बात करके खरीदें
              </a>
            </div>
          </div>
        </section>

        {/* नीचे CTA */}
        <section className="bg-blue-700 py-12 px-4 text-center text-white">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-2">
              आज ही शुरू करो — बिल्कुल मुफ्त
            </h2>
            <p className="text-blue-200 mb-6 text-base">
              7 दिन पूरी तरह मुफ्त — कोई कार्ड नहीं, कोई वादा नहीं
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href={HARDWARE_EXE_URL}
                className="bg-white text-blue-700 font-extrabold px-8 py-3 rounded-2xl hover:bg-blue-50 transition text-base"
              >
                🖥️ विंडोज पर डाउनलोड करें
              </a>
              <a
                href={HARDWARE_PWA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-white font-extrabold px-8 py-3 rounded-2xl hover:from-green-300 hover:to-emerald-400 transition text-base flex items-center gap-2"
              >
                📲 मोबाइल ऐप — अभी इंस्टॉल करें
              </a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-base font-semibold">
              <a href="tel:+919996865069" className="hover:underline">
                📞 9996865069
              </a>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://wa.me/919996865069"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                💬 व्हाट्सएप
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
