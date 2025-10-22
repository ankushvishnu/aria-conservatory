// src/components/Analytics.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window { dataLayer?: any[]; }
}

// helper to push pageview
function gtagPageview(url: string) {
  if (typeof window === "undefined") return;
  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  window.dataLayer.push({ event: "pageview", page_path: url });
  if ((window as any).gtag) {
    (window as any).gtag("event", "page_view", {
      page_path: url,
    });
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const search = useSearchParams();
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId) return;
    // push initial pageview
    gtagPageview(pathname + (search ? "?" + search.toString() : ""));
    // On client navigations, Next.js App Router will change pathname, this effect runs again.
  }, [pathname, search, process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID]);

  return null;
}
