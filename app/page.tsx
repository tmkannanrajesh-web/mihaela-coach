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
    "Psychologist with a Master's Degree in Psychological Counselling and 12+ years in global talent acquisition.",
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

        {/* ── FULL-WIDTH PHOTO ── */}
        <section className="w-full overflow-hidden" style={{ height: "520px" }}>
          <div className="relative w-full h-full">
            <Image
              src="/images/mihaela-about.jpg"
              alt="Mihaela Perelighin"
              fill
              priority
              className="object-cover"
              style={{ objectPosition: "center 15%" }}
            />
            {/* Subtle gradient at bottom to blend into stats */}
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: "80px",
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))",
              }}
            />
          </div>
        </section>

        {/* ── 3 STAT CARDS ── */}
        <section className="bg-white shadow-soft">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-gray-200">

              <div className="py-10 px-8 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-2 leading-none">12+</p>
                <p className="text-charcoal text-sm font-semibold uppercase tracking-widest mt-3 leading-snug">
                  Years in Global<br />Recruitment
                </p>
              </div>

              <div className="py-10 px-8 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-2 leading-none">1,500+</p>
                <p className="text-charcoal text-sm font-semibold uppercase tracking-widest mt-3 leading-snug">
                  Professionals<br />Hired
                </p>
              </div>

              <div className="py-10 px-8 text-center">
                <p className="text-2xl font-bold text-gold-600 mb-2 leading-snug">Master's<br />Degree</p>
                <p className="text-charcoal text-sm font-semibold uppercase tracking-widest mt-3 leading-snug">
                  Psychological<br />Counselling
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── THIN GOLD DIVIDER ── */}
        <div className="w-full h-px bg-gold-100" />

        {/* ── BIO ── */}
        <section className="bg-white py-16">
          <div
            className="mx-auto px-6 space-y-5 text-charcoal leading-[1.85] text-[17px]"
            style={{ maxWidth: "680px" }}
          >
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

            {/* Thin gold rule before mission */}
            <div className="flex items-center gap-4 py-2">
              <span className="h-px flex-1 bg-gold-200 block" />
            </div>

            <p className="font-bold text-navy-900 text-[18px] leading-relaxed">
              My mission is simple: to help you move forward with clarity, confidence, and a strategy
              that works in today's job market.
            </p>

            {/* ── CTA BUTTON ── */}
            <div className="pt-4 pb-4">
              <a
                href="/#contact"
                className="flex items-center justify-center gap-3 text-white font-semibold px-8 py-4 rounded-lg transition-all text-base w-full shadow-md hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #C9A84C 0%, #b8922e 100%)" }}
              >
                {/* Calendar icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
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
