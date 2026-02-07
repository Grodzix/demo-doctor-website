import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medcare.pl"),
  title: "MedCare - Przychodnia Lekarska",
  description:
    "Profesjonalna opieka medyczna w jednym miejscu. Szeroki zakres specjalizacji, doświadczony zespół lekarzy i nowoczesne podejście do zdrowia.",
  openGraph: {
    title: "MedCare - Przychodnia Lekarska",
    description:
      "Profesjonalna opieka medyczna w jednym miejscu. Kardiologia, neurologia, pediatria i więcej.",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MedCare - Przychodnia Lekarska",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
