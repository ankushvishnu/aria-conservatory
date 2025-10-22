// src/data/blogs.ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  image: string; // path in /public
  content: string; // HTML or plain text (for now)
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-your-first-guitar",
    title: "How to choose your first guitar",
    excerpt: "A quick guide for beginners — what matters and what doesn't when picking your first guitar.",
    date: "2025-09-05",
    image: "/assets/blog/guitar-guide.jpg",
    content: `<p>Choosing your first guitar can be exciting and a little overwhelming. Focus on playability, action, and feel. Try different neck shapes and string setups. For acoustic guitars, look at body size and tone; for electric, consider pickup types. Budget-friendly options abound — but make sure the instrument is comfortable for you.</p>
    <p>At Aria Conservatory we help beginners choose a suitable instrument and provide starter kits. Book a trial to get personalized advice.</p>`,
  },
  {
    slug: "student-spotlight-riya",
    title: "Student Spotlight: Riya's Journey",
    excerpt: "From first chord to stage performer — Riya shares her journey through our structured program.",
    date: "2025-10-01",
    image: "/assets/blog/student-riya.jpg",
    content: `<p>Riya joined Aria in 2023 as a shy beginner. Progress with a structured practice schedule, guided repertoire and performance opportunities helped her build confidence. She now performs in monthly recitals and records with Studio Aria.</p>
    <p>Her advice to new students: show up consistently and enjoy the process.</p>`,
  },
];
