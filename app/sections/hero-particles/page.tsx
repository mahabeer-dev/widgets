"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { useState } from "react"
import { HeroParticlesSection } from "@/components/sections/hero-particles"

const code = `"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function HeroParticlesSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const colors = ["#6366f1", "#8b5cf6", "#d946ef", "#06b6d4"]
    const particles: Particle[] = []
    const particleCount = 80
    let mouseX = 0
    let mouseY = 0

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = \`rgba(99, 102, 241, \${1 - distance / 120})\`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          particle.x -= dx * 0.02
          particle.y -= dy * 0.02
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/80" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Content */}
      </div>
    </section>
  )
}`

export default function HeroParticlesPage() {
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
            <h1 className="text-4xl font-bold">Particles Hero Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              An interactive hero section with animated particles that connect when close and react to mouse movement.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Canvas</span>
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
            <HeroParticlesSection />
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
