// src/app/what-we-do/page.tsx

export const metadata = {
  title: "What We Do — Aria Conservatory of Music (Pune)",
  description: "Our approach at Aria Conservatory: a blend of classical discipline and contemporary creativity — personalized roadmaps, Studio Aria recitals and production training.",
  openGraph: {
    title: "What We Do — Aria Conservatory of Music",
    description: "Personalized teaching, monthly recitals, collaborative workshops and studio recording opportunities through Studio Aria.",
    url: "https://ariaconservatory.com/what-we-do",
    images: [
      { url: "/og/what-we-do.jpg", alt: "Aria Conservatory - What We Do" }
    ],
    siteName: "Aria Conservatory",
    type: "article",
    locale: "en_IN"
  }
};


export default function WhatWeDo() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">What We Do</h2>
      <p className="mt-4 text-lg opacity-90 max-w-3xl">
        At <strong>Aria Conservatory of Music</strong>, we believe that learning music should be as inspiring as performing it. Our mission is to help every student find their musical voice through structured training, modern teaching methods, and real-world performance experience.
      </p>

      <div className="mt-8 space-y-6">
        <div className="p-6 rounded-lg bg-white/4">
          <h3 className="font-semibold">Our Approach</h3>
          <p className="mt-2 text-sm opacity-80">
            Aria combines classical discipline with contemporary creativity. Each student receives a personalized roadmap that builds technique, theory, and musical understanding step-by-step — without losing the joy of playing. Lessons are interactive, goal-oriented, and supported by one-on-one mentorship.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white/4">
          <h3 className="font-semibold">Performance & Expression</h3>
          <p className="mt-2 text-sm opacity-80">
            Students participate in monthly recitals, studio sessions, and collaborative workshops, giving them the opportunity to perform, record, and grow as musicians in a professional environment via <strong>Studio Aria</strong>.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white/4">
          <h3 className="font-semibold">Creativity Meets Technology</h3>
          <p className="mt-2 text-sm opacity-80">
            Our programs integrate modern tools like DAWs, songwriting sessions, and basic sound engineering — preparing students for the creative world of music today. From acoustic instruments to electronic production, Aria nurtures artists ready for the modern stage.
          </p>
        </div>

        <div className="p-6 rounded-lg bg-white/4">
          <h3 className="font-semibold">A Community of Musicians</h3>
          <p className="mt-2 text-sm opacity-80">
            Aria is a vibrant community where students collaborate and create lifelong artistic partnerships. We celebrate every milestone — from the first performance to full studio recordings — making learning not just an experience, but a journey.
          </p>
        </div>
      </div>
    </section>
  );
}
