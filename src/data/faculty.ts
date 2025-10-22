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
    id: "Ankush",
    name: "Ankush Vishnuvardhan",
    role: "Guitar, Keyboards & Drums",
    bio: "Ankush specializes in contemporary guitar techniques, improvisation and live performance coaching. He blends classical technique with modern styles.",
    image: "/assets/faculty/ankush.jpg",
    socials: [{ type: "instagram", url: "https://instagram.com/ankushahe" }],
  },
  {
    id: "Tej",
    name: "Tej Badbade",
    role: "Drums, Rhythm Techniques & Purcussion",
    bio: "Tej focuses on rhythm foundations, techniques and accompaniment. He tailors lesson plans for each student's goals.",
    image: "/assets/faculty/Tej.jpg",
    socials: [{ type: "instagram", url: "https://instagram.com/tezztej" }],
  },
  {
    id: "Anupam",
    name: "Anupam Kamat",
    role: "Vocals, Electric Guitar & Performance",
    bio: "Anupam coaches vocal technique, stage presence and mic technique along side coaching Electric Guitar.",
    image: "/assets/faculty/Anupam.jpg",
    socials: [{ type: "instagram", url: "https://instagram.com/the_guitar_shredder" }],
  },
];
