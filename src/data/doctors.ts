export interface Doctor {
  slug: string;
  name: string;
  specialty: string;
  shortDesc: string;
  image: string;
  initials: string;
  gradient: string;
  education: string[];
  experience: string[];
  specializations: string[];
  about: string;
}

export const doctors: Doctor[] = [
  {
    slug: "anna-kowalska",
    name: "dr n. med. Anna Kowalska",
    specialty: "Kardiolog",
    shortDesc:
      "Specjalista chorób serca z 20-letnim doświadczeniem. Absolwentka Warszawskiego Uniwersytetu Medycznego.",
    image: "/photos/doctor1.jpg",
    initials: "AK",
    gradient: "from-primary-400 to-primary-600",
    about:
      "Dr Anna Kowalska jest jednym z najbardziej doświadczonych kardiologów w naszym zespole. Od ponad 20 lat zajmuje się diagnostyką i leczeniem chorób układu sercowo-naczyniowego. Jej pacjenci cenią ją za dokładność, empatię i indywidualne podejście do każdego przypadku. Regularnie uczestniczy w międzynarodowych konferencjach kardiologicznych i jest autorką wielu publikacji naukowych.",
    education: [
      "Warszawski Uniwersytet Medyczny - Wydział Lekarski (2000)",
      "Specjalizacja z kardiologii - Instytut Kardiologii w Aninie (2005)",
      "Doktorat nauk medycznych - WUM (2008)",
      "Certyfikat echokardiografii - European Association of Echocardiography",
    ],
    experience: [
      "Przychodnia MedCare - kardiolog (2010 - obecnie)",
      "Instytut Kardiologii w Aninie - asystent (2005-2010)",
      "Szpital Kliniczny - stażysta, rezydent (2000-2005)",
    ],
    specializations: [
      "Echokardiografia",
      "Niewydolność serca",
      "Nadciśnienie tętnicze",
      "Choroba wieńcowa",
      "Zaburzenia rytmu serca",
    ],
  },
  {
    slug: "marcin-nowak",
    name: "dr Marcin Nowak",
    specialty: "Neurolog",
    shortDesc:
      "Ekspert w diagnostyce i leczeniu chorób układu nerwowego. Autor wielu publikacji naukowych.",
    image: "/photos/doctor2.jpg",
    initials: "MN",
    gradient: "from-accent-400 to-accent-600",
    about:
      "Dr Marcin Nowak to doświadczony neurolog specjalizujący się w diagnostyce i leczeniu bólów głowy, padaczki oraz chorób neurodegeneracyjnych. Jest autorem licznych publikacji naukowych w prestiżowych czasopismach medycznych. Znany z holistycznego podejścia do pacjenta, łączy nowoczesne metody diagnostyczne z indywidualną terapią.",
    education: [
      "Uniwersytet Jagielloński - Collegium Medicum (2003)",
      "Specjalizacja z neurologii - Szpital Uniwersytecki w Krakowie (2008)",
      "Kurs zaawansowany EEG i EMG - Polskie Towarzystwo Neurologiczne",
      "Szkolenie z neurosonologii - European Academy of Neurology",
    ],
    experience: [
      "Przychodnia MedCare - neurolog (2012 - obecnie)",
      "Szpital Uniwersytecki w Krakowie - starszy asystent (2008-2012)",
      "Klinika Neurologii UJ - rezydent (2003-2008)",
    ],
    specializations: [
      "Bóle głowy i migreny",
      "Padaczka",
      "Stwardnienie rozsiane",
      "Choroba Parkinsona",
      "Neuropatie obwodowe",
    ],
  },
  {
    slug: "katarzyna-wisniewska",
    name: "dr Katarzyna Wiśniewska",
    specialty: "Pediatra",
    shortDesc:
      "Doświadczony pediatra z podejściem nastawionym na dziecko i rodzica. 15 lat praktyki klinicznej.",
    image: "/photos/doctor4.jpg",
    initials: "KW",
    gradient: "from-primary-300 to-primary-500",
    about:
      "Dr Katarzyna Wiśniewska to pediatra z 15-letnim doświadczeniem, która wierzy, że zdrowie dziecka zaczyna się od zrozumienia i zaufania. Jej przyjazne podejście sprawia, że dzieci nie boją się wizyt lekarskich. Specjalizuje się w alergologii dziecięcej i żywieniu niemowląt. Jest aktywną członkinią Polskiego Towarzystwa Pediatrycznego.",
    education: [
      "Gdański Uniwersytet Medyczny - Wydział Lekarski (2006)",
      "Specjalizacja z pediatrii - Uniwersyteckie Centrum Kliniczne (2011)",
      "Kurs alergologii dziecięcej - Centrum Zdrowia Dziecka",
      "Certyfikat doradcy laktacyjnego (IBCLC)",
    ],
    experience: [
      "Przychodnia MedCare - pediatra (2014 - obecnie)",
      "Uniwersyteckie Centrum Kliniczne - asystent (2011-2014)",
      "Szpital Dziecięcy - rezydent (2006-2011)",
    ],
    specializations: [
      "Pediatria ogólna",
      "Alergologia dziecięca",
      "Żywienie niemowląt i dzieci",
      "Szczepienia ochronne",
      "Rozwój psychomotoryczny",
    ],
  },
  {
    slug: "tomasz-zielinski",
    name: "dr Tomasz Zieliński",
    specialty: "Ortopeda",
    shortDesc:
      "Specjalista chirurgii ortopedycznej i traumatologii. Doświadczenie w medycynie sportowej.",
    image: "/photos/doctor3.jpg",
    initials: "TZ",
    gradient: "from-accent-300 to-accent-500",
    about:
      "Dr Tomasz Zieliński to ortopeda i traumatolog z bogatym doświadczeniem w leczeniu urazów sportowych i chorób zwyrodnieniowych stawów. Przez wiele lat współpracował z klubami sportowymi jako lekarz drużynowy. Specjalizuje się w artroskopii kolana i barku oraz medycynie regeneracyjnej (PRP). Jest zwolennikiem aktywnego podejścia do rehabilitacji.",
    education: [
      "Uniwersytet Medyczny w Łodzi - Wydział Lekarski (2004)",
      "Specjalizacja z ortopedii i traumatologii - CSK w Łodzi (2010)",
      "Kurs artroskopii - AGA Society, Davos",
      "Szkolenie medycyny sportowej - FIFA Medical Centre of Excellence",
    ],
    experience: [
      "Przychodnia MedCare - ortopeda (2013 - obecnie)",
      "Centralny Szpital Kliniczny w Łodzi - starszy asystent (2010-2013)",
      "Lekarz drużynowy klubu sportowego (2011-2018)",
      "CSK Łódź - rezydent ortopedii (2004-2010)",
    ],
    specializations: [
      "Artroskopia kolana i barku",
      "Medycyna sportowa",
      "Choroby zwyrodnieniowe stawów",
      "Terapia PRP (osocze bogatopłytkowe)",
      "Rehabilitacja pooperacyjna",
    ],
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}
