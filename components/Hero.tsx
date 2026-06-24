import Image from "next/image";

const WHO_I_HELP = [
  "Mid-career professionals (35–60) facing redundancy, layoffs, career stagnation or lack of progression",
  "Professionals experiencing burnout or considering a career change",
  "Individuals seeking more purpose, clarity, or direction",
  "Women returning to work after raising children, caregiving responsibilities, divorce, or other major life transitions.",
  "International and expat professionals targeting English-speaking markets",
];

const CHALLENGES = [
  "I feel stuck in my career.",
  "I have lost confidence after redundancy.",
  "I want a career change but don't know where to start.",
  "My CV isn't generating interviews.",
  "I'm returning to work after a long break.",
];

const SERVICES_LIST = [
  "Career Clarity & Direction",
  "Career Confidence Rebuilding",
  "CV / Resume & LinkedIn Optimization",
  "Job Search Strategy",
  "Interview Preparation",
  "Ongoing Support",
];

const HOW_WE_WORK = [
  "Book a free 20-minute Discovery Call",
  "Complete a short career assessment questionnaire prior to our session, so we can focus directly on your goals and challenges",
  "Receive personalized recommendations",
  "Work together in structured 1:1 sessions (60 min, weekly)",
];

const PACKAGES_SUMMARY = [
  {
    name: "Career Clarity Package",
    sessions: "3 sessions",
    desc: "For direction and a clear plan",
    popular: false,
  },
  {
    name: "Career Reinvention Program",
    sessions: "6 sessions",
    desc: "Gain clarity, reposition your experience, and confidently pursue new opportunities.",
    popular: true,
  },
  {
    name: "Career Transition Accelerator",
    sessions: "12 sessions",
    desc: "Comprehensive support throughout your career transition",
    popular: false,
  },
];

export default function Hero() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[88px] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-navy-900 leading-[1.2] mb-3">
              Career Transition Strategist &amp; Coach
            </h1>
            <p className="text-xl sm:text-2xl text-charcoal leading-snug mb-6 font-medium">
              Helping Mid-Career Professionals Navigate Career Change, Rebuild Confidence, and Secure Their Next Opportunity
            </p>
            <p className="text-charcoal text-sm leading-relaxed mb-3 font-bold">
              Psychologist | Talent Acquisition Specialist in a Multinational Corporate Environment | 12+ Years in Global Recruitment | 1,500+ Professionals Hired across US, UK &amp; Canada
            </p>

            {/* Script-style signature name in gold */}
            <p
              className="text-gold-600 font-bold text-2xl mb-8"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
            >
              Mihaela Perelighin
            </p>

            <a
              href="#contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-4 rounded-md transition-colors shadow-sm text-sm"
            >
              Book Your Free 20-Minute Discovery Call
            </a>
            <p className="text-charcoal-light text-xs mt-3">
              1:1 online sessions • English-speaking clients worldwide (Romanian available on request)
            </p>
          </div>

          {/* Right: oval photo — thick gold border + close thin outer ring */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center" style={{ width: "400px", height: "500px" }}>

              {/* Thin outer ring — 12px outside the photo */}
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "-12px",
                  width: "calc(100% + 24px)",
                  height: "calc(100% + 24px)",
                  borderRadius: "50%",
                  border: "1px solid #C9A84C",
                  opacity: 0.55,
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Photo with thick gold border */}
              <div
                className="relative z-10 overflow-hidden w-full h-full"
                style={{
                  borderRadius: "50%",
                  border: "5px solid #C9A84C",
                  boxShadow: "0 8px 40px rgba(201,168,76,0.2)",
                }}
              >
                <Image
                  src="/images/mihaela-perelighin.jpg"
                  alt="Mihaela Perelighin — Career Transition Strategist & Coach"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY WORK WITH ME ── */}
      <section className="bg-navy-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-0.5 w-24 bg-gold-500 block" />
            <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Why Work With Me?</span>
            <span className="h-0.5 w-24 bg-gold-500 block" />
          </div>
          <p className="text-charcoal leading-relaxed text-lg mb-5">
            Unlike many career coaches, I combine psychological expertise with more than 12 years of hands-on recruitment experience inside a multinational corporate environment.
          </p>
          <p className="text-charcoal leading-relaxed text-lg mb-5">
            Having recruited and hired more than 1,500 professionals across international markets, I help clients position themselves strategically and confidently in today's competitive job market.
          </p>
          <p className="text-charcoal leading-relaxed text-lg">
            I understand both sides of the hiring process: what candidates experience and what employers are actually looking for.
          </p>
        </div>
      </section>

      {/* ── WHO I HELP + COMMON CHALLENGES ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">WHO I HELP</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <ul className="space-y-4">
              {WHO_I_HELP.map((item) => (
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
              <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Common Challenges</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <ul className="space-y-4">
              {CHALLENGES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                  <span className="text-charcoal leading-relaxed italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="h-0.5 w-24 bg-gold-500 block" />
            <span className="text-xl font-extrabold text-gold-400 uppercase tracking-[0.15em]">SERVICES</span>
            <span className="h-0.5 w-24 bg-gold-500 block" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {SERVICES_LIST.map((s) => (
              <div key={s} className="bg-navy-900 border border-navy-800 rounded-xl px-6 py-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="text-navy-200 font-medium text-sm">{s}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#services"
              className="inline-flex items-center border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white hover:border-gold-500 font-semibold px-7 py-3.5 rounded-md transition-colors text-sm"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK TOGETHER ── */}
      <section className="bg-navy-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <span className="h-0.5 w-24 bg-gold-500 block" />
            <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">HOW WE WORK TOGETHER</span>
            <span className="h-0.5 w-24 bg-gold-500 block" />
          </div>
          <ol className="space-y-6">
            {HOW_WE_WORK.map((step, i) => (
              <li key={step} className="flex items-start gap-5">
                <span className="w-9 h-9 rounded-full bg-gold-500 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-charcoal leading-relaxed pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-sm text-sm"
            >
              Book Your Free 20-Minute Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* ── PACKAGES PREVIEW ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <span className="h-0.5 w-24 bg-gold-500 block" />
            <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">PACKAGES</span>
            <span className="h-0.5 w-24 bg-gold-500 block" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mt-8">
            {PACKAGES_SUMMARY.map(({ name, sessions, desc, popular }) => (
              <div
                key={name}
                className={`relative rounded-xl border p-7 flex flex-col ${
                  popular ? "border-gold-400" : "bg-white border-navy-100"
                }`}
                style={popular ? { background: "linear-gradient(135deg, #16212f 0%, #1c2b42 100%)" } : {}}
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                    ★ Most Popular
                  </div>
                )}
                <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${popular ? "text-gold-400" : "text-gold-600"}`}>
                  {sessions}
                </p>
                <h3 className={`font-bold text-lg mb-3 leading-snug ${popular ? "text-white" : "text-navy-900"}`}>
                  {name}
                </h3>
                <p className={`text-sm leading-relaxed flex-1 ${popular ? "text-navy-300" : "text-charcoal-light"}`}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center flex flex-wrap gap-4 justify-center">
            <a
              href="#packages"
              className="inline-flex items-center border border-navy-200 hover:border-navy-400 text-navy-800 font-medium px-7 py-3.5 rounded-md transition-colors text-sm"
            >
              Click here for details
            </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-md transition-colors shadow-sm text-sm"
            >
              Book Your Free Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
