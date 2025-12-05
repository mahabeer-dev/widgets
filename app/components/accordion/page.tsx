"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const accordionCode = `function Demo() {
  const [openItems, setOpenItems] = React.useState(['item-1'])
  
  const toggle = (value) => {
    setOpenItems(prev => 
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    )
  }
  
  return (
    <div className="divide-y divide-zinc-200 rounded-lg border border-zinc-200">
      <div className="py-2 px-4">
        <button 
          onClick={() => toggle('item-1')}
          className="flex w-full items-center justify-between py-4 text-left font-medium"
        >
          What is this component library?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={openItems.includes('item-1') ? 'rotate-180 transition-transform' : 'transition-transform'}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {openItems.includes('item-1') && (
          <div className="pb-4 text-sm text-zinc-600">
            A production-ready React component library with TypeScript support.
          </div>
        )}
      </div>
      <div className="py-2 px-4">
        <button 
          onClick={() => toggle('item-2')}
          className="flex w-full items-center justify-between py-4 text-left font-medium"
        >
          How do I install it?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={openItems.includes('item-2') ? 'rotate-180 transition-transform' : 'transition-transform'}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {openItems.includes('item-2') && (
          <div className="pb-4 text-sm text-zinc-600">
            Run npm install @my-widgets/ui to get started.
          </div>
        )}
      </div>
    </div>
  )
}`

const accordionProps = [
  { name: "multiple", type: "boolean", default: "false", description: "Allow multiple items to be open" },
  { name: "defaultValue", type: "string[]", default: "[]", description: "Default open items" },
]

export default function AccordionPage() {
  return (
    <ComponentPageLayout
      name="Accordion"
      description="An expandable component for showing and hiding content sections."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Accordion</h3>
          <CodePreview code={accordionCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={accordionProps} />
      </section>
    </ComponentPageLayout>
  )
}
