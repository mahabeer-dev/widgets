"use client"

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
      interactive.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
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
    <section className="relative min-h-[600px] w-full overflow-hidden bg-zinc-950">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-indigo-500 blur-3xl" />
          <div
            className="absolute right-1/4 top-1/3 h-96 w-96 animate-pulse rounded-full bg-purple-500 blur-3xl"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 h-96 w-96 animate-pulse rounded-full bg-pink-500 blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </div>
        {/* Interactive gradient that follows mouse */}
        <div
          ref={interactiveRef}
          className="absolute -left-1/2 -top-1/2 h-full w-full opacity-50"
          style={{
            background: "radial-gradient(600px circle, rgba(99, 102, 241, 0.15), transparent 40%)",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
          <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text font-medium text-transparent">
            Introducing v2.0
          </span>
          <span className="text-white/60">— Now with AI</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          The platform for{" "}
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              modern teams
            </span>
            <span className="absolute -inset-1 block -skew-y-3 bg-gradient-to-r from-indigo-500/20 to-pink-500/20 blur-lg" />
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg md:text-xl">
          Streamline your workflow with our cutting-edge platform. Built for speed, designed for scale, loved by
          developers worldwide.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 p-[2px] transition-transform hover:scale-105">
            <span className="flex items-center gap-2 rounded-xl bg-zinc-950 px-8 py-4 text-sm font-semibold text-white transition-colors group-hover:bg-transparent">
              Start Building
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
            Book a Demo
          </button>
        </div>

        {/* Logos */}
        <div className="mt-20">
          <p className="text-sm text-zinc-500">Trusted by teams at</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["Vercel", "Stripe", "Linear", "Notion", "Figma"].map((company) => (
              <span key={company} className="text-lg font-semibold text-white">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
