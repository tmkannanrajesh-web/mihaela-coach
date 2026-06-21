import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Mihaela helped me get a lot more clarity on where I was heading. What really stood out was her recruitment perspective — it made me rethink how I position my experience, especially for US roles.",
    author: "Senior IT Professional",
    location: "US",
  },
  {
    quote:
      "Working with Mihaela helped me bring more structure into my job search. I felt more confident in how I present my experience, and her understanding of what employers look for was very helpful.",
    author: "Kavitha Arjun",
    location: "Project Manager, India",
  },
  {
    quote:
      "A very practical and structured approach. It helped me look at my experience a bit differently, particularly in terms of positioning. I felt more confident going into interviews after that.",
    author: "Cloud Engineering Lead",
    location: "UK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-navy-50/60">
      <div className="max-w-8xl mx-auto section-padding">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-sage-600 font-semibold tracking-wide text-sm uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy-900 mb-5 text-balance">
            What Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="bg-white rounded-2xl p-8 shadow-soft border border-navy-100 flex flex-col"
            >
              <Quote
                className="text-sage-200 mb-4"
                size={36}
                fill="currentColor"
                strokeWidth={0}
              />
              <blockquote className="text-charcoal leading-relaxed text-[0.95rem] flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="pt-5 border-t border-navy-100">
                <p className="font-semibold text-navy-900 text-sm">
                  {t.author}
                </p>
                <p className="text-xs text-charcoal-light mt-0.5">
                  {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
