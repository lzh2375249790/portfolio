import { projects } from "@/lib/data"
import ProjectCard from "@/components/ProjectCard"

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">项目</h1>
      <p className="mt-2 text-gray-400">每个项目都使用 AI 工具辅助开发，体现了「人机协作」的现代开发模式。</p>
      <div className="mt-10 grid gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
