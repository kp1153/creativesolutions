export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-6 text-sm leading-relaxed">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Section: Brand & Quick Info */}
        <div className="text-center mb-10 pb-8 border-b border-gray-700">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-3">
            web-developer-kp
          </h3>
          <p className="text-gray-400 text-base">
            Next.js 16 & Laravel Specialist | PHP Developer | Content Writer | Translator
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          
          {/* Hindi Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🇮🇳</span>
              </div>
              <h4 className="text-xl font-bold text-amber-400">हिंदी</h4>
            </div>
            
            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                <strong className="text-white">हमारा मोर्चा</strong> के संचालक और कार्यकारी संपादक <strong className="text-amber-400">कामता प्रसाद</strong> Next.js और Laravel दोनों पर वेबसाइट बनाने का काम करते हैं और यही उनकी आजीविका का जरिया है।
              </p>
              <p>
                हमारा मोर्चा को बनाने के लिए उन्होंने HTML, CSS और JavaScript सीखी। फिर Tailwind CSS, React.js, Node.js पर हाथ साफ किया और Next.js 16 की जमकर प्रैक्टिस की। साथ ही PHP और Laravel में भी महारत हासिल की है।
              </p>
              <p>
                <strong className="text-red-400">Laravel (PHP Framework):</strong> जिन लोगों की वेबसाइटें पहले से WordPress पर बनी हैं और ढेर सारा डेटा है, उनके लिए Laravel सबसे बेहतरीन समाधान है। PHP-based होने के कारण WordPress से Laravel में migration आसान हो जाता है।
              </p>
              <p>
                चूँकि कामता प्रसाद हिंदी-अंग्रेजी के अलावा उर्दू भी जानते हैं तो कांटेंट राइटिंग में भी आप उनसे मदद ले सकते हैं।
              </p>
              <p>
                <strong className="text-green-400">Next.js</strong> पर बनी वेबसाइट वर्सेल पर मुफ्त में होस्ट हो सकती है। <strong className="text-red-400">Laravel</strong> की होस्टिंग Digital Ocean पर ₹400-800/महीना में मिल जाती है, जो WordPress की तुलना में बहुत सस्ती और सुरक्षित है।
              </p>
            </div>
          </div>

          {/* English Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🇬🇧</span>
              </div>
              <h4 className="text-xl font-bold text-blue-400">English</h4>
            </div>
            
            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                The editor and executive director of <strong className="text-white">Hamara Morcha</strong>, <strong className="text-blue-400">Kamta Prasad</strong>, builds websites using both Next.js and Laravel, which are his source of livelihood.
              </p>
              <p>
                To create Hamara Morcha, he learned HTML, CSS, and JavaScript. Then he mastered Tailwind CSS, React.js, and Node.js, followed by intensive practice on Next.js 16. He has also gained expertise in PHP and Laravel framework.
              </p>
              <p>
                <strong className="text-red-400">Laravel (PHP Framework):</strong> For those whose websites are already built on WordPress with lots of existing data, Laravel offers the best migration solution. Being PHP-based, transitioning from WordPress to Laravel becomes easier and more efficient.
              </p>
              <p>
                Since Kamta Prasad knows Hindi, English, and Urdu, you may also seek his assistance in content writing and translation work.
              </p>
              <p>
                <strong className="text-green-400">Next.js</strong> websites can be hosted for free on Vercel. <strong className="text-red-400">Laravel</strong> hosting is available on Digital Ocean for ₹400-800/month, which is much cheaper and more secure compared to WordPress hosting.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Highlight */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚡</span>
              <h5 className="text-lg font-bold text-green-400">Next.js 16</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Modern full-stack framework | Free Vercel hosting | Perfect for new projects
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔴</span>
              <h5 className="text-lg font-bold text-red-400">Laravel + PHP</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Enterprise PHP framework | WordPress migration | Affordable hosting (₹400-800/mo)
            </p>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 mb-8">
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-bold text-white mb-4">📞 संपर्क करें | Contact</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-300">
              <a href="mailto:prasad.kamta@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <span className="text-xl">✉️</span>
                <span>prasad.kamta@gmail.com</span>
              </a>
              <span className="hidden md:block text-gray-600">|</span>
              <a href="https://wa.me/919996865069" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                <span className="text-xl">📱</span>
                <span>+91-9996865069</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">web-developer-kp</span> | Built with Next.js 16, Laravel & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}