"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-soft py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="max-w-8xl mx-auto section-padding flex items-center justify-between">
        <a href="#home" className="flex items-center shrink-0">
          <Image
            src="/images/mihaela-logo.jpg"
            alt="Mihaela Perelighin"
            width={170}
            height={72}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-navy-800 hover:text-sage-600 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center rounded-md bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-6 py-3 transition-colors shadow-soft"
        >
          Book Free Call
        </a>

        <button
          className="lg:hidden text-navy-800 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100 shadow-soft">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-semibold text-navy-800 hover:text-sage-600 transition-colors border-b border-navy-50 last:border-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center rounded-md bg-sage-600 hover:bg-sage-700 text-white text-sm font-semibold px-6 py-3 transition-colors"
              >
                Book Free Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
