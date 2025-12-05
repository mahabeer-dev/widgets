import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Logo3D from "@/components/logo-3d"

const components = [
  {
    name: "Accordion",
    description: "An expandable component for showing and hiding content sections.",
    href: "/components/accordion",
  },
  {
    name: "Alert",
    description: "Alert component for displaying important messages with different variants.",
    href: "/components/alert",
  },
  {
    name: "Avatar",
    description: "An avatar component for displaying user images with fallback support.",
    href: "/components/avatar",
  },
  {
    name: "Badge",
    description: "A badge component for displaying status or labels with multiple variants.",
    href: "/components/badge",
  },
  {
    name: "Breadcrumbs",
    description: "A breadcrumbs component for navigation hierarchy display.",
    href: "/components/breadcrumbs",
  },
  {
    name: "Button",
    description: "A versatile button component with multiple variants, sizes, and loading states.",
    href: "/components/button",
  },
  {
    name: "Card",
    description: "A flexible card container with header, content, and footer sections.",
    href: "/components/card",
  },
  {
    name: "Checkbox",
    description: "A checkbox component with label and description support.",
    href: "/components/checkbox",
  },
  {
    name: "Divider",
    description: "A divider component for separating content sections.",
    href: "/components/divider",
  },
  {
    name: "Dropdown",
    description: "A dropdown menu component with trigger, content, and item support.",
    href: "/components/dropdown",
  },
  {
    name: "Input",
    description: "A flexible input component with labels, addons, and error states.",
    href: "/components/input",
  },
  {
    name: "Modal",
    description: "A modal dialog component with backdrop, keyboard support, and animations.",
    href: "/components/modal",
  },
  {
    name: "Pagination",
    description: "A pagination component for navigating through pages of content.",
    href: "/components/pagination",
  },
  {
    name: "Progress",
    description: "A progress bar component with multiple variants and label support.",
    href: "/components/progress",
  },
  {
    name: "Rating",
    description: "A rating component with star display and interactive selection.",
    href: "/components/rating",
  },
  {
    name: "Skeleton",
    description: "A skeleton loading component for placeholder content.",
    href: "/components/skeleton",
  },
  {
    name: "Speed Dial",
    description: "A speed dial component for quick action menus.",
    href: "/components/speed-dial",
  },
  {
    name: "Stepper",
    description: "A stepper component for multi-step processes and wizards.",
    href: "/components/stepper",
  },
  {
    name: "Switch",
    description: "A toggle switch component for boolean settings.",
    href: "/components/switch",
  },
  {
    name: "Tabs",
    description: "A tabbed interface component for organizing content into sections.",
    href: "/components/tabs",
  },
  {
    name: "Toast",
    description: "Toast notifications with success, error, warning, and default variants.",
    href: "/components/toast",
  },
  {
    name: "Tooltip",
    description: "A tooltip component for displaying contextual information on hover.",
    href: "/components/tooltip",
  },
]

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo3D className="h-6 w-6" />
            <span>my-widgets</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/components" className="text-sm font-medium text-foreground">
              Components
            </Link>
            <a
              href="https://github.com/mahabeer-dev/widgets.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl font-bold">Components</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Browse our collection of {components.length} beautifully crafted, accessible React components.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">{component.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{component.description}</p>
              <div className="mt-4 text-sm font-medium text-primary">View component →</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
