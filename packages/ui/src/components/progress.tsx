import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Progress component props
 */
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value?: number
  /** Maximum value */
  max?: number
  /** Size of the progress bar */
  size?: "sm" | "md" | "lg"
  /** Color variant */
  variant?: "default" | "success" | "warning" | "error"
  /** Show percentage label */
  showLabel?: boolean
}

const sizeStyles = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
}

const variantStyles = {
  default: "bg-zinc-900 dark:bg-white",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
}

/**
 * A progress bar component
 *
 * @example
 * ```tsx
 * <Progress value={60} />
 * <Progress value={75} variant="success" showLabel />
 * ```
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, size = "md", variant = "default", showLabel = false, ...props }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {showLabel && (
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-zinc-600 dark:text-zinc-400">Progress</span>
            <span className="font-medium">{Math.round(percentage)}%</span>
          </div>
        )}
        <div
          className={cn("w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800", sizeStyles[size])}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        >
          <div
            className={cn("h-full rounded-full transition-all duration-300", variantStyles[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  },
)

Progress.displayName = "Progress"
