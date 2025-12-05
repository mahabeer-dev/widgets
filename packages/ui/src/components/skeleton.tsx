import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Skeleton component props
 */
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton */
  width?: string | number
  /** Height of the skeleton */
  height?: string | number
  /** Shape of the skeleton */
  variant?: "text" | "circular" | "rectangular" | "rounded"
}

/**
 * A skeleton loading component
 *
 * @example
 * ```tsx
 * <Skeleton width={200} height={20} />
 * <Skeleton variant="circular" width={40} height={40} />
 * ```
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, variant = "text", style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-zinc-200 dark:bg-zinc-800",
          variant === "text" && "rounded h-4",
          variant === "circular" && "rounded-full",
          variant === "rectangular" && "",
          variant === "rounded" && "rounded-md",
          className,
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...style,
        }}
        {...props}
      />
    )
  },
)

Skeleton.displayName = "Skeleton"
