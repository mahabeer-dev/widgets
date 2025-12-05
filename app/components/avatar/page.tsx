"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const avatarCode = `function Demo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
          <img src="/diverse-group.png" alt="User" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
          <span className="font-medium text-zinc-600">JD</span>
        </div>
      </div>
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-zinc-200">
          <span className="text-lg font-medium text-zinc-600">AB</span>
        </div>
        <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
      </div>
    </div>
  )
}`

const sizesCode = `function Demo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 text-xs">
        <span className="font-medium text-zinc-600">XS</span>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200 text-sm">
        <span className="font-medium text-zinc-600">SM</span>
      </div>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200">
        <span className="font-medium text-zinc-600">MD</span>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-200 text-lg">
        <span className="font-medium text-zinc-600">LG</span>
      </div>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-200 text-xl">
        <span className="font-medium text-zinc-600">XL</span>
      </div>
    </div>
  )
}`

const avatarProps = [
  { name: "src", type: "string", description: "Image source URL" },
  { name: "alt", type: "string", description: "Alt text for the image" },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Size of the avatar" },
  { name: "fallback", type: "string", description: "Fallback initials when image fails" },
  { name: "status", type: '"online" | "offline" | "away" | "busy"', description: "Status indicator" },
]

export default function AvatarPage() {
  return (
    <ComponentPageLayout
      name="Avatar"
      description="An avatar component for displaying user images with fallback support."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="mb-4 text-lg font-medium">Basic Usage</h3>
            <CodePreview code={avatarCode} />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium">Sizes</h3>
            <CodePreview code={sizesCode} />
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={avatarProps} />
      </section>
    </ComponentPageLayout>
  )
}
