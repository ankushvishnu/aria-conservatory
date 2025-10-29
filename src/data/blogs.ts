// src/data/blogs.ts
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  image: string; // path in /public
  content: string; // HTML
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-your-first-guitar",
    title: "How to choose your first guitar",
    excerpt: "A quick, practical guide for beginners — what matters and what doesn't when picking the first guitar.",
    date: "2025-09-05",
    image: "/assets/blog/guitar-guide.jpg",
    content: `
      <p>Choosing your first guitar can be exciting — and a little overwhelming. Here's a short checklist to help you decide:</p>
      <ul>
        <li><strong>Comfort & fit:</strong> If the neck or body feels uncomfortable, you'll practice less. Try different sizes (3/4, full, cutaway) and neck profiles.</li>
        <li><strong>Playability:</strong> Low action (string height) and a smooth fretboard make learning easier. Ask a tech to setup any second-hand instrument.</li>
        <li><strong>Acoustic vs Electric:</strong> Acoustic is great for songwriting and portability; electric is versatile for modern styles but needs an amp.</li>
        <li><strong>Budget smart:</strong> You don’t need the most expensive instrument. Spend on a playable guitar and one good set of strings, and get lessons that focus on fundamentals.</li>
      </ul>
      <p>At Aria Conservatory we help every beginner test instruments and find the one that’s comfortable and inspiring. Book a trial and we’ll guide you through options that suit your budget and goals.</p>
    `,
  },
  {
    slug: "5-practice-tips-that-really-work",
    title: "5 Practice Tips That Actually Work",
    excerpt: "Short, practical practice advice that gives steady progress — used by our teachers at Aria.",
    date: "2025-10-10",
    image: "/assets/blog/5-guitar-tips.jpg",
    content: `
      <p>Progress in music happens through consistent, focused practice. Here are five simple ideas our students use:</p>
      <ol>
        <li><strong>Short daily sessions:</strong> 20–30 minutes every day beats a long session once a week. Consistency builds muscle memory.</li>
        <li><strong>Warm-up with intention:</strong> Start with scales and simple techniques for 5–8 minutes to prepare the muscles and ears.</li>
        <li><strong>Slow practice:</strong> Practice sections slowly and with a metronome. Speed follows accuracy.</li>
        <li><strong>Record and review:</strong> Recording helps you hear timing and tuning issues you miss while playing.</li>
        <li><strong>Small goals:</strong> Break songs into 30–60 second sections and celebrate small wins.</li>
      </ol>
      <p>Want a structured practice plan? At Aria we give every student a weekly plan that fits their schedule and goals.</p>
    `,
  },
];
