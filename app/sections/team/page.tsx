"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { useState } from "react"
import { TeamSection } from "@/components/sections/team"

const code = `import { Twitter, Linkedin, Github } from 'lucide-react'

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    avatar: "/placeholder.svg",
    bio: "Former Google engineer with 15+ years in tech.",
    social: { twitter: "#", linkedin: "#", github: "#" },
  },
  // ... more team members
]

export function TeamSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Meet the people behind the product</h2>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <img src={member.avatar || "/placeholder.svg"} className="mx-auto h-32 w-32 rounded-full object-cover" />
              <h3 className="mt-6 text-lg font-semibold text-white">{member.name}</h3>
              <span className="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-400">
                {member.role}
              </span>
              <p className="mt-3 text-sm text-zinc-400">{member.bio}</p>
              <div className="mt-4 flex justify-center gap-3">
                {/* Social links */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`

export default function TeamPage() {
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
            <h1 className="text-4xl font-bold">Team Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A team grid with member photos, roles, and social links.
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
          <TeamSection />
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
