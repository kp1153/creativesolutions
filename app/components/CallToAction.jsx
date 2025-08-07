export default function CallToAction() {
  return (
    <section className="bg-white text-blue-700 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Your Professional Website?
        </h2>
        <p className="text-lg text-blue-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          आपके कारोबार का मॉडल दूसरों से अलग किस तरह से है। आप ऐसा क्या दे रहे
          हैं, जो दूसरे नहीं दे पा रहे हैं। अगर यह बात बताने के लिए आप वेबसाइट
          बनवाना चाह रहे हैं तो आप सही जगह आ चुके हैं। हम जमाने-बाजार और जिंदगी
          की गहरी समझ से युक्त हैं और इस समझ को व्यक्त करने के लिए हमारे पास
          जरूरी भाषाई क्षमता भी है। गाँव के हैं तो बिंबों में भी चीजों को
          प्रस्तुत कर सकते हैं, लॉजिक-साइंस तो खैर है ही। अमूर्तन में जाना तो
          कोई हमसे सीखे। आइए मिलकर कुछ अलग बनाते हैं!
        </p>

        <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
          <h3 className="text-xl font-semibold mb-6">What I Offer:</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">💻</div>
              <h4 className="font-semibold mb-2">Portfolio Websites</h4>
              <p className="text-sm text-blue-600">
                Next.js 15.4 with modern design
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">Fast Deployment</h4>
              <p className="text-sm text-blue-600">
                Live on Vercel/Digital Ocean
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">✍️</div>
              <h4 className="font-semibold mb-2">Quality Content</h4>
              <p className="text-sm text-blue-600">
                Meaningful, AI-free writing
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Let's Collaborate!</h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919996865069"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              📱 WhatsApp: +91-9996865069
            </a>

            <a
              href="mailto:prasad.kamta@gmail.com"
              className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-2 border border-blue-300"
            >
              ✉️ prasad.kamta@gmail.com
            </a>
          </div>

          <div className="mt-6">
            <a
              href="https://www.hamaramorcha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-medium"
            >
              🌐 Visit: www.hamaramorcha.com
            </a>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-300">
          <p className="text-sm text-blue-700">
            <strong>Quick Response Guaranteed:</strong> आपके message का reply 24
            hours में मिल जाएगा। Website development से लेकर content creation तक
            - सब कुछ professional quality के साथ।
          </p>
        </div>
      </div>
    </section>
  );
}
