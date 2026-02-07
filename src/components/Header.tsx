"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Heart, CalendarCheck, Phone } from "lucide-react";

const navLinks = [
  { label: "O nas", href: "/#o-nas" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "Lekarze", href: "/#lekarze" },
  { label: "Opinie", href: "/#opinie" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const closeDrawer = useCallback(() => setMobileOpen(false), []);

  return (
    <>
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
              <span className="rounded-full border border-primary-200 bg-primary-50 px-2 lg:px-3 py-0.5 lg:py-1 text-[9px] lg:text-[11px] font-medium text-primary-600 leading-tight">
                <span className="hidden lg:inline">Strona demonstracyjna &mdash; dane przykładowe</span>
                <span className="lg:hidden">Demo &mdash; dane przykładowe</span>
              </span>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
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
              className="group/cta relative hidden lg:inline-flex items-center gap-2.5 overflow-hidden rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm active:scale-95 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30"
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
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Otwórz menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-visibility ${
          mobileOpen ? "visible" : "invisible delay-300"
        }`}
        aria-modal="true"
        role="dialog"
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
          aria-label="Zamknij menu"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[min(80vw,320px)] bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100">
            <a href="/" onClick={closeDrawer} className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white">
                <Heart className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-gray-900">
                Med<span className="text-primary-500">Care</span>
              </span>
            </a>
            <button
              onClick={closeDrawer}
              className="p-2 -mr-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Zamknij menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-3 py-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className={`flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium text-gray-700 rounded-xl hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 ${
                  mobileOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${75 + i * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Drawer footer */}
          <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3 border-t border-gray-100 bg-gray-50/80">
            <a
              href="/#kontakt"
              onClick={closeDrawer}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600 active:scale-[0.98] transition-all shadow-lg shadow-primary-500/20"
            >
              <CalendarCheck className="h-4.5 w-4.5" />
              Umów wizytę
            </a>
            <a
              href="tel:+48123456789"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              <Phone className="h-4 w-4" />
              +48 123 456 789
            </a>
            <p className="pt-2 text-center text-[10px] text-gray-400">
              Strona demonstracyjna &mdash; dane przykładowe
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
