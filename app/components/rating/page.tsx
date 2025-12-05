"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const ratingCode = `function Demo() {
  const [rating, setRating] = React.useState(3)
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            className="transition-colors hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={rating >= star ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              className={\`h-5 w-5 \${rating >= star ? 'text-yellow-400' : 'text-zinc-300'}\`}
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        ))}
        <span className="ml-2 text-sm text-zinc-600">{rating} out of 5</span>
      </div>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={4 >= star ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="2"
            className={\`h-5 w-5 \${4 >= star ? 'text-yellow-400' : 'text-zinc-300'}\`}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-zinc-600">Read only</span>
      </div>
    </div>
  )
}`

const ratingProps = [
  { name: "value", type: "number", default: "0", description: "Current rating value" },
  { name: "max", type: "number", default: "5", description: "Maximum rating" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the stars" },
  { name: "readOnly", type: "boolean", default: "false", description: "Whether the rating is read-only" },
  { name: "onChange", type: "(value: number) => void", description: "Callback when rating changes" },
]

export default function RatingPage() {
  return (
    <ComponentPageLayout name="Rating" description="A rating component with star display and interactive selection.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Interactive & Read-only</h3>
          <CodePreview code={ratingCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={ratingProps} />
      </section>
    </ComponentPageLayout>
  )
}
