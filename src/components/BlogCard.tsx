import type { BlogPost } from "@/lib/data"

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="group border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition cursor-pointer">
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <time>{post.date}</time>
        <span>·</span>
        <div className="flex gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 bg-gray-800 rounded-full">{t}</span>
          ))}
        </div>
      </div>
      <h3 className="mt-2 text-lg font-semibold group-hover:text-primary transition">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{post.excerpt}</p>
    </div>
  )
}
