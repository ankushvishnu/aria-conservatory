// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Analytics from "@/components/Analytics";

import CallCTAWrapper from "@/components/CallCTAWrapper";

export const metadata = {
  title: "Aria Conservatory of Music",
  description: "Aria Conservatory — Learn. Perform. Create. Pune • Studio Aria",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />

        {/* Basic SEO / Open Graph defaults */}
        <meta property="og:site_name" content="Aria Conservatory of Music" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aria Conservatory — Learn. Perform. Create." />
        <meta property="og:description" content="Private & group lessons for guitar, piano, vocals and music production in Pune. Book a free trial." />
        <meta property="og:image" content="/og/aria-og.png" />
        <meta property="og:url" content="https://ariaconservatory.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Google font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>



      <body className="bg-black text-white antialiased font-sans">
                  {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
            <>
              {/* Global site tag (gtag.js) - Google Analytics */}
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', { send_page_view: false });
                  `,
                }}
              />
              {/* Client-side route pageview tracker */}
              <div id="analytics-root"><Analytics /></div>
            </>
          ) : null}

        {/* Responsive Navbar (fixed at top) */}
        <Navbar />

        {/* main gets top padding so content isn't hidden behind fixed navbar */}
        <main className="pt-20 min-h-[70vh]">{children}</main>

{/* Floating call CTA (hidden on Home page) */}
<CallCTAWrapper phone="+919XXXXXXXXX" />

        <footer className="border-t border-white/6 mt-12">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src="/assets/1.png" alt="logo small" className="w-10 h-10 object-contain" />
              <div>
                <div className="font-semibold">Aria Conservatory</div>
                <div className="text-sm opacity-80">© {new Date().getFullYear()} Aria Conservatory</div>
              </div>
            </div>

            <div className="text-sm opacity-80">
              Studio Aria — Learn, perform and create. Contact: hello@ariaconservatory.com
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
