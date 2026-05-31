export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">关于我</h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">👋 简介</h2>
        <p className="mt-3 text-gray-400 leading-relaxed">
          我是一名大三软件工程学生，正在积极准备 2026 年秋招实习。我的独特优势是
          <span className="text-primary font-medium"> 将 AI 工具深度融入日常开发流程</span>，
          不仅能写代码，更懂得如何用 AI 十倍提升开发效率。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">🛠️ 技术栈</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            ["Next.js / React", "前端框架"],
            ["TypeScript", "类型安全"],
            ["Tailwind CSS", "样式系统"],
            ["Node.js", "后端开发"],
            ["Codex AI", "AI 辅助开发"],
            ["Git / CI/CD", "版本控制与部署"],
          ].map(([name, desc]) => (
            <div key={name} className="border border-gray-800 rounded-lg p-3 hover:border-primary/50 transition">
              <div className="font-medium text-sm">{name}</div>
              <div className="text-xs text-gray-500 mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">🤖 AI 工具链实践</h2>
        <div className="mt-4 space-y-4">
          {[
            { title: "Codex 全流程开发", desc: "用 Codex 完成本作品集网站的搭建，从需求到部署全程 AI 辅助" },
            { title: "Skills 自定义工作流", desc: "创建专属 Skill 模板，一键启动 LeetCode 刷题 / 项目周报等任务" },
            { title: "AGENTS.md 项目管理", desc: "在项目中配置 AGENTS.md，让 AI 自动遵循代码规范和项目约定" },
            { title: "多插件协同", desc: "使用 @browser @documents @spreadsheets 等插件实现全链路提效" },
          ].map((item) => (
            <div key={item.title} className="border-l-2 border-primary pl-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">🎯 实习目标</h2>
        <p className="mt-3 text-gray-400 leading-relaxed">
          寻找一份能充分发挥 AI 工具能力的软件工程实习岗位。我希望能在一个重视技术创新的团队中，
          用 AI 提效能力为项目带来实实在在的价值。
        </p>
      </section>
    </div>
  )
}
