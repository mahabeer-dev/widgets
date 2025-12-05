"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const stepperCode = `function Demo() {
  const steps = ['Account', 'Profile', 'Review', 'Complete']
  const currentStep = 1
  
  return (
    <div className="flex flex-row items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isActive = index === currentStep
        const isLast = index === steps.length - 1
        
        return (
          <div key={index} className="flex flex-1 items-center">
            <div className="flex flex-col items-center">
              <div className={\`flex h-10 w-10 items-center justify-center rounded-full border-2 font-medium transition-colors \${
                isCompleted 
                  ? 'border-zinc-900 bg-zinc-900 text-white' 
                  : isActive 
                    ? 'border-zinc-900 text-zinc-900' 
                    : 'border-zinc-300 text-zinc-400'
              }\`}>
                {isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <div className={\`mt-2 text-center text-sm font-medium \${
                isCompleted || isActive ? 'text-zinc-900' : 'text-zinc-400'
              }\`}>
                {step}
              </div>
            </div>
            {!isLast && (
              <div className={\`mx-4 h-0.5 flex-1 \${
                isCompleted ? 'bg-zinc-900' : 'bg-zinc-200'
              }\`} />
            )}
          </div>
        )
      })}
    </div>
  )
}`

const stepperProps = [
  { name: "steps", type: "{ label: string; description?: string }[]", description: "Array of steps (required)" },
  { name: "currentStep", type: "number", description: "Current active step, 0-indexed (required)" },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Orientation of the stepper",
  },
]

export default function StepperPage() {
  return (
    <ComponentPageLayout name="Stepper" description="A stepper component for multi-step processes and wizards.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Horizontal Stepper</h3>
          <CodePreview code={stepperCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={stepperProps} />
      </section>
    </ComponentPageLayout>
  )
}
