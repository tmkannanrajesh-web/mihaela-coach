import BlogPost from "@/components/BlogPost";
import { BLOG_POSTS } from "@/data/blog";

export default function HowToRecoverAfterRedundancyPage() {
  return (
    <BlogPost
      {...BLOG_POSTS["how-to-recover-after-redundancy"]}
    />
  );
}