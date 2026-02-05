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
  ];

  return (
    <nav className="bg-white border-b border-gray-200 backdrop-blur-sm bg-white/95">
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
        </div>

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