import type React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Copy,
  Eye,
  Zap,
  Code2,
  Blocks,
  Layout,
} from "lucide-react";

export default function HomePage() {
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
            <Link
              href="/sections"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Sections
            </Link>
            <a
              href="https://github.com/mahabeer-dev/widgets.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm">
            <Package className="h-4 w-4" />
            <span>v1.0.0 now available</span>
          </div>
          <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl">
            Beautiful React widgets,{" "}
            <span className="text-muted-foreground">ready to use</span>
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            A collection of beautifully crafted, accessible React components and
            full sections. Browse, preview, copy the code, or install via npm.
            Build faster with production-ready widgets.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse Components
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/sections"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Layout className="h-4 w-4" />
              Browse Sections
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">Why my-widgets?</h2>
          <p className="mt-4 text-center text-muted-foreground">
            Everything you need to build modern React applications
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Eye className="h-6 w-6" />}
              title="Live Preview"
              description="See components in action with interactive live previews before using them in your project."
            />
            <FeatureCard
              icon={<Copy className="h-6 w-6" />}
              title="Copy & Paste"
              description="Grab the code you need with a single click. No complex setup or configuration required."
            />
            <FeatureCard
              icon={<Package className="h-6 w-6" />}
              title="npm Package"
              description="Install the entire library via npm for seamless integration with your existing workflow."
            />
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Tree-shakeable"
              description="Import only what you need. Unused components are automatically removed from your bundle."
            />
            <FeatureCard
              icon={<Code2 className="h-6 w-6" />}
              title="TypeScript"
              description="Full TypeScript support with comprehensive type definitions for better developer experience."
            />
            <FeatureCard
              icon={<Blocks className="h-6 w-6" />}
              title="Accessible"
              description="Built with accessibility in mind. All components follow WAI-ARIA best practices."
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">
            Ready-to-Use Sections
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            Full-fledged sections with 3D animations, gradients, and more
          </p>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "3D Hero",
              "Gradient Hero",
              "Particles Hero",
              "Feature Grid",
              "Pricing",
              "Testimonials",
              "Team",
              "CTA Banner",
            ].map((section) => (
              <Link
                key={section}
                href={`/sections/${section.toLowerCase().replace(/ /g, "-").replace("3d", "hero-3d").replace("gradient", "hero-gradient").replace("particles", "hero-particles").replace("feature-grid", "features-bento")}`}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-md"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {section}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  View section
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/sections"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all sections
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold">
            Available Components
          </h2>
          <p className="mt-4 text-center text-muted-foreground">
            22 production-ready components to get you started
          </p>
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Button",
              "Card",
              "Modal",
              "Tabs",
              "Dropdown",
              "Toast",
              "Input",
              "Badge",
              "Avatar",
              "Alert",
              "Accordion",
              "Pagination",
            ].map((component) => (
              <Link
                key={component}
                href={`/components/${component.toLowerCase()}`}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-md"
              >
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {component}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  View documentation
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/components"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all 22 components
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>Built with Next.js, React, and TypeScript.</p>
          <p className="mt-2">
            Open source on{" "}
            <a
              href="https://github.com/mahabeer-dev/widgets.git"
              className="underline hover:text-foreground"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-4 inline-flex rounded-md bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
