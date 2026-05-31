import Link from "next/link"
import { projects, blogPosts } from "@/lib/data"
import ProjectCard from "@/components/ProjectCard"
import BlogCard from "@/components/BlogCard"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 text-center">
        <p className="text-primary font-mono text-sm mb-4">你好，我是</p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
          大三软件工程学生
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
            &lt; AI 驱动开发者 /&gt;
          </span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-relaxed">
          热爱用 AI 工具重构开发流程。这个网站就是我用 Codex AI 全程辅助搭建的——从架构设计到每一行代码。
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/projects" className="px-6 py-3 bg-primary rounded-xl font-medium hover:brightness-110 transition">
            查看项目 →
          </Link>
          <Link href="/about" className="px-6 py-3 border border-gray-700 rounded-xl font-medium hover:border-primary transition">
            关于我
          </Link>
        </div>
      </section>

      {/* 技能亮点 */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { title: "AI 工作流", desc: "用 Codex 完成从需求到部署的全流程开发", icon: "🤖" },
          { title: "全栈能力", desc: "Next.js + React + TypeScript + Tailwind", icon: "⚡" },
          { title: "面试准备", desc: "LeetCode 200+ / 系统设计 / AI 工具链", icon: "🎯" },
        ].map((s) => (
          <div key={s.title} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-primary/50 transition">
            <span className="text-3xl">{s.icon}</span>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-400">{s.desc}</p>
          </div>
        ))}
      </section>

      {/* 精选项目 */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">精选项目</h2>
          <Link href="/projects" className="text-sm text-primary hover:underline">查看全部 →</Link>
        </div>
        <div className="grid gap-6">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* 最新博客 */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link href="/blog" className="text-sm text-primary hover:underline">查看全部 →</Link>
        </div>
        <div className="grid gap-6">
          {blogPosts.slice(0, 2).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}
