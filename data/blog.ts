import { BlogPostProps } from "@/components/BlogPost";

const ALL_POSTS = [
  {
    slug: "how-to-recover-after-redundancy",
    label: "How to Recover After Redundancy",
    href: "/blog/how-to-recover-after-redundancy",
  },
  {
    slug: "how-to-change-careers-at-40",
    label: "How to Change Careers at 40",
    href: "/blog/how-to-change-careers-at-40",
  },
  {
    slug: "linkedin-profile-tips",
    label: "Best LinkedIn Profile Tips for Mid-Career Professionals",
    href: "/blog/linkedin-profile-tips",
  },
  {
    slug: "interview-mistakes-executives-make",
    label: "Interview Mistakes Executives Make",
    href: "/blog/interview-mistakes-executives-make",
  },
  {
    slug: "career-confidence-after-layoffs",
    label: "Career Confidence After Layoffs",
    href: "/blog/career-confidence-after-layoffs",
  },
  {
    slug: "cv-mistakes-that-prevent-interviews",
    label: "CV Mistakes That Prevent Interviews",
    href: "/blog/cv-mistakes-that-prevent-interviews",
  },
];

function otherPosts(currentSlug: string) {
  return ALL_POSTS.filter((p) => p.slug !== currentSlug).map(({ label, href }) => ({ label, href }));
}

