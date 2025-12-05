"use client"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const paginationCode = `function Demo() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const totalPages = 10
  
  return (
    <nav aria-label="Pagination" className="flex items-center gap-1">
      <button 
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      {[1, 2, 3, '...', 10].map((page, i) => (
        page === '...' ? (
          <span key={i} className="flex h-9 w-9 items-center justify-center text-zinc-500">...</span>
        ) : (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={\`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors \${
              currentPage === page 
                ? 'bg-zinc-900 text-white' 
                : 'border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100'
            }\`}
          >
            {page}
          </button>
        )
      ))}
      <button 
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 disabled:opacity-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </nav>
  )
}`

const paginationProps = [
  { name: "currentPage", type: "number", description: "Current page number (required)" },
  { name: "totalPages", type: "number", description: "Total number of pages (required)" },
  { name: "onPageChange", type: "(page: number) => void", description: "Callback when page changes (required)" },
  { name: "siblingCount", type: "number", default: "1", description: "Number of page buttons to show" },
]

export default function PaginationPage() {
  return (
    <ComponentPageLayout
      name="Pagination"
      description="A pagination component for navigating through pages of content."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Basic Pagination</h3>
          <CodePreview code={paginationCode} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={paginationProps} />
      </section>
    </ComponentPageLayout>
  )
}
