import Link from "next/link";
import { ALL_POSTS } from "@/data/blog";

export default function BlogPage() {
  return (
    <main className="pt-[100px] pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-navy-900 mb-4">
            Career Advice & Insights
          </h1>

          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Practical career guidance, interview strategies, LinkedIn tips,
            career transitions, redundancy recovery, and professional
            development from a recruiter and career coach.
          </p>
        </div>

        <div className="grid gap-8">

          {ALL_POSTS.map((post) => (
            <article
              key={post.slug}
              className="border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold mb-3">
                {post.label}
              </h2>

              <Link
                href={post.href}
                className="text-gold-600 font-semibold"
              >
                Read Article →
              </Link>
            </article>
          ))}

        </div>

      </div>
    </main>
  );
}