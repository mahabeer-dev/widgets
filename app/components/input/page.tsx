"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const inputCode = `function Demo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium">Email</label>
        <input 
          type="email" 
          placeholder="Enter your email"
          className="flex h-10 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
        />
        <p className="mt-1.5 text-sm text-zinc-500">We'll never share your email.</p>
      </div>
    </div>
  )
}`

const errorCode = `function Demo() {
  return (
    <div className="w-full max-w-sm">
      <label className="mb-1.5 block text-sm font-medium">Email</label>
      <input 
        type="email" 
        defaultValue="invalid-email"
        className="flex h-10 w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      />
      <p className="mt-1.5 text-sm text-red-600">Please enter a valid email address.</p>
    </div>
  )
}`

const withIconsCode = `function Demo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">🔍</span>
        <input 
          type="text" 
          placeholder="Search..."
          className="flex h-10 w-full rounded-md border border-zinc-300 bg-white pl-10 pr-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
      </div>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
        <input 
          type="number" 
          placeholder="0.00"
          className="flex h-10 w-full rounded-md border border-zinc-300 bg-white pl-8 pr-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
      </div>
    </div>
  )
}`

const inputProps = [
  {
    name: "label",
    type: "string",
    description: "Label for the input",
  },
  {
    name: "helperText",
    type: "string",
    description: "Helper text displayed below the input",
  },
  {
    name: "error",
    type: "string",
    description: "Error message to display",
  },
  {
    name: "leftAddon",
    type: "ReactNode",
    description: "Left icon or addon",
  },
  {
    name: "rightAddon",
    type: "ReactNode",
    description: "Right icon or addon",
  },
]

export default function InputPage() {
  return (
    <ComponentPageLayout name="Input" description="A flexible input component with labels, addons, and error states.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Basic Input with Label</h3>
            <CodePreview code={inputCode} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Error State</h3>
            <CodePreview code={errorCode} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">With Icons</h3>
            <CodePreview code={withIconsCode} />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={inputProps} />
      </section>
    </ComponentPageLayout>
  )
}
