import type { Project } from "@/lib/data"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition cursor-pointer">
      <h3 className="text-lg font-semibold group-hover:text-primary transition">{project.title}</h3>
      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2.5 py-1 bg-gray-800 rounded-full text-gray-300">{t}</span>
        ))}
      </div>
      <ul className="mt-4 space-y-1">
        {project.highlights.map((h) => (
          <li key={h} className="text-sm text-gray-400 flex items-start gap-2">
            <span className="text-primary mt-0.5">▸</span> {h}
          </li>
        ))}
      </ul>
    </div>
  )
}
