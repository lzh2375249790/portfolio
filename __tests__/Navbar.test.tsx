import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import Navbar from "@/components/Navbar"

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

describe("Navbar", () => {
  it("renders all navigation links", () => {
    render(<Navbar />)
    expect(screen.getByText("首页")).toBeDefined()
    expect(screen.getByText("项目")).toBeDefined()
    expect(screen.getByText("博客")).toBeDefined()
    expect(screen.getByText("关于")).toBeDefined()
  })

  it("renders the logo", () => {
    render(<Navbar />)
    expect(screen.getByText("<AI Dev />")).toBeDefined()
  })
})
