import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mihaelaperelighin.com"),

  title: {
    default: "Mihaela Perelighin — Career Transition Strategist & Coach",
    template: "%s | Mihaela Perelighin",
  },

  description:
    "Career Transition Strategist & Coach helping mid-career professionals navigate career change, rebuild confidence, and secure their next opportunity. Psychologist with 12+ years in global recruitment and 1,500+ professionals hired across US, UK & Canada.",

  keywords: [
    "career transition coach",
    "career strategist",
    "career coaching",
    "mid-career professionals",
    "redundancy coaching",
    "career change",
    "CV review",
    "LinkedIn optimization",
    "interview preparation",
    "job search strategy",
    "career confidence",
    "Mihaela Perelighin",
    "career coach psychologist",
  ],

  authors: [{ name: "Mihaela Perelighin", url: "https://www.mihaelaperelighin.com" }],

  creator: "Mihaela Perelighin",

  openGraph: {
    type: "website",
    url: "https://www.mihaelaperelighin.com",
    siteName: "Mihaela Perelighin",
    title: "Mihaela Perelighin — Career Transition Strategist & Coach",
    description:
      "Helping mid-career professionals navigate career change, rebuild confidence, and secure their next opportunity. Psychologist | 12+ Years in Global Recruitment | 1,500+ Professionals Hired across US, UK & Canada.",
    images: [
      {
        url: "/images/mihaela-perelighin.jpg",
        width: 1200,
        height: 630,
        alt: "Mihaela Perelighin — Career Transition Strategist & Coach",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mihaela Perelighin — Career Transition Strategist & Coach",
    description:
      "Helping mid-career professionals navigate career change, rebuild confidence, and secure their next opportunity.",
    images: ["/images/mihaela-perelighin.jpg"],
  },

  alternates: {
    canonical: "https://www.mihaelaperelighin.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/images/mihaela-logo.jpg",
    shortcut: "/images/mihaela-logo.jpg",
    apple: "/images/mihaela-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">

        {/* Google Analytics GA4 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XLY2G0Y1YT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XLY2G0Y1YT');
          `}
        </Script>

        {children}

      </body>
    </html>
  );
}
