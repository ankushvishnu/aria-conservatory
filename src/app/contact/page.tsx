// src/app/contact/page.tsx
import dynamic from 'next/dynamic';
const LeadForm = dynamic(() => import('../../components/LeadForm'), { ssr: false });

export const metadata = {
  title: "Contact Us — Book Trial | Aria Conservatory (Pune)",
  description: "Book a free trial at Aria Conservatory. Studio Aria (Pune) contact details, visiting hours, and trial booking form.",
  openGraph: {
    title: "Contact Aria Conservatory — Book a Trial",
    description: "Get in touch with Studio Aria in Pune. Fill the form to request a trial lesson and we'll match you with the right course and time.",
    url: "https://ariaconservatory.com/contact",
    images: [
      { url: "/og/contact.jpg", alt: "Contact Aria Conservatory - Book a Trial" }
    ],
    siteName: "Aria Conservatory",
    type: "website",
    locale: "en_IN"
  }
};


export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-2 text-lg opacity-90">Have a question or want to book a trial? Fill the form and we’ll reach out.</p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <LeadForm />
        </div>

        <div className="p-6 rounded-lg bg-white/3">
          <div className="font-semibold">Visit / Contact</div>
          <div className="mt-3 text-sm opacity-80">
            Studio Aria, Pune<br />
            Phone: +91 8788 544 255<br />
            Email: hello@ariaconservatory.com
          </div>

          <div className="mt-6 text-sm opacity-80">
            <strong>Opening Hours</strong><br />
            Monday - Saturday: 12:00 – 8:00 PM<br />
            Sunday: 12:00 PM – 4:00 PM
          </div>
        </div>
      </div>
    </section>
  );
}
