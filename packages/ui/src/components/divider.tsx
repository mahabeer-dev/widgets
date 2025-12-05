import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Divider component props
 */
export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation of the divider */
  orientation?: "horizontal" | "vertical"
  /** Label to display in the divider */
  label?: string
}

/**
 * A divider component for separating content
 *
 * @example
 * ```tsx
 * <Divider />
 * <Divider label="OR" />
 * <Divider orientation="vertical" />
 * ```
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation="vertical"
          className={cn("h-full w-px bg-zinc-200 dark:bg-zinc-800", className)}
          {...props}
        />
      )
    }

    if (label) {
      return (
        <div ref={ref} role="separator" className={cn("flex items-center gap-4", className)} {...props}>
          <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
          <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
          <div className="flex-1 border-t border-zinc-200 dark:border-zinc-800" />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={cn("h-px w-full bg-zinc-200 dark:bg-zinc-800", className)}
        {...props}
      />
    )
  },
)

Divider.displayName = "Divider"
