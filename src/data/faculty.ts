// src/data/faculty.ts
export type FacultyMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string; // path in /public
  socials?: { type: "instagram" | "youtube" | "website"; url: string }[];
};

export const faculty: FacultyMember[] = [
  {
    id: "ankush",
    name: "Ankush Verma",
    role: "Guitar Instructor",
    bio: "Ankush specializes in contemporary guitar techniques, improvisation and live performance coaching. He blends classical technique with modern styles.",
    image: "/assets/faculty/ankush.jpg",
    socials: [{ type: "instagram", url: "https://instagram.com/ankush" }],
  },
  {
    id: "meera",
    name: "Meera Joshi",
    role: "Piano & Theory",
    bio: "Meera focuses on classical piano foundations, harmony and accompaniment. She tailors lesson plans for each student's goals.",
    image: "/assets/faculty/meera.jpg",
    socials: [{ type: "website", url: "https://meerapiano.example" }],
  },
  {
    id: "riya",
    name: "Riya Sharma",
    role: "Vocals & Performance",
    bio: "Riya coaches vocal technique, stage presence and mic technique. She runs group workshops and prepares students for recitals.",
    image: "/assets/faculty/riya.jpg",
    socials: [{ type: "youtube", url: "https://youtube.com/riya" }],
  },
];
