"use client";

import Link from "next/link";

const Navbar = () => {
  const whatsappNumber = "919996865069";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="bg-white shadow-md">
      {/* 🔄 Top Bar: Left + Right aligned content */}
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-700">
          {/* ⬅️ Left Side: Hosting Message */}
          <div className="font-black text-pink-700">
            होस्टिंग वर्सेल पर, अभी के लिए मुफ्त
          </div>

          {/* ➡️ Right Side: Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-600 transition-colors duration-300"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 mr-1 fill-current text-green-500"
              >
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.826.735 5.482 2.024 7.784L.057 31.191l7.613-1.995A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.334c-2.548 0-4.948-.709-6.988-1.94l-.502-.298-5.194 1.362 1.387-5.068-.327-.52A13.265 13.265 0 012.667 16c0-7.364 5.97-13.334 13.333-13.334S29.333 8.636 29.333 16 23.363 29.334 16 29.334zm7.317-9.988c-.4-.2-2.37-1.169-2.738-1.303-.367-.133-.634-.2-.901.2-.267.4-1.034 1.303-1.268 1.57-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.189-1.06-1.991-2.368-2.224-2.768-.233-.4-.025-.617.176-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.901-2.17-1.234-2.97-.325-.78-.655-.674-.901-.687-.233-.012-.5-.015-.767-.015s-.7.1-1.067.5c-.367.4-1.401 1.37-1.401 3.34s1.434 3.874 1.634 4.141c.2.267 2.822 4.308 6.837 6.043.955.413 1.701.66 2.282.845.959.305 1.832.262 2.522.159.77-.115 2.37-.969 2.704-1.905.334-.936.334-1.738.234-1.905-.1-.167-.367-.267-.767-.467z" />
              </svg>
              9996865069
            </a>
            <span>|</span>
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              prasad.kamta@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* 🔷 Branding Heading */}
      <div className="text-center bg-white py-3">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-amber-600">
          web-developer-kp
        </h1>
      </div>

      {/* 🔽 Navigation with Hash Links */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-700 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-amber-600 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#tech-stack"
              className="hover:text-amber-600 transition-colors duration-300"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              href="#work-process"
              className="hover:text-amber-600 transition-colors duration-300"
            >
              Work Process
            </a>
          </li>
          <li>
            <a
              href="#language"
              className="hover:text-amber-600 transition-colors duration-300"
            >
              Language
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-amber-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
