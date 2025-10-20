// src/app/thank-you/page.tsx
export const metadata = {
  title: "Thank you — Aria Conservatory",
  description: "Thanks for getting in touch — we will contact you soon to schedule your trial.",
  openGraph: {
    title: "Thanks — Aria Conservatory",
    description: "We received your request. We'll contact you shortly to schedule your trial.",
    url: "https://ariaconservatory.com/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-center">
      <div className="rounded-xl bg-white/5 p-10">
        <h1 className="text-3xl font-bold mb-4">Thanks — we received your request!</h1>
        <p className="text-lg opacity-90 mb-6">
          Our team at Studio Aria will contact you shortly to confirm your trial lesson and match you with the right class.
        </p>

        <div className="mt-6">
          <a href="/" className="inline-block px-6 py-3 rounded-md font-semibold" style={{ background: '#F57C20', color: '#000' }}>
            Back to Home
          </a>
        </div>

        <div className="mt-6 text-sm opacity-75">
          <strong>Tip:</strong> If you don't hear from us in 24 hours, please email <a href="mailto:hello@ariaconservatory.com" className="underline">hello@ariaconservatory.com</a>.
        </div>
      </div>
    </section>
  );
}
