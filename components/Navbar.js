"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "919996865069";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const logoRef = useRef(null);
  const navItemsRef = useRef([]);

  useEffect(() => {
    // Logo entrance animation
    gsap.from(logoRef.current, {
      scale: 0,
      rotation: -360,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
    });

    // Nav items stagger animation
    gsap.from(navItemsRef.current, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  return (
    <header className="bg-white shadow-md relative z-[9999]">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto px-4 pt-2 pb-2">
        <div className="flex flex-col md:flex-row md:justify-end md:items-center text-sm text-gray-700 gap-2">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 gap-2 md:gap-0">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-green-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 mr-1 fill-current text-green-500"
                aria-hidden="true"
              >
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.826.735 5.482 2.024 7.784L.057 31.191l7.613-1.995A15.923 15.923 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.334c-2.548 0-4.948-.709-6.988-1.94l-.502-.298-5.194 1.362 1.387-5.068-.327-.52A13.265 13.265 0 012.667 16c0-7.364 5.97-13.334 13.333-13.334S29.333 8.636 29.333 16 23.363 29.334 16 29.334zm7.317-9.988c-.4-.2-2.37-1.169-2.738-1.303-.367-.133-.634-.2-.901.2-.267.4-1.034 1.303-1.268 1.57-.233.267-.467.3-.867.1-.4-.2-1.688-.622-3.215-1.984-1.189-1.06-1.991-2.368-2.224-2.768-.233-.4-.025-.617.176-.816.18-.18.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.901-2.17-1.234-2.97-.325-.78-.655-.674-.901-.687-.233-.012-.5-.015-.767-.015s-.7.1-1.067.5c-.367.4-1.401 1.37-1.401 3.34s1.434 3.874 1.634 4.141c.2.267 2.822 4.308 6.837 6.043.955.413 1.701.66 2.282.845.959.305 1.832.262 2.522.159.77-.115 2.37-.969 2.704-1.905.334-.936.334-1.738.234-1.905-.1-.167-.367-.267-.767-.467z" />
              </svg>
              9996865069
            </a>
            <span className="hidden md:inline">|</span>
            <a
              href="mailto:prasad.kamta@gmail.com"
              className="hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              prasad.kamta@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-zinc-900 py-6 md:py-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700/20 to-transparent"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
          <div ref={logoRef} className="relative group">
            <div className="absolute inset-0 bg-amber-700/30 blur-xl translate-y-2 group-hover:translate-y-3 transition-transform duration-300"></div>
            <Image
              src="/logo.jpg"
              alt="Creative Solutions Logo"
              width={600}
              height={600}
              className="w-auto h-auto max-w-full object-contain relative z-10 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
              priority
            />
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-amber-700 relative">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-amber-900 blur-sm translate-x-1 translate-y-1">
                Creative Solutions
              </span>
              <span className="relative z-10 bg-gradient-to-br from-amber-600 to-amber-800 bg-clip-text text-transparent drop-shadow-lg">
                Creative Solutions
              </span>
            </span>
          </h1>

          <div className="mt-3 h-1 w-32 bg-gradient-to-r from-transparent via-amber-700 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3 bg-white">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
          <span className="w-6 h-0.5 bg-gray-700 transition-all"></span>
        </button>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:justify-center gap-3 md:gap-6 text-gray-700 font-medium mt-3 md:mt-0`}
        >
          {[
            "Home",
            "Services",
            "Why Us",
            "Tech Stack",
            "Work Process",
            "Language",
            "Contact",
            "Payment",
          ].map((item, index) => (
            <li key={item} ref={(el) => (navItemsRef.current[index] = el)}>
              <Link
                href={
                  item === "Payment"
                    ? "/payment"
                    : `/#${item.toLowerCase().replace(/ /g, "-")}`
                }
                className="block py-2 hover:text-amber-600 transition-all duration-300 hover:scale-110 transform"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
