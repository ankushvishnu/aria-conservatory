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
  // const courses = [
  //   { title: "Beginner", price: "₹2,500 / month" },
  //   { title: "Intermediate", price: "₹4,500 / month" },
  //   { title: "Advanced", price: "₹6,000 / month" },
  // ];

  const testimonials = [
    { name: "Riya", text: "Aria transformed my confidence on stage — amazing teachers and recitals." },
    { name: "Ankush", text: "Structured lessons and real performance opportunities. Highly recommended." },
    { name: "Meera", text: "Friendly studio, clear syllabus and supportive community." },
  ];

  const blogPosts = [
    { slug: "how-to-choose-your-first-guitar", title: "How to choose your first guitar", excerpt: "A quick guide for beginners — what matters and what doesn't.", image: "/assets/blog/guitar-guide.jpg" },
    { slug: "student-spotlight-aria", title: "Student Spotlight: Riya's Journey", excerpt: "From first chord to stage performer — her story.", image: "/assets/blog/student-riya.jpg" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
<section className="relative overflow-hidden">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* Left column: copy */}
    <div className="order-2 md:order-1">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
        Learn. Perform. Create.
      </h1>

      <p className="mt-3 text-sm sm:text-base md:text-lg text-white/85 max-w-xl">
        Aria Conservatory of Music — where passion meets technique. Private & group lessons for guitar,
        piano, vocals and music production. Structured syllabus, performance opportunities and a supportive community.
      </p>

      {/* Enquiry button under description
      <div className="mt-4">
        <Link
          href="/contact"
          aria-label="Enquiry - book a trial"
          className="w-full sm:w-auto block sm:inline-block px-4 py-3 rounded-md font-semibold text-sm text-center"
          style={{ background: ACCENT, color: "#000" }}
        >
          Enquiry
        </Link>
      </div> */}

      {/* CTA cluster: Call Now / Book Free Trial / Learn More */}
<div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
  {/* 1) Call Now - primary */}
  <a
    href="tel:+918788544255"
    aria-label="Call Aria Conservatory"
    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-sm"
    style={{ background: "#F57C20", color: "#000" }}
  >
    Call Now
  </a>

  {/* 2) Book Free Trial - secondary */}
  <a
    href="/contact"
    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full font-semibold text-sm border border-white/10 bg-white/5"
  >
    Book Free Trial
  </a>

  {/* 3) Learn More - ghost */}
  <a
    href="/what-we-do"
    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full text-sm"
  >
    Learn More
  </a>
</div>

      <div className="mt-6 flex gap-6 items-center">
        <div>
          <div className="text-lg sm:text-2xl font-bold">100+</div>
          <div className="text-sm opacity-80">Students</div>
        </div>
        <div>
          <div className="text-lg sm:text-2xl font-bold">80–90%</div>
          <div className="text-sm opacity-80">Retention Rate</div>
        </div>
      </div>
    </div>

    {/* Right column: decorative/logo or hero image */}
    <div className="order-1 md:order-2 flex items-center justify-center">
      <div className="w-full max-w-sm mx-auto p-4 sm:p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(245,124,32,0.06), rgba(255,255,255,0.02))" }}>
        <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden flex items-center justify-center">
          <Image src="/assets/1.png" alt="Aria logo" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* WHAT WE DO / VALUES */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">What we do</h2>
            <p className="mt-2 text-white/85 max-w-lg">
              Aria combines classical discipline with contemporary creativity. We help each student find their musical voice
              through structured training, mentorship and performance opportunities.
            </p>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-block w-8 h-8 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <div>
                  <div className="font-semibold text-sm">Structured curriculum</div>
                  <div className="text-sm opacity-80">Clear milestones from beginner to advanced.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-8 h-8 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <div>
                  <div className="font-semibold text-sm">Performance opportunities</div>
                  <div className="text-sm opacity-80">Monthly recitals, studio sessions and recording opportunities.</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="inline-block w-8 h-8 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
                <div>
                  <div className="font-semibold text-sm">Modern production</div>
                  <div className="text-sm opacity-80">DAW basics, arranging and mixing for contemporary artists.</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Courses & Pricing</h3>
            <p className="mt-2 text-sm opacity-85">Courses starting at just 2500/- per month!!</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* {courses.map((c) => (
                <article key={c.title} className="p-3 rounded-xl bg-white/4 hover:bg-white/6 transition">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm">{c.title}</h4>
                    </div>
                    <div className="text-sm font-bold">{c.price}</div>
                  </div>
                </article>
              ))} */}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h3 className="text-xl sm:text-2xl font-bold">What our students say</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="p-3 bg-white/4 rounded-xl">
              <p className="text-sm opacity-90">“{t.text}”</p>
              <cite className="mt-2 block font-semibold text-sm">— {t.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="border-t border-white/6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold">From the Studio</h3>
            <Link href="/blog" className="text-sm opacity-80 underline">View all</Link>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((b) => (
              <article key={b.slug} className="rounded-xl overflow-hidden bg-white/4">
                <div className="w-full aspect-video relative">
                  <Image src={b.image} alt={b.title} fill style={{ objectFit: "cover" }} />
                </div>
                <div className="p-3">
                  <h4 className="font-semibold text-sm">{b.title}</h4>
                  <p className="text-sm opacity-80 mt-1">{b.excerpt}</p>
                  <div className="mt-2">
                    <Link href={`/blog/${b.slug}`} className="text-sm underline">Read</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAR */}
      <section className="mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 rounded-xl" style={{ background: "linear-gradient(90deg, rgba(245,124,32,0.06), rgba(255,255,255,0.02))" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold">Ready to start your musical journey?</h4>
              <p className="text-sm opacity-85">Book a free trial and we’ll match you with the right course.</p>
            </div>

            <div>
              <Link href="/contact" className="inline-block px-4 py-2 rounded-md font-semibold" style={{ background: ACCENT, color: "#000" }}>
                Book Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="pb-12 sm:pb-20"/>
    </main>
  );
}
