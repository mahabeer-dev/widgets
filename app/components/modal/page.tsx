"use client"

import React from "react"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const modalCode = `function Demo() {
  const [open, setOpen] = React.useState(false)
  
  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
      >
        Open Modal
      </button>
      
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative z-50 w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-lg">
            <button 
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 opacity-70 hover:opacity-100"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold">Modal Title</h2>
            <p className="mt-1 text-sm text-zinc-500">This is a description of the modal.</p>
            <div className="mt-4">
              <p>Modal content goes here. Click outside or press Escape to close.</p>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button 
                onClick={() => setOpen(false)}
                className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100"
              >
                Cancel
              </button>
              <button className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}`

const modalProps = [
  {
    name: "open",
    type: "boolean",
    required: true,
    description: "Whether the modal is open",
  },
  {
    name: "onClose",
    type: "() => void",
    required: true,
    description: "Callback when the modal should close",
  },
  {
    name: "title",
    type: "string",
    description: "Modal title",
  },
  {
    name: "description",
    type: "string",
    description: "Modal description",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Size of the modal",
  },
]

export default function ModalPage() {
  return (
    <ComponentPageLayout
      name="Modal"
      description="A modal dialog component with backdrop, keyboard support, and animations."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Interactive Modal</h3>
          <CodePreview code={modalCode} scope={{ React }} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={modalProps} />
      </section>
    </ComponentPageLayout>
  )
}
