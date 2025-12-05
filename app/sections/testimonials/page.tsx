"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { useState } from "react"
import { TestimonialsSection } from "@/components/sections/testimonials"

const code = `"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "/placeholder.svg",
    content: "This platform has completely transformed how our team builds products.",
    rating: 5,
  },
  // ... more testimonials
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-12">
          <div className="flex gap-1">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="mt-6 text-2xl text-white">
            "{testimonials[current].content}"
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <img src={testimonials[current].avatar || "/placeholder.svg"} alt={String(testimonials[current].name)} className="h-12 w-12 rounded-full" />
            <div>
              <div className="font-semibold text-white">{testimonials[current].name}</div>
              <div className="text-sm text-zinc-400">{testimonials[current].role}</div>
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
      </div>
    </section>
  )
}`

export default function TestimonialsPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo3D className="h-6 w-6" />
            <span>M-widgets</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/components"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Components
            </Link>
            <Link href="/sections" className="text-sm font-medium text-foreground transition-colors">
              Sections
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <Link
          href="/sections"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">Testimonials Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A testimonials carousel with star ratings and navigation controls.
            </p>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Code
              </>
            )}
          </button>
        </div>

        <div className="mb-8 overflow-hidden rounded-xl border border-border">
          <div className="border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium">Live Preview</div>
          <TestimonialsSection />
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium">Code</div>
          <pre className="overflow-x-auto p-4 text-sm bg-zinc-950 text-zinc-300">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
