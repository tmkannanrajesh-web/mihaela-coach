import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface BlogPostProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  sections: {
    heading: string;
    content: string;
  }[];
  relatedPosts: {
    label: string;
    href: string;
  }[];
  relatedServices: {
    label: string;
    href: string;
  }[];
}

export default function BlogPost({
  slug,
  title,
  description,
  date,
  readTime,
  sections,
  relatedPosts,
  relatedServices,
}: BlogPostProps) {
  const pageUrl = `https://www.mihaelaperelighin.com/blog/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Person",
      name: "Mihaela Perelighin",
    },
    publisher: {
      "@type": "Person",
      name: "Mihaela Perelighin",
    },
    mainEntityOfPage: pageUrl,
  };

  return (
    <>
      <Script
        id={`blog-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Navbar />

      <main className="pt-[88px]">

        {/* Breadcrumb */}

        <nav className="bg-navy-50 border-b py-3">
          <div className="max-w-5xl mx-auto px-4">
            <ol className="flex gap-2 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>/</li>
              <li>{title}</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">

            <p className="uppercase tracking-widest text-gold-600 font-semibold mb-3">
              Career Advice
            </p>

            <h1 className="text-5xl font-bold text-navy-900 mb-6">
              {title}
            </h1>

            <p className="text-xl text-charcoal-light mb-6">
              {description}
            </p>

            <div className="text-sm text-charcoal-light">
              {date} • {readTime}
            </div>

          </div>
        </section>

        {/* Content */}

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 space-y-12">

            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-3xl font-bold mb-4">
                  {section.heading}
                </h2>

                <p className="leading-8 text-lg text-charcoal-light">
                  {section.content}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Related Services */}

        <section className="py-12 bg-navy-50">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-2xl font-bold mb-6">
              Related Coaching Services
            </h2>

            <div className="flex flex-wrap gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="border rounded-md px-5 py-3 hover:bg-gold-50"
                >
                  {service.label}
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Related Articles */}

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4">

            <h2 className="text-2xl font-bold mb-6">
              Continue Reading
            </h2>

            <div className="space-y-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="block hover:text-gold-600"
                >
                  {post.label}
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />

    </>
  );
}