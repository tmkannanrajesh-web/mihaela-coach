import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mihaela Perelighin | Career Transition Strategist & Psychologist",
  description:
    "Psychologist and former corporate Talent Acquisition specialist helping mid-career professionals navigate career change, rebuild confidence, and secure their next opportunity. 12+ years in global recruitment, 1,500+ professionals hired.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
