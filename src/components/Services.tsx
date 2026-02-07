import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { getBlurPlaceholder } from "@/data/blurPlaceholders";

export default function Services() {
  return (
    <section id="uslugi" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
            Nasze specjalizacje
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Szeroki zakres usług medycznych
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Oferujemy kompleksową opiekę zdrowotną w wielu dziedzinach medycyny,
            zapewniając najwyższy standard leczenia.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/uslugi/${service.slug}`}
              className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  placeholder={getBlurPlaceholder(service.image) ? "blur" : "empty"}
                  blurDataURL={getBlurPlaceholder(service.image)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm text-primary-500">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.shortDesc}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-500 group-hover:gap-2 transition-all">
                  Dowiedz się więcej
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
