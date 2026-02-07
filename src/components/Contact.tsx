"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "ul. Zdrowia 12, 00-001 Warszawa",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+48 123 456 789",
    href: "tel:+48123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kontakt@medcare.pl",
    href: "mailto:kontakt@medcare.pl",
  },
];

const hours = [
  { day: "Poniedziałek - Piątek", time: "8:00 - 20:00" },
  { day: "Sobota", time: "9:00 - 14:00" },
  { day: "Niedziela", time: "Nieczynne" },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Kontakt
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Skontaktuj się z nami
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Masz pytania? Chcesz umówić wizytę? Napisz do nas lub zadzwoń.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jan Kowalski"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+48 000 000 000"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="jan@example.com"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Opisz czego dotyczy Twoje zapytanie..."
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="group/btn relative w-full sm:w-auto overflow-hidden rounded-lg bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95 transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative">Wyślij wiadomość</span>
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-gray-900 hover:text-primary-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-gray-900">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Opening hours */}
            <div className="rounded-2xl bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary-500" />
                <h3 className="text-sm font-semibold text-gray-900">
                  Godziny otwarcia
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-gray-600">{h.day}</span>
                    <span
                      className={`font-medium ${h.time === "Nieczynne" ? "text-red-500" : "text-gray-900"}`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
