import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-navy-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[400px]">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-card aspect-[4/5]">
                <Image
                  src="/images/mihaela-about.jpg"
                  alt="About Mihaela Perelighin"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 z-20 bg-gold-500 text-white rounded-xl px-6 py-4 shadow-card text-center">
                <span className="block text-lg font-bold leading-tight">Master's Degree</span>
                <span className="block text-[11px] font-semibold uppercase tracking-wider mt-1 opacity-90 leading-tight">
                  in Psychology
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-400 uppercase tracking-[0.15em]">About Me</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>

            <p className="text-navy-200 leading-relaxed mb-5">
              I'm Mihaela Perelighin, a psychologist with a Master's Degree in Psychology and over 12 years of experience working in Talent Acquisition within a multinational corporate environment.
            </p>

            <p className="text-navy-200 leading-relaxed mb-5">
              Throughout my career, I have recruited and hired more than 1,500 professionals across international markets, including the United States, United Kingdom, and Canada.
            </p>

            <p className="text-navy-200 leading-relaxed mb-5">
              Having reviewed thousands of applications and conducted countless interviews, I understand what helps candidates stand out in competitive job markets.
            </p>

            <p className="text-navy-200 leading-relaxed mb-5">
              This unique combination of psychological expertise and hands-on recruitment experience allows me to support clients from both perspectives: understanding human behavior, confidence, and motivation, while also knowing exactly how employers evaluate candidates and make hiring decisions.
            </p>

            <p className="text-navy-200 leading-relaxed mb-5">
              I work one-to-one with every client, offering personalized, practical guidance tailored to their goals, challenges, and career context.
            </p>

            <p className="text-navy-200 leading-relaxed">
              My mission is simple: to help you move forward with clarity, confidence, and a strategy that works in today's job market.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
