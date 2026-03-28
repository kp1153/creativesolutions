"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Eye, Menu, X, ChevronDown, ChevronUp } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/payment", label: "Payment" },
  { href: "https://pdf-invoice-generator.com", label: "Free Invoice Generator", external: true },
];

const softwares = [
  { href: "/erpbridge",  icon: "📊", label: "ERPBridge",   sub: "Business Intelligence",   color: "text-yellow-400" },
  { href: "/dental",     icon: "🦷", label: "Dental Pro",  sub: "Clinic Management",        color: "text-green-400" },
  { href: "/hardware",   icon: "🔧", label: "Hardware Pro", sub: "Shop Management",         color: "text-blue-400" },
  { href: "/school",     icon: "🏫", label: "School Pro",  sub: "School Management",        color: "text-indigo-400" },
  { href: "/ration",     icon: "🏪", label: "Ration Pro",  sub: "राशन दुकान",              color: "text-orange-400" },
  { href: "/pharma",     icon: "💊", label: "Pharma Pro",  sub: "Medical Store",            color: "text-red-400" },
  { href: "/heera",      icon: "💎", label: "Heera Pro",   sub: "हीरा उद्योग",             color: "text-cyan-400" },
  { href: "/clinic",     icon: "🏥", label: "Clinic Pro",  sub: "सामान्य क्लिनिक",        color: "text-teal-400" },
  { href: "/legal",      icon: "⚖️", label: "Legal Pro",   sub: "वकीलों के लिए",          color: "text-purple-400" },
  { href: "/hotel",      icon: "🏨", label: "Hotel Pro",   sub: "Hotel Management",         color: "text-pink-400" },
];

export default function Navbar() {
  const [views, setViews] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);

  useEffect(() => {
    fetch("/api/views")
      .then((r) => r.json())
      .then((d) => setViews(d.views))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeAll = () => {
    setDrawerOpen(false);
    setSoftwareOpen(false);
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-600">
          <div className="flex items-center gap-4">
            <a href="tel:+919996865069" className="flex items-center gap-1 hover:text-gray-900 transition">
              <Phone size={12} className="text-green-500" />
              <span>9996865069</span>
            </a>
            <a href="mailto:prasad.kamta@gmail.com" className="hidden sm:flex items-center gap-1 hover:text-gray-900 transition">
              <Mail size={12} className="text-blue-500" />
              <span>prasad.kamta@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {views !== null && (
              <span className="flex items-center gap-1 text-gray-400">
                <Eye size={12} />
                {views.toLocaleString()}
              </span>
            )}
            <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-600 hover:text-green-700 font-medium">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" onClick={closeAll}>
            <Image src="/logo.jpg" alt="Web Developer KP" width={200} height={60} priority
              className="h-12 w-auto object-contain" />
          </Link>
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
            aria-label="Menu">
            {drawerOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={closeAll}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 max-w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-bold text-gray-800 text-base">Menu</span>
          <button onClick={closeAll} className="p-1.5 rounded-lg hover:bg-gray-100 transition">
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="flex-1 overflow-y-auto">
          
          {/* Nav links */}
          <div className="px-4 py-3 border-b border-gray-100">
            {navLinks.map((link) =>
              link.external ? (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  onClick={closeAll}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition text-sm font-medium">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} onClick={closeAll}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition text-sm font-medium">
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Softwares section */}
          <div className="px-4 py-3">
            <button
              onClick={() => setSoftwareOpen(!softwareOpen)}
              className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-gray-800 hover:bg-gray-50 transition text-sm font-bold">
              <span>🖥️ Our Softwares (10)</span>
              {softwareOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {softwareOpen && (
              <div className="mt-1 space-y-1">
                {softwares.map((s) => (
                  <Link key={s.href} href={s.href} onClick={closeAll}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition">
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <div className={`text-sm font-semibold ${s.color}`}>{s.label}</div>
                      <div className="text-xs text-gray-400">{s.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Drawer footer */}
        <div className="px-5 py-4 border-t border-gray-100 space-y-2">
          <a href="tel:+919996865069"
            className="flex items-center justify-center gap-2 w-full bg-green-500 text-white font-bold py-2.5 rounded-xl text-sm hover:bg-green-600 transition">
            <Phone size={16} /> 9996865069
          </a>
          <a href="https://wa.me/919996865069" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-100 text-green-700 font-bold py-2.5 rounded-xl text-sm hover:bg-green-200 transition">
            💬 WhatsApp करें
          </a>
        </div>
      </div>
    </>
  );
}