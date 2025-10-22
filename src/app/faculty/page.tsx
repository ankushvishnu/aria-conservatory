// src/app/faculty/page.tsx
import FacultyCard from "@/components/FacultyCard";
import { faculty } from "@/data/faculty";

export const metadata = {
  title: "Faculty — Aria Conservatory",
  description: "Meet the teachers and mentors at Aria Conservatory",
};

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl font-bold">Our Faculty</h1>
        <p className="mt-3 text-white/85">A team of experienced instructors — teaching technique, performance and modern production.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((m) => (
            <FacultyCard key={m.id} member={m} />
          ))}
        </div>
      </section>
    </main>
  );
}
