import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Lewandowska",
    text: "Fantastyczna przychodnia! Pani doktor Kowalska poświęciła mi dużo czasu, wszystko dokładnie wyjaśniła. Czuję się w dobrych rękach. Polecam każdemu!",
    rating: 5,
    date: "2 tygodnie temu",
  },
  {
    name: "Piotr Kamiński",
    text: "Szybka rejestracja, krótki czas oczekiwania i profesjonalna obsługa. Dr Nowak jest świetnym specjalistą - trafna diagnoza od pierwszej wizyty.",
    rating: 5,
    date: "Miesiąc temu",
  },
  {
    name: "Agnieszka Dąbrowska",
    text: "Przychodzimy tu z całą rodziną. Dzieci uwielbiają dr Wiśniewską - jest cierpliwa i ma świetne podejście do małych pacjentów. Nowoczesna i czysta placówka.",
    rating: 5,
    date: "3 tygodnie temu",
  },
];

export default function Testimonials() {
  return (
    <section id="opinie" className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Opinie pacjentów
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Co mówią o nas pacjenci
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Zaufanie naszych pacjentów jest dla nas najważniejsze. Oto, co o nas
            piszą.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-100 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-100" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>

              <p className="mt-4 text-gray-600 leading-relaxed">{t.text}</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-semibold text-sm">
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
