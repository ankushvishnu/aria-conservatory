// src/app/contact/page.tsx
"use client";

import ZohoJSForm from "../../components/ZohoJSForm";

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Aria Conservatory of Music</h1>
        <p className="text-lg opacity-85 max-w-2xl mx-auto">
          Have questions or want to book a free trial class? Fill out the form below and our team will get in touch with you soon.
        </p>
      </div>

      <div className="relative w-full max-w-3xl mx-auto">
        {/* The ZohoJSForm will lazy-load and inject the JS embed (creates the iframe and dynamic resize) */}
        <ZohoJSForm />
      </div>

      <div className="mt-16 text-center opacity-90 text-sm">
        <p>
          Studio Aria, Pune • Phone: +91 8788544255 • Email:&nbsp;
          <a href="mailto:hello@ariaconservatory.com" className="underline hover:text-orange-400">hello@ariaconservatory.com</a>
        </p>
      </div>
    </section>
  );
}
