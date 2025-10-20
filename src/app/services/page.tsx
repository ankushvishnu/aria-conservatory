// src/app/services/page.tsx

export const metadata = {
  title: "Our Services — Aria Conservatory (Lessons, Production, Performance)",
  description: "Aria offers Individual Lessons, Group Classes, Music Production, Performance Training, Music Theory and Certification support in Pune.",
  openGraph: {
    title: "Our Services — Aria Conservatory",
    description: "1:1 lessons, group classes, Studio Aria production courses and performance training. Taught by experienced instructors.",
    url: "https://ariaconservatory.com/services",
    images: [
      { url: "/og/services.jpg", alt: "Aria Conservatory Services - Lessons, Production, Performance" }
    ],
    siteName: "Aria Conservatory",
    type: "article",
    locale: "en_IN"
  }
};


export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Our Services</h2>
      <p className="mt-4 text-lg opacity-90 max-w-3xl">
        At Aria Conservatory of Music, we offer personalized and structured programs designed to help musicians of all levels grow with confidence. Each service blends technique, creativity, and real-world performance experience — helping you move from practice room to stage with ease.
      </p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-white/4">
          <h3 className="text-xl font-semibold">🎸 Individual Lessons</h3>
          <p className="mt-2 text-sm opacity-80">
            One-on-one sessions tailored to your pace and goals. Ideal for students who want focused feedback and rapid improvement. Available for Guitar, Piano, Vocals, and Music Production.
          </p>
          <ul className="mt-3 text-sm opacity-75 space-y-1 list-disc pl-4">
            <li>Personalized attention and mentorship</li>
            <li>Weekly feedback and goal tracking</li>
            <li>Flexible scheduling options</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/4">
          <h3 className="text-xl font-semibold">🎵 Group Classes</h3>
          <p className="mt-2 text-sm opacity-80">
            Small-group learning in a collaborative and motivating setup. Learn, jam, and grow with other musicians under faculty guidance — perfect for beginners and intermediate students.
          </p>
          <ul className="mt-3 text-sm opacity-75 space-y-1 list-disc pl-4">
            <li>Batch size limited to 4–6 students</li>
            <li>Weekly sessions with interactive assignments</li>
            <li>Performance-based progress system</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/4">
          <h3 className="text-xl font-semibold">🎤 Performance Training</h3>
          <p className="mt-2 text-sm opacity-80">
            Build stage confidence, mic technique, and live performance etiquette. These sessions prepare students for recitals, competitions, and recording sessions.
          </p>
          <ul className="mt-3 text-sm opacity-75 space-y-1 list-disc pl-4">
            <li>Monthly recital opportunities</li>
            <li>Stage presence and performance coaching</li>
            <li>Collaborative band rehearsals</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/4">
          <h3 className="text-xl font-semibold">🎧 Music Production</h3>
          <p className="mt-2 text-sm opacity-80">
            Learn to compose, arrange, and record your own music using professional tools. Our in-house Studio Aria enables hands-on experience with industry-grade software and equipment.
          </p>
          <ul className="mt-3 text-sm opacity-75 space-y-1 list-disc pl-4">
            <li>DAW workflow (Logic Pro, FL Studio, Ableton)</li>
            <li>Mixing & mastering fundamentals</li>
            <li>Collaborative song projects</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/4">
          <h3 className="text-xl font-semibold">🎼 Music Theory & Composition</h3>
          <p className="mt-2 text-sm opacity-80">
            Understand the language of music — harmony, melody, rhythm, and structure. Develop the creative and analytical tools to write and arrange your own pieces.
          </p>
          <ul className="mt-3 text-sm opacity-75 space-y-1 list-disc pl-4">
            <li>Functional harmony and songwriting</li>
            <li>Applied theory for performers</li>
            <li>Composition assignments and feedback</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-white/4">
          <h3 className="text-xl font-semibold">🎓 Certification & Assessments</h3>
          <p className="mt-2 text-sm opacity-80">
            Students have the opportunity to pursue graded certification programs with recognized international boards, building credibility and career pathways in music.
          </p>
          <ul className="mt-3 text-sm opacity-75 space-y-1 list-disc pl-4">
            <li>Trinity & Rockschool syllabus support</li>
            <li>Internal assessments every term</li>
            <li>Portfolio & performance evaluation</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 bg-white/3 p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">Why Choose Aria Conservatory?</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm opacity-80">
          <li>Structured and goal-based training for all age groups</li>
          <li>Experienced instructors with academic and performance backgrounds</li>
          <li>Blend of traditional musicianship and modern technology</li>
          <li>Performance and recording opportunities throughout the year</li>
          <li>Community-driven approach focused on growth and creativity</li>
        </ul>
      </div>
    </section>
  );
}
