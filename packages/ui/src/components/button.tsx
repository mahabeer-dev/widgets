import type React from "react"
import { forwardRef, type ButtonHTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Button component variants
 */
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive"

/**
 * Button component sizes
 */
export type ButtonSize = "sm" | "md" | "lg"

/**
 * Button component props
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant of the button */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Whether the button is in a loading state */
  loading?: boolean
  /** Icon to display before the button text */
  leftIcon?: React.ReactNode
  /** Icon to display after the button text */
  rightIcon?: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100",
  secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
  outline: "border border-zinc-300 bg-transparent hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800",
  ghost: "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800",
  destructive: "bg-red-600 text-white hover:bg-red-700",
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
}

/**
 * A versatile button component with multiple variants and sizes
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" loading>Loading...</Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", loading = false, disabled, leftIcon, rightIcon, children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {rightIcon && !loading && rightIcon}
      </button>
    )
  },
)

Button.displayName = "Button"
