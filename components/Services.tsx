import { Compass, Shield, FileText, Search, Mic, LifeBuoy } from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "Career Clarity & Direction",
    desc: "For professionals who feel stuck, uncertain, or overwhelmed about their next career move.",
    intro: "Together we explore:",
    items: [
      "Professional strengths",
      "Values and motivations",
      "Transferable skills",
      "Career possibilities",
      "Market opportunities",
    ],
    outcome: "A clear career direction and a practical action plan.",
  },
  {
    icon: Shield,
    title: "Career Confidence Rebuilding",
    desc: "Designed for professionals affected by redundancy, career setbacks, long employment gaps, self-doubt, or imposter syndrome.",
    intro: "Together we work on:",
    items: [
      "Rebuilding professional confidence",
      "Identifying strengths and achievements",
      "Creating a compelling professional narrative",
      "Overcoming limiting beliefs",
    ],
    outcome: "Greater confidence, clarity, and readiness to move forward.",
  },
  {
    icon: FileText,
    title: "CV, LinkedIn & Professional Positioning",
    desc: "Helping you present your experience in a way that reflects your true value.",
    intro: "Includes:",
    items: [
      "CV review and enhancement",
      "LinkedIn profile optimization",
      "Personal branding guidance",
      "Alignment with target roles",
    ],
    outcome: "A stronger professional profile aligned with today's job market.",
  },
  {
    icon: Search,
    title: "Job Search Strategy",
    desc: "A structured and targeted approach to finding the right opportunities.",
    intro: "Includes:",
    items: [
      "Career transition planning",
      "Target role identification",
      "Networking strategies",
      "LinkedIn visibility",
      "Application strategy",
    ],
    outcome: "A focused job search plan that saves time and improves results.",
  },
  {
    icon: Mic,
    title: "Interview Preparation",
    desc: "Helping you communicate your value with confidence.",
    intro: "Includes:",
    items: [
      "Mock interviews",
      "Behavioural interview preparation",
      "Interview feedback",
      "Confidence building",
      "Offer discussion preparation",
    ],
    outcome: "Stronger interview performance and increased confidence.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Transition Support",
    desc: "Continued guidance and accountability throughout your transition journey.",
    intro: "Includes:",
    items: [
      "Progress reviews",
      "Strategy adjustments",
      "Application support",
      "Career decision guidance",
    ],
    outcome: "Consistent momentum and support until you achieve your goals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-0.5 w-24 bg-gold-500 block" />
            <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Services</span>
            <span className="h-0.5 w-24 bg-gold-500 block" />
          </div>
          <p className="text-charcoal max-w-2xl mx-auto text-lg leading-relaxed mb-3">
            Career transitions are rarely just about finding a new job. They involve clarity, confidence, positioning, and a strategy that aligns with your strengths and goals.
          </p>
          <p className="text-charcoal-light max-w-2xl mx-auto text-lg leading-relaxed">
            My services are designed to support you through every stage of the career transition process—from gaining clarity on your direction to confidently securing your next opportunity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, intro, items, outcome }) => (
            <div
              key={title}
              className="group border border-navy-100 rounded-xl p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-gold-50 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors">
                <Icon className="w-5 h-5 text-gold-600 group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-bold text-navy-900 text-[17px] mb-2 leading-snug">{title}</h3>
              <p className="text-charcoal-light text-sm leading-relaxed mb-2">{desc}</p>
              <p className="text-charcoal text-sm font-semibold mb-3">{intro}</p>

              <ul className="space-y-1.5 mb-5 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal-light">
                    <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-navy-100">
                <p className="text-xs text-charcoal-light">
                  <span className="font-semibold text-gold-700">Outcome:</span> {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Call Banner */}
        <div className="mt-14 bg-navy-50 border border-navy-100 rounded-2xl p-8 sm:p-10 text-center">
          <p className="text-navy-900 font-semibold text-lg mb-2">Not Sure Which Service Is Right For You?</p>
          <p className="text-charcoal-light mb-6 max-w-lg mx-auto">
            Book a free 20-minute Discovery Call and we'll discuss your situation, goals, and the most appropriate next steps.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-3.5 rounded-md transition-colors shadow-sm text-sm"
          >
            Book Your Free Discovery Call
          </a>
        </div>

      </div>
    </section>
  );
}
