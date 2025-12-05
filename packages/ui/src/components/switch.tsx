"use client"

import { forwardRef, type InputHTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Switch component props
 */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** Label for the switch */
  label?: string
  /** Description text */
  description?: string
  /** Size of the switch */
  size?: "sm" | "md" | "lg"
}

const sizeStyles = {
  sm: { track: "h-5 w-9", thumb: "h-4 w-4", translate: "translate-x-4" },
  md: { track: "h-6 w-11", thumb: "h-5 w-5", translate: "translate-x-5" },
  lg: { track: "h-7 w-14", thumb: "h-6 w-6", translate: "translate-x-7" },
}

/**
 * A toggle switch component
 *
 * @example
 * ```tsx
 * <Switch label="Enable notifications" />
 * <Switch label="Dark mode" description="Toggle dark theme" />
 * ```
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, size = "md", id, ...props }, ref) => {
    const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`
    const styles = sizeStyles[size]

    return (
      <div className={cn("flex items-start gap-3", className)}>
        <label htmlFor={inputId} className="relative inline-flex cursor-pointer items-center">
          <input ref={ref} type="checkbox" id={inputId} className="peer sr-only" {...props} />
          <div
            className={cn(
              "rounded-full bg-zinc-200 transition-colors peer-checked:bg-zinc-900 peer-focus:ring-2 peer-focus:ring-zinc-500 peer-focus:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 dark:bg-zinc-800 dark:peer-checked:bg-white",
              styles.track,
            )}
          />
          <div
            className={cn(
              "absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-full dark:bg-zinc-900",
              styles.thumb,
              `peer-checked:${styles.translate}`,
            )}
            style={{
              transform: "translateY(-50%)",
            }}
          />
        </label>
        {(label || description) && (
          <div className="flex flex-col">
            {label && (
              <label htmlFor={inputId} className="cursor-pointer font-medium">
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

Switch.displayName = "Switch"
