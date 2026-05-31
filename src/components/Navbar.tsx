"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  { href: "/", label: "首页" },
  { href: "/projects", label: "项目" },
  { href: "/blog", label: "博客" },
  { href: "/about", label: "关于" },
]

export default function Navbar() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-surface/80 border-b border-gray-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition">
          &lt;AI Dev /&gt;
        </Link>
        <div className="hidden sm:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition hover:text-primary ${
                path === l.href ? "text-primary font-medium" : "text-gray-400"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button className="sm:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="sm:hidden border-t border-gray-800 px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm ${path === l.href ? "text-primary" : "text-gray-400"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
