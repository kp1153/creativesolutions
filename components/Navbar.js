"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-zinc-900 text-white border-b border-zinc-700">
      <div className="text-center py-3">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white hover:text-yellow-400 transition">
          🖥️ Nishant Softwares
        </Link>
      </div>
    </header>
  );
}