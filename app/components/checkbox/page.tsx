"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const checkboxCode = `function Demo() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-zinc-300 bg-white transition-colors checked:border-zinc-900 checked:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <label htmlFor="terms" className="cursor-pointer font-medium">Accept terms and conditions</label>
      </div>
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            type="checkbox"
            id="subscribe"
            defaultChecked
            className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-zinc-300 bg-white transition-colors checked:border-zinc-900 checked:bg-zinc-900"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="pointer-events-none absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div className="flex flex-col">
          <label htmlFor="subscribe" className="cursor-pointer font-medium">Subscribe to newsletter</label>
          <span className="text-sm text-zinc-500">Receive weekly updates</span>
        </div>
      </div>
    </div>
  )
}`

const checkboxProps = [
  { name: "label", type: "string", description: "Label for the checkbox" },
  { name: "description", type: "string", description: "Description text" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the checkbox" },
  { name: "indeterminate", type: "boolean", description: "Indeterminate state" },
]

export default function CheckboxPage() {
  return (
    <ComponentPageLayout name="Checkbox" description="A checkbox component with label and description support.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Checkbox</h3>
          <CodePreview code={checkboxCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={checkboxProps} />
      </section>
    </ComponentPageLayout>
  )
}
