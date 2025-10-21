// src/app/contact/page.tsx
"use client";

export default function ContactPage() {
  // ✅ Official Zoho form link (as provided)
  const ZOHO_IFRAME_SRC =
    "https://forms.zohopublic.in/ariaconservatoryofmusic1/form/ContactUs/formperma/VqtYwSTJORxVAaORUPJMdK44iseAI9RKePDna-qzp60";

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Aria Conservatory of Music
        </h1>
        <p className="text-lg opacity-85 max-w-2xl mx-auto">
          Have questions or want to book a free trial class? Fill out the form
          below and our team will get in touch with you soon.
        </p>
      </div>

      {/* Zoho Form Embed */}
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative w-full" style={{ paddingTop: "120%" }}>
          <iframe
            src={ZOHO_IFRAME_SRC}
            title="Aria Conservatory — Contact & Trial Booking Form"
            className="absolute inset-0 w-full h-full border-0 rounded-xl shadow-lg"
            loading="lazy"
            sandbox="allow-forms allow-scripts allow-popups allow-same-origin"
            referrerPolicy="no-referrer"
            aria-label="Contact Us"
          />
        </div>

        {/* Fallback link */}
        <div className="mt-4 text-center text-sm opacity-80">
          If the form doesn’t load,&nbsp;
          <a
            href={ZOHO_IFRAME_SRC}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-400"
          >
            open the booking form in a new tab
          </a>
          .
        </div>
      </div>

      {/* Optional contact info */}
      <div className="mt-16 text-center opacity-90 text-sm">
        <p>
          Studio Aria, Pune • Phone: +91 8788544255 • Email:&nbsp;
          <a
            href="mailto:hello@ariaconservatory.com"
            className="underline hover:text-orange-400"
          >
            hello@ariaconservatory.com
          </a>
        </p>
      </div>
    </section>
  );
}
