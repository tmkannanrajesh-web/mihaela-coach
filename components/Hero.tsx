import Image from "next/image";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-br from-navy-50 via-white to-sage-50"
    >
      <div className="max-w-8xl mx-auto section-padding grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sage-100 text-sage-700 text-xs font-semibold tracking-wide px-4 py-1.5 mb-6">
            Psychologist &amp; Corporate Talent Acquisition Expert
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-navy-900 leading-[1.12] mb-6 text-balance">
            Where Human Behavior Meets Hiring Decisions
          </h1>

          <p className="text-lg lg:text-xl text-charcoal-light leading-relaxed mb-5 max-w-xl">
            I help mid-career professionals navigate career change, rebuild
            confidence, and secure their next opportunity — combining
            psychological insight with 12+ years inside corporate hiring rooms.
          </p>

          <p className="text-sm lg:text-base text-navy-600 font-medium leading-relaxed mb-8 max-w-xl">
            Psychologist | Talent Acquisition Specialist in a Multinational
            Corporate Environment | 12+ Years in Global Recruitment | 1,500+
            Professionals Hired across US, UK &amp; Canada
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-sage-600 hover:bg-sage-700 text-white font-semibold px-7 py-4 transition-colors shadow-card"
            >
              <CalendarCheck size={19} />
              Book Free Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-navy-200 hover:border-sage-400 hover:text-sage-700 text-navy-800 font-semibold px-7 py-4 transition-colors"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>
          </div>

          <p className="mt-7 text-sm text-navy-500">
            1:1 online sessions &bull; English-speaking clients worldwide
            &bull; Romanian available on request
          </p>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card-hover ring-4 ring-white">
            <Image
              src="/images/mihaela-perelighin.jpg"
              alt="Mihaela Perelighin"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 80vw, 420px"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col gap-1 bg-white rounded-2xl shadow-card px-6 py-4 border border-navy-50">
            <span className="text-2xl font-bold text-navy-900">1,500+</span>
            <span className="text-xs text-charcoal-light font-medium">
              Professionals hired across US, UK &amp; Canada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
