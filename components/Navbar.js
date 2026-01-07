"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#why-us", label: "Why Us" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#work-process", label: "Work Process" },
    { href: "#language", label: "Language" },
    { href: "#contact", label: "Contact" },
    { href: "/payment", label: "Payment" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-2 border-b border-gray-100 flex items-center justify-between text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919996865069"
              className="flex items-center gap-1 hover:text-gray-900 transition"
            >
              <Phone size={14} className="text-green-500" />
              <span className="hidden sm:inline">9996865069</span>
            </a>
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="flex items-center gap-1 hover:text-gray-900 transition"
            >
              <Mail size={14} className="text-blue-500" />
              <span className="hidden sm:inline">prasad.kamta@gmail.com</span>
            </a>
          </div>
<a
          
            href="https://wa.me/919996865069"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1 text-green-600 hover:text-green-700 font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Logo + Mobile Menu Button - अभिव्यक्ति जैसा */}
        <div className="py-4 flex items-center justify-between md:justify-center">
          <Link href="/" className="flex justify-center">
            <Image
              src="/logo.jpg"
              alt="Web Developer KP"
              width={380}
              height={140}
              priority
              className="max-h-28 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isOpen ? "block" : "hidden"} md:block border-t border-gray-200`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-6 py-3 text-sm md:text-base text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-900 transition px-4 py-2 md:p-0"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}