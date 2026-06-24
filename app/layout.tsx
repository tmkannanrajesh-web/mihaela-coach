import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mihaela Perelighin — Career Strategy & Coaching",
  description:
    "Psychologist and former Global Talent Acquisition specialist with 12+ years experience helping professionals navigate career transitions. One-to-one coaching for CV, LinkedIn, interviews, and job search strategy.",
  keywords: [
    "career coaching",
    "career transition",
    "CV review",
    "LinkedIn optimization",
    "interview preparation",
    "job search strategy",
    "career clarity",
    "Mihaela Perelighin",
  ],
  openGraph: {
    title: "Mihaela Perelighin — Career Strategy & Coaching",
    description:
      "Move forward with clarity, confidence, and a strategy that works. One-to-one career coaching from a psychologist with 12+ years in global talent acquisition.",
    url: "https://www.mihaelaperelighin.com",
    siteName: "Mihaela Perelighin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
