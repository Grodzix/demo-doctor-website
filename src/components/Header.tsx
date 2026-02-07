"use client";

import { useState } from "react";
import { Menu, X, Heart, CalendarCheck } from "lucide-react";

const navLinks = [
  { label: "O nas", href: "/#o-nas" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "Lekarze", href: "/#lekarze" },
  { label: "Opinie", href: "/#opinie" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white transition-all duration-300 group-hover:bg-red-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/30">
                <Heart className="h-5 w-5 transition-all duration-300 group-hover:fill-white group-hover:animate-[heartbeat_0.6s_ease-in-out_infinite]" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Med<span className="text-primary-500 transition-colors duration-300 group-hover:text-red-500">Care</span>
              </span>
            </a>
            <span className="hidden md:inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[11px] font-medium text-primary-600 leading-tight">
              Strona demonstracyjna &mdash; dane przykładowe
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="/#kontakt"
            className="group/cta relative hidden md:inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30"
          >
            {/* Shine sweep */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/cta:translate-x-full transition-transform duration-700 ease-in-out" />
            <span className="relative flex items-center gap-2.5">
              <span className="relative">
                <CalendarCheck className="h-4.5 w-4.5 transition-transform duration-500 group-hover/cta:rotate-[360deg]" />
                {/* Ping dot */}
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300" />
                </span>
              </span>
              Umów wizytę
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-gray-600 rounded-lg hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 text-center rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
            >
              Umów wizytę
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
