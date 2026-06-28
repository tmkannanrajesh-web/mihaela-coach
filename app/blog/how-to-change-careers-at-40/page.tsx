import BlogPost from "@/components/BlogPost";
import { BLOG_POSTS } from "@/data/blog";

export default function HowToChangeCareersAt40Page() {
  return (
    <BlogPost
      {...BLOG_POSTS["how-to-change-careers-at-40"]}
    />
  );
}