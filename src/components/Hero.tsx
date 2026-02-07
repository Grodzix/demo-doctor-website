import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { getBlurPlaceholder } from "@/data/blurPlaceholders";
import PhoneButton from "@/components/PhoneButton";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-100/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              Przyjmujemy nowych pacjentów
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Twoje zdrowie,
              <br />
              <span className="text-primary-500">nasza misja</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Profesjonalna opieka medyczna w jednym miejscu. Szeroki zakres
              specjalizacji, doświadczony zespół lekarzy i nowoczesne podejście
              do Twojego zdrowia.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/#kontakt"
                className="group/cta relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-primary-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 active:scale-95 transition-all duration-300"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/cta:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative flex items-center gap-2.5">
                  <span className="relative">
                    <CalendarCheck className="h-5 w-5 transition-transform duration-500 group-hover/cta:rotate-[360deg]" />
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-300" />
                    </span>
                  </span>
                  Umów wizytę
                </span>
              </a>
              <PhoneButton />
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Umów się w 2 minuty
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Bez kolejek
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                NFZ i prywatnie
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="hidden lg:flex relative justify-end">
            <div className="relative w-[28rem] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/doctor2-hq.jpg"
                alt="Lekarz przychodni MedCare"
                fill
                sizes="900px"
                quality={95}
                className="object-cover object-top"
                priority
                placeholder="blur"
                blurDataURL={getBlurPlaceholder("/photos/doctor2-hq.jpg")}
              />
              {/* Stat badge */}
              <div className="absolute bottom-0 right-0 rounded-tl-xl rounded-br-2xl bg-white/90 backdrop-blur-sm px-4 py-2.5">
                <p className="text-sm font-bold text-gray-900">2 500+ <span className="font-normal text-gray-500">wizyt/mies.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
