// src/app/blog/[slug]/page.tsx
import Image from "next/image";
import { blogPosts } from "@/data/blogs";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <div className="min-h-screen bg-black text-white p-8">Post not found</div>;

  return (
    <main className="min-h-screen bg-black text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="w-full aspect-video relative rounded-lg overflow-hidden">
          <Image src={post.image} alt={post.title} fill style={{ objectFit: "cover" }} />
        </div>

        <h1 className="mt-6 text-2xl font-bold">{post.title}</h1>
        <div className="text-sm opacity-80 mt-1">{new Date(post.date).toLocaleDateString()}</div>

        <div className="prose prose-invert mt-6 max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
