"use client";

import { useState } from "react";
import { X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Packages", href: "/#packages" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <footer className="bg-navy-950 border-t border-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
            <p className="font-semibold text-white text-[15px] tracking-tight">
              Mihaela Perelighin
            </p>
            <ul className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-navy-400 hover:text-gold-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-navy-800 mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-500">
            <p>© {new Date().getFullYear()} Mihaela Perelighin · Career Strategy &amp; Coaching</p>
            <button
              onClick={() => setShowDisclaimer(true)}
              className="underline underline-offset-2 hover:text-navy-300 transition-colors"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>
      </footer>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowDisclaimer(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-card-hover"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDisclaimer(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-navy-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-charcoal" />
            </button>

            <h2 className="text-xl font-bold text-navy-900 mb-6">Disclaimer</h2>

            <div className="space-y-5 text-sm text-charcoal-light leading-relaxed">

              <p>
                The services provided are intended for guidance, support, and professional development purposes only. While I bring over 12 years of experience in global talent acquisition and a background in psychology, I do not guarantee specific outcomes, including job offers, interviews, promotions, or career changes.
              </p>

              <p>
                Career outcomes depend on multiple factors, including individual effort, market conditions, and external circumstances beyond my control.
              </p>

              <p>
                By engaging in these services, you acknowledge that you are fully responsible for your own decisions, actions, and results.
              </p>

              <p>
                I am not liable for any decisions made or actions taken by clients as a result of the guidance provided.
              </p>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Scope of Services</h3>
                <p>
                  My services focus on career strategy, professional positioning, job search guidance, and interview preparation. These services do not replace psychological therapy, legal advice, financial advice, or any other regulated professional services.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">No Guarantee of Results</h3>
                <p>
                  I do not guarantee employment, job placement, or any specific career outcome.
                  My role is to provide guidance, insights, and practical strategies based on my professional experience to support you in making informed decisions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">Client Responsibility</h3>
                <p>
                  Clients are responsible for implementing the strategies discussed and for all decisions made during and after the coaching process.
                  Results will vary depending on individual circumstances and level of engagement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-navy-900 mb-2">General</h3>
                <p>
                  These terms apply to all clients regardless of location, including but not limited to the United Kingdom, United States, Canada, and other international markets.
                  By using my services, you agree to these terms.
                </p>
              </div>

            </div>

            <button
              onClick={() => setShowDisclaimer(false)}
              className="mt-8 w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 rounded-md transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
