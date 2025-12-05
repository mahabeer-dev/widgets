"use client"

import React from "react"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const dropdownCode = `function Demo() {
  const [open, setOpen] = React.useState(false)
  
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100"
      >
        Options
        <svg className={\`h-4 w-4 transition-transform \${open ? 'rotate-180' : ''}\`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[8rem] rounded-md border border-zinc-200 bg-white p-1 shadow-md">
          <button onClick={() => setOpen(false)} className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-zinc-100">
            Edit
          </button>
          <button onClick={() => setOpen(false)} className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-zinc-100">
            Duplicate
          </button>
          <button onClick={() => setOpen(false)} className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-zinc-100">
            Archive
          </button>
          <div className="my-1 h-px bg-zinc-200" />
          <button onClick={() => setOpen(false)} className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm text-red-600 hover:bg-red-50">
            Delete
          </button>
        </div>
      )}
    </div>
  )
}`

const dropdownProps = [
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Callback when dropdown open state changes",
  },
]

export default function DropdownPage() {
  return (
    <ComponentPageLayout
      name="Dropdown"
      description="A dropdown menu component with trigger, content, and item support."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Interactive Dropdown</h3>
          <CodePreview code={dropdownCode} scope={{ React }} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={dropdownProps} />
      </section>
    </ComponentPageLayout>
  )
}
