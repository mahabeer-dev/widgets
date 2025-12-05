"use client"

import Link from "next/link"
import { Blocks, ArrowLeft, Copy, Check } from "lucide-react"
import { useState } from "react"
import { FeaturesBentoSection } from "@/components/sections/features-bento"

const code = `import { Zap, Shield, Globe, Sparkles, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance.",
    className: "md:col-span-2",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and protocols.",
    className: "md:col-span-1",
  },
  // ... more features
]

export function FeaturesBentoSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400">
            Features
          </span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to scale
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={\`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10 \${feature.className}\`}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl transition-all group-hover:bg-indigo-500/20" />
              <div className="relative">
                <div className="inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-zinc-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`

export default function FeaturesBentoPage() {
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
            <Blocks className="h-6 w-6" />
            <span>my-widgets</span>
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
            <h1 className="text-4xl font-bold">Bento Feature Grid</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A modern bento-style feature grid with hover effects and varying column spans.
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
          <FeaturesBentoSection />
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
