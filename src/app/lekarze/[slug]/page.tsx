import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Star } from "lucide-react";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} - ${doctor.specialty} | MedCare`,
    description: doctor.shortDesc,
  };
}

export default async function DoctorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Lekarze", href: "/#lekarze" },
                  { label: doctor.name },
                ]}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-10 items-start">
              {/* Photo */}
              <div className="md:col-span-1">
                <div className="relative aspect-[3/4] w-full max-w-xs mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
                  {doctor.image ? (
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${doctor.gradient} flex items-center justify-center`}
                    >
                      <span className="text-7xl font-bold text-white/90">
                        {doctor.initials}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                  {doctor.specialty}
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                  {doctor.name}
                </h1>
                <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                  {doctor.about}
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 transition-colors"
                  >
                    Umów wizytę
                  </Link>
                  <a
                    href="tel:+48123456789"
                    className="inline-flex items-center justify-center rounded-lg border-2 border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
                  >
                    +48 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Details */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Education */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Wykształcenie
                  </h2>
                </div>
                <ul className="space-y-3">
                  {doctor.education.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Doświadczenie
                  </h2>
                </div>
                <ul className="space-y-3">
                  {doctor.experience.map((e) => (
                    <li
                      key={e}
                      className="flex gap-3 text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specializations */}
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                    <Star className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Specjalizacje
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700"
                    >
                      {s}
                    </span>
                  ))}
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
