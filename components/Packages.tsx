import { Check, Star, CalendarCheck } from "lucide-react";

const PACKAGES = [
  {
    name: "Career Clarity Package",
    description:
      "Gain clarity, identify realistic career options, and leave with a practical 90-day action plan.",
    sessions: "3 Sessions",
    price: "€250",
    priceNote: "approx. $270 USD / £210 GBP",
    popular: false,
    features: [
      "Session 1: Career history, strengths, values, and current challenges",
      "Session 2: Career options, opportunities, and market realities",
      "Session 3: Personalized 90-day action plan",
    ],
  },
  {
    name: "Career Reinvention Program",
    description:
      "For professionals planning a significant career transition and repositioning their experience.",
    sessions: "6 Sessions",
    price: "€600",
    priceNote: "approx. $650 USD / £520 GBP",
    popular: true,
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
    description:
      "Comprehensive support throughout your career transition — from uncertainty to securing your next opportunity.",
    sessions: "12 Sessions",
    price: "€1,200",
    priceNote: "approx. $1,300 USD / £1,040 GBP",
    popular: false,
    features: [
      "Everything in the Career Reinvention Program, plus:",
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
    <section id="packages" className="py-20 lg:py-28 bg-white">
      <div className="max-w-8xl mx-auto section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sage-600 font-semibold tracking-wide text-sm uppercase mb-3 block">
            Packages
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 mb-5 text-balance">
            Choose the Level of Support That Fits Your Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-7 lg:gap-6 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? "bg-navy-900 text-white shadow-card-hover lg:scale-[1.04] border-2 border-sage-400"
                  : "bg-white border border-navy-100 shadow-soft hover:shadow-card"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-sage-400 text-navy-950 text-xs font-bold tracking-wide px-4 py-1.5 shadow-soft">
                  <Star size={13} fill="currentColor" />
                  MOST POPULAR
                </span>
              )}

              <h3
                className={`font-display text-xl font-bold mb-2 ${
                  pkg.popular ? "text-white" : "text-navy-900"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  pkg.popular ? "text-navy-200" : "text-charcoal-light"
                }`}
              >
                {pkg.description}
              </p>

              <div
                className={`mb-6 pb-6 border-b ${
                  pkg.popular ? "border-navy-700" : "border-navy-100"
                }`}
              >
                <span
                  className={`inline-block text-xs font-semibold uppercase tracking-wide mb-3 rounded-full px-3 py-1 ${
                    pkg.popular
                      ? "bg-navy-800 text-sage-300"
                      : "bg-sage-50 text-sage-700"
                  }`}
                >
                  {pkg.sessions}
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-display text-4xl font-bold ${
                      pkg.popular ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-xs ${
                      pkg.popular ? "text-navy-300" : "text-navy-400"
                    }`}
                  >
                    starting from
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    pkg.popular ? "text-navy-400" : "text-navy-400"
                  }`}
                >
                  {pkg.priceNote}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        pkg.popular ? "text-sage-400" : "text-sage-600"
                      }`}
                    />
                    <span className={pkg.popular ? "text-navy-100" : "text-charcoal"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-md font-semibold px-6 py-3.5 transition-colors ${
                  pkg.popular
                    ? "bg-sage-400 hover:bg-sage-300 text-navy-950"
                    : "bg-navy-900 hover:bg-navy-800 text-white"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <h3 className="font-display text-xl lg:text-2xl font-bold text-navy-900 mb-3 text-balance">
            Not Sure Which Package Is Right For You?
          </h3>
          <p className="text-charcoal-light mb-7 leading-relaxed">
            Book a free 20-minute Discovery Call and we&apos;ll discuss your
            goals, challenges, and the level of support that best fits your
            situation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-sage-600 hover:bg-sage-700 text-white font-semibold px-7 py-4 transition-colors shadow-soft"
          >
            <CalendarCheck size={19} />
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
