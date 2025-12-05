"use client"

import { forwardRef, type HTMLAttributes, useState } from "react"
import { cn } from "../utils/cn"

/**
 * Rating component props
 */
export interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current rating value */
  value?: number
  /** Maximum rating */
  max?: number
  /** Size of the stars */
  size?: "sm" | "md" | "lg"
  /** Whether the rating is read-only */
  readOnly?: boolean
  /** Callback when rating changes */
  onChange?: (value: number) => void
}

const sizeStyles = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
}

/**
 * A rating component with star display
 *
 * @example
 * ```tsx
 * <Rating value={3} onChange={(value) => console.log(value)} />
 * <Rating value={4.5} readOnly />
 * ```
 */
export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ className, value = 0, max = 5, size = "md", readOnly = false, onChange, ...props }, ref) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null)

    const displayValue = hoverValue !== null ? hoverValue : value

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center gap-0.5", className)}
        role="radiogroup"
        aria-label={`Rating: ${value} out of ${max} stars`}
        {...props}
      >
        {Array.from({ length: max }, (_, i) => {
          const starValue = i + 1
          const isFilled = displayValue >= starValue
          const isHalf = displayValue >= starValue - 0.5 && displayValue < starValue

          return (
            <button
              key={i}
              type="button"
              disabled={readOnly}
              onClick={() => onChange?.(starValue)}
              onMouseEnter={() => !readOnly && setHoverValue(starValue)}
              onMouseLeave={() => !readOnly && setHoverValue(null)}
              className={cn(
                "relative transition-colors",
                !readOnly && "cursor-pointer hover:scale-110",
                readOnly && "cursor-default",
              )}
              role="radio"
              aria-checked={value === starValue}
              aria-label={`${starValue} star${starValue !== 1 ? "s" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isFilled ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(sizeStyles[size], isFilled ? "text-yellow-400" : "text-zinc-300 dark:text-zinc-600")}
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {isHalf && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={cn("absolute inset-0 text-yellow-400", sizeStyles[size])}
                  style={{ clipPath: "inset(0 50% 0 0)" }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              )}
            </button>
          )
        })}
      </div>
    )
  },
)

Rating.displayName = "Rating"
