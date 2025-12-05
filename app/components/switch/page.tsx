"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const switchCode = `function Demo() {
  const [enabled, setEnabled] = React.useState(false)
  
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <label className="relative inline-flex cursor-pointer items-center">
          <input 
            type="checkbox" 
            className="peer sr-only" 
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          />
          <div className="h-6 w-11 rounded-full bg-zinc-200 transition-colors peer-checked:bg-zinc-900 peer-focus:ring-2 peer-focus:ring-zinc-500 peer-focus:ring-offset-2" />
          <div className={\`absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform \${enabled ? 'translate-x-5' : ''}\`} />
        </label>
        <div className="flex flex-col">
          <span className="font-medium">Enable notifications</span>
          <span className="text-sm text-zinc-500">Receive push notifications</span>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" className="peer sr-only" defaultChecked />
          <div className="h-6 w-11 rounded-full bg-zinc-200 transition-colors peer-checked:bg-zinc-900" />
          <div className="absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
        </label>
        <span className="font-medium">Dark mode</span>
      </div>
    </div>
  )
}`

const switchProps = [
  { name: "label", type: "string", description: "Label for the switch" },
  { name: "description", type: "string", description: "Description text" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the switch" },
]

export default function SwitchPage() {
  return (
    <ComponentPageLayout name="Switch" description="A toggle switch component for boolean settings.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Switch</h3>
          <CodePreview code={switchCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={switchProps} />
      </section>
    </ComponentPageLayout>
  )
}
