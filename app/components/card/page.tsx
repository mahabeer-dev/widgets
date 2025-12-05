"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const cardCode = `function Demo() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-xl font-semibold leading-none tracking-tight">Card Title</h3>
        <p className="text-sm text-zinc-500">Card description goes here</p>
      </div>
      <div className="p-6 pt-0">
        <p className="text-sm">This is the card content. You can put anything here.</p>
      </div>
      <div className="flex items-center gap-2 p-6 pt-0">
        <button className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
          Action
        </button>
        <button className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-100">
          Cancel
        </button>
      </div>
    </div>
  )
}`

const hoverableCode = `function Demo() {
  return (
    <div className="w-full max-w-sm rounded-xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md cursor-pointer">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Hoverable Card</h3>
        <p className="mt-2 text-sm text-zinc-500">Hover over me to see the effect!</p>
      </div>
    </div>
  )
}`

const cardProps = [
  {
    name: "hoverable",
    type: "boolean",
    default: "false",
    description: "Whether the card has a hover effect",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes to apply",
  },
]

export default function CardPage() {
  return (
    <ComponentPageLayout name="Card" description="A flexible card container with header, content, and footer sections.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8 space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Basic Card</h3>
            <CodePreview code={cardCode} />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-medium">Hoverable Card</h3>
            <CodePreview code={hoverableCode} />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={cardProps} />
      </section>
    </ComponentPageLayout>
  )
}
