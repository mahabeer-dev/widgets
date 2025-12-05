"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const speedDialCode = `function Demo() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div className="relative h-48 flex items-end justify-center">
      <div className="relative inline-flex flex-col-reverse">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg hover:bg-zinc-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={\`transition-transform \${isOpen ? 'rotate-45' : ''}\`}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        
        <div className="flex flex-col-reverse gap-2 mb-2">
          {['Edit', 'Share', 'Delete'].map((label, i) => (
            <div 
              key={label}
              className={\`flex items-center gap-2 transition-all \${isOpen ? 'opacity-100 -translate-y-2' : 'opacity-0 pointer-events-none'}\`}
              style={{transitionDelay: isOpen ? \`\${i * 50}ms\` : '0ms'}}
            >
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-zinc-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
              <span className="rounded-md bg-zinc-900 px-2 py-1 text-xs text-white shadow-md">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`

const speedDialProps = [
  { name: "icon", type: "ReactNode", description: "Main button icon" },
  {
    name: "actions",
    type: "{ icon: ReactNode; label: string; onClick: () => void }[]",
    description: "Actions to display (required)",
  },
  { name: "direction", type: '"up" | "down" | "left" | "right"', default: '"up"', description: "Direction to expand" },
]

export default function SpeedDialPage() {
  return (
    <ComponentPageLayout name="Speed Dial" description="A speed dial component for quick action menus.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Speed Dial</h3>
          <CodePreview code={speedDialCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={speedDialProps} />
      </section>
    </ComponentPageLayout>
  )
}
