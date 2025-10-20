// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import SiteNav from '../components/SiteNav';

export const metadata = {
  title: 'Aria Conservatory of Music',
  description: 'Aria Conservatory — Learn. Perform. Create. Pune • Studio Aria',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <header className="border-b border-white/6">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/assets/1.png" alt="Aria logo" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-semibold">Aria Conservatory of Music</div>
                <div className="text-xs opacity-80">Pune • Studio Aria</div>
              </div>
            </div>

            <nav>
              <SiteNav />
            </nav>
          </div>
        </header>

        <main className="min-h-[70vh]">
          {children}
        </main>

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
