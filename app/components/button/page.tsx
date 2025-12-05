"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const buttonCode = `function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
        Primary
      </button>
      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition-colors">
        Secondary
      </button>
      <button className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 bg-transparent px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
        Outline
      </button>
      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition-colors">
        Destructive
      </button>
    </div>
  )
}`

const sizesCode = `function Demo() {
  return (
    <div className="flex items-center gap-4">
      <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800">
        Small
      </button>
      <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
        Medium
      </button>
      <button className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-800">
        Large
      </button>
    </div>
  )
}`

const loadingCode = `function Demo() {
  return (
    <button 
      disabled
      className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white opacity-50 cursor-not-allowed"
    >
      <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      Loading...
    </button>
  )
}`

const buttonProps = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"',
    default: '"primary"',
    description: "Visual style variant of the button",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Size of the button",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Whether the button is in a loading state",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Whether the button is disabled",
  },
  {
    name: "leftIcon",
    type: "ReactNode",
    description: "Icon to display before the button text",
  },
  {
    name: "rightIcon",
    type: "ReactNode",
    description: "Icon to display after the button text",
  },
]

export default function ButtonPage() {
  return (
    <ComponentPageLayout
      name="Button"
      description="A versatile button component with multiple variants, sizes, and loading states."
    >
      {/* Examples */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Variants</h3>
            <CodePreview code={buttonCode} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Sizes</h3>
            <CodePreview code={sizesCode} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Loading State</h3>
            <CodePreview code={loadingCode} />
          </div>
        </div>
      </section>

      {/* Props */}
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={buttonProps} />
      </section>
    </ComponentPageLayout>
  )
}
