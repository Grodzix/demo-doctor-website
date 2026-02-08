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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div>
            <a href="/#kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary-700 mb-4 sm:mb-6 hover:bg-primary-200 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              Przyjmujemy nowych pacjentów
            </a>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Twoje zdrowie,
              <br />
              <span className="text-primary-500">nasza misja</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-600 leading-relaxed max-w-2xl text-justify">
              Profesjonalna opieka medyczna w jednym miejscu. Szeroki zakres
              specjalizacji, doświadczony zespół lekarzy i nowoczesne podejście
              do Twojego zdrowia.
            </p>

            {/* Mobile image - between text and buttons */}
            <div className="mt-6 lg:hidden">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/photos/clinic-interior.jpg"
                  alt="Wnętrze przychodni MedCare"
                  fill
                  sizes="(max-width: 640px) 100vw, 700px"
                  quality={90}
                  className="object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCAAKAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABP/EABsQAAMAAgMAAAAAAAAAAAAAAAABAhFRAyJD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AEWlMTUbEquPC7IH5B8vYH//2Q=="
                />
                <div className="absolute bottom-0 right-0 rounded-tl-xl rounded-br-xl bg-white/90 backdrop-blur-sm px-3 py-2">
                  <p className="text-xs font-bold text-gray-900">2 500+ <span className="font-normal text-gray-500">wizyt/mies.</span></p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/#kontakt"
                className="group/cta relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-primary-500 px-6 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 active:scale-95 transition-all duration-300"
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
            <div className="mt-6 sm:mt-12 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Zadzwoń i umów się w 2 minuty</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Bez kolejek</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>NFZ i prywatnie</span>
              </div>
            </div>
          </div>

          {/* Desktop image */}
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
