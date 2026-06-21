import Image from "next/image";
import { GraduationCap, Briefcase, Users } from "lucide-react";

const STATS = [
  { icon: Briefcase, value: "12+", label: "Years in Global Recruitment" },
  { icon: Users, value: "1,500+", label: "Professionals Hired (US, UK, Canada)" },
  { icon: GraduationCap, value: "M.A.", label: "Psychological Counselling" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-8xl mx-auto section-padding grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden shadow-card">
            <Image
              src="/images/mihaela-about.jpg"
              alt="Mihaela Perelighin"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 1024px) 80vw, 420px"
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6 max-w-md mx-auto">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-navy-50 rounded-xl p-4 flex flex-col items-center text-center gap-1.5"
              >
                <Icon className="text-sage-600" size={20} />
                <span className="text-lg font-bold text-navy-900">{value}</span>
                <span className="text-[11px] leading-tight text-charcoal-light font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sage-600 font-semibold tracking-wide text-sm uppercase mb-3 block">
            About Me
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 mb-6 text-balance">
            I&apos;m Mihaela Perelighin
          </h2>

          <div className="space-y-5 text-charcoal-light leading-relaxed text-[1.05rem]">
            <p>
              I&apos;m Mihaela Perelighin, a psychologist with a Master&apos;s
              Degree in Psychological Counselling and over 12 years of
              experience working in Talent Acquisition within a multinational
              corporate environment.
            </p>
            <p>
              Throughout my career, I have recruited and hired more than
              1,500 professionals across international markets, including the
              United States, United Kingdom, and Canada.
            </p>
            <p>
              Having reviewed thousands of applications and conducted
              countless interviews, I understand what helps candidates stand
              out in competitive job markets.
            </p>
            <p>
              This unique combination of psychological expertise and
              hands-on recruitment experience allows me to support clients
              from both perspectives: understanding human behavior,
              confidence, and motivation, while also knowing exactly how
              employers evaluate candidates and make hiring decisions.
            </p>
            <p>
              I work one-to-one with every client, offering personalized,
              practical guidance tailored to their goals, challenges, and
              career context.
            </p>
            <p className="font-semibold text-navy-800">
              My mission is simple: to help you move forward with clarity,
              confidence, and a strategy that works in today&apos;s job
              market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
