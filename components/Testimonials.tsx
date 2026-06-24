const TESTIMONIALS = [
  {
    quote:
      "Mihaela helped me get a lot more clarity on where I was heading. What really stood out was her recruitment perspective — it made me rethink how I position my experience, especially for US roles.",
    name: "Senior IT Professional",
    location: "US",
  },
  {
    quote:
      "Working with Mihaela helped me bring more structure into my job search. I felt more confident in how I present my experience, and her understanding of what employers look for was very helpful.",
    name: "Kavitha Arjun",
    location: "Project Manager, India",
  },
  {
    quote:
      "A very practical and structured approach. It helped me look at my experience a bit differently, particularly in terms of positioning. I felt more confident going into interviews after that.",
    name: "Cloud Engineering Lead",
    location: "UK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-0.5 w-24 bg-gold-500 block" />
            <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Testimonials</span>
            <span className="h-0.5 w-24 bg-gold-500 block" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map(({ quote, name, location }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-8 shadow-soft flex flex-col"
            >
              <span className="text-6xl leading-none font-serif text-gold-200 mb-2 select-none">
                &ldquo;
              </span>
              <p className="text-charcoal italic leading-relaxed text-[15px] flex-1 mb-6">
                {quote}
              </p>
              <div className="pt-5 border-t border-navy-100">
                <div className="w-8 h-0.5 bg-gold-500 mb-3" />
                <p className="font-semibold text-navy-900 text-sm">{name}</p>
                <p className="text-charcoal-light text-xs mt-0.5">{location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
