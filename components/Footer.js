import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-6 text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 pb-8 border-b border-gray-700">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-500 mb-3">
            Creative Solutions
          </h3>
          <p className="text-gray-400 text-base">
            Next.js & Laravel Developer | Content Writer | Translator
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <h4 className="text-xl font-bold text-blue-400 mb-4">About Me</h4>

            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                The founder of <strong>Hamara Morcha</strong>,{" "}
                <strong className="text-blue-400">Kamta Prasad</strong>, is a
                professional developer who builds websites using both Next.js
                and Laravel.
              </p>

              <p>
                To create modern websites, I learned HTML, CSS, JavaScript,
                Tailwind CSS, React.js, Node.js, Next.js 16, PHP and Laravel.
              </p>

              <p>
                <strong className="text-red-400">Laravel (PHP Framework):</strong>{" "}
                For people with old WordPress websites and large data, Laravel
                provides the best migration path.
              </p>

              <p>
                Being fluent in English, Hindi, and Urdu, I also provide
                high-quality content writing & translation services.
              </p>

              <p>
                <strong className="text-green-400">Next.js</strong> websites
                host free on Vercel.{" "}
                <strong className="text-red-400">Laravel</strong> hosting costs
                only ₹400–800/month on Digital Ocean.
              </p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
            <h4 className="text-xl font-bold text-amber-400 mb-4">
              Why Choose Me
            </h4>

            <div className="text-gray-300 space-y-3 text-justify">
              <p>
                I combine modern technologies like Next.js, Laravel, Tailwind,
                and MySQL to deliver fast, secure, and future-ready solutions.
              </p>

              <p>
                Every project is built from scratch – no copy-paste themes, no
                useless plugins. Clean, optimized code only.
              </p>

              <p>
                Whether you need a dynamic website, e-commerce platform, news
                portal, or custom business software – I can build it.
              </p>

              <p>
                My priority is long-term support, smooth migration, and
                flawless user experience across all devices.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h5 className="text-lg font-bold text-green-400 mb-2">
              Next.js 16
            </h5>
            <p className="text-gray-300 text-sm">
              Modern full-stack framework | Ultra-fast | SEO friendly | Ideal
              for new websites
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h5 className="text-lg font-bold text-red-400 mb-2">
              Laravel + PHP
            </h5>
            <p className="text-gray-300 text-sm">
              Enterprise-grade framework | Best for WordPress migration |
              Affordable hosting (₹400–800/mo)
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700 mb-8">
          <h4 className="text-2xl font-bold text-white mb-4 text-center">
            Contact
          </h4>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail size={20} />
              <span>prasad.kamta@gmail.com</span>
            </a>

            <a
              href="tel:+919996865069"
              className="flex items-center gap-2 hover:text-green-400 transition-colors"
            >
              <Phone size={20} />
              <span>+91-9996865069</span>
            </a>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={20} />
              <span>Varanasi, UP</span>
            </div>
          </div>
        </div>

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