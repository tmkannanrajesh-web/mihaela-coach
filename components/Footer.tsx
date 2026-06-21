"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  useEffect(() => {
    if (disclaimerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [disclaimerOpen]);

  return (
    <>
      <footer className="bg-navy-950 text-navy-300">
        <div className="max-w-8xl mx-auto section-padding py-14">
          <div className="grid md:grid-cols-[auto_1fr_1fr] gap-10 items-start pb-10 border-b border-white/10">
            <div>
              <Image
                src="/images/mihaela-logo.jpg"
                alt="Mihaela Perelighin"
                width={150}
                height={64}
                className="h-16 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.92 }}
              />
              <p className="text-sm text-navy-400 mt-4 max-w-xs leading-relaxed">
                Career Transition Strategist &amp; Psychologist, helping
                mid-career professionals move forward with clarity and
                confidence.
              </p>
            </div>

            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Get in Touch
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2.5">
                  <Mail size={15} className="text-sage-400" />
                  <a
                    href="mailto:hello@mihaelapereligh.com"
                    className="hover:text-sage-300 transition-colors"
                  >
                    hello@mihaelapereligh.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={15} className="text-sage-400" />
                  <a
                    href="tel:+40725486515"
                    className="hover:text-sage-300 transition-colors"
                  >
                    +40 725486515
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Linkedin size={15} className="text-sage-400" />
                  <a
                    href="https://www.linkedin.com/in/mihaela-perelighin-a9760841/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sage-300 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">
                Quick Links
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  ["About", "#about"],
                  ["Services", "#services"],
                  ["Packages", "#packages"],
                  ["Testimonials", "#testimonials"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="hover:text-sage-300 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-navy-500">
            <p>© 2026 Mihaela Perelighin. All Rights Reserved.</p>
            <button
              onClick={() => setDisclaimerOpen(true)}
              className="hover:text-sage-300 underline underline-offset-4 transition-colors"
            >
              Legal Disclaimer
            </button>
          </div>
        </div>
      </footer>

      {disclaimerOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm"
          onClick={() => setDisclaimerOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-card-hover max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white flex items-center justify-between px-7 py-5 border-b border-navy-100 rounded-t-2xl">
              <h3 className="font-display text-xl font-bold text-navy-900">
                Legal Disclaimer
              </h3>
              <button
                onClick={() => setDisclaimerOpen(false)}
                className="p-2 rounded-full hover:bg-navy-50 text-navy-500 transition-colors"
                aria-label="Close disclaimer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-7 py-6 space-y-6 text-sm text-charcoal-light leading-relaxed">
              <p>
                The services provided are intended for guidance, support, and
                professional development purposes only. While I bring over 12
                years of experience in global talent acquisition and a
                background in psychology, I do not guarantee specific
                outcomes, including job offers, interviews, promotions, or
                career changes. Career outcomes depend on multiple factors,
                including individual effort, market conditions, and external
                circumstances beyond my control. By engaging in these
                services, you acknowledge that you are fully responsible for
                your own decisions, actions, and results. I am not liable for
                any decisions made or actions taken by clients as a result of
                the guidance provided.
              </p>

              <div>
                <h4 className="font-display font-bold text-navy-900 text-base mb-2">
                  Scope of Services
                </h4>
                <p>
                  My services focus on career strategy, professional
                  positioning, job search guidance, and interview
                  preparation. These services do not replace psychological
                  therapy, legal advice, financial advice, or any other
                  regulated professional services.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-navy-900 text-base mb-2">
                  No Guarantee of Results
                </h4>
                <p>
                  I do not guarantee employment, job placement, or any
                  specific career outcome. My role is to provide guidance,
                  insights, and practical strategies based on my professional
                  experience to support you in making informed decisions.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-navy-900 text-base mb-2">
                  Client Responsibility
                </h4>
                <p>
                  Clients are responsible for implementing the strategies
                  discussed and for all decisions made during and after the
                  coaching process. Results will vary depending on individual
                  circumstances and level of engagement.
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-navy-900 text-base mb-2">
                  General
                </h4>
                <p>
                  These terms apply to all clients regardless of location,
                  including but not limited to the United Kingdom, United
                  States, Canada, and other international markets. By using
                  my services, you agree to these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
