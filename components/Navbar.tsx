"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-soft bg-white/95 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm"
      } border-b border-gold-100`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[88px] flex items-center justify-between">

        {/* Logo — full width rectangular so MP monogram is fully visible */}
        <a href="/" className="flex items-center group flex-shrink-0">
          <div className="relative" style={{ width: "200px", height: "72px" }}>
            <Image
              src="/images/mihaela-logo.jpg"
              alt="Mihaela Perelighin"
              fill
              className="object-contain object-left" style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-base font-medium text-charcoal-light hover:text-navy-900 transition-colors tracking-wide"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — gold */}
        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white text-base font-semibold px-6 py-3 rounded-md transition-colors shadow-sm"
        >
          Book Free Call
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-charcoal hover:text-navy-900 hover:bg-navy-50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-navy-100 px-4 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-charcoal hover:bg-navy-50 hover:text-navy-900 transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="/#contact"
            className="mt-2 block text-center bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Book Free Discovery Call
          </a>
        </div>
      )}
    </header>
  );
}
