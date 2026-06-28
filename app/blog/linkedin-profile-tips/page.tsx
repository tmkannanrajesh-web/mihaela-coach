import BlogPost from "@/components/BlogPost";
import { BLOG_POSTS } from "@/data/blog";

export default function LinkedInProfileTipsPage() {
  return (
    <BlogPost
      {...BLOG_POSTS["linkedin-profile-tips"]}
    />
  );
}