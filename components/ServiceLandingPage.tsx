import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export interface ServicePageProps {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  whoItsFor: string[];
  whatYouGet: string[];
  faqs: { q: string; a: string }[];
  testimonial: {
    quote: string;
    name: string;
    location: string;
  };
  relatedServices: {
    label: string;
    href: string;
  }[];
}

export default function ServiceLandingPage({
  slug,
  title,
  subtitle,
  heroDescription,
  whoItsFor,
  whatYouGet,
  faqs,
  testimonial,
  relatedServices,
}: ServicePageProps) {
  const pageUrl = `https://www.mihaelaperelighin.com/services/${slug}`;

  // JSON-LD: ProfessionalService + FAQPage
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": pageUrl,
        "name": `${title} | Mihaela Perelighin`,
        "url": pageUrl,
        "description": heroDescription,
        "provider": {
          "@type": "Person",
          "name": "Mihaela Perelighin",
          "jobTitle": "Career Transition Strategist & Coach",
          "url": "https://www.mihaelaperelighin.com",
          "sameAs": ["https://www.linkedin.com/in/mihaela-perelighin-a9760841/"],
        },
        "serviceType": title,
        "areaServed": { "@type": "Place", "name": "Worldwide" },
        "availableLanguage": ["English", "Romanian"],
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(({ q, a }) => ({
          "@type": "Question",
          "name": q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.mihaelaperelighin.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.mihaelaperelighin.com/#services",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id={`schema-${slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      <main className="pt-[88px]">

        {/* Breadcrumbs */}
        <nav className="bg-navy-50 border-b border-navy-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-sm text-charcoal-light">
              <li>
                <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
              </li>
              <li className="text-gold-400">/</li>
              <li>
                <Link href="/#services" className="hover:text-gold-600 transition-colors">Services</Link>
              </li>
              <li className="text-gold-400">/</li>
              <li className="text-gold-600 font-medium">{title}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-0.5 w-24 bg-gold-500 block" />
                <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">
                  {title}
                </span>
                <span className="h-0.5 w-24 bg-gold-500 block" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
                {subtitle}
              </h1>
              <p className="text-lg text-charcoal-light leading-relaxed mb-8">
                {heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-7 py-4 rounded-md transition-colors shadow-sm text-sm"
                >
                  Book Your Free 20-Minute Discovery Call
                </a>
                <Link
                  href="/#packages"
                  className="inline-flex items-center border border-navy-200 hover:border-gold-400 text-navy-800 font-medium px-7 py-4 rounded-md transition-colors text-sm"
                >
                  View Coaching Packages
                </Link>
              </div>
              <p className="text-charcoal-light text-xs mt-3">
                1:1 online sessions • English-speaking clients worldwide (Romanian available on request)
              </p>
            </div>

            {/* Photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative flex items-center justify-center" style={{ width: "380px", height: "460px" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "-12px", left: "-12px",
                    width: "calc(100% + 24px)",
                    height: "calc(100% + 24px)",
                    borderRadius: "50%",
                    border: "1px solid #C9A84C",
                    opacity: 0.55,
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
                <div
                  className="relative z-10 overflow-hidden w-full h-full"
                  style={{ borderRadius: "50%", border: "5px solid #C9A84C", boxShadow: "0 8px 40px rgba(201,168,76,0.2)" }}
                >
                  <Image
                    src="/images/mihaela-perelighin.jpg"
                    alt="Mihaela Perelighin — Career Transition Strategist & Coach"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it's for + What you get */}
        <section className="bg-navy-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-0.5 w-24 bg-gold-500 block" />
                <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Who It's For</span>
                <span className="h-0.5 w-24 bg-gold-500 block" />
              </div>
              <ul className="space-y-4">
                {whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-0.5 w-24 bg-gold-500 block" />
                <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">What You Get</span>
                <span className="h-0.5 w-24 bg-gold-500 block" />
              </div>
              <ul className="space-y-4">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy-50 border border-navy-100 rounded-2xl p-8 sm:p-10">
              <span className="text-6xl leading-none font-serif text-gold-200 block mb-2 select-none">&ldquo;</span>
              <p className="text-charcoal italic leading-relaxed text-lg mb-6 font-serif">
                {testimonial.quote}
              </p>
              <div className="w-8 h-0.5 bg-gold-500 mb-3" />
              <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
              <p className="text-charcoal-light text-xs mt-0.5">{testimonial.location}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-navy-950 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-400 uppercase tracking-[0.15em]">FAQ</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <div className="space-y-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-navy-800 pb-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{q}</h3>
                  <p className="text-navy-300 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <span className="h-0.5 w-24 bg-gold-500 block" />
              <span className="text-xl font-extrabold text-gold-600 uppercase tracking-[0.15em]">Related Services</span>
              <span className="h-0.5 w-24 bg-gold-500 block" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {relatedServices.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="border border-gold-300 hover:border-gold-500 hover:bg-gold-50 text-navy-900 font-medium px-6 py-3 rounded-md transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-navy-950 py-20 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Take the Next Step?</h2>
            <p className="text-navy-300 mb-8 text-lg">
              Book a free 20-minute Discovery Call and we'll discuss your situation, goals, and the most appropriate next steps.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-4 rounded-md transition-colors shadow-sm text-sm"
              >
                Book Your Free Discovery Call
              </a>
              <Link
                href="/#packages"
                className="inline-flex items-center border border-gold-400 text-gold-400 hover:bg-gold-500 hover:text-white font-semibold px-8 py-4 rounded-md transition-colors text-sm"
              >
                View Coaching Packages
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
