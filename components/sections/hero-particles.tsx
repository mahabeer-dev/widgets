"use client"

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
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - distance / 120})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Mouse interaction
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
    <section className="relative min-h-[600px] w-full overflow-hidden bg-zinc-950">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/80" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center">
        <div className="flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm">
          <svg className="h-4 w-4 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-indigo-300">Powered by AI</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Experience the next generation of{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            intelligent design
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg">
          Harness the power of machine learning to create stunning, responsive interfaces. Move your mouse to interact
          with the particle field.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105">
            Try it Free
          </button>
          <button className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
