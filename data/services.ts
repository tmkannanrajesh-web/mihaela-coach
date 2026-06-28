import { ServicePageProps } from "@/components/ServiceLandingPage";

export const SERVICES: Record<string, ServicePageProps> = {
  careerTransitionCoaching: {
    slug: "career-transition-coaching",
    title: "Career Transition Coaching",
    subtitle: "Navigate Career Change with Clarity and Confidence",
    heroDescription:
      "One-to-one coaching for mid-career professionals facing redundancy, career stagnation, or a significant career change. Helping you move forward with a strategy that works in today's job market.",
    whoItsFor: [
      "Mid-career professionals (35–60) facing redundancy or layoffs",
      "Professionals experiencing career stagnation or lack of progression",
      "Individuals considering a career change but unsure where to start",
      "Professionals experiencing burnout and seeking more purpose",
      "Women returning to work after a career break",
      "International and expat professionals targeting English-speaking markets",
    ],
    whatYouGet: [
      "Clarity on your career direction and realistic options",
      "A structured plan tailored to your goals and timeline",
      "Confidence to present yourself effectively in the job market",
      "A professionally positioned CV and LinkedIn profile",
      "Interview preparation and mock sessions",
      "Ongoing accountability and support throughout the transition",
    ],
    faqs: [
      {
        q: "Who is career transition coaching for?",
        a: "It is designed for mid-career professionals (35–60) facing redundancy, layoffs, career stagnation, burnout, or those considering a significant career change.",
      },
      {
        q: "How many sessions will I need?",
        a: "This depends on your goals. The Career Clarity Package (3 sessions) is ideal for direction. The Career Reinvention Program (6 sessions) covers full repositioning. The Career Transition Accelerator (12 sessions) provides comprehensive support.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. Sessions are conducted online and I work with English-speaking clients worldwide. Romanian is available on request.",
      },
      {
        q: "What makes you different from other career coaches?",
        a: "I combine a Master's Degree in Psychology with over 12 years of hands-on recruitment experience inside a multinational corporate environment. I understand both sides of the hiring process — what candidates experience and what employers are actually looking for.",
      },
      {
        q: "How do I get started?",
        a: "Book a free 20-minute Discovery Call. We'll discuss your situation, goals, and the most appropriate next steps.",
      },
    ],
    testimonial: {
      quote:
        "Mihaela helped me get a lot more clarity on where I was heading. What really stood out was her recruitment perspective — it made me rethink how I position my experience, especially for US roles.",
      name: "Senior IT Professional",
      location: "US",
    },
    relatedServices: [
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "Interview Preparation", href: "/services/interview-preparation" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
      { label: "Career Confidence Coaching", href: "/services/career-confidence-coaching" },
    ],
  },

  cvReview: {
    slug: "cv-review",
    title: "CV Review & Professional Positioning",
    subtitle: "A CV That Reflects Your True Value",
    heroDescription:
      "Reviewed by a recruiter who has assessed thousands of applications across international markets. Get a CV and LinkedIn profile that generate interviews.",
    whoItsFor: [
      "Professionals whose CV is not generating interviews",
      "Mid-career professionals repositioning their experience",
      "Professionals returning to work after a career break",
      "International professionals targeting US, UK, or Canadian markets",
      "Individuals changing career direction who need to reframe their experience",
    ],
    whatYouGet: [
      "CV review and enhancement tailored to your target roles",
      "Clear, compelling structure that passes Applicant Tracking Systems (ATS)",
      "LinkedIn profile optimization aligned with your CV",
      "Personal branding guidance",
      "Alignment with the roles and markets you are targeting",
    ],
    faqs: [
      {
        q: "My CV isn't generating interviews. Why?",
        a: "Most CVs fail because they list responsibilities rather than achievements, are not tailored to the target role, or don't pass ATS filters. I review your CV from a recruiter's perspective and fix exactly these issues.",
      },
      {
        q: "Do you also optimize LinkedIn profiles?",
        a: "Yes. CV and LinkedIn optimization are included together because recruiters check both. A strong CV with a weak LinkedIn profile reduces your chances significantly.",
      },
      {
        q: "I have a career gap. Will that be a problem?",
        a: "Not if handled correctly. I help you address gaps honestly and strategically so they do not become a barrier.",
      },
      {
        q: "How long does the process take?",
        a: "This is covered within our coaching sessions. Depending on your package, we work through it together so you understand how to present your experience — not just receive a document.",
      },
    ],
    testimonial: {
      quote:
        "Working with Mihaela helped me bring more structure into my job search. I felt more confident in how I present my experience, and her understanding of what employers look for was very helpful.",
      name: "Kavitha Arjun",
      location: "Project Manager, India",
    },
    relatedServices: [
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "Interview Preparation", href: "/services/interview-preparation" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
    ],
  },

  linkedinProfileOptimization: {
    slug: "linkedin-profile-optimization",
    title: "LinkedIn Profile Optimization",
    subtitle: "Get Found by the Right Employers on LinkedIn",
    heroDescription:
      "Optimized by a recruiter who has searched LinkedIn for candidates across international markets for over 12 years. A stronger profile means more visibility and more opportunities.",
    whoItsFor: [
      "Professionals not receiving recruiter contact on LinkedIn",
      "Mid-career professionals repositioning their personal brand",
      "Professionals returning after a career break",
      "Individuals targeting US, UK, or Canadian markets",
      "Anyone whose LinkedIn profile undersells their actual experience",
    ],
    whatYouGet: [
      "Full LinkedIn profile review and optimization",
      "Headline and summary written to attract your target roles",
      "Experience section repositioned to highlight achievements",
      "Skills and endorsements aligned with your target market",
      "Visibility and searchability improvements",
      "LinkedIn activity and networking strategy guidance",
    ],
    faqs: [
      {
        q: "Why is LinkedIn optimization important?",
        a: "Most recruiters search LinkedIn before they ever post a job. If your profile is not optimized, you are invisible to the people who could hire you. A strong LinkedIn profile works for you 24 hours a day.",
      },
      {
        q: "I already have a LinkedIn profile. Is it worth optimizing?",
        a: "In most cases, yes. The majority of profiles I review undersell the person's actual experience. Small changes to your headline, summary, and experience section can significantly increase recruiter interest.",
      },
      {
        q: "Do you work on LinkedIn and CV together?",
        a: "Yes, and I recommend this. Your CV and LinkedIn profile should be consistent and complementary. We cover both in the same process.",
      },
      {
        q: "I have been out of the job market for a while. Can LinkedIn help me?",
        a: "Absolutely. LinkedIn is especially valuable for professionals returning after a career break. We position your profile to highlight your strengths and address the gap confidently.",
      },
    ],
    testimonial: {
      quote:
        "A very practical and structured approach. It helped me look at my experience a bit differently, particularly in terms of positioning. I felt more confident going into interviews after that.",
      name: "Cloud Engineering Lead",
      location: "UK",
    },
    relatedServices: [
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
      { label: "Interview Preparation", href: "/services/interview-preparation" },
    ],
  },

  interviewPreparation: {
    slug: "interview-preparation",
    title: "Interview Preparation",
    subtitle: "Communicate Your Value with Confidence",
    heroDescription:
      "Interview coaching from a recruiter who has conducted thousands of interviews across international markets. Know what interviewers are actually looking for — and how to deliver it.",
    whoItsFor: [
      "Professionals preparing for upcoming interviews",
      "Those who struggle with nerves or confidence in interviews",
      "Mid-career professionals re-entering the job market",
      "Professionals targeting competitive roles in the US, UK, or Canada",
      "Anyone who wants to improve how they present their experience",
    ],
    whatYouGet: [
      "Mock interviews tailored to your target roles",
      "Behavioural interview preparation using proven frameworks",
      "Detailed feedback on your answers, delivery, and confidence",
      "Guidance on how to handle difficult questions",
      "Offer discussion and negotiation preparation",
      "Confidence building throughout the process",
    ],
    faqs: [
      {
        q: "What types of interviews do you prepare me for?",
        a: "I prepare you for competency-based and behavioural interviews, which are the most common formats used in corporate environments across the US, UK, and Canada.",
      },
      {
        q: "I get nervous in interviews. Can coaching help?",
        a: "Yes. Nerves are often caused by lack of preparation and uncertainty. Through mock interviews and structured practice, most clients feel significantly more confident by the time of the real interview.",
      },
      {
        q: "I have an interview coming up soon. Is there time to prepare?",
        a: "Yes. A focused preparation session can make a significant difference even in a short time. Contact me and we'll work around your timeline.",
      },
      {
        q: "Do you also help with salary negotiation?",
        a: "Yes. Offer evaluation and discussion preparation is included as part of the interview preparation process.",
      },
    ],
    testimonial: {
      quote:
        "A very practical and structured approach. It helped me look at my experience a bit differently, particularly in terms of positioning. I felt more confident going into interviews after that.",
      name: "Cloud Engineering Lead",
      location: "UK",
    },
    relatedServices: [
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
    ],
  },

  jobSearchStrategy: {
    slug: "job-search-strategy",
    title: "Job Search Strategy",
    subtitle: "A Focused Job Search That Saves Time and Gets Results",
    heroDescription:
      "Stop applying randomly. Build a structured, targeted job search strategy that focuses your energy on the right roles, the right companies, and the right approach.",
    whoItsFor: [
      "Professionals applying to many roles with little or no response",
      "Mid-career professionals who feel their job search lacks direction",
      "Those re-entering the job market after a career break",
      "Professionals targeting the US, UK, or Canadian job market",
      "Anyone who wants a structured, focused approach to finding the right role",
    ],
    whatYouGet: [
      "Career transition planning and target role identification",
      "A structured, focused job search plan",
      "Networking strategies that generate real opportunities",
      "LinkedIn visibility and outreach guidance",
      "Application strategy and prioritization",
      "Ongoing accountability to maintain momentum",
    ],
    faqs: [
      {
        q: "I've been applying for months with no results. What am I doing wrong?",
        a: "In most cases, the issue is not the volume of applications but the strategy. Applying to many roles without targeting, tailoring, or networking leads to poor results. We identify what is not working and fix it.",
      },
      {
        q: "How important is networking in a job search?",
        a: "Extremely important. A significant proportion of roles are filled through networks before they are even advertised. I help you build and use your network effectively, even if you find networking uncomfortable.",
      },
      {
        q: "I don't know what roles to target. Can you help?",
        a: "Yes. Identifying your target role is often the first step. We start with your strengths, values, and experience, and identify realistic and aligned opportunities in the market.",
      },
      {
        q: "How long does a job search usually take?",
        a: "This varies significantly depending on the sector, level, and market. What I can tell you is that a focused, strategic search almost always produces faster results than an unfocused one.",
      },
    ],
    testimonial: {
      quote:
        "Working with Mihaela helped me bring more structure into my job search. I felt more confident in how I present my experience, and her understanding of what employers look for was very helpful.",
      name: "Kavitha Arjun",
      location: "Project Manager, India",
    },
    relatedServices: [
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "Interview Preparation", href: "/services/interview-preparation" },
    ],
  },

  careerConfidenceCoaching: {
    slug: "career-confidence-coaching",
    title: "Career Confidence Coaching",
    subtitle: "Rebuild Your Confidence and Move Forward",
    heroDescription:
      "Designed for professionals affected by redundancy, career setbacks, long employment gaps, or imposter syndrome. Coaching that addresses both the practical and psychological aspects of career transition.",
    whoItsFor: [
      "Professionals who have experienced redundancy or layoffs",
      "Individuals returning to work after a long career break",
      "Professionals dealing with imposter syndrome",
      "Those whose confidence has been affected by a difficult work experience",
      "Women returning after raising children or other caregiving responsibilities",
    ],
    whatYouGet: [
      "Rebuilding professional confidence after redundancy or setbacks",
      "Identifying and articulating your strengths and achievements",
      "Creating a compelling professional narrative",
      "Overcoming limiting beliefs and imposter syndrome",
      "Practical tools to approach the job market with confidence",
      "Support throughout the transition process",
    ],
    faqs: [
      {
        q: "I lost my job and have lost confidence. Is this normal?",
        a: "Completely normal. Redundancy and career setbacks affect confidence in ways that are often underestimated. My background in psychology means I understand this deeply and can help you rebuild in a structured, practical way.",
      },
      {
        q: "What is imposter syndrome and how does coaching help?",
        a: "Imposter syndrome is the persistent belief that you are not as competent as others perceive you to be. It is extremely common among experienced professionals. Through coaching, we identify these patterns and replace them with an accurate and confident understanding of your value.",
      },
      {
        q: "I have been out of the workforce for several years. Can I still get back?",
        a: "Yes. Many of my clients have successfully returned to work after extended breaks. The key is how you position your experience, manage the narrative, and target the right opportunities.",
      },
      {
        q: "How is your approach different because of your psychology background?",
        a: "My psychology training allows me to address not just the practical elements of a job search, but also the mindset, self-perception, and emotional barriers that often hold people back. Both aspects need to be addressed for lasting results.",
      },
    ],
    testimonial: {
      quote:
        "Mihaela helped me get a lot more clarity on where I was heading. What really stood out was her recruitment perspective — it made me rethink how I position my experience, especially for US roles.",
      name: "Senior IT Professional",
      location: "US",
    },
    relatedServices: [
      { label: "Career Transition Coaching", href: "/services/career-transition-coaching" },
      { label: "CV Review & Professional Positioning", href: "/services/cv-review" },
      { label: "LinkedIn Profile Optimization", href: "/services/linkedin-profile-optimization" },
      { label: "Interview Preparation", href: "/services/interview-preparation" },
      { label: "Job Search Strategy", href: "/services/job-search-strategy" },
    ],
  },
};
