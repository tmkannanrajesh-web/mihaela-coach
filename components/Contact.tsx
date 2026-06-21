"use client";

import { useState } from "react";
import { Mail, Phone, MessageCircle, Linkedin, Send, CheckCircle2 } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mihaelapereligh.com",
    href: "mailto:hello@mihaelapereligh.com",
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
    value: "mihaela-perelighin-a9760841",
    href: "https://www.linkedin.com/in/mihaela-perelighin-a9760841/",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Static form: opens the visitor's email client pre-filled with their
    // message, since there is no backend wired up in this build.
    const subject = encodeURIComponent(`Discovery Call Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:hello@mihaelapereligh.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-8xl mx-auto section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sage-600 font-semibold tracking-wide text-sm uppercase mb-3 block">
            Contact
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 mb-5 text-balance">
            Let&apos;s Start the Conversation
          </h2>
          <p className="text-charcoal-light leading-relaxed">
            Reach out directly, or send a message and I&apos;ll get back to
            you to schedule your free 20-minute Discovery Call.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div className="space-y-4">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-navy-50/60 hover:bg-sage-50 rounded-xl p-5 transition-colors group"
              >
                <span className="w-11 h-11 rounded-lg bg-white shadow-soft flex items-center justify-center shrink-0 group-hover:bg-sage-600 transition-colors">
                  <Icon
                    size={19}
                    className="text-sage-600 group-hover:text-white transition-colors"
                  />
                </span>
                <span>
                  <span className="block text-xs font-semibold text-navy-400 uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="block text-sm font-semibold text-navy-900">
                    {value}
                  </span>
                </span>
              </a>
            ))}

            <div className="bg-navy-900 rounded-xl p-6 mt-2">
              <p className="text-white font-semibold mb-1">
                Prefer to talk first?
              </p>
              <p className="text-navy-300 text-sm leading-relaxed">
                A free 20-minute Discovery Call is the easiest way to find
                out how I can help with your specific situation.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-navy-50/60 rounded-2xl p-7 lg:p-9 border border-navy-100"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-10">
                <CheckCircle2 className="text-sage-600 mb-4" size={42} />
                <p className="font-display text-xl font-bold text-navy-900 mb-2">
                  Your email client is opening
                </p>
                <p className="text-charcoal-light text-sm max-w-xs">
                  Finish sending the message from there and I&apos;ll reply
                  as soon as possible.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-800 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full rounded-lg border border-navy-200 bg-white px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell me a little about your situation and what you're hoping to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-sage-600 hover:bg-sage-700 text-white font-semibold px-7 py-4 transition-colors"
                >
                  <Send size={17} />
                  Send Message
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
