// src/components/Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const ACCENT = "#F57C20";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!open) return;
      if (!menuRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // lock body scroll when open (mobile)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/services", label: "Our Services" },
    { href: "/faculty", label: "Our Faculty" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-black/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* left: logo + title */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3" aria-label="Aria Conservatory Home">
            <div className="w-10 h-10 relative">
              <Image
                src="/assets/3.png" // replace if using different logo
                alt="Aria Conservatory logo"
                fill
                sizes="40px"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">Aria Conservatory</div>
              <div className="text-xs opacity-70">Pune • Studio Aria</div>
            </div>
          </Link>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm hover:underline transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md border border-white/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {/* hamburger / X icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="white"
                strokeWidth="1.7"
                strokeLinecap="round"
                className={`transition-transform duration-200 ${open ? "translate-y-0 opacity-0" : ""}`}
              />
              <g className={`transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`} >
                <path d="M4 4 L16 16" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M16 4 L4 16" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`md:hidden fixed inset-x-4 top-16 z-40 rounded-xl p-4 transform transition-all duration-300 shadow-2xl ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.85), rgba(0,0,0,0.8))" }}
      >
        <div className="flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white/4 transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block px-4 py-2 rounded-md font-semibold text-black"
            style={{ background: ACCENT }}
          >
            Book a Trial
          </Link>

          <div className="pt-3 border-t border-white/6 text-sm opacity-80">
            <div>Studio Aria • Pune</div>
            <div className="mt-2">Phone: +91 8788544255</div>
            <div>Email: <a href="mailto:hello@ariaconservatory.com" className="underline">hello@ariaconservatory.com</a></div>
          </div>
        </div>
      </div>
    </header>
  );
}
