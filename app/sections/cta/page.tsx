"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { useState } from "react"
import { CTASection } from "@/components/sections/cta"

const code = `export function CTASection() {
  return (
    <section className="w-full px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
          <div className="rounded-3xl bg-zinc-950 px-8 py-16 text-center md:px-16">
            {/* Decorative elements */}
            <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-300">
                Join thousands of developers building the future.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-zinc-900">
                  Start Free Trial
                </button>
                <button className="rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold text-white">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}`

export default function CTAPage() {
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
            <h1 className="text-4xl font-bold">CTA Banner Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              An eye-catching call-to-action with gradient border and decorative blur effects.
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

        <div className="mb-8 overflow-hidden rounded-xl border border-border bg-zinc-950">
          <div className="border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium">Live Preview</div>
          <CTASection />
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
