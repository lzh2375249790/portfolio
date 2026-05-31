# 🚀 AI-Assisted Portfolio

> 用 Codex AI 全程辅助搭建的个人作品集网站

## ✨ 项目亮点

本项目是 **AI 辅助开发全流程** 的实践案例。每个阶段都使用了 Codex AI 协助完成：

| 阶段 | 做了什么 | AI 角色 |
|------|---------|---------|
| 🏗️ 架构设计 | 需求分析、路由设计、组件拆分 | 技术方案顾问 |
| 💻 编码实现 | 生成页面、组件、数据层代码 | 结对编程伙伴 |
| 🧪 测试编写 | 单元测试、测试覆盖率 | 质量保障 |
| 📚 文档生成 | README、博客内容、项目记录 | 文档助手 |
| 🚀 部署配置 | CI/CD 流水线、部署配置 | DevOps 助手 |

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS 4
- **测试**: Vitest + Testing Library
- **AI 工具**: Codex AI (全流程辅助)
- **部署**: Vercel (推荐)

## 📁 项目结构

```
src/
├── app/
│   ├── layout.tsx      # 根布局（导航栏 + 页脚）
│   ├── page.tsx         # 首页
│   ├── about/page.tsx   # 关于页
│   ├── projects/page.tsx # 项目列表
│   ├── blog/
│   │   ├── page.tsx     # 博客列表
│   │   └── [slug]/page.tsx  # 博客详情
│   └── globals.css      # 全局样式
├── components/
│   ├── Navbar.tsx       # 导航栏
│   ├── Footer.tsx       # 页脚
│   ├── ProjectCard.tsx  # 项目卡片
│   └── BlogCard.tsx     # 博客卡片
└── lib/
    └── data.ts          # 项目 & 博客数据
```

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 运行测试
npm run test

# 构建
npm run build
```

## 📝 博客内容

博客文章均为 AI 辅助生成，主题包括：
- AI 辅助开发工作流
- Codex 使用技巧
- 项目搭建心得

## 📄 License

MIT
