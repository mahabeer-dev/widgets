"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const skeletonCode = `function Demo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 animate-pulse rounded-full bg-zinc-200" />
        <div className="space-y-2">
          <div className="h-4 w-32 animate-pulse rounded bg-zinc-200" />
          <div className="h-3 w-24 animate-pulse rounded bg-zinc-200" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
        <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-200" />
        <div className="h-4 w-3/5 animate-pulse rounded bg-zinc-200" />
      </div>
      <div className="h-40 w-full animate-pulse rounded-md bg-zinc-200" />
    </div>
  )
}`

const skeletonProps = [
  { name: "width", type: "string | number", description: "Width of the skeleton" },
  { name: "height", type: "string | number", description: "Height of the skeleton" },
  {
    name: "variant",
    type: '"text" | "circular" | "rectangular" | "rounded"',
    default: '"text"',
    description: "Shape of the skeleton",
  },
]

export default function SkeletonPage() {
  return (
    <ComponentPageLayout name="Skeleton" description="A skeleton loading component for placeholder content.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Loading States</h3>
          <CodePreview code={skeletonCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={skeletonProps} />
      </section>
    </ComponentPageLayout>
  )
}
