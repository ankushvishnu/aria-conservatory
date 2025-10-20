// src/components/LeadForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const formData = new FormData(f);
    const payload = Object.fromEntries(formData.entries());

    // Basic validation
    if (!payload.name || !payload.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    try {
      setStatus("sending");

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // try to read json error
        let errText = "Submission failed";
        try {
          const json = await res.json();
          errText = json?.error || errText;
        } catch {}
        throw new Error(errText);
      }

      setStatus("sent");
      f.reset();

      // small delay so user sees the success indicator, then redirect
      setTimeout(() => {
        router.push("/thank-you");
      }, 700);
    } catch (err) {
      console.error("Lead submit error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white/3 p-6 rounded-lg" name="lead-form">
      <div>
        <label className="block text-sm">Full name</label>
        <input name="name" required className="mt-1 w-full p-2 rounded bg-black border border-white/10" />
      </div>
      <div>
        <label className="block text-sm">Phone / WhatsApp</label>
        <input name="phone" required className="mt-1 w-full p-2 rounded bg-black border border-white/10" />
      </div>
      <div>
        <label className="block text-sm">Interested in</label>
        <select name="interest" className="mt-1 w-full p-2 rounded bg-black border border-white/10">
          <option>Guitar</option>
          <option>Piano</option>
          <option>Vocals</option>
          <option>Music Production</option>
        </select>
      </div>
      <div>
        <label className="block text-sm">Notes (optional)</label>
        <textarea name="notes" className="mt-1 w-full p-2 rounded bg-black border border-white/10" rows={3} />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-4 py-2 rounded-md font-semibold"
          style={{ background: '#F57C20', color: '#000' }}
        >
          {status === "sending" ? "Sending..." : "Request Trial"}
        </button>

        <button type="reset" className="px-4 py-2 rounded-md border">Reset</button>

        <div className="ml-3 text-sm opacity-80">
          {status === "sent" && <span className="text-green-300">✅ Sent — redirecting…</span>}
          {status === "error" && <span className="text-red-300">⚠️ Failed — try again.</span>}
        </div>
      </div>
    </form>
  );
}
