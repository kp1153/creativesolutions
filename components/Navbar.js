"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail, Eye } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [views, setViews] = useState(null);

  useEffect(() => {
    fetch("/api/views")
      .then((r) => r.json())
      .then((d) => setViews(d.views))
      .catch(() => {});
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-2 border-b border-gray-100 flex items-center justify-between text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <a href="tel:+919996865069" className="flex items-center gap-1 hover:text-gray-900 transition">
              <Phone size={14} className="text-green-500" />
              <span className="hidden sm:inline">9996865069</span>
            </a>
            <a href="mailto:prasad.kamta@gmail.com" className="flex items-center gap-1 hover:text-gray-900 transition">
              <Mail size={14} className="text-blue-500" />
              <span className="hidden sm:inline">prasad.kamta@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {views !== null && (
              <span className="flex items-center gap-1 text-gray-500">
                <Eye size={14} />
                {views.toLocaleString()}
              </span>
            )}
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1 text-green-600 hover:text-green-700 font-medium">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="py-4 flex items-center justify-between md:justify-center">
          <Link href="/" className="flex justify-center">
            <Image src="/logo.jpg" alt="Web Developer KP" width={380} height={140} priority className="max-h-28 w-auto object-contain" />
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded transition" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:block border-t border-gray-200`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-6 py-3 text-sm md:text-base text-gray-700">
            <Link href="/" className="hover:text-gray-900 transition px-4 py-2 md:p-0" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/payment" className="hover:text-gray-900 transition px-4 py-2 md:p-0" onClick={() => setIsOpen(false)}>Payment</Link>
            <a href="https://pdf-invoice-generator.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition px-4 py-2 md:p-0" onClick={() => setIsOpen(false)}>Free Invoice Generator</a>
          </div>
        </div>
      </div>
    </nav>
  );
}