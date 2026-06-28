import BlogPost from "@/components/BlogPost";
import { BLOG_POSTS } from "@/data/blog";

export default function CareerConfidenceAfterLayoffsPage() {
  return (
    <BlogPost
      {...BLOG_POSTS["career-confidence-after-layoffs"]}
    />
  );
}