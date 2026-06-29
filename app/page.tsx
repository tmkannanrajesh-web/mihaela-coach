import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Mihaela Perelighin",
  description:
    "Mihaela Perelighin is a Career Transition Strategist & Coach. Psychologist with a Master's Degree in Psychological Counselling and 12+ years in global talent acquisition.",
  alternates: { canonical: "https://www.mihaelaperelighin.com/about" },
  openGraph: {
    title: "About Mihaela Perelighin | Career Transition Strategist & Coach",
    description:
      "Psychologist and former Global Talent Acquisition specialist helping mid-career professionals navigate career change and secure their next opportunity.",
    url: "https://www.mihaelaperelighin.com/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mihaela Perelighin",
  jobTitle: "Career Transition Strategist & Coach",
  url: "https://www.mihaelaperelighin.com",
  image: "https://www.mihaelaperelighin.com/images/mihaela-about.jpg",
  description:
    "Psychologist with a Master's Degree in Psychological Counselling and 12+ years in global talent acquisition. 1,500+ professionals hired across US, UK & Canada.",
  sameAs: ["https://www.linkedin.com/in/mihaela-perelighin-a9760841/"],
};

export default function AboutPage() {
  return (
    <>
      <Script
        id="schema-about"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <main className="pt-[88px]">

        {/* Full-width photo */}
        <section className="w-full">
          <div className="relative w-full" style={{ height: "560px" }}>
            <Image
              src="/images/mihaela-about.jpg"
              alt="Mihaela Perelighin"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </section>

        {/* 3 stat cards */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-3 divide-x divide-gray-200">

              <div className="py-10 px-6 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-3">12+</p>
                <p className="text-charcoal font-medium leading-snug">
                  Years in Global<br />Recruitment
                </p>
              </div>

              <div className="py-10 px-6 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-3">1,500+</p>
                <p className="text-charcoal font-medium leading-snug">
                  Professionals<br />Hired
                </p>
              </div>

              <div className="py-10 px-6 text-center">
                <p className="text-3xl font-bold text-gold-600 mb-3 leading-tight">Master's Degree</p>
                <p className="text-charcoal font-medium leading-snug">
                  Psychological Counselling
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="bg-white py-14">
          <div className="max-w-2xl mx-auto px-6 space-y-5 text-charcoal leading-relaxed text-[17px]">

            <p>
              I'm Mihaela Perelighin, a psychologist with a Master's Degree in Psychological
              Counselling and over 12 years of experience working in Talent Acquisition within a
              multinational corporate environment.
            </p>

            <p>
              Throughout my career, I have recruited and hired more than 1,500 professionals across
              international markets, including the United States, United Kingdom, and Canada.
            </p>

            <p>
              Having reviewed thousands of applications and conducted countless interviews, I
              understand what helps candidates stand out in competitive job markets.
            </p>

            <p>
              This unique combination of psychological expertise and hands-on recruitment
              experience allows me to support clients from both perspectives: understanding human
              behavior, confidence, and motivation, while also knowing exactly how employers
              evaluate candidates and make hiring decisions.
            </p>

            <p>
              I work one-to-one with every client, offering personalized, practical guidance tailored to
              their goals, challenges, and career context.
            </p>

            <p className="font-bold text-charcoal">
              My mission is simple: to help you move forward with clarity, confidence, and a strategy
              that works in today's job market.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="/#contact"
                className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-sm text-base w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round"/>
                </svg>
                Book Your Free 20-Minute Discovery Call
              </a>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
