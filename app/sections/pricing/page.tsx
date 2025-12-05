"use client"

import Link from "next/link"
import { Blocks, ArrowLeft, Copy, Check } from "lucide-react"
import { useState } from "react"
import { PricingSection } from "@/components/sections/pricing"

const code = `import { Check } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects.",
    features: ["5 projects", "Basic analytics", "Community support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "Best for growing teams.",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations.",
    features: ["Everything in Pro", "SSO & SAML", "Dedicated support", "SLA guarantee"],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="w-full bg-zinc-950 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Simple, transparent pricing</h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={\`rounded-2xl border p-8 \${
                plan.popular ? "border-indigo-500 bg-indigo-500/10" : "border-white/10 bg-white/5"
              }\`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-300">
                    <Check className="h-5 w-5 text-emerald-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}`

export default function PricingPage() {
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
            <h1 className="text-4xl font-bold">Pricing Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A clean pricing comparison with a highlighted popular plan.
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
          <PricingSection />
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
