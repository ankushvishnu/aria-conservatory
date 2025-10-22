// src/components/FacultyCard.tsx
"use client";
import Image from "next/image";
import { FacultyMember } from "@/data/faculty";

export default function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="p-4 rounded-xl bg-white/4 flex flex-col items-center text-center">
      <div className="w-36 h-36 relative rounded-full overflow-hidden">
        <Image src={member.image} alt={member.name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="mt-3">
        <div className="font-semibold">{member.name}</div>
        <div className="text-sm opacity-80">{member.role}</div>
        <p className="mt-2 text-sm opacity-85">{member.bio}</p>
        {member.socials?.length ? (
          <div className="mt-3 flex gap-3 justify-center">
            {member.socials.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm underline">
                {s.type}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
