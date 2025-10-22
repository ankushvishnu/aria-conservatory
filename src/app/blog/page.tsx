// src/app/blog/page.tsx
import { metadata as rootMeta } from "@/app/layout";
import { blogPosts } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const metadata = {
  title: "Blog — Aria Conservatory",
  description: "Stories, guides and news from Aria Conservatory",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">From the Studio</h1>
          <Link href="/blog" className="text-sm opacity-80 underline">All posts</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
