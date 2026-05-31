import { blogPosts } from "@/lib/data"
import BlogCard from "@/components/BlogCard"

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">博客</h1>
      <p className="mt-2 text-gray-400">记录 AI 工具使用心得、开发实践和实习准备经验。</p>
      <div className="mt-10 grid gap-8">
        {blogPosts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  )
}
