import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Career Transition Coaching",
  description:
    "One-to-one career transition coaching for mid-career professionals facing redundancy, career stagnation, or career change. Psychologist & recruiter with 12+ years experience across US, UK & Canada.",
  alternates: {
    canonical: "https://www.mihaelaperelighin.com/career-transition-coaching",
  },
  openGraph: {
    title: "Career Transition Coaching | Mihaela Perelighin",
    description:
      "One-to-one career transition coaching for mid-career professionals. Navigate career change, rebuild confidence, and secure your next opportunity.",
    url: "https://www.mihaelaperelighin.com/career-transition-coaching",
  },
};

const FAQS = [
  {
    q: "Who is career transition coaching for?",
    a: "It is designed for mid-career professionals (35–60) facing redundancy, layoffs, career stagnation, burnout, or those considering a significant career change.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on your goals. The Career Clarity Package (3 sessions) is ideal for direction. The Career Reinvention Program (6 sessions) covers full repositioning. The Career Transition Accelerator (12 sessions) provides comprehensive support.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Sessions are conducted online and I work with English-speaking clients worldwide. Romanian is available on request.",
  },
  {
    q: "What makes you different from other career coaches?",
    a: "I combine a Master's Degree in Psychology with over 12 years of hands-on recruitment experience inside a multinational corporate environment. I understand both sides of the hiring process — what candidates experience and what employers are actually looking for.",
  },
  {
    q: "How do I get started?",
    a: "Book a free 20-minute Discovery Call. We'll discuss your situation, goals, and the most appropriate next steps.",
  },
];

const WHAT_YOU_GET = [
  "Clarity on your career direction and realistic options",
  "A structured plan tailored to your goals and timeline",
  "Confidence to present yourself effectively in the job market",
  "A professionally positioned CV and LinkedIn profile",
  "Interview preparation and mock sessions",
  "Ongoing accountability and support throughout the transition",
];

const WHO_ITS_FOR = [
  "Mid-career professionals (35–60) facing redundancy or layoffs",
  "Professionals experiencing career stagnation or lack of progression",
  "Individuals considering a career change but unsure where to start",
  "Professionals experiencing burnout and seeking more purpose",
  "Women returning to work after a career break",
  "International and expat professionals targeting English-speaking markets",
];

export default function CareerTransitionCoachingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">
                Career Transition Coaching
              </span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
              Navigate Career Change with Clarity and Confidence
            </h1>
            <p className="text-lg text-charcoal-light leading-relaxed mb-8 max-w-2xl mx-auto">
              One-to-one coaching for mid-career professionals facing redundancy,
              career stagnation, or a significant career change. Helping you move
              forward with a strategy that works in today's job market.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-sm text-sm"
            >
              Book Your Free 20-Minute Discovery Call
            </a>
            <p className="text-charcoal-light text-xs mt-3">
              1:1 online sessions • English-speaking clients worldwide (Romanian available on request)
            </p>
          </div>
        </section>

        {/* Who it's for + What you get */}
        <section className="bg-navy-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-0.5 w-24 bg-gold-500 block" />
                <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Who It's For</span>
                <span className="h-0.5 w-24 bg-gold-500 block" />
              </div>
              <ul className="space-y-4">
                {WHO_ITS_FOR.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-0.5 w-24 bg-gold-500 block" />
                <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">What You Get</span>
                <span className="h-0.5 w-24 bg-gold-500 block" />
              </div>
              <ul className="space-y-4">
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* About Mihaela — brief */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Why Work With Me</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <p className="text-charcoal leading-relaxed text-lg mb-4">
              Unlike many career coaches, I combine psychological expertise with more than 12 years of hands-on recruitment experience inside a multinational corporate environment.
            </p>
            <p className="text-charcoal leading-relaxed text-lg mb-4">
              Having recruited and hired more than 1,500 professionals across international markets, I help clients position themselves strategically and confidently in today's competitive job market.
            </p>
            <p className="text-charcoal leading-relaxed text-lg">
              I understand both sides of the hiring process: what candidates experience and what employers are actually looking for.
            </p>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-charcoal-light mb-8 text-lg">
              Book a free 20-minute Discovery Call and we'll discuss your situation, goals, and the most appropriate next steps.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-sm text-sm"
            >
              Book Your Free Discovery Call
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
