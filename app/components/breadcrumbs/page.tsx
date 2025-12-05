"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const breadcrumbsCode = `function Demo() {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center">
      <ol className="flex items-center gap-2">
        <li className="flex items-center gap-2">
          <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Home</a>
        </li>
        <li className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Products</a>
        </li>
        <li className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400">
            <polyline points="9 18 15 12 9 6" />
          </svg>
          <span className="text-sm font-medium text-zinc-900" aria-current="page">Details</span>
        </li>
      </ol>
    </nav>
  )
}`

const breadcrumbsProps = [{ name: "separator", type: "ReactNode", description: "Custom separator between items" }]

const breadcrumbItemProps = [
  { name: "href", type: "string", description: "URL to navigate to" },
  { name: "current", type: "boolean", description: "Whether this is the current page" },
]

export default function BreadcrumbsPage() {
  return (
    <ComponentPageLayout name="Breadcrumbs" description="A breadcrumbs component for navigation hierarchy display.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Breadcrumbs</h3>
          <CodePreview code={breadcrumbsCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Breadcrumbs Props</h2>
        <PropsTable props={breadcrumbsProps} />
        <h2 className="mb-4 mt-8 text-2xl font-semibold">BreadcrumbItem Props</h2>
        <PropsTable props={breadcrumbItemProps} />
      </section>
    </ComponentPageLayout>
  )
}
