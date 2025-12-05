"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const dividerCode = `function Demo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-4 text-zinc-600">Content above</p>
        <div className="h-px w-full bg-zinc-200" />
        <p className="mt-4 text-zinc-600">Content below</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-zinc-200" />
        <span className="text-sm text-zinc-500">OR</span>
        <div className="flex-1 border-t border-zinc-200" />
      </div>
      
      <div className="flex h-10 items-center gap-4">
        <span>Left</span>
        <div className="h-full w-px bg-zinc-200" />
        <span>Right</span>
      </div>
    </div>
  )
}`

const dividerProps = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Orientation of the divider",
  },
  { name: "label", type: "string", description: "Label to display in the divider" },
]

export default function DividerPage() {
  return (
    <ComponentPageLayout name="Divider" description="A divider component for separating content sections.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Divider Variants</h3>
          <CodePreview code={dividerCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={dividerProps} />
      </section>
    </ComponentPageLayout>
  )
}
