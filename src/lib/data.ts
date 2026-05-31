export interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  highlights: string[]
  link?: string
}

export const projects: Project[] = [
  {
    slug: "ai-portfolio",
    title: "AI-Assisted 作品集",
    description: "本网站！使用 Codex AI 全程辅助完成从架构设计、组件开发、测试到部署的全流程开发。",
    tech: ["Next.js 14", "Tailwind CSS 4", "Codex AI", "TypeScript"],
    highlights: [
      "100% AI 辅助完成代码生成",
      "建立「人提需求→AI 生成→人工审查」协作流",
      "集成 AI 写作模块自动生成技术博客",
      "包含单元测试与 CI/CD 部署流水线",
    ],
    link: "https://github.com/your-username/portfolio",
  },
  {
    slug: "ai-interview-sim",
    title: "AI 面试模拟舱",
    description: "交互式面试模拟平台，Codex 扮演面试官实时出题、评分并生成能力雷达图。",
    tech: ["React", "WebSocket", "Codex API", "Chart.js"],
    highlights: [
      "AI 动态生成面试题（八股文+场景题+算法）",
      "实时语音/文字作答评分",
      "可视化能力雷达图反馈",
    ],
  },
  {
    slug: "code-quality-dashboard",
    title: "AI 代码质量看板",
    description: "连接 GitHub 仓库，利用 Codex 自动分析 PR 代码质量，生成趋势报告与重构建议。",
    tech: ["Node.js", "GitHub API", "Codex", "ECharts"],
    highlights: [
      "500+ 次提交的代码质量分析",
      "自动检测代码异味与复杂度",
      "团队代码规范率提升 40%",
    ],
  },
]

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-assisted-dev-workflow",
    title: "如何用 AI 重构你的开发工作流",
    date: "2026-05-30",
    excerpt: "分享我在日常开发中如何利用 Codex AI 进行需求分析、代码生成、调试优化和文档编写的实践经验。",
    tags: ["AI", "工作流", "Codex"],
  },
  {
    slug: "codex-tips-for-students",
    title: "大三学生必备的 Codex 使用技巧",
    date: "2026-05-28",
    excerpt: "作为一个正在准备实习的大三学生，我总结了 10 个能让你在面试中脱颖而出的 Codex 高级用法。",
    tags: ["Codex", "实习", "面试"],
  },
  {
    slug: "building-with-ai",
    title: "从 0 到 1：用 AI 搭建一个完整项目",
    date: "2026-05-25",
    excerpt: "手把手记录我用 Codex 搭建这个作品集网站的完整过程，包括遇到的坑和解决方法。",
    tags: ["Next.js", "Codex", "项目实战"],
  },
]
