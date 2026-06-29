import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.18em] text-gold-600 font-semibold text-sm mb-4">About Mihaela</p>
              <h1 className="text-4xl font-bold text-navy-900 mb-8 leading-tight">Helping Mid-Career Professionals Navigate Change with Confidence</h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-5">Career transitions are rarely just about finding another job. They involve confidence, identity, direction, and making informed decisions about your future.</p>
              <p className="text-lg text-charcoal-light leading-relaxed">I combine over 12 years of international recruitment experience with a Masters Degree in Psychology to help professionals reposition themselves and move forward with clarity.</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative overflow-hidden flex-shrink-0" style={{ width: "380px", height: "460px", borderRadius: "50%", border: "5px solid #C9A84C", boxShadow: "0 8px 40px rgba(201,168,76,0.2)" }}>
                <Image src="/images/mihaela-perelighin.jpg" alt="Mihaela Perelighin" fill priority className="object-cover object-top" />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white border-t border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              <div className="py-10 px-6 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-3">12+</p>
                <p className="text-charcoal text-sm font-medium">Years in Global Recruitment</p>
              </div>
              <div className="py-10 px-6 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-3">1,500+</p>
                <p className="text-charcoal text-sm font-medium">Professionals Hired</p>
              </div>
              <div className="py-10 px-6 text-center">
                <p className="text-2xl font-bold text-gold-600 mb-3">Masters Degree</p>
                <p className="text-charcoal text-sm font-medium">Psychological Counselling</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-14">
          <div className="max-w-2xl mx-auto px-6 space-y-5 text-charcoal leading-relaxed text-[17px]">
            <p>I am Mihaela Perelighin, a psychologist with a Masters Degree in Psychological Counselling and over 12 years of experience working in Talent Acquisition within a multinational corporate environment.</p>
            <p>Throughout my career, I have recruited and hired more than 1,500 professionals across international markets, including the United States, United Kingdom, and Canada.</p>
            <p>Having reviewed thousands of applications and conducted countless interviews, I understand what helps candidates stand out in competitive job markets.</p>
            <p>This unique combination of psychological expertise and hands-on recruitment experience allows me to support clients from both perspectives: understanding human behavior, confidence, and motivation, while also knowing exactly how employers evaluate candidates and make hiring decisions.</p>
            <p>I work one-to-one with every client, offering personalized, practical guidance tailored to their goals, challenges, and career context.</p>
            <p className="font-bold">My mission is simple: to help you move forward with clarity, confidence, and a strategy that works in todays job market.</p>
            <div className="pt-4">
              <a href="/#contact" className="flex items-center justify-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md text-base w-full">Book Your Free 20-Minute Discovery Call</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
