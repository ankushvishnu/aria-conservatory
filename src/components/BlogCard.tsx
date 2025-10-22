// src/components/BlogCard.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { BlogPost, blogPosts } from "@/data/blogs"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-xl overflow-hidden bg-white/4">
      <div className="w-full aspect-video relative">
        <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="p-4">
        <div className="text-xs opacity-80">{new Date(post.date).toLocaleDateString()}</div>
        <h3 className="font-semibold mt-1">{post.title}</h3>
        <p className="mt-2 text-sm opacity-80">{post.excerpt}</p>
        <div className="mt-3">
          <Link href={`/blog/${post.slug}`} className="text-sm underline">Read</Link>
        </div>
      </div>
    </article>
  );
}
