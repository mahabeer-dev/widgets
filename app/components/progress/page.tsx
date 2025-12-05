"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const progressCode = `function Demo() {
  return (
    <div className="space-y-6 w-full max-w-md">
      <div className="w-full">
        <div className="mb-1 flex justify-between text-sm">
          <span className="text-zinc-600">Progress</span>
          <span className="font-medium">60%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full rounded-full bg-zinc-900 transition-all" style={{width: '60%'}} />
        </div>
      </div>
      <div className="w-full">
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full rounded-full bg-green-500 transition-all" style={{width: '75%'}} />
        </div>
      </div>
      <div className="w-full">
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full rounded-full bg-yellow-500 transition-all" style={{width: '45%'}} />
        </div>
      </div>
      <div className="w-full">
        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
          <div className="h-full rounded-full bg-red-500 transition-all" style={{width: '25%'}} />
        </div>
      </div>
    </div>
  )
}`

const progressProps = [
  { name: "value", type: "number", default: "0", description: "Progress value (0-100)" },
  { name: "max", type: "number", default: "100", description: "Maximum value" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the progress bar" },
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "error"',
    default: '"default"',
    description: "Color variant",
  },
  { name: "showLabel", type: "boolean", default: "false", description: "Show percentage label" },
]

export default function ProgressPage() {
  return (
    <ComponentPageLayout
      name="Progress"
      description="A progress bar component with multiple variants and label support."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Progress Variants</h3>
          <CodePreview code={progressCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={progressProps} />
      </section>
    </ComponentPageLayout>
  )
}
