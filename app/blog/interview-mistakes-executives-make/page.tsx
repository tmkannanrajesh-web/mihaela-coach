import BlogPost from "@/components/BlogPost";
import { BLOG_POSTS } from "@/data/blog";

export default function InterviewMistakesExecutivesMakePage() {
  return (
    <BlogPost
      {...BLOG_POSTS["interview-mistakes-executives-make"]}
    />
  );
}