import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} - MedCare Przychodnia Lekarska`,
    description: service.shortDesc,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-10">
              <Link
                href="/#uslugi"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Powrót do usług
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white">
                  <service.icon className="h-7 w-7" />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {service.name}
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    O specjalizacji
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Procedures */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Wykonywane badania i zabiegi
                  </h2>
                  <div className="mt-6 space-y-4">
                    {service.procedures.map((proc) => (
                      <div
                        key={proc.name}
                        className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
                      >
                        <h3 className="font-semibold text-gray-900">
                          {proc.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {proc.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Benefits */}
                <div className="rounded-2xl bg-primary-50 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Dlaczego MedCare?
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="rounded-2xl bg-gray-900 p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    Umów wizytę
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Zadzwoń lub skorzystaj z formularza online
                  </p>
                  <a
                    href="tel:+48123456789"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600 transition-colors"
                  >
                    +48 123 456 789
                  </a>
                  <Link
                    href="/#kontakt"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-colors"
                  >
                    Formularz kontaktowy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
