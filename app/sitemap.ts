import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const pages = ["/", "/components", "/sections"]
  const sections = [
    "/sections/hero-3d",
    "/sections/hero-gradient",
    "/sections/hero-particles",
    "/sections/features-bento",
    "/sections/pricing",
    "/sections/testimonials",
    "/sections/team",
    "/sections/cta",
  ]
  const components = [
    "/components/accordion",
    "/components/alert",
    "/components/avatar",
    "/components/badge",
    "/components/breadcrumbs",
    "/components/button",
    "/components/card",
    "/components/checkbox",
    "/components/divider",
    "/components/dropdown",
    "/components/input",
    "/components/modal",
    "/components/pagination",
    "/components/progress",
    "/components/rating",
    "/components/skeleton",
    "/components/speed-dial",
    "/components/stepper",
    "/components/switch",
    "/components/tabs",
    "/components/toast",
    "/components/tooltip",
  ]

  const routes = [...pages, ...sections, ...components]

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }))
}

