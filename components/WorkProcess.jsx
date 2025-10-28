export default function WorkProcess() {
  const steps = [
    {
      number: "01",
      title: "प्लानिंग करना",
      icon: "🎯",
      description:
        "सबसे पहले मैं आपकी आवश्यकताओं को समझता हूँ और उसी के अनुसार स्वरूप और अंतर्वस्तु की योजना बनाता हूँ। अगर आप व्यवसाय में नए हैं और कहने-बताने के लिए कुछ खास नहीं हैं तो अपने भाषाई हुनर और रंग-संयोजन की अपनी दक्षता का उपयोग करूँगा। लेकिन अगर आपके पास ठोस उपलब्धियाँ हैं तो उन्हीं के बखान में अपनी सारी ऊर्जा झोंक दूँगा। आप भी बाजार में हैं और हम भी। दुनियादारी सबसे ऊपर, बाकी सब बाद में।",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "वेबसाइट आखिर बनती कैसे है?",
      icon: "💻",
      description:
        "VS Code का उपयोग करके, मैं Next.js के साथ अपने पीसी पर वेबसाइट विकसित करता हूँ, क्लाइंट के बिना कहे ही इसका पूरा ख्याल रखता हूँ कि वेबसाइट मोबाइल के साथ-साथ विभिन्न ब्राउजरों पर भी ढंग से दिखे। अभी हाल ही में माइक्रोसॉफ्ट के एज ब्राउजर पर कलर प्रॉपर्टी के ठीक से नजर नहीं आने का मसला सामने आया था, जिसे मैंने फौरन से पेशतर हल किया।",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "फ्री होस्टिंग के लिए",
      icon: "🚀",
      description:
        "प्रोजेक्ट को GitHub पर पुश किया जाता है और फिर वहाँ से उसे वर्सेल पर कनेक्ट कर दिया जाता है, जिससे होस्टिंग फ्री में मिल सके।",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      title: "लाइव कैसे करते हैं?",
      icon: "✨",
      description:
        "जैसे-जैसे आप नए-नए आइडियाज देते जाते हैं, हम वेबसाइट को उसी के अनुरूप अपडेट करते जाते हैं और वर्सेल उन्हें रियल टाइम में आपको दिखाने लगता है। यही है वर्सेल की महिमा। वैसे, हम डिजिटल ओशन पर भी आपकी वेबसाइट को तैनात कर सकते हैं, अगर आपका बजट इसकी इजाजत देगा तो।",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            काम करने का मेरा ढंग
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            पारदर्शिता सुनिश्चित करना सर्वोपरि लक्ष्य
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-32 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
              )}

              {/* Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:border-gray-300 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left: Number & Icon */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-4xl">{step.icon}</span>
                    </div>
                    <div
                      className={`text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-3">
            पारदर्शी प्रक्रिया, भरोसेमंद परिणाम
          </h3>
          <p className="text-lg text-white/90">
            हर कदम पर आपको पूरी जानकारी, कोई छिपा हुआ खर्च नहीं
          </p>
        </div>
      </div>
    </section>
  );
}
