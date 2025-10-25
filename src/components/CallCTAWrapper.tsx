// src/components/CallCTAWrapper.tsx
"use client";
import { usePathname } from "next/navigation";
import React from "react";
import CallCTA from "./CallCTA";

export default function CallCTAWrapper({ phone }: { phone?: string }) {
  const pathname = usePathname();
  // Hide on home page (exact match). You can adjust to hide on other paths if needed.
  const hideOn = ["/"];
  if (!pathname) return null;
  if (hideOn.includes(pathname)) return null;

  return (
    <div className="fixed right-4 bottom-6 z-50 md:right-8 md:bottom-8">
      <CallCTA phone={phone} />
    </div>
  );
}