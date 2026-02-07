import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { doctors } from "@/data/doctors";
import { getBlurPlaceholder } from "@/data/blurPlaceholders";

export default function Doctors() {
  return (
    <section id="lekarze" className="py-14 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Nasz zespół
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Doświadczeni specjaliści
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Nasz zespół to lekarze z wieloletnim doświadczeniem klinicznym i
            naukowym, którzy nieustannie podnoszą swoje kwalifikacje.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Link
              key={doctor.slug}
              href={`/lekarze/${doctor.slug}`}
              className="group text-center"
            >
              {/* Photo / Avatar */}
              <div className="relative mx-auto h-40 w-full sm:h-56 sm:w-48 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-200">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="192px"
                    className="object-cover object-[center_25%]"
                    placeholder={getBlurPlaceholder(doctor.image) ? "blur" : "empty"}
                    blurDataURL={getBlurPlaceholder(doctor.image)}
                  />
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${doctor.gradient} flex items-center justify-center`}
                  >
                    <span className="text-4xl font-bold text-white/90">
                      {doctor.initials}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-3 sm:mt-6 text-sm sm:text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-500">
                {doctor.specialty}
              </p>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed hidden sm:block">
                {doctor.shortDesc}
              </p>
              <span className="mt-2 sm:mt-3 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                Zobacz profil
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
