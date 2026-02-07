import {
  Heart,
  Brain,
  Eye,
  Baby,
  Bone,
  Stethoscope,
  SmilePlus,
  Microscope as MicroscopeIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortDesc: string;
  image: string;
  heroImage: string;
  fullDescription: string;
  benefits: string[];
  procedures: { name: string; desc: string }[];
}

export const services: Service[] = [
  {
    slug: "kardiologia",
    icon: Heart,
    name: "Kardiologia",
    shortDesc:
      "Diagnostyka i leczenie chorób serca i układu krążenia. EKG, Holter, echo serca.",
    image: "/photos/heart-doctor-small.jpg",
    heroImage: "/photos/heart-doctor-small.jpg",
    fullDescription:
      "Nasz oddział kardiologii oferuje kompleksową diagnostykę i leczenie chorób układu sercowo-naczyniowego. Dysponujemy najnowocześniejszym sprzętem diagnostycznym, w tym aparatem do echokardiografii, Holterem EKG i ciśnieniowym oraz ergometrią. Nasi kardiolodzy to specjaliści z wieloletnim doświadczeniem klinicznym, którzy podchodzą do każdego pacjenta indywidualnie.",
    benefits: [
      "Szybka diagnostyka - wyniki badań tego samego dnia",
      "Nowoczesny sprzęt do echokardiografii",
      "Kompleksowa ocena ryzyka sercowo-naczyniowego",
      "Indywidualny plan leczenia i profilaktyki",
      "Współpraca z ośrodkami kardiochirurgicznymi",
    ],
    procedures: [
      {
        name: "EKG spoczynkowe",
        desc: "Podstawowe badanie aktywności elektrycznej serca, wykonywane w kilka minut.",
      },
      {
        name: "Holter EKG 24h",
        desc: "Ciągłe monitorowanie pracy serca przez 24 godziny w warunkach codziennej aktywności.",
      },
      {
        name: "Echo serca",
        desc: "Ultrasonograficzne badanie serca pozwalające ocenić strukturę i funkcję mięśnia sercowego.",
      },
      {
        name: "Próba wysiłkowa",
        desc: "Badanie wydolności serca podczas kontrolowanego wysiłku fizycznego na bieżni.",
      },
      {
        name: "Holter ciśnieniowy (ABPM)",
        desc: "Całodobowy pomiar ciśnienia tętniczego w warunkach domowych.",
      },
    ],
  },
  {
    slug: "neurologia",
    icon: Brain,
    name: "Neurologia",
    shortDesc:
      "Kompleksowa diagnostyka neurologiczna. Leczenie migren, padaczki, chorób demielinizacyjnych.",
    image: "/photos/endocynology-microscope-womanlookinginto.jpg",
    heroImage: "/photos/endocynology-microscope-womanlookinginto.jpg",
    fullDescription:
      "Oddział neurologii w MedCare specjalizuje się w diagnostyce i leczeniu chorób układu nerwowego. Oferujemy konsultacje neurologiczne, badania elektrofizjologiczne oraz nowoczesne metody terapii. Nasi neurolodzy zajmują się leczeniem bólów głowy, padaczki, stwardnienia rozsianego, choroby Parkinsona oraz neuropatii.",
    benefits: [
      "Szybka diagnostyka neurologiczna",
      "Badania EEG i EMG na miejscu",
      "Leczenie bólów głowy i migren",
      "Terapia chorób neurodegeneracyjnych",
      "Konsultacje neuropsychologiczne",
    ],
    procedures: [
      {
        name: "Konsultacja neurologiczna",
        desc: "Szczegółowy wywiad i badanie neurologiczne z oceną funkcji układu nerwowego.",
      },
      {
        name: "EEG (Elektroencefalografia)",
        desc: "Badanie aktywności bioelektrycznej mózgu, kluczowe w diagnostyce padaczki.",
      },
      {
        name: "EMG (Elektromiografia)",
        desc: "Badanie przewodnictwa nerwowo-mięśniowego, pomocne w diagnostyce neuropatii.",
      },
      {
        name: "USG Doppler tętnic szyjnych",
        desc: "Ocena przepływu krwi w tętnicach szyjnych, ważna w profilaktyce udarów.",
      },
    ],
  },
  {
    slug: "okulistyka",
    icon: Eye,
    name: "Okulistyka",
    shortDesc:
      "Badania wzroku, diagnostyka i leczenie chorób oczu. Nowoczesny sprzęt diagnostyczny.",
    image: "/photos/oculist-glassesonatable.jpg",
    heroImage: "/photos/oculist-glassesonatable.jpg",
    fullDescription:
      "Nasz gabinet okulistyczny jest wyposażony w nowoczesny sprzęt diagnostyczny, umożliwiający precyzyjne badanie wzroku i diagnostykę chorób oczu. Oferujemy kompleksowe badania okulistyczne, dobór korekcji wzroku, diagnostykę jaskry, zaćmy oraz chorób siatkówki.",
    benefits: [
      "Komputerowe badanie ostrości wzroku",
      "Diagnostyka jaskry i zaćmy",
      "OCT - tomografia siatkówki",
      "Badanie dna oka",
      "Dobór soczewek kontaktowych",
    ],
    procedures: [
      {
        name: "Badanie ostrości wzroku",
        desc: "Komputerowe badanie refrakcji i dobór odpowiedniej korekcji optycznej.",
      },
      {
        name: "Badanie ciśnienia wewnątrzgałkowego",
        desc: "Pomiar ciśnienia w gałce ocznej - kluczowy w diagnostyce jaskry.",
      },
      {
        name: "OCT siatkówki",
        desc: "Tomografia optyczna siatkówki pozwalająca wykryć zmiany chorobowe na wczesnym etapie.",
      },
      {
        name: "Badanie dna oka",
        desc: "Ocena naczyń krwionośnych i struktur dna oka po rozszerzeniu źrenicy.",
      },
    ],
  },
  {
    slug: "pediatria",
    icon: Baby,
    name: "Pediatria",
    shortDesc:
      "Opieka zdrowotna dla dzieci i młodzieży. Szczepienia, bilanse, porady żywieniowe.",
    image: "/photos/pediatry-child-smiling.jpg",
    heroImage: "/photos/pediatry-child-smiling.jpg",
    fullDescription:
      "Oddział pediatryczny MedCare to miejsce, gdzie Twoje dziecko jest w najlepszych rękach. Nasi pediatrzy zapewniają kompleksową opiekę od pierwszych dni życia aż po okres dojrzewania. Dbamy o przyjazną atmosferę i indywidualne podejście do każdego małego pacjenta.",
    benefits: [
      "Przyjazna atmosfera dla dzieci",
      "Pełny program szczepień ochronnych",
      "Bilanse zdrowia i badania profilaktyczne",
      "Porady żywieniowe i laktacyjne",
      "Wizyty domowe w nagłych przypadkach",
    ],
    procedures: [
      {
        name: "Konsultacja pediatryczna",
        desc: "Badanie ogólne dziecka z oceną rozwoju fizycznego i psychomotorycznego.",
      },
      {
        name: "Szczepienia ochronne",
        desc: "Realizacja kalendarza szczepień obowiązkowych i zalecanych.",
      },
      {
        name: "Bilans zdrowia",
        desc: "Kompleksowa ocena stanu zdrowia dziecka w kluczowych momentach rozwoju.",
      },
      {
        name: "Testy alergiczne",
        desc: "Diagnostyka alergii pokarmowych i wziewnych u dzieci.",
      },
    ],
  },
  {
    slug: "ortopedia",
    icon: Bone,
    name: "Ortopedia",
    shortDesc:
      "Leczenie urazów i chorób narządu ruchu. Rehabilitacja, USG stawów, konsultacje.",
    image: "/photos/orthopedy-x-ray-man-holding.jpg",
    heroImage: "/photos/orthopedy-x-ray-man-holding.jpg",
    fullDescription:
      "Nasi ortopedzi specjalizują się w diagnostyce i leczeniu chorób narządu ruchu. Oferujemy konsultacje ortopedyczne, USG stawów, iniekcje dostawowe oraz kwalifikację do zabiegów operacyjnych. Współpracujemy z fizjoterapeutami, zapewniając kompleksowe podejście do rehabilitacji.",
    benefits: [
      "USG stawów i tkanek miękkich",
      "Iniekcje dostawowe kwasem hialuronowym",
      "Leczenie urazów sportowych",
      "Kwalifikacja do artroskopii",
      "Program rehabilitacji pooperacyjnej",
    ],
    procedures: [
      {
        name: "Konsultacja ortopedyczna",
        desc: "Ocena funkcji narządu ruchu, badanie kliniczne i plan leczenia.",
      },
      {
        name: "USG stawów",
        desc: "Ultrasonograficzna ocena stawów, ścięgien i więzadeł.",
      },
      {
        name: "Iniekcja dostawowa",
        desc: "Podanie kwasu hialuronowego lub osocza bogatopłytkowego do stawu.",
      },
      {
        name: "Zaopatrzenie ortopedyczne",
        desc: "Dobór ortez, stabilizatorów i wkładek ortopedycznych.",
      },
    ],
  },
  {
    slug: "internista",
    icon: Stethoscope,
    name: "Internista",
    shortDesc:
      "Medycyna ogólna i chorób wewnętrznych. Diagnostyka, profilaktyka, programy zdrowotne.",
    image: "/photos/heart-doctor-small.jpg",
    heroImage: "/photos/heart-doctor-small.jpg",
    fullDescription:
      "Internista to lekarz pierwszego kontaktu w wielu sytuacjach zdrowotnych. Nasi interniści zajmują się diagnostyką i leczeniem chorób wewnętrznych, w tym nadciśnienia tętniczego, cukrzycy, chorób tarczycy, infekcji i stanów zapalnych. Prowadzą również programy profilaktyki zdrowotnej.",
    benefits: [
      "Kompleksowa diagnostyka chorób wewnętrznych",
      "Interpretacja wyników badań laboratoryjnych",
      "Programy profilaktyki zdrowotnej",
      "Kierowanie do specjalistów",
      "Recepty i zwolnienia lekarskie",
    ],
    procedures: [
      {
        name: "Konsultacja internistyczna",
        desc: "Wywiad lekarski, badanie fizykalne i ustalenie dalszego postępowania.",
      },
      {
        name: "Badania profilaktyczne",
        desc: "Pakiety badań laboratoryjnych dostosowane do wieku i płci pacjenta.",
      },
      {
        name: "USG jamy brzusznej",
        desc: "Ocena narządów wewnętrznych: wątroby, nerek, trzustki, śledziony.",
      },
      {
        name: "EKG spoczynkowe",
        desc: "Szybkie badanie przesiewowe aktywności elektrycznej serca.",
      },
    ],
  },
  {
    slug: "dermatologia",
    icon: SmilePlus,
    name: "Dermatologia",
    shortDesc:
      "Diagnostyka i leczenie chorób skóry. Dermatoskopia, zabiegi estetyczne, alergologia skórna.",
    image: "/photos/dermatology-woman-performinghealingonaman.jpg",
    heroImage: "/photos/dermatology-woman-performinghealingonaman.jpg",
    fullDescription:
      "Gabinet dermatologiczny MedCare oferuje diagnostykę i leczenie chorób skóry, włosów i paznokci. Wykonujemy dermatoskopię znamion, leczymy trądzik, łuszczycę, egzemę oraz alergie skórne. Oferujemy również konsultacje z zakresu dermatologii estetycznej.",
    benefits: [
      "Dermatoskopia cyfrowa znamion",
      "Leczenie trądziku i łuszczycy",
      "Diagnostyka alergii skórnych",
      "Krioterapia zmian skórnych",
      "Konsultacje dermatologii estetycznej",
    ],
    procedures: [
      {
        name: "Konsultacja dermatologiczna",
        desc: "Badanie skóry z oceną zmian chorobowych i planem leczenia.",
      },
      {
        name: "Dermatoskopia",
        desc: "Badanie znamion pod powiększeniem w celu wczesnego wykrywania czerniaka.",
      },
      {
        name: "Krioterapia",
        desc: "Zamrażanie zmian skórnych ciekłym azotem (brodawki, włókniaki).",
      },
      {
        name: "Testy płatkowe",
        desc: "Diagnostyka alergii kontaktowej za pomocą testów naskórkowych.",
      },
    ],
  },
  {
    slug: "endokrynologia",
    icon: MicroscopeIcon,
    name: "Endokrynologia",
    shortDesc:
      "Choroby tarczycy i układu hormonalnego. USG tarczycy, biopsja, leczenie cukrzycy.",
    image: "/photos/endocynology-microscope-womanlookinginto.jpg",
    heroImage: "/photos/endocynology-microscope-womanlookinginto.jpg",
    fullDescription:
      "Oddział endokrynologii MedCare zajmuje się diagnostyką i leczeniem chorób układu hormonalnego. Specjalizujemy się w chorobach tarczycy, cukrzycy, zaburzeniach gospodarki wapniowo-fosforanowej, chorobach przysadki i nadnerczy. Wykonujemy USG tarczycy z opcją biopsji cienkoigłowej.",
    benefits: [
      "USG tarczycy z elastografią",
      "Biopsja cienkoigłowa tarczycy (BAC)",
      "Leczenie cukrzycy typu 1 i 2",
      "Diagnostyka zaburzeń hormonalnych",
      "Leczenie osteoporozy",
    ],
    procedures: [
      {
        name: "Konsultacja endokrynologiczna",
        desc: "Ocena funkcji układu hormonalnego na podstawie wywiadu i badań.",
      },
      {
        name: "USG tarczycy",
        desc: "Badanie ultrasonograficzne tarczycy z oceną struktury i ewentualnych guzków.",
      },
      {
        name: "Biopsja tarczycy (BAC)",
        desc: "Pobranie materiału z guzka tarczycy do badania cytologicznego.",
      },
      {
        name: "Profil hormonalny",
        desc: "Kompleksowy panel badań hormonalnych (tarczyca, nadnercza, hormony płciowe).",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
