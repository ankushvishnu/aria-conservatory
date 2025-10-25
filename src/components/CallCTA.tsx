// src/components/CallCTA.tsx
"use client";
import React from "react";

type Props = { phone?: string };

export default function CallCTA({ phone = "+919XXXXXXXXX" }: Props) {
  return (
    <a
      href={`tel:${phone}`}
      aria-label={`Call Aria Conservatory at ${phone}`}
      title={`Call ${phone}`}
      className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg"
      style={{ background: "#F57C20", color: "#000" }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.0-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.08 21 3 13.92 3 4a1 1 0 0 1 1-1h2.9a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.0L6.6 10.8z" fill="black"/>
      </svg>
    </a>
  );
}