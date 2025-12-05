import Link from "next/link"
import { Blocks, ArrowLeft, Layout, Sparkles, Users, CreditCard, MessageSquare, BarChart3, Shield } from "lucide-react"

const sections = [
  {
    name: "3D Hero",
    slug: "hero-3d",
    description: "Stunning hero section with interactive 3D floating shapes and animations",
    icon: <Sparkles className="h-5 w-5" />,
    tags: ["3D", "Animation", "Three.js"],
  },
  {
    name: "Gradient Hero",
    slug: "hero-gradient",
    description: "Modern hero section with animated gradient background and glassmorphism",
    icon: <Layout className="h-5 w-5" />,
    tags: ["Gradient", "Animation"],
  },
  {
    name: "Particles Hero",
    slug: "hero-particles",
    description: "Interactive hero with floating particle animation background",
    icon: <Sparkles className="h-5 w-5" />,
    tags: ["Particles", "Canvas", "Interactive"],
  },
  {
    name: "Feature Grid",
    slug: "features-bento",
    description: "Bento-style feature grid with hover effects and icons",
    icon: <BarChart3 className="h-5 w-5" />,
    tags: ["Grid", "Cards", "Hover Effects"],
  },
  {
    name: "Pricing Cards",
    slug: "pricing",
    description: "Beautiful pricing section with popular plan highlight",
    icon: <CreditCard className="h-5 w-5" />,
    tags: ["Pricing", "Cards"],
  },
  {
    name: "Testimonials",
    slug: "testimonials",
    description: "Customer testimonials carousel with ratings and avatars",
    icon: <MessageSquare className="h-5 w-5" />,
    tags: ["Carousel", "Social Proof"],
  },
  {
    name: "Team Section",
    slug: "team",
    description: "Team members grid with social links and role badges",
    icon: <Users className="h-5 w-5" />,
    tags: ["Grid", "Cards", "Social"],
  },
  {
    name: "CTA Banner",
    slug: "cta",
    description: "Eye-catching call-to-action section with gradient background",
    icon: <Shield className="h-5 w-5" />,
    tags: ["CTA", "Gradient"],
  },
]

export default function SectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold">Sections</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Full-fledged, production-ready sections you can copy and paste directly into your project. Each section is
            self-contained and customizable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.slug}
              href={`/sections/${section.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">{section.icon}</div>
                <div className="flex gap-2">
                  {section.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold group-hover:text-primary transition-colors">{section.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{section.description}</p>
              <div className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View section →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
