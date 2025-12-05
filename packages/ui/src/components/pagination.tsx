"use client"

import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Pagination component props
 */
export interface PaginationProps extends HTMLAttributes<HTMLElement> {
  /** Current page number */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
  /** Number of page buttons to show */
  siblingCount?: number
}

function generatePagination(currentPage: number, totalPages: number, siblingCount: number): (number | "...")[] {
  const totalNumbers = siblingCount * 2 + 3
  const totalBlocks = totalNumbers + 2

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const shouldShowLeftDots = leftSiblingIndex > 2
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, "...", totalPages]
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1)
    return [1, "...", ...rightRange]
  }

  const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i)
  return [1, "...", ...middleRange, "...", totalPages]
}

/**
 * A pagination component for navigating through pages
 *
 * @example
 * ```tsx
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => console.log(page)}
 * />
 * ```
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, currentPage, totalPages, onPageChange, siblingCount = 1, ...props }, ref) => {
    const pages = generatePagination(currentPage, totalPages, siblingCount)

    return (
      <nav ref={ref} aria-label="Pagination" className={cn("flex items-center gap-1", className)} {...props}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {pages.map((page, index) =>
          page === "..." ? (
            <span key={`dots-${index}`} className="flex h-9 w-9 items-center justify-center text-zinc-500">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              aria-current={currentPage === page ? "page" : undefined}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors",
                currentPage === page
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "border border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-800",
              )}
            >
              {page}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </nav>
    )
  },
)

Pagination.displayName = "Pagination"
