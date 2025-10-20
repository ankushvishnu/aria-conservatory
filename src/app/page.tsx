// src/app/page.tsx

export const metadata = {
  title: "Aria Conservatory of Music — Learn · Perform · Create (Pune)",
  description: "Aria Conservatory of Music (Pune) — structured guitar, piano, vocal and music production lessons. Book a trial at Studio Aria today.",
  applicationName: "Aria Conservatory",
  keywords: ["music school", "music classes Pune", "guitar lessons", "piano lessons", "music production", "Studio Aria"],
  authors: [{ name: "Aria Conservatory", url: "https://ariaconservatory.com" }],
  openGraph: {
    title: "Aria Conservatory of Music — Learn · Perform · Create",
    description: "Structured guitar, piano, vocal and music production lessons in Pune. Private & group lessons, performance opportunities and Studio Aria.",
    url: "https://ariaconservatory.com/",
    siteName: "Aria Conservatory",
    images: [
      {
        url: "/og/home.jpg",   // put a wide OG image at public/og/home.jpg (1200x630)
        alt: "Aria Conservatory — Learn. Perform. Create."
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};


export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Aria Conservatory — Learn. Perform. Create.</h1>
          <p className="mt-4 text-lg opacity-90 max-w-xl">
            A modern music institute in Pune offering structured lessons in Guitar, Piano, Vocals and Music Production. Small-group classes and personalised 1-on-1 coaching to build confident performers.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-6 py-3 rounded-md font-semibold" style={{ background: '#F57C20', color: '#000' }}>Book a Trial</a>
            <a href="/services" className="px-6 py-3 rounded-md border border-white/10">View Services</a>
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(245,124,32,0.12), rgba(255,255,255,0.02))" }}>
            <img src="/assets/1.png" alt="logo" className="w-56 h-56 object-contain" />
          </div>
        </div>
      </div>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white/4">
          <h4 className="font-semibold">Structured Syllabus</h4>
          <p className="mt-2 text-sm opacity-80">Beginner → Advanced modules with clear milestones.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/4">
          <h4 className="font-semibold">Performance Opportunities</h4>
          <p className="mt-2 text-sm opacity-80">Weekly recitals and studio showcases.</p>
        </div>
        <div className="p-6 rounded-xl bg-white/4">
          <h4 className="font-semibold">Modern Studio</h4>
          <p className="mt-2 text-sm opacity-80">Recording and music production facilities.</p>
          <p className="mt-2 text-sm opacity-80">(Coming soon!)</p>
        </div>
      </section>
    </section>
  );
}
