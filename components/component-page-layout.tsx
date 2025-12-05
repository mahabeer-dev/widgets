import type React from "react"
import Link from "next/link"
import { ArrowLeft, Blocks } from "lucide-react"

interface ComponentPageLayoutProps {
  name: string
  description: string
  children: React.ReactNode
}

export function ComponentPageLayout({ name, description, children }: ComponentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Blocks className="h-6 w-6" />
            <span>my-widgets</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/components" className="text-sm font-medium text-foreground">
              Components
            </Link>
            <a
              href="https://github.com/mahabeer-dev/widgets.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/components"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to components
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>



        {children}
      </main>
    </div>
  )
}
