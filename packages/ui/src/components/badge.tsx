import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Badge component variants
 */
export type BadgeVariant = "default" | "secondary" | "success" | "warning" | "error" | "outline"

/**
 * Badge component props
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant of the badge */
  variant?: BadgeVariant
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
  secondary: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  outline: "border border-zinc-300 bg-transparent dark:border-zinc-700",
}

/**
 * A badge component for displaying status or labels
 *
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="error">Error</Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"
