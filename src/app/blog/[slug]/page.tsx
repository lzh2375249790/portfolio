import { blogPosts } from "@/lib/data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const content = postContent[params.slug as keyof typeof postContent] ?? [
    "这篇文章正在由 Codex AI 辅助生成中...",
  ]

  return (
    <article>
      <header className="mb-10">
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <time>{post.date}</time>
          <span>·</span>
          <div className="flex gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 bg-gray-800 rounded-full">{t}</span>
            ))}
          </div>
        </div>
        <h1 className="mt-4 text-3xl font-bold">{post.title}</h1>
        <p className="mt-3 text-gray-400">{post.excerpt}</p>
      </header>

      <div className="prose prose-invert max-w-none space-y-4">
        {content.map((paragraph, i) => (
          <p key={i} className="text-gray-300 leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-800">
        <p className="text-sm text-gray-500">
          ✍️ 本文由 AI 辅助生成 · 使用 Codex 完成内容创作与排版
        </p>
      </footer>
    </article>
  )
}

const postContent: Record<string, string[]> = {
  "ai-assisted-dev-workflow": [
    "在过去，一个完整的开发流程通常需要开发者独立完成需求分析、技术选型、编码、测试、部署和文档编写。每个环节都需要大量的时间和精力投入。随着 AI 辅助开发工具的成熟，这个流程正在被彻底重塑。",
    "我使用 Codex 作为我的 AI 编程伙伴，建立了如下的开发工作流：",
    "第一步，需求分析阶段。我会向 Codex 描述我想要实现的功能，让它帮我梳理技术方案和架构设计。比如建立这个作品集时，我直接告诉 Codex「我想搭建一个 Next.js 个人作品集网站，需要首页、项目展示、博客和关于我四个页面」，它会自动生成项目结构和路由设计。",
    "第二步，编码实现阶段。每个组件我都会先描述功能，让 Codex 生成初始代码，然后我进行审查和优化。这种「人机协作」模式让我能把更多精力放在架构设计和代码质量上，而不是重复性的模板代码。",
    "第三步，测试与质量保障。Codex 可以帮我生成单元测试和集成测试，覆盖边界情况。我只需要描述测试场景，它就能给出完整的测试代码。",
    "第四步，文档与部署。最后，让 Codex 自动生成 README、API 文档，甚至帮我配置 CI/CD 流水线。",
    "这套工作流的核心不是让 AI 替代开发者，而是让开发者从重复劳动中解放出来，专注于更有创造性的工作。",
  ],
  "codex-tips-for-students": [
    "作为一个正在准备实习的大三学生，我深度使用 Codex 已经有一段时间了。以下是我认为最有价值的 5 个高级用法：",
    "1. 用 AGENTS.md 建立项目规范。在项目根目录放一个 AGENTS.md 文件，Codex 会自动读取并遵循其中的规则。比如你可以规定代码风格、测试覆盖要求、提交信息格式等。",
    "2. 用 Skills 创建可复用的工作流。把你常用的任务封装成 Skill，以后一个指令就能启动完整的工作流。比如我创建了一个「LeetCode 刷题」Skill，每次使用时 Codex 会自动帮我分析题目、给出多种解法思路。",
    "3. 用 @browser 插件实现自动化测试。Codex 可以控制浏览器进行 UI 测试、数据抓取等操作。面试时你可以说「我利用 AI 实现了自动化 E2E 测试」。",
    "4. 把 Codex 当面试搭子。让 Codex 扮演面试官，模拟真实面试场景。你可以说「请用 STAR 法则评价我的回答」「请出三道不同难度的算法题」。",
    "5. 用 Plans 模式展示结构化思维。对于复杂任务，先让 Codex 用 Plans 模式制定执行计划，再逐步实现。这本身就能体现你的系统设计能力。",
  ],
  "building-with-ai": [
    "这个作品集网站的搭建过程，完整记录了我如何使用 Codex 完成从 0 到 1 的全流程开发。",
    "第一阶段：项目初始化。我告诉 Codex「用 Next.js 14 + App Router + Tailwind CSS 搭建项目结构」，它自动生成了 tsconfig、package.json 和基础布局。",
    "第二阶段：页面开发。我逐步描述每个页面的需求，Codex 生成对应的组件代码。比如「创建一个深色主题的导航栏，支持响应式移动端菜单」「设计一个项目卡片组件，包含标题、描述、技术标签和亮点列表」。",
    "第三阶段：内容填充。项目的项目介绍和博客文章数据都放在 data.ts 中，方便管理。博客内容本身也是 AI 辅助生成的。",
    "第四阶段：测试与部署。编写了单元测试用例，并配置了 Vercel 部署。整个过程中，Codex 帮我处理了大量样板代码，让我能把精力集中在项目架构和体验优化上。",
    "总结来说，用 AI 辅助开发不是偷懒，而是把效率工具用到极致。在简历上写出「熟练使用 AI 重构开发流程」，比写「熟悉 React」更有竞争力。",
  ],
}
