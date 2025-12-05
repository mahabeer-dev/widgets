"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Checkbox component props
 */
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Label for the checkbox */
  label?: string
  /** Description text */
  description?: string
  /** Size of the checkbox */
  size?: "sm" | "md" | "lg"
  /** Indeterminate state */
  indeterminate?: boolean
}

const sizeStyles = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
}

const labelSizeStyles = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
}

/**
 * A checkbox component with label support
 *
 * @example
 * ```tsx
 * <Checkbox label="Accept terms" />
 * <Checkbox label="Subscribe" description="Receive email updates" />
 * ```
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, size = "md", indeterminate, id, ...props }, ref) => {
    const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={inputId}
            className={cn(
              "peer cursor-pointer appearance-none rounded border-2 border-zinc-300 bg-white transition-colors checked:border-zinc-900 checked:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:checked:border-white dark:checked:bg-white",
              sizeStyles[size],
            )}
            {...props}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100 dark:text-zinc-900",
              size === "sm" ? "h-2.5 w-2.5" : size === "md" ? "h-3 w-3" : "h-4 w-4",
            )}
          >
            {indeterminate ? <line x1="5" y1="12" x2="19" y2="12" /> : <polyline points="20 6 9 17 4 12" />}
          </svg>
        </div>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label htmlFor={inputId} className={cn("cursor-pointer font-medium", labelSizeStyles[size])}>
                {label}
              </label>
            )}
            {description && <span className="text-sm text-zinc-500 dark:text-zinc-400">{description}</span>}
          </div>
        )}
      </div>
    )
  },
)

Checkbox.displayName = "Checkbox"
