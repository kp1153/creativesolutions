export default function CallToAction() {
  const offerings = [
    {
      icon: "💻",
      title: "Portfolio Websites",
      description: "Next.js 16 with modern design",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🚀",
      title: "Fast Deployment",
      description: "Live on Vercel/Digital Ocean",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "✍️",
      title: "Quality Content",
      description: "Meaningful, AI-free writing",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Build Your Professional Website?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            आपके कारोबार का मॉडल दूसरों से अलग किस तरह से है। आप ऐसा क्या दे रहे हैं, जो दूसरे नहीं दे पा रहे हैं। अगर यह बात बताने के लिए आप वेबसाइट बनवाना चाह रहे हैं तो आप सही जगह आ चुके हैं।
          </p>
        </div>

        {/* Philosophy Box */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
            हम जमाने-बाजार और जिंदगी की गहरी समझ से युक्त हैं और इस समझ को व्यक्त करने के लिए हमारे पास जरूरी भाषाई क्षमता भी है। गाँव के हैं तो बिंबों में भी चीजों को प्रस्तुत कर सकते हैं, लॉजिक-साइंस तो खैर है ही। अमूर्तन में जाना तो कोई हमसे सीखे। 
            <span className="font-bold text-indigo-700"> आइए मिलकर कुछ अलग बनाते हैं!</span>
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {offerings.map((offer, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-indigo-300"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${offer.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{offer.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {offer.title}
              </h4>
              <p className="text-sm text-gray-600">
                {offer.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border-2 border-indigo-200">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Let's Collaborate!
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            
              href="https://wa.me/919996865069"
              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="text-2xl">📱</span>
              <span>WhatsApp: +91-9996865069</span>
            </a>

            
              href="mailto:prasad.kamta@gmail.com"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl font-semibold"
            >
              <span className="text-2xl">✉️</span>
              <span>prasad.kamta@gmail.com</span>
            </a>
          </div>

          <div className="text-center mb-8">
            
              href="https://www.hamaramorcha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">🌐</span>
              <span className="border-b-2 border-indigo-300 group-hover:border-indigo-600">
                Visit: www.hamaramorcha.com
              </span>
            </a>
          </div>

          {/* Quick Response Guarantee */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <p className="text-base md:text-lg leading-relaxed">
              <strong className="text-xl">⚡ Quick Response Guaranteed:</strong><br/>
              आपके message का reply 24 hours में मिल जाएगा। Website development से लेकर content creation तक - सब कुछ professional quality के साथ।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}