"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const whatsappNumber = "919996865069";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="bg-white shadow-md">
      {/* 🔄 Top Bar: Left + Right aligned content */}
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <div className="flex justify-between items-center mb-2 text-sm text-gray-700">
          {/* ⬅️ Left Side: Hosting Message */}
          <div className="font-black text-pink-700">
            वर्सेल पर होस्टिंग-डोमेन ज़िंदगी भर के लिए फ्री
          </div>

          {/* ➡️ Right Side: Contact Info */}
          <div className="flex items-center space-x-4">
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
                {/* ...icon path... */}
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
        <h1 className="text-6xl font-bold tracking-wide text-amber-600">
          web-developer-kp
        </h1>
      </div>

      {/* 🔽 Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center">
        <ul className="flex flex-wrap justify-center gap-6 text-gray-700 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          <li>
            <Link href="/why-us">Why Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
