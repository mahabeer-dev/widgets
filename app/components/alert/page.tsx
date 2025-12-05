"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const alertCode = `function Demo() {
  return (
    <div className="space-y-4">
      <div className="relative flex gap-3 rounded-lg border bg-zinc-100 border-zinc-200 text-zinc-900 p-4">
        <div className="flex-1">
          <h5 className="mb-1 font-medium">Default Alert</h5>
          <div className="text-sm opacity-90">This is a default alert message.</div>
        </div>
      </div>
      <div className="relative flex gap-3 rounded-lg border bg-green-50 border-green-200 text-green-800 p-4">
        <div className="flex-1">
          <h5 className="mb-1 font-medium">Success!</h5>
          <div className="text-sm opacity-90">Your changes have been saved successfully.</div>
        </div>
      </div>
      <div className="relative flex gap-3 rounded-lg border bg-yellow-50 border-yellow-200 text-yellow-800 p-4">
        <div className="flex-1">
          <h5 className="mb-1 font-medium">Warning</h5>
          <div className="text-sm opacity-90">Please review your input before proceeding.</div>
        </div>
      </div>
      <div className="relative flex gap-3 rounded-lg border bg-red-50 border-red-200 text-red-800 p-4">
        <div className="flex-1">
          <h5 className="mb-1 font-medium">Error</h5>
          <div className="text-sm opacity-90">Something went wrong. Please try again.</div>
        </div>
      </div>
      <div className="relative flex gap-3 rounded-lg border bg-blue-50 border-blue-200 text-blue-800 p-4">
        <div className="flex-1">
          <h5 className="mb-1 font-medium">Info</h5>
          <div className="text-sm opacity-90">Here's some helpful information for you.</div>
        </div>
      </div>
    </div>
  )
}`

const alertProps = [
  {
    name: "variant",
    type: '"default" | "success" | "warning" | "error" | "info"',
    default: '"default"',
    description: "Visual style variant",
  },
  { name: "title", type: "string", description: "Alert title" },
  { name: "icon", type: "ReactNode", description: "Icon to display" },
]

export default function AlertPage() {
  return (
    <ComponentPageLayout
      name="Alert"
      description="Alert component for displaying important messages with different variants."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Variants</h3>
          <CodePreview code={alertCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={alertProps} />
      </section>
    </ComponentPageLayout>
  )
}
