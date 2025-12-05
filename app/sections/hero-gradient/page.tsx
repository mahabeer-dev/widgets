"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { useState } from "react"
import { HeroGradientSection } from "@/components/sections/hero-gradient"

const code = `"use client"

import { useEffect, useRef } from "react"

export function HeroGradientSection() {
  const interactiveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interactive = interactiveRef.current
    if (!interactive) return

    let curX = 0
    let curY = 0
    let tgX = 0
    let tgY = 0

    const move = () => {
      curX += (tgX - curX) / 20
      curY += (tgY - curY) / 20
      interactive.style.transform = \`translate(\${Math.round(curX)}px, \${Math.round(curY)}px)\`
      requestAnimationFrame(move)
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX
      tgY = event.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)
    move()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute right-1/4 top-1/3 h-96 w-96 animate-pulse rounded-full bg-purple-500 blur-3xl" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 left-1/3 h-96 w-96 animate-pulse rounded-full bg-pink-500 blur-3xl" style={{ animationDelay: "2s" }} />
        </div>
        <div
          ref={interactiveRef}
          className="absolute -left-1/2 -top-1/2 h-full w-full opacity-50"
          style={{
            background: "radial-gradient(600px circle, rgba(99, 102, 241, 0.15), transparent 40%)",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: \`linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)\`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text font-medium text-transparent">
            Introducing v2.0
          </span>
          <span className="text-white/60">— Now with AI</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          The platform for{" "}
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              modern teams
            </span>
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
          Streamline your workflow with our cutting-edge platform.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px]">
            <span className="flex items-center gap-2 rounded-xl bg-zinc-950 px-8 py-4 text-sm font-semibold text-white transition-colors group-hover:bg-transparent">
              Start Building
            </span>
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}`

export default function HeroGradientPage() {
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
            <h1 className="text-4xl font-bold">Gradient Hero Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A modern hero section with animated gradient blobs and an interactive mouse-following spotlight effect.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                CSS Animation
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Interactive</span>
            </div>
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
          <div className="h-[600px]">
            <HeroGradientSection />
          </div>
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
