import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">

        <section style={{ height: "520px", overflow: "hidden", position: "relative" }}>
          <Image
            src="/images/mihaela-about.jpg"
            alt="Mihaela Perelighin"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </section>

        <section className="bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 divide-x divide-gray-200 border-b border-gray-100">
              <div className="py-10 px-6 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-3">12+</p>
                <p className="text-charcoal text-sm font-medium">Years in Global<br/>Recruitment</p>
              </div>
              <div className="py-10 px-6 text-center">
                <p className="text-5xl font-bold text-gold-600 mb-3">1,500+</p>
                <p className="text-charcoal text-sm font-medium">Professionals<br/>Hired</p>
              </div>
              <div className="py-10 px-6 text-center">
                <p className="text-2xl font-bold text-gold-600 mb-3">Master's Degree</p>
                <p className="text-charcoal text-sm font-medium">Psychological Counselling</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="max-w-2xl mx-auto px-6 space-y-5 text-charcoal leading-relaxed text-[17px]">
            <p>I'm Mihaela Perelighin, a psychologist with a Master's Degree in Psychological Counselling and over 12 years of experience working in Talent Acquisition within a multinational corporate environment.</p>
            <p>Throughout my career, I have recruited and hired more than 1,500 professionals across international markets, including the United States, United Kingdom, and Canada.</p>
            <p>Having reviewed thousands of applications and conducted countless interviews, I understand what helps candidates stand out in competitive job markets.</p>
            <p>This unique combination of psychological expertise and hands-on recruitment experience allows me to support clients from both perspectives: understanding human behavior, confidence, and motivation, while also knowing exactly how employers evaluate candidates and make hiring decisions.</p>
            <p>I work one-to-one with every client, offering personalized, practical guidance tailored to their goals, challenges, and career context.</p>
            <p className="font-bold">My mission is simple: to help you move forward with clarity, confidence, and a strategy that works in today's job market.</p>
            <div className="pt-4">
              <a href="/#contact" className="flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md text-base w-full">
                Book Your Free 20-Minute Discovery Call
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
