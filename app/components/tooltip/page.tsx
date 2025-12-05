"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const tooltipCode = `function Demo() {
  const [visible, setVisible] = React.useState(false)
  
  return (
    <div className="flex items-center gap-8">
      <div 
        className="relative inline-block"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <button className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
          Hover me
        </button>
        {visible && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white shadow-md z-50">
            This is a tooltip
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-t-zinc-900 border-x-transparent border-b-transparent" />
          </div>
        )}
      </div>
    </div>
  )
}`

const tooltipProps = [
  { name: "content", type: "ReactNode", description: "Tooltip content (required)" },
  {
    name: "position",
    type: '"top" | "bottom" | "left" | "right"',
    default: '"top"',
    description: "Position of the tooltip",
  },
  { name: "delay", type: "number", default: "200", description: "Delay before showing tooltip (ms)" },
]

export default function TooltipPage() {
  return (
    <ComponentPageLayout
      name="Tooltip"
      description="A tooltip component for displaying contextual information on hover."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Tooltip</h3>
          <CodePreview code={tooltipCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={tooltipProps} />
      </section>
    </ComponentPageLayout>
  )
}
