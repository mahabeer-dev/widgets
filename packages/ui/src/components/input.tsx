import type React from "react"
import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Input component props
 */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label for the input */
  label?: string
  /** Helper text displayed below the input */
  helperText?: string
  /** Error message */
  error?: string
  /** Left icon/addon */
  leftAddon?: React.ReactNode
  /** Right icon/addon */
  rightAddon?: React.ReactNode
}

/**
 * A flexible input component with labels, addons, and error states
 *
 * @example
 * ```tsx
 * <Input label="Email" placeholder="Enter your email" error="Invalid email" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, error, leftAddon, rightAddon, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftAddon && (
            <div className="pointer-events-none absolute left-3 flex items-center text-zinc-500">{leftAddon}</div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400",
              error
                ? "border-red-500 focus-visible:ring-red-500"
                : "border-zinc-300 focus-visible:ring-zinc-500 dark:border-zinc-700",
              leftAddon && "pl-10",
              rightAddon && "pr-10",
              className,
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightAddon && (
            <div className="pointer-events-none absolute right-3 flex items-center text-zinc-500">{rightAddon}</div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-600">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-400">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = "Input"
