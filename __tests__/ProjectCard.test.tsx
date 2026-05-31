import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import ProjectCard from "@/components/ProjectCard"

const mockProject = {
  slug: "test-project",
  title: "测试项目",
  description: "这是一个测试项目描述",
  tech: ["React", "TypeScript"],
  highlights: ["亮点一", "亮点二"],
}

describe("ProjectCard", () => {
  it("renders project title and description", () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText("测试项目")).toBeDefined()
    expect(screen.getByText("这是一个测试项目描述")).toBeDefined()
  })

  it("renders tech tags", () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText("React")).toBeDefined()
    expect(screen.getByText("TypeScript")).toBeDefined()
  })

  it("renders highlights", () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText("亮点一")).toBeDefined()
    expect(screen.getByText("亮点二")).toBeDefined()
  })
})
