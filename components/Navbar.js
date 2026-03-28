"use client";

import Link from "next/link";

const softwares = [
  { href: "/erpbridge", label: "📊 ERPBridge" },
  { href: "/dental",    label: "🦷 Dental Pro" },
  { href: "/hardware",  label: "🔧 Hardware Pro" },
  { href: "/school",    label: "🏫 School Pro" },
  { href: "/ration",    label: "🏪 Ration Pro" },
  { href: "/pharma",    label: "💊 Pharma Pro" },
  { href: "/heera",     label: "💎 Heera Pro" },
  { href: "/clinic",    label: "🏥 Clinic Pro" },
  { href: "/legal",     label: "⚖️ Legal Pro" },
  { href: "/hotel",     label: "🏨 Hotel Pro" },
];

export default function Navbar() {
  return (
    <header className="bg-zinc-900 text-white border-b border-zinc-700">
      {/* Line 1 — Brand */}
      <div className="text-center py-3 border-b border-zinc-700">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white hover:text-yellow-400 transition">
          🖥️ Nishant Softwares
        </Link>
      </div>

      {/* Line 2 — 10 Softwares */}
      <nav className="px-3 py-2">
        <div className="flex flex-wrap md:flex-nowrap md:justify-center gap-x-1 gap-y-1 overflow-x-auto">
          {softwares.map((s) => (
            <Link key={s.href} href={s.href}
              className="text-xs text-zinc-300 hover:text-yellow-400 transition px-2 py-1 whitespace-nowrap hover:bg-zinc-800 rounded">
              {s.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}