// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Aria Conservatory of Music",
  description: "Aria Conservatory — Learn. Perform. Create. Pune • Studio Aria",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        </head>


      <body className="bg-black text-white antialiased font-sans">
        {/* Responsive Navbar (fixed at top) */}
        <Navbar />

        {/* main gets top padding so content isn't hidden behind fixed navbar */}
        <main className="pt-20 min-h-[70vh]">{children}</main>

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
