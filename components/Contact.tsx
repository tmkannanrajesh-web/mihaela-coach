import { Mail, Phone, MessageCircle, Linkedin, PenLine } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mihaelaperelighin.com",
    href: "mailto:hello@mihaelaperelighin.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+40 725486515",
    href: "tel:+40725486515",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 96199 85367",
    href: "https://wa.me/919619985367",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mihaela-perelighin-a9760841",
    href: "https://www.linkedin.com/in/mihaela-perelighin-a9760841/",
  },
  {
    icon: PenLine,
    label: "Blog",
    value: "mihaelacareerstrategist.blogspot.com",
    href: "https://mihaelacareerstrategist.blogspot.com/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-4 mb-10 justify-center">
          <span className="h-0.5 w-24 bg-gold-500 block" />
          <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Contact</span>
          <span className="h-0.5 w-24 bg-gold-500 block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact details */}
          <div className="space-y-6">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 transition-colors">
                  <Icon className="w-4 h-4 text-gold-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-charcoal-light uppercase tracking-wider">{label}</p>
                  <p className="text-navy-900 font-medium text-sm group-hover:text-gold-700 transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Discovery Call box */}
          <div className="bg-navy-50 border border-navy-100 rounded-2xl p-8 sm:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-6 h-6 text-gold-600" />
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Book Your Free 20-Minute Discovery Call
            </h3>
            <p className="text-charcoal-light leading-relaxed mb-8 max-w-sm mx-auto text-sm">
              1:1 online sessions • English-speaking clients worldwide (Romanian available on request)
            </p>
            <a
              href="mailto:hello@mihaelaperelighin.com"
              className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-4 rounded-md transition-colors shadow-sm text-sm"
            >
              Book Your Free Discovery Call
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
