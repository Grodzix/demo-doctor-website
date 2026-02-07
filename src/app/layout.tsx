import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "MedCare - Przychodnia Lekarska",
  description:
    "Profesjonalna opieka medyczna w jednym miejscu. Szeroki zakres specjalizacji, doświadczony zespół lekarzy i nowoczesne podejście do zdrowia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
