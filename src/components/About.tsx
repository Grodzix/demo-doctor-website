import { ThumbsUp, Clock, Users, Award, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Lat doświadczenia" },
  { icon: Users, value: "10 000+", label: "Zadowolonych pacjentów" },
  { icon: Award, value: "25+", label: "Specjalistów" },
  { icon: ThumbsUp, value: "98%", label: "Pozytywnych opinii" },
];

export default function About() {
  return (
    <section id="o-nas" className="py-14 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Stats grid */}
          <div className="relative">
            {/* Central badge - hidden on mobile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg shadow-primary-500/30 ring-[3px] sm:ring-4 ring-white">
              <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group/card relative overflow-hidden rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1.5 hover:bg-green-50 hover:border-green-200 transition-all duration-300 cursor-default"
              >
                {/* Radial glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.12),transparent_70%)]" />
                <div className="relative">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-500 group-hover/card:bg-green-100 group-hover/card:text-green-600 group-hover/card:scale-110 group-hover/card:rotate-6 transition-all duration-300">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold text-gray-900 group-hover/card:scale-110 transition-transform duration-300 origin-center">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-500">
              O naszej przychodni
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Zaufaj profesjonalistom z wieloletnim doświadczeniem
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Przychodnia MedCare powstała z pasji do medycyny i troski o
              pacjenta. Od ponad 15 lat zapewniamy kompleksową opiekę zdrowotną
              na najwyższym poziomie, łącząc doświadczenie naszego zespołu z
              nowoczesnym podejściem do diagnostyki i leczenia.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Naszym celem jest nie tylko leczenie, ale przede wszystkim
              profilaktyka i edukacja zdrowotna. Wierzymy, że każdy pacjent
              zasługuje na indywidualne podejście i pełne zaangażowanie ze
              strony lekarza.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Nowoczesny sprzęt diagnostyczny",
                "Przyjazna atmosfera",
                "Krótkie terminy wizyt",
                "Parking dla pacjentów",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <svg
                    className="h-5 w-5 text-primary-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