export const BLOG_POSTS: Record<string, BlogPostProps> = {
  "how-to-recover-after-redundancy": {
    slug: "how-to-recover-after-redundancy",
    title: "How to Recover After Redundancy",
    description:
      "Redundancy is one of the most disorienting professional experiences a person can face. This guide covers the practical and psychological steps to recover, rebuild confidence, and move forward effectively.",
    date: "2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "What you are feeling is normal",
        content:
          "Redundancy can trigger feelings of shock, self-doubt, and loss of identity — particularly for experienced professionals who have invested heavily in their careers. These reactions are completely normal. The first step is to acknowledge them without allowing them to define your next move.",
      },
      {
        heading: "Give yourself time, but set a limit",
        content:
          "It is important to allow yourself to process the experience. However, indefinite avoidance of the job market tends to compound feelings of anxiety and reduces your confidence further. Give yourself a defined period to recover, then commit to a structured action plan.",
      },
      {
        heading: "Reframe redundancy as a transition, not a failure",
        content:
          "Redundancy is almost always a business decision, not a reflection of your personal value or performance. The professionals I have worked with who recover most effectively are those who quickly shift their mindset from 'I was let go' to 'I am now available for my next opportunity.'",
      },
      {
        heading: "Update your CV and LinkedIn profile immediately",
        content:
          "Your professional documents should reflect your current value, not your last role. Many professionals delay this step, which delays their entire job search. A strong CV and LinkedIn profile are the foundation of an effective search.",
      },
      {
        heading: "Build a structured job search plan",
        content:
          "Applying to every available role without a strategy rarely produces good results. Identify the roles, industries, and companies that align with your experience and goals. Focus your energy where you have the strongest fit.",
      },
      {
        heading: "Seek support",
        content:
          "Whether from a career coach, a trusted mentor, or a professional network, do not navigate this alone. The combination of practical guidance and emotional support accelerates recovery significantly.",
      },
    ],
    relatedPosts: otherPosts("how-to-recover-after-redundancy"),
    relatedServices: [
      { label: "Career Confidence Coaching", href: "/services/career-confidence-coaching" },
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
    ],
  },

  "how-to-change-careers-at-40": {
    slug: "how-to-change-careers-at-40",
    title: "How to Change Careers at 40",
    description:
      "Changing careers at 40 is not only possible — it is increasingly common. This article explains what holds most people back, and the practical steps that make a successful transition achievable.",
    date: "2025",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why 40 is actually a good time to change careers",
        content:
          "By 40, most professionals have accumulated significant transferable skills, leadership experience, and self-awareness. These are assets, not liabilities. The challenge is knowing how to reframe and reposition them for a new direction.",
      },
      {
        heading: "The biggest obstacle is usually fear, not capability",
        content:
          "Most professionals who want to change careers at 40 are entirely capable of doing so. What holds them back is fear — of starting over, of reduced income, of what others might think. Addressing these fears clearly and honestly is an essential early step.",
      },
      {
        heading: "Identify your transferable skills",
        content:
          "Skills such as leadership, communication, problem solving, project management, and stakeholder management transfer across industries. The key is identifying which of your skills are most relevant to your target direction and articulating them in the language of that sector.",
      },
      {
        heading: "Research your target market thoroughly",
        content:
          "Before committing to a new direction, research what the market actually looks like. What roles exist? What qualifications are expected? What does the salary range look like? Making decisions based on accurate information significantly improves outcomes.",
      },
      {
        heading: "Position your CV for your target role, not your past",
        content:
          "A career change requires a different kind of CV — one that leads with transferable skills and relevant achievements rather than chronological history. This is one of the most common mistakes professionals make when changing careers.",
      },
      {
        heading: "Consider a structured coaching process",
        content:
          "A career change involves multiple decisions: direction, positioning, CV, LinkedIn, job search strategy, and interview preparation. Working with a career coach who understands both the psychological and practical dimensions accelerates the process considerably.",
      },
    ],
    relatedPosts: otherPosts("how-to-change-careers-at-40"),
    relatedServices: [
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
    ],
  },

  "linkedin-profile-tips": {
    slug: "linkedin-profile-tips",
    title: "Best LinkedIn Profile Tips for Mid-Career Professionals",
    description:
      "Your LinkedIn profile is your most visible professional asset. These tips come directly from 12+ years of searching for and evaluating candidates across international markets.",
    date: "2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "Your headline should say more than your job title",
        content:
          "Most professionals use their current or most recent job title as their LinkedIn headline. This is a missed opportunity. Your headline is the most visible line on your profile and should communicate your value and target direction, not just your title.",
      },
      {
        heading: "Your summary should speak to your next employer",
        content:
          "The About section is often either left blank or written as a dry summary of previous roles. It should be written from the perspective of what you offer a future employer — your expertise, your approach, and the value you bring.",
      },
      {
        heading: "Achievements, not responsibilities",
        content:
          "The experience section should highlight what you achieved in each role, not simply what your responsibilities were. Quantify wherever possible. Numbers, percentages, and outcomes are far more compelling than job descriptions.",
      },
      {
        heading: "Keywords matter for searchability",
        content:
          "Recruiters search LinkedIn using specific keywords. If those keywords are not in your profile, you will not appear in their searches. Research the language used in your target roles and incorporate it naturally throughout your profile.",
      },
      {
        heading: "A professional photo significantly increases visibility",
        content:
          "Profiles with professional photos receive significantly more views than those without. The photo does not need to be taken by a professional photographer, but it should be clear, well-lit, and professionally appropriate.",
      },
      {
        heading: "Activity increases visibility",
        content:
          "LinkedIn rewards active users with greater visibility in search results. Commenting thoughtfully on relevant content, sharing insights, and engaging with your network are all effective ways to increase your profile's reach.",
      },
    ],
    relatedPosts: otherPosts("linkedin-profile-tips"),
    relatedServices: [
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
    ],
  },

  "interview-mistakes-executives-make": {
    slug: "interview-mistakes-executives-make",
    title: "Interview Mistakes Executives Make",
    description:
      "Senior professionals often enter interviews with significant experience but make avoidable mistakes. These are the most common issues I observe, and how to address them.",
    date: "2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "Assuming experience speaks for itself",
        content:
          "One of the most common mistakes senior professionals make is assuming that their track record is self-evident. It is not. Every interview requires you to actively articulate your value in relation to the specific role. Experience must be communicated, not assumed.",
      },
      {
        heading: "Not preparing for behavioural questions",
        content:
          "Competency-based and behavioural interview questions are standard across corporate environments in the US, UK, and Canada. Many senior professionals prepare intellectually but do not practice answering structured questions aloud, which significantly affects delivery.",
      },
      {
        heading: "Talking too much or too little",
        content:
          "Executives sometimes give overly detailed answers that lose the interviewer's focus, or overly brief answers that fail to demonstrate depth. Structured answer frameworks — such as STAR — help calibrate the right level of detail.",
      },
      {
        heading: "Underestimating cultural fit signals",
        content:
          "At senior levels, interviewers are assessing not just capability but cultural alignment. How you communicate, how you describe your leadership style, and how you discuss previous teams all send strong signals about fit.",
      },
      {
        heading: "Not asking strong questions",
        content:
          "The questions you ask at the end of an interview reveal as much about you as your answers. Generic questions signal low engagement. Thoughtful, specific questions signal genuine interest and strategic thinking.",
      },
      {
        heading: "Not following up effectively",
        content:
          "A brief, professional follow-up message after an interview reinforces your interest and leaves a positive impression. Many candidates skip this step entirely.",
      },
    ],
    relatedPosts: otherPosts("interview-mistakes-executives-make"),
    relatedServices: [
      { label: "Interview Preparation", href: "/services/interview-preparation" },
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
    ],
  },

  "career-confidence-after-layoffs": {
    slug: "career-confidence-after-layoffs",
    title: "Career Confidence After Layoffs",
    description:
      "A layoff can shake even the most experienced professional's confidence. This article explains why this happens and what you can do to rebuild effectively.",
    date: "2025",
    readTime: "5 min read",
    sections: [
      {
        heading: "Why layoffs affect confidence so deeply",
        content:
          "For many professionals, their career is closely tied to their sense of identity and self-worth. A layoff can therefore feel like a personal failure, even when it is clearly a business decision. Understanding this psychological dynamic is the first step toward addressing it.",
      },
      {
        heading: "Separate your value from the event",
        content:
          "Your professional value — your skills, experience, knowledge, and achievements — did not change on the day you were made redundant. The event changed your employment status, not your capability. Keeping this distinction clear is essential.",
      },
      {
        heading: "Audit your achievements",
        content:
          "A practical exercise that helps rebuild confidence is creating a detailed record of your professional achievements — projects delivered, problems solved, teams led, results achieved. This exercise consistently shifts perspective from loss to capability.",
      },
      {
        heading: "Re-engage with your professional network",
        content:
          "Isolation after a layoff is common and counterproductive. Re-engaging with your professional network — even informally — reminds you of your professional standing and often surfaces opportunities you would not otherwise find.",
      },
      {
        heading: "Create structure and momentum",
        content:
          "Confidence is rebuilt through action, not through waiting to feel confident. Creating a structured daily routine that includes job search activity, professional development, and regular contact with others builds momentum and gradually restores confidence.",
      },
      {
        heading: "Consider professional support",
        content:
          "Working with a career coach who understands both the practical and psychological aspects of a layoff can accelerate recovery significantly. The combination of structured support and expert guidance makes the process less isolating and more effective.",
      },
    ],
    relatedPosts: otherPosts("career-confidence-after-layoffs"),
    relatedServices: [
      { label: "Career Confidence Coaching", href: "/services/career-confidence-coaching" },
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
    ],
  },

  "cv-mistakes-that-prevent-interviews": {
    slug: "cv-mistakes-that-prevent-interviews",
    title: "CV Mistakes That Prevent Interviews",
    description:
      "After reviewing thousands of CVs across international markets, these are the most common mistakes that prevent professionals from getting interviews — and how to fix them.",
    date: "2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "Listing responsibilities instead of achievements",
        content:
          "The most common CV mistake is describing what your job involved rather than what you achieved. Recruiters and hiring managers want to know the impact you made, not just the tasks you performed. Every role should include specific, quantified achievements where possible.",
      },
      {
        heading: "No alignment with the target role",
        content:
          "Sending the same CV to every role is ineffective. Your CV should be tailored to each application — highlighting the skills and experience most relevant to the specific role and company. This does not mean rewriting from scratch, but it does mean strategic adjustment.",
      },
      {
        heading: "Failing to pass Applicant Tracking Systems",
        content:
          "Many organizations use ATS software to screen CVs before a human sees them. CVs with unusual formatting, tables, graphics, or missing keywords are often rejected automatically. A clean, keyword-rich format significantly improves your chances.",
      },
      {
        heading: "Poor formatting and readability",
        content:
          "A CV that is difficult to read — due to dense text, inconsistent formatting, or unclear structure — creates a negative impression before the content is even assessed. Clear headings, consistent formatting, and appropriate white space are essential.",
      },
      {
        heading: "An ineffective personal statement",
        content:
          "The opening section of your CV is your first opportunity to capture attention. Generic statements such as 'a highly motivated professional seeking a challenging role' add no value. Your opening should immediately communicate what you offer and why you are relevant.",
      },
      {
        heading: "Not addressing career gaps strategically",
        content:
          "Career gaps do not need to be hidden, but they do need to be addressed. A gap that is unexplained creates uncertainty. A gap that is explained honestly and positioned appropriately is rarely a barrier to interview success.",
      },
    ],
    relatedPosts: otherPosts("cv-mistakes-that-prevent-interviews"),
    relatedServices: [
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "Interview Preparation", href: "/services/interview-preparation" },
    ],
  },
};

export { ALL_POSTS };
