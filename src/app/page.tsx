// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Aria Conservatory — Learn. Perform. Create.",
  description: "Aria Conservatory of Music — private & group lessons for Guitar, Piano, Vocals and Music Production in Pune.",
  openGraph: {
    title: "Aria Conservatory — Learn. Perform. Create.",
    description: "Private & group lessons for Guitar, Piano, Vocals and Music Production. Book a free trial.",
  },
};

const ACCENT = "#F57C20";

export default function Home() {
  const courses = [
    { title: "Beginner", desc: "Basics, posture, simple repertoire", price: "₹3,500 / month" },
    { title: "Intermediate", desc: "Technique, theory, performance skills", price: "₹4,500 / month" },
    { title: "Advanced", desc: "Specialisation, recording & stage craft", price: "₹6,000 / month" },
  ];

  const testimonials = [
    { name: "Riya", text: "Aria transformed my confidence on stage — amazing teachers and recitals." },
    { name: "Ankush", text: "Structured lessons and real performance opportunities. Highly recommended." },
    { name: "Meera", text: "Friendly studio, clear syllabus and supportive community." },
  ];

  const blogPosts = [
    { slug: "how-to-choose-your-first-guitar", title: "How to choose your first guitar", excerpt: "A quick guide for beginners — what matters and what doesn't.", image: "/assets/3.png" },
    { slug: "student-spotlight-aria", title: "Student Spotlight: Riya's Journey", excerpt: "From first chord to stage performer — her story.", image: "/assets/1.png" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 md:pt-20 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Learn. Perform. Create.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl">
              Aria Conservatory of Music — where passion meets technique. Private & group lessons for guitar, piano,
              vocals and music production. Structured syllabus, performance opportunities and a supportive community.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center px-5 py-3 rounded-full font-semibold" style={{ background: ACCENT, color: "#000" }}>
                Book a Free Trial
              </Link>
              <Link href="/what-we-do" className="inline-flex items-center px-5 py-3 rounded-full border border-white/10">
                Learn More
              </Link>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold">100+</div>
                <div className="text-sm opacity-80">Students</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold">80–90%</div>
                <div className="text-sm opacity-80">Retention Target</div>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last flex items-center justify-center">
            <div className="w-full max-w-md mx-auto p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(245,124,32,0.08), rgba(255,255,255,0.02))" }}>
              {/* Decorative/logo block — replace with hero image if available */}
              <div className="w-full h-64 relative rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/assets/1.png" alt="Aria logo" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold">What we do</h2>
            <p className="mt-3 text-white/85 max-w-xl">
              Aria combines classical discipline with contemporary creativity. We help each student find their musical voice
              through structured training, mentorship and performance opportunities.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-block w-9 h-9 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <div>
                  <div className="font-semibold">Structured curriculum</div>
                  <div className="text-sm opacity-80">Clear milestones from beginner to advanced.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-9 h-9 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <div>
                  <div className="font-semibold">Performance opportunities</div>
                  <div className="text-sm opacity-80">Monthly recitals, studio sessions and recording opportunities.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-9 h-9 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <div>
                  <div className="font-semibold">Modern production</div>
                  <div className="text-sm opacity-80">DAW basics, arranging and mixing for contemporary artists.</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Courses & Levels</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((c) => (
                <article key={c.title} className="p-4 rounded-xl bg-white/4 hover:bg-white/6 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{c.title}</h4>
                      <p className="text-sm opacity-85 mt-1">{c.desc}</p>
                    </div>
                    <div className="text-sm font-bold">{c.price}</div>
                  </div>
                  <div className="mt-3">
                    <Link href="/contact" className="inline-block px-3 py-1 rounded-md text-sm" style={{ background: ACCENT, color: "#000" }}>
                      Enroll
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <h3 className="text-2xl font-bold">Weekly Schedule</h3>
          <p className="mt-2 text-white/80">Weekday and weekend batches designed for busy schedules.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-white/80">
                  <th className="pb-3">Day</th>
                  <th className="pb-3">Time</th>
                  <th className="pb-3">Course</th>
                  <th className="pb-3">Teacher</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mon", "5:00–7:00 PM", "Guitar - Beginners", "Ankush"],
                  ["Wed", "6:00–8:00 PM", "Piano - Intermediate", "Meera"],
                  ["Sat", "10:00–1:00 PM", "Group Vocals", "Riya"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-white/6">
                    <td className="py-3 text-sm">{r[0]}</td>
                    <td className="py-3 text-sm">{r[1]}</td>
                    <td className="py-3 text-sm">{r[2]}</td>
                    <td className="py-3 text-sm">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <h3 className="text-2xl font-bold">What our students say</h3>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-4 bg-white/4 rounded-xl">
              <p className="text-sm opacity-90">“{t.text}”</p>
              <cite className="mt-3 block font-semibold text-sm">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="border-t border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">From the Studio</h3>
            <Link href="/blog" className="text-sm opacity-80 underline">View all</Link>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((b) => (
              <article key={b.slug} className="rounded-xl overflow-hidden bg-white/4">
                <div className="w-full h-44 relative">
                  <Image src={b.image} alt={b.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{b.title}</h4>
                  <p className="text-sm opacity-80 mt-2">{b.excerpt}</p>
                  <div className="mt-4">
                    <Link href={`/blog/${b.slug}`} className="text-sm underline">Read</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 rounded-xl" style={{ background: "linear-gradient(90deg, rgba(245,124,32,0.08), rgba(255,255,255,0.02))" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold">Ready to start your musical journey?</h4>
              <p className="text-sm opacity-85">Book a free trial and we’ll match you with the right course.</p>
            </div>

            <div>
              <Link href="/contact" className="inline-block px-5 py-3 rounded-full font-semibold" style={{ background: ACCENT, color: "#000" }}>
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-20"></div>
    </main>
  );
}
