"use client"

import { forwardRef, type ImgHTMLAttributes, useState } from "react"
import { cn } from "../utils/cn"

/**
 * Avatar component sizes
 */
export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl"

/**
 * Avatar component props
 */
export interface AvatarProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "size"> {
  /** Size of the avatar */
  size?: AvatarSize
  /** Fallback initials to display when image fails to load */
  fallback?: string
  /** Status indicator */
  status?: "online" | "offline" | "away" | "busy"
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-16 w-16 text-xl",
}

const statusStyles: Record<string, string> = {
  online: "bg-green-500",
  offline: "bg-zinc-400",
  away: "bg-yellow-500",
  busy: "bg-red-500",
}

const statusSizeStyles: Record<AvatarSize, string> = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
  xl: "h-4 w-4",
}

/**
 * An avatar component for displaying user images with fallback support
 *
 * @example
 * ```tsx
 * <Avatar src="/user.jpg" alt="John Doe" />
 * <Avatar fallback="JD" status="online" />
 * ```
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = "md", fallback, status, ...props }, ref) => {
    const [imageError, setImageError] = useState(false)

    return (
      <div ref={ref} className={cn("relative inline-block", className)}>
        <div
          className={cn(
            "flex items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
            sizeStyles[size],
          )}
        >
          {src && !imageError ? (
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              className="h-full w-full object-cover"
              onError={() => setImageError(true)}
              {...props}
            />
          ) : (
            <span className="font-medium text-zinc-600 dark:text-zinc-300">
              {fallback || alt?.charAt(0)?.toUpperCase() || "?"}
            </span>
          )}
        </div>
        {status && (
          <span
            className={cn(
              "absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-zinc-950",
              statusStyles[status],
              statusSizeStyles[size],
            )}
          />
        )}
      </div>
    )
  },
)

Avatar.displayName = "Avatar"
