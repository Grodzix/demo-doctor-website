"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

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

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const e: FormErrors = {};

    // Name: min 3 chars, only letters and spaces
    if (!form.name.trim()) {
      e.name = "Imię i nazwisko jest wymagane";
    } else if (form.name.trim().length < 3) {
      e.name = "Minimum 3 znaki";
    } else if (!/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/.test(form.name.trim())) {
      e.name = "Tylko litery i spacje";
    }

    // Phone: Polish format, digits only (9 digits or +48 prefix)
    const phoneClean = form.phone.replace(/[\s\-()]/g, "");
    if (!phoneClean) {
      e.phone = "Telefon jest wymagany";
    } else if (!/^(\+48)?\d{9}$/.test(phoneClean)) {
      e.phone = "Podaj prawidłowy numer (9 cyfr)";
    }

    // Email
    if (!form.email.trim()) {
      e.email = "Email jest wymagany";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      e.email = "Podaj prawidłowy adres email";
    }

    // Message: min 10 chars
    if (!form.message.trim()) {
      e.message = "Wiadomość jest wymagana";
    } else if (form.message.trim().length < 10) {
      e.message = "Minimum 10 znaków";
    }

    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(
    field: keyof typeof form,
    value: string
  ) {
    // Input masks - block invalid characters
    if (field === "name") {
      // Only letters, spaces, hyphens
      value = value.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]/g, "");
    }
    if (field === "phone") {
      // Only digits, +, spaces, hyphens, parens
      value = value.replace(/[^0-9+\s\-()]/g, "");
    }

    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const inputBase =
    "w-full rounded-lg border px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 focus:outline-none transition-colors";

  if (submitted) {
    return (
      <section id="kontakt" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-lg mx-auto py-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Wiadomość wysłana!
            </h2>
            <p className="mt-3 text-gray-500">
              Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", email: "", message: "" });
              }}
              className="mt-6 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
            >
              Wyślij kolejną wiadomość
            </button>
          </div>
        </div>
      </section>
    );
  }

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
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Imię i nazwisko <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Jan Kowalski"
                    className={`${inputBase} ${errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200"}`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Telefon <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+48 000 000 000"
                    className={`${inputBase} ${errors.phone ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200"}`}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="jan@example.com"
                  className={`${inputBase} ${errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200"}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Wiadomość <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Opisz czego dotyczy Twoje zapytanie..."
                  className={`${inputBase} resize-none ${errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200"}`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group/btn relative w-full sm:w-auto overflow-hidden rounded-lg bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/25 active:scale-95 transition-all duration-300 cursor-pointer"
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

        {/* Map - full width */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6!2d21.012!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ3LjAiTiAyMcKwMDAnNDMuMiJF!5e0!3m2!1spl!2spl!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja MedCare"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
