// src/components/SiteNav.tsx
import Link from 'next/link';

export default function SiteNav() {
  const linkClass = "px-3 py-2 text-sm hover:underline";
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className={linkClass}>Home</Link>
      <Link href="/what-we-do" className={linkClass}>What we do</Link>
      <Link href="/services" className={linkClass}>Our Services</Link>
      <Link href="/contact" className="px-3 py-2 text-sm font-semibold rounded-md" style={{ background: '#F57C20', color: '#000' }}>Contact Us</Link>
    </div>
  );
}
