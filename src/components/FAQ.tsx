"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Jak umówić się na wizytę?",
    answer:
      "Wizytę można umówić telefonicznie pod numerem +48 123 456 789, poprzez formularz kontaktowy na naszej stronie lub osobiście w recepcji przychodni. Rejestracja jest czynna od poniedziałku do piątku w godzinach 8:00-20:00 oraz w soboty 9:00-14:00.",
  },
  {
    question: "Czy przyjmujecie pacjentów na NFZ?",
    answer:
      "Tak, nasza przychodnia posiada kontrakt z NFZ na wybrane specjalizacje. Oferujemy również wizyty prywatne z możliwością natychmiastowego terminu. Szczegóły dotyczące dostępności na NFZ można uzyskać telefonicznie.",
  },
  {
    question: "Ile kosztuje wizyta prywatna?",
    answer:
      "Ceny wizyt prywatnych zaczynają się od 150 zł za wizytę u lekarza pierwszego kontaktu. Wizyty specjalistyczne kosztują od 200 zł. Dokładny cennik dostępny jest w recepcji lub telefonicznie.",
  },
  {
    question: "Jak długo trzeba czekać na wizytę?",
    answer:
      "Wizyty prywatne dostępne są zazwyczaj w ciągu 1-3 dni roboczych. W przypadku pilnych konsultacji oferujemy wizyty tego samego dnia. Czas oczekiwania na wizytę na NFZ zależy od specjalizacji.",
  },
  {
    question: "Czy mogę odwołać lub przełożyć wizytę?",
    answer:
      "Tak, prosimy o odwołanie lub przełożenie wizyty minimum 24 godziny przed planowanym terminem. Można to zrobić telefonicznie lub poprzez formularz kontaktowy.",
  },
  {
    question: "Czy przychodnia jest przystosowana dla osób niepełnosprawnych?",
    answer:
      "Tak, nasza przychodnia jest w pełni dostosowana do potrzeb osób z niepełnosprawnościami. Budynek posiada podjazd, windę oraz szerokie korytarze. Toalety są przystosowane dla osób na wózkach inwalidzkich.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Często zadawane pytania
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszej przychodni.
          </p>
        </div>

        {/* Questions */}
        <div className="mt-16 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border bg-white transition-all duration-200 ${
                  isOpen ? "border-primary-200 shadow-sm" : "border-gray-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`text-sm font-semibold transition-colors ${isOpen ? "text-primary-600" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary-500" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
