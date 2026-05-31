import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "我的作品集 | AI-Assisted Development",
  description: "使用 Codex AI 全流程搭建的个人作品集网站，展示 AI 辅助开发能力",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="bg-surface text-gray-100 antialiased min-h-screen">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
