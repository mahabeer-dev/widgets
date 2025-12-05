"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "/professional-woman-diverse.png",
    content:
      "This platform has completely transformed how our team builds products. The speed and quality improvements are remarkable.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Lead Developer at Innovate",
    avatar: "/professional-man.jpg",
    content: "I've tried many similar tools, but nothing comes close to this. The developer experience is unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Founder at StartupX",
    avatar: "/entrepreneur-woman.png",
    content:
      "We shipped our MVP in half the time thanks to these tools. The support team is incredibly responsive too.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="rounded-full bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-400">Testimonials</span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Loved by developers worldwide</h2>
        </div>

        <div className="relative mt-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="flex gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="mt-6 text-xl text-white md:text-2xl">
              &ldquo;{testimonials[current].content}&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={testimonials[current].avatar || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-white">{testimonials[current].name}</div>
                <div className="text-sm text-zinc-400">{testimonials[current].role}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-full border border-white/10 p-3 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === current ? "bg-indigo-500" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-full border border-white/10 p-3 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
