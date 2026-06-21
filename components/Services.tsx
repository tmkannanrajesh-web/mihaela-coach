import {
  Compass,
  HeartHandshake,
  FileText,
  Search,
  MessagesSquare,
  LifeBuoy,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Compass,
    title: "Career Clarity & Direction",
    description:
      "For professionals who feel stuck, uncertain, or overwhelmed about their next career move.",
    points: [
      "Professional strengths",
      "Values and motivations",
      "Transferable skills",
      "Career possibilities",
      "Market opportunities",
    ],
    outcome: "A clear career direction and a practical action plan.",
  },
  {
    icon: HeartHandshake,
    title: "Career Confidence Rebuilding",
    description:
      "Designed for professionals affected by redundancy, career setbacks, long employment gaps, self-doubt, or imposter syndrome.",
    points: [
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
    description:
      "Helping you present your experience in a way that reflects your true value.",
    points: [
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
    description:
      "A structured and targeted approach to finding the right opportunities.",
    points: [
      "Career transition planning",
      "Target role identification",
      "Networking strategies",
      "LinkedIn visibility",
      "Application strategy",
    ],
    outcome: "A focused job search plan that saves time and improves results.",
  },
  {
    icon: MessagesSquare,
    title: "Interview Preparation",
    description: "Helping you communicate your value with confidence.",
    points: [
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
    description:
      "Continued guidance and accountability throughout your transition journey.",
    points: [
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
    <section id="services" className="py-20 lg:py-28 bg-navy-50/60">
      <div className="max-w-8xl mx-auto section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sage-600 font-semibold tracking-wide text-sm uppercase mb-3 block">
            Services
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 mb-5 text-balance">
            Support for Every Stage of Your Career Transition
          </h2>
          <p className="text-charcoal-light leading-relaxed">
            Career transitions are rarely just about finding a new job. They
            involve clarity, confidence, positioning, and a strategy that
            aligns with your strengths and goals. My services are designed to
            support you through every stage of the career transition
            process — from gaining clarity on your direction to confidently
            securing your next opportunity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {SERVICES.map(({ icon: Icon, title, description, points, outcome }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-navy-100 p-7 flex flex-col shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-sage-50 flex items-center justify-center mb-5 group-hover:bg-sage-100 transition-colors">
                <Icon className="text-sage-600" size={26} strokeWidth={1.8} />
              </div>

              <h3 className="font-display text-lg font-bold text-navy-900 mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                {description}
              </p>

              <ul className="space-y-2 mb-5 flex-1">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-charcoal"
                  >
                    <CheckCircle2
                      className="text-sage-500 shrink-0 mt-0.5"
                      size={15}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-navy-100">
                <p className="text-xs font-semibold text-sage-700 uppercase tracking-wide mb-1">
                  Outcome
                </p>
                <p className="text-sm text-navy-800 font-medium leading-snug">
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy-900 rounded-3xl px-8 py-12 lg:py-14 text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3 text-balance">
            Not Sure Which Service Is Right For You?
          </h3>
          <p className="text-navy-200 max-w-xl mx-auto mb-8 leading-relaxed">
            Book a free 20-minute Discovery Call and we&apos;ll discuss your
            situation, goals, and the most appropriate next steps.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-sage-500 hover:bg-sage-400 text-navy-950 font-semibold px-7 py-4 transition-colors"
          >
            <CalendarCheck size={19} />
            Book Your Free Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}
