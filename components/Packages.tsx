import { Check } from "lucide-react";

const PACKAGES = [
  {
    name: "Career Clarity Package",
    sessions: "3 Sessions",
    price: "€250",
    approx: "approx. $270 USD / £210 GBP",
    popular: false,
    desc: "Gain clarity, identify realistic career options, and leave with a practical 90-day action plan.",
    features: [
      "Session 1: Career history, strengths, values, and current challenges",
      "Session 2: Career options, opportunities, and market realities",
      "Session 3: Personalized 90-day action plan",
    ],
  },
  {
    name: "Career Reinvention Program",
    sessions: "6 Sessions",
    price: "€600",
    approx: "approx. $650 USD / £520 GBP",
    popular: true,
    desc: "For professionals planning a significant career transition and repositioning their experience.",
    features: [
      "Career clarity",
      "Professional positioning",
      "Confidence rebuilding",
      "CV review",
      "LinkedIn optimization",
      "Interview preparation",
      "Job search strategy",
    ],
  },
  {
    name: "Career Transition Accelerator",
    sessions: "12 Sessions",
    price: "€1,200",
    approx: "approx. $1,300 USD / £1,040 GBP",
    popular: false,
    desc: "Comprehensive support throughout your career transition—from uncertainty to securing your next opportunity.",
    featuresPrefix: "Includes everything in the Career Reinvention Program, plus:",
    features: [
      "Ongoing accountability",
      "Extended coaching support",
      "Advanced interview preparation",
      "Offer evaluation",
      "Career decision support",
      "Transition guidance throughout the process",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-navy-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-0.5 w-24 bg-gold-400 block" />
            <span className="text-xl font-extrabold text-gold-300 uppercase tracking-[0.15em]">Packages</span>
            <span className="h-0.5 w-24 bg-gold-400 block" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PACKAGES.map(({ name, sessions, price, approx, popular, desc, features, featuresPrefix }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                popular
                  ? "bg-gold-500 shadow-card-hover ring-2 ring-gold-400"
                  : "bg-navy-900 border border-navy-800 hover:border-navy-600"
              }`}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-gold-700 text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                  ★ Most Popular
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${popular ? "text-gold-100" : "text-gold-500"}`}>
                {sessions}
              </div>

              <h3 className="text-xl font-bold mb-3 leading-snug text-white">{name}</h3>

              <p className={`text-sm leading-relaxed mb-6 ${popular ? "text-gold-100" : "text-navy-300"}`}>
                {desc}
              </p>

              <div className="mb-1">
                <span className={`text-3xl font-bold ${popular ? "text-white" : "text-gold-400"}`}>
                  Starting from {price}
                </span>
              </div>
              <p className={`text-xs mb-6 ${popular ? "text-gold-200" : "text-navy-400"}`}>
                {approx}
              </p>

              {featuresPrefix && (
                <p className={`text-sm font-medium mb-3 ${popular ? "text-gold-100" : "text-navy-300"}`}>
                  {featuresPrefix}
                </p>
              )}

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${popular ? "text-white" : "text-gold-500"}`} />
                    <span className={`text-sm leading-snug ${popular ? "text-gold-50" : "text-navy-300"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold text-sm px-6 py-3.5 rounded-md transition-colors ${
                  popular
                    ? "bg-white text-gold-700 hover:bg-gold-50"
                    : "bg-gold-500 text-white hover:bg-gold-600"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center border-t border-navy-800 pt-12">
          <p className="text-white font-semibold text-lg mb-2">Not Sure Which Package Is Right For You?</p>
          <p className="text-navy-300 mb-6 max-w-lg mx-auto">
            Book a free 20-minute Discovery Call and we'll discuss your goals, challenges, and the level of support that best fits your situation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white hover:border-gold-600 font-semibold px-7 py-3.5 rounded-md transition-colors text-sm"
          >
            Book Your Free Discovery Call
          </a>
        </div>

      </div>
    </section>
  );
}
