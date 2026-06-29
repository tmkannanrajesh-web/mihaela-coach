import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Mihaela Perelighin",
  description:
    "Mihaela Perelighin is a Career Transition Strategist & Coach. Psychologist with a Master's Degree in Psychology and 12+ years in global talent acquisition. 1,500+ professionals hired across US, UK & Canada.",
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
  image: "https://www.mihaelaperelighin.com/images/mihaela-perelighin.jpg",
  description:
    "Psychologist with a Master's Degree in Psychology and 12+ years in global talent acquisition. 1,500+ professionals hired across US, UK & Canada.",
  sameAs: ["https://www.linkedin.com/in/mihaela-perelighin-a9760841/"],
  knowsAbout: [
    "Career Coaching",
    "Career Transition",
    "Talent Acquisition",
    "Psychology",
    "CV Review",
    "Interview Preparation",
    "LinkedIn Optimization",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Master's Degree in Psychology",
  },
};

const CREDENTIALS = [
  { num: "12+", label: "Years in Global Recruitment" },
  { num: "1,500+", label: "Professionals Hired" },
  { num: "3", label: "International Markets" },
];

const FAQS = [
  {
    q: "What is your background?",
    a: "I am a psychologist with a Master's Degree in Psychology and over 12 years of experience in Talent Acquisition within a multinational corporate environment. I have recruited and hired more than 1,500 professionals across the United States, United Kingdom, and Canada.",
  },
  {
    q: "Who do you work with?",
    a: "I work one-to-one with mid-career professionals (35–60) who are facing redundancy, career stagnation, burnout, or a significant career change. I also work with women returning to work and international professionals targeting English-speaking markets.",
  },
  {
    q: "How are you different from other career coaches?",
    a: "My combination of psychology training and hands-on corporate recruitment experience is unusual. I understand the emotional and psychological side of career transitions, while also knowing exactly how employers evaluate candidates and make hiring decisions.",
  },
  {
    q: "Do you work with clients outside Romania?",
    a: "Yes. All sessions are conducted online and I work with English-speaking clients worldwide. Romanian is available on request.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 20-minute Discovery Call. We'll discuss your current situation, career goals, and the most appropriate next steps.",
  },
];

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

        {/* Breadcrumbs */}
        <nav className="bg-navy-50 border-b border-navy-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-sm text-charcoal-light">
              <li><Link href="/" className="hover:text-gold-600 transition-colors">Home</Link></li>
              <li className="text-gold-400">/</li>
              <li className="text-gold-600 font-medium">About</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-0.5 w-24 bg-gold-500 block" />
                <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">About Me</span>
                <span className="h-0.5 w-24 bg-gold-500 block" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
                Mihaela Perelighin
              </h1>
              <p className="text-xl text-charcoal font-medium mb-6 leading-snug">
                Career Transition Strategist &amp; Coach
              </p>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Psychologist | Talent Acquisition Specialist in a Multinational Corporate Environment | 12+ Years in Global Recruitment | 1,500+ Professionals Hired across US, UK &amp; Canada
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="/#contact" className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-4 rounded-md transition-colors shadow-sm text-sm">
                  Book Your Free Discovery Call
                </a>
                <Link href="/#services" className="inline-flex items-center border border-navy-200 hover:border-gold-400 text-navy-800 font-medium px-7 py-4 rounded-md transition-colors text-sm">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center" style={{ width: "380px", height: "460px" }}>
                <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "calc(100% + 24px)", height: "calc(100% + 24px)", borderRadius: "50%", border: "1px solid #C9A84C", opacity: 0.55, pointerEvents: "none", zIndex: 0 }} />
                <div className="relative z-10 overflow-hidden w-full h-full" style={{ borderRadius: "50%", border: "5px solid #C9A84C", boxShadow: "0 8px 40px rgba(201,168,76,0.2)" }}>
                  <Image src="/images/mihaela-about.jpg" alt="Mihaela Perelighin" fill priority className="object-cover object-top" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="bg-navy-950 py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8 text-center">
              {CREDENTIALS.map(({ num, label }) => (
                <div key={label}>
                  <p className="text-4xl font-bold text-gold-400 mb-2">{num}</p>
                  <p className="text-navy-300 text-sm uppercase tracking-widest font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full bio */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-charcoal leading-relaxed text-lg">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">My Story</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <p>I'm Mihaela Perelighin, a psychologist with a Master's Degree in Psychology and over 12 years of experience working in Talent Acquisition within a multinational corporate environment.</p>
            <p>Throughout my career, I have recruited and hired more than 1,500 professionals across international markets, including the United States, United Kingdom, and Canada.</p>
            <p>Having reviewed thousands of applications and conducted countless interviews, I understand what helps candidates stand out in competitive job markets.</p>
            <p>This unique combination of psychological expertise and hands-on recruitment experience allows me to support clients from both perspectives: understanding human behavior, confidence, and motivation, while also knowing exactly how employers evaluate candidates and make hiring decisions.</p>
            <p>I work one-to-one with every client, offering personalized, practical guidance tailored to their goals, challenges, and career context.</p>
            <p>My mission is simple: to help you move forward with clarity, confidence, and a strategy that works in today's job market.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-navy-950 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-400 uppercase tracking-[0.15em]">FAQ</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-navy-800 pb-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{q}</h3>
                  <p className="text-navy-300 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Ready to Work Together?</h2>
            <p className="text-charcoal-light mb-8 text-lg">Book a free 20-minute Discovery Call and we'll discuss your situation, goals, and the most appropriate next steps.</p>
            <a href="/#contact" className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-sm text-sm">
              Book Your Free Discovery Call
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
