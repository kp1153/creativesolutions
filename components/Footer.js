export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-6 text-sm leading-relaxed">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-10 pb-8 border-b border-gray-700">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-3">
            Creative Solutions
          </h3>
          <p className="text-gray-400 text-base">
            Next.js & Laravel Developer | Content Writer | Translator
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* English Section LEFT */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🇬🇧</span>
              </div>
              <h4 className="text-xl font-bold text-blue-400">About Me</h4>
            </div>

            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                The founder and editor of{" "}
                <strong className="text-white">Hamara Morcha</strong>,{" "}
                <strong className="text-blue-400">Kamta Prasad</strong>, is a
                professional developer who builds websites using both Next.js
                and Laravel. This work is his full-time profession.
              </p>

              <p>
                To create Hamara Morcha, he learned HTML, CSS, JavaScript, then
                mastered Tailwind CSS, React.js, Node.js, and Next.js 16. He
                also gained strong expertise in PHP and the Laravel framework.
              </p>

              <p>
                <strong className="text-red-400">
                  Laravel (PHP Framework):
                </strong>{" "}
                For people with old WordPress websites and large amounts of
                data, Laravel provides the best migration path since it is also
                PHP-based.
              </p>

              <p>
                Being fluent in English, Hindi, and Urdu, he also provides
                high-quality content writing & translation services.
              </p>

              <p>
                <strong className="text-green-400">Next.js</strong> websites can
                be hosted very cheaply on Vercel.{" "}
                <strong className="text-red-400">Laravel</strong> hosting on
                Digital Ocean costs only ₹400–800/month — far cheaper and more
                secure than WordPress hosting.
              </p>
            </div>
          </div>

          {/* English Section RIGHT (formerly Hindi section) */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🌐</span>
              </div>
              <h4 className="text-xl font-bold text-amber-400">
                Why Choose Me
              </h4>
            </div>

            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                I combine modern technologies like Next.js, Laravel, Tailwind,
                and MySQL to deliver fast, secure, and future-ready digital
                solutions for all types of clients.
              </p>

              <p>
                Every project is built from scratch — no copy-paste themes, no
                useless plugins, no bloated code. Clean, optimized, and highly
                scalable work only.
              </p>

              <p>
                Whether you need a dynamic website, e-commerce platform, news
                portal, mobile application, or custom business software — I can
                build it exactly as per your requirements.
              </p>

              <p>
                My priority is long-term support, smooth migration, and a
                flawless user experience across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚡</span>
              <h5 className="text-lg font-bold text-green-400">Next.js 16</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Modern full-stack framework | Ultra-fast | SEO friendly | Ideal
              for new websites and apps
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔴</span>
              <h5 className="text-lg font-bold text-red-400">Laravel + PHP</h5>
            </div>
            <p className="text-gray-300 text-sm">
              Enterprise-grade PHP framework | Best for migration from WordPress
              | Affordable hosting (₹400–800/mo)
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 mb-8">
          <div className="text-center space-y-4">
            <h4 className="text-2xl font-bold text-white mb-4">📞 Contact</h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-300">
              <a
                href="mailto:prasad.kamta@gmail.com"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <span className="text-xl">✉️</span>
                <span>prasad.kamta@gmail.com</span>
              </a>
              <span className="hidden md:block text-gray-600">|</span>
              <a
                href="https://wa.me/919996865069"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <span className="text-xl">📱</span>
                <span>+91-9996865069</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-amber-400 font-semibold">
              Creative Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
