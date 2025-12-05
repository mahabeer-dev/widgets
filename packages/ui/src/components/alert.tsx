import type React from "react"
import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Alert component variants
 */
export type AlertVariant = "default" | "success" | "warning" | "error" | "info"

/**
 * Alert component props
 */
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant of the alert */
  variant?: AlertVariant
  /** Alert title */
  title?: string
  /** Icon to display */
  icon?: React.ReactNode
}

const variantStyles: Record<AlertVariant, string> = {
  default: "bg-zinc-100 border-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-100",
  success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-900 dark:text-green-200",
  warning:
    "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950 dark:border-yellow-900 dark:text-yellow-200",
  error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-900 dark:text-red-200",
  info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-950 dark:border-blue-900 dark:text-blue-200",
}

const iconColors: Record<AlertVariant, string> = {
  default: "text-zinc-600 dark:text-zinc-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-yellow-600 dark:text-yellow-400",
  error: "text-red-600 dark:text-red-400",
  info: "text-blue-600 dark:text-blue-400",
}

/**
 * An alert component for displaying important messages
 *
 * @example
 * ```tsx
 * <Alert variant="success" title="Success!">
 *   Your changes have been saved.
 * </Alert>
 * ```
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn("relative flex gap-3 rounded-lg border p-4", variantStyles[variant], className)}
        {...props}
      >
        {icon && <div className={cn("flex-shrink-0", iconColors[variant])}>{icon}</div>}
        <div className="flex-1">
          {title && <h5 className="mb-1 font-medium">{title}</h5>}
          <div className="text-sm opacity-90">{children}</div>
        </div>
      </div>
    )
  },
)

Alert.displayName = "Alert"
