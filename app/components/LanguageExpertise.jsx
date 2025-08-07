export default function QuickStats() {
  const languageQualities = [
    {
      title: "हिंदी पत्रकारिता",
      description: "दशकों का अनुभव और विभिन्न विषयों की गहरी समझ",
      icon: "📰",
    },
    {
      title: "उर्दू की कामचलाऊ समझ",
      description:
        "लखनऊ प्रवास के दौरान मस्जिद में नमाज पढ़ाने वाले कारी साहब से सीखी बोलचोल वाली उर्दू",
      icon: "📚",
    },
    {
      title: "अनुवाद में महारत",
      description:
        "अंग्रेजी से हिंदी में किया बेहिसाब अनुवाद, जिसमें कई पुस्तकों का अनुवाद भी शामिल है",
      icon: "🔄",
    },
    {
      title: "विषय की व्यापकता",
      description: "कविता से न्यूक्लियर फिजिक्स तक",
      icon: "🎯",
    },
    {
      title: "AI-मुक्त भाषा",
      description: "स्वाभाविक और अर्थपू्र्ण प्रस्तुति",
      icon: "✍️",
    },
    {
      title: "पाठक को आसानी से समझ में आने वाली प्रस्तुति",
      description: "Website copy जो दिल को छू लती है",
      icon: "❤️",
    },
  ];

  return (
    <section className="bg-white text-pink-700 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">भाषाई खूबियाँ</h2>
        <p className="text-center text-red-600 mb-12 max-w-3xl mx-auto">
          तीन दशकों के अनुभव से निखरी भाषाई कला, जो आपकी वेबसाइट को अलग पहचान
          दिलाती है
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languageQualities.map((quality, index) => (
            <div
              key={index}
              className="bg-amber-50 text-blue-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-amber-200"
            >
              <div className="text-4xl mb-4">{quality.icon}</div>
              <h3 className="text-lg font-bold mb-3">{quality.title}</h3>
              <p className="text-sm text-sky-900 leading-relaxed">
                {quality.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-amber-100 rounded-lg p-8 max-w-4xl mx-auto border border-amber-300">
            <h4 className="text-xl font-bold mb-4">
              Why Choose Language-First Approach?
            </h4>
            <p className="text-black leading-relaxed">
              आज के AI युग में भी, मनुष्य द्वारा रची गई भाषा अपना अलग ही स्थान
              रखती है, चौंक-चमत्कार से दूर हटकर सर्जक अपने टार्गेट रीडर को ध्यान
              में रखकर कांटेंट क्रिएट करता है।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
