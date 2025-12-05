"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const badgeCode = `function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center rounded-full bg-zinc-900 px-2.5 py-0.5 text-xs font-medium text-white">Default</span>
      <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-900">Secondary</span>
      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">Success</span>
      <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">Warning</span>
      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">Error</span>
      <span className="inline-flex items-center rounded-full border border-zinc-300 bg-transparent px-2.5 py-0.5 text-xs font-medium">Outline</span>
    </div>
  )
}`

const badgeProps = [
  {
    name: "variant",
    type: '"default" | "secondary" | "success" | "warning" | "error" | "outline"',
    default: '"default"',
    description: "Visual style variant of the badge",
  },
]

export default function BadgePage() {
  return (
    <ComponentPageLayout
      name="Badge"
      description="A badge component for displaying status or labels with multiple variants."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Variants</h3>
          <CodePreview code={badgeCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={badgeProps} />
      </section>
    </ComponentPageLayout>
  )
}
