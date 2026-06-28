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
  publisher: "Mihaela Perelighin",
  category: "Career Coaching",
  applicationName: "Mihaela Perelighin",
  referrer: "origin-when-cross-origin",

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

        {/* Google Analytics GA4 — G-269NHTDBJ5 */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-269NHTDBJ5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-269NHTDBJ5');
          `}
        </Script>

        {/* Microsoft Clarity — xdikgg57vn */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xdikgg57vn");
          `}
        </Script>

        {/* Schema.org — Professional Service structured data */}
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Mihaela Perelighin — Career Transition Strategist & Coach",
              "url": "https://www.mihaelaperelighin.com",
              "description": "Career Transition Strategist & Coach helping mid-career professionals navigate career change, rebuild confidence, and secure their next opportunity.",
              "founder": {
                "@type": "Person",
                "name": "Mihaela Perelighin",
                "jobTitle": "Career Transition Strategist & Coach",
                "description": "Psychologist with a Master's Degree in Psychology and 12+ years in global talent acquisition. 1,500+ professionals hired across US, UK & Canada.",
                "sameAs": [
                  "https://www.linkedin.com/in/mihaela-perelighin-a9760841/"
                ]
              },
              "serviceType": [
                "Career Coaching",
                "Career Transition Coaching",
                "CV Review",
                "LinkedIn Optimization",
                "Interview Preparation",
                "Job Search Strategy"
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "availableLanguage": ["English", "Romanian"],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@mihaelaperelighin.com",
                "contactType": "customer support",
                "availableLanguage": ["English", "Romanian"]
              }
            }
          `}
        </Script>

        {children}

      </body>
    </html>
  );
}
