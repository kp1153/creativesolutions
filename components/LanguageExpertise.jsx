export default function LanguageExpertise() {
  const languageQualities = [
    {
      title: "हिंदी पत्रकारिता",
      description: "दशकों का अनुभव और विभिन्न विषयों की गहरी समझ",
      icon: "📰",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "उर्दू की कामचलाऊ समझ",
      description:
        "लखनऊ प्रवास के दौरान मस्जिद में नमाज पढ़ाने वाले कारी साहब से सीखी बोलचोल वाली उर्दू",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "अनुवाद में महारत",
      description:
        "अंग्रेजी से हिंदी में किया बेहिसाब अनुवाद, जिसमें कई पुस्तकों का अनुवाद भी शामिल है",
      icon: "🔄",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "विषय की व्यापकता",
      description: "कविता से न्यूक्लियर फिजिक्स तक",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI-मुक्त भाषा",
      description: "स्वाभाविक और अर्थपूर्ण प्रस्तुति",
      icon: "✍️",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "पाठक-केंद्रित प्रस्तुति",
      description: "Website copy जो दिल को छू लेती है",
      icon: "❤️",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            भाषाई खूबियाँ
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            तीन दशकों के अनुभव से निखरी भाषाई कला, जो आपकी वेबसाइट को अलग पहचान
            दिलाती है
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {languageQualities.map((quality, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-4">
                {/* Icon with Gradient Background */}
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${quality.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-4xl">{quality.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {quality.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {quality.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-amber-200">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <span className="text-3xl">💡</span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Choose Language-First Approach?
            </h4>

            <p className="text-lg text-gray-700 leading-relaxed">
              आज के AI युग में भी, मनुष्य द्वारा रची गई भाषा अपना अलग ही स्थान
              रखती है, चौंक-चमत्कार से दूर हटकर सर्जक अपने टार्गेट रीडर को ध्यान
              में रखकर कांटेंट क्रिएट करता है।
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="bg-amber-100 rounded-full px-6 py-2 text-sm font-semibold text-amber-800">
                🎨 Creative Writing
              </div>
              <div className="bg-orange-100 rounded-full px-6 py-2 text-sm font-semibold text-orange-800">
                📖 Translation Expert
              </div>
              <div className="bg-yellow-100 rounded-full px-6 py-2 text-sm font-semibold text-yellow-800">
                ✨ Authentic Content
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
