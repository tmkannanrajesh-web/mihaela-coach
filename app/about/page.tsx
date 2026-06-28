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

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="uppercase tracking-[0.18em] text-gold-600 font-semibold mb-4">
                About Mihaela
              </p>
              <h1 className="text-5xl font-bold text-navy-900 mb-8 leading-tight">
                Helping Mid-Career Professionals Navigate Change with Confidence
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed mb-6">
                Career transitions are rarely just about finding another job.
                They involve confidence, identity, direction, and making informed
                decisions about your future.
              </p>
              <p className="text-lg text-charcoal-light leading-relaxed">
                I combine over 12 years of international recruitment experience
                with a Master's Degree in Psychology to help professionals
                reposition themselves and move forward with clarity.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className="relative overflow-hidden"
                style={{
                  width: 380,
                  height: 460,
                  borderRadius: "50%",
                  border: "5px solid #C9A84C",
                }}
              >
                <Image
                  src="/images/mihaela-perelighin.jpg"
                  alt="Mihaela Perelighin"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Experience */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy-900 mb-4">
                Experience You Can Trust
              </h2>
              <p className="text-xl text-charcoal-light">
                Combining psychology, recruitment expertise, and practical coaching.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <h3 className="text-5xl font-bold text-gold-600 mb-4">12+</h3>
                <p className="font-semibold mb-2">Years in Global Recruitment</p>
                <p className="text-charcoal-light">
                  Hiring professionals across Europe, North America and the UK.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <h3 className="text-5xl font-bold text-gold-600 mb-4">1,500+</h3>
                <p className="font-semibold mb-2">Professionals Supported</p>
                <p className="text-charcoal-light">
                  Helping candidates navigate interviews, promotions and career changes.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <h3 className="text-5xl font-bold text-gold-600 mb-4">M.Sc.</h3>
                <p className="font-semibold mb-2">Psychology</p>
                <p className="text-charcoal-light">
                  Bringing evidence-based coaching with practical recruitment insight.
                </p>
              </div>

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
