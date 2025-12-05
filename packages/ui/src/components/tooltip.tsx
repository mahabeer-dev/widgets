"use client"

import type React from "react"

import { forwardRef, type HTMLAttributes, useState, useRef, useEffect } from "react"
import { cn } from "../utils/cn"

/**
 * Tooltip component props
 */
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Tooltip content */
  content: React.ReactNode
  /** Position of the tooltip */
  position?: "top" | "bottom" | "left" | "right"
  /** Delay before showing tooltip (ms) */
  delay?: number
}

const positionStyles = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
}

const arrowStyles = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-zinc-900 border-x-transparent border-b-transparent dark:border-t-white",
  bottom:
    "bottom-full left-1/2 -translate-x-1/2 border-b-zinc-900 border-x-transparent border-t-transparent dark:border-b-white",
  left: "left-full top-1/2 -translate-y-1/2 border-l-zinc-900 border-y-transparent border-r-transparent dark:border-l-white",
  right:
    "right-full top-1/2 -translate-y-1/2 border-r-zinc-900 border-y-transparent border-l-transparent dark:border-r-white",
}

/**
 * A tooltip component for displaying contextual information
 *
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, position = "top", delay = 200, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

    const showTooltip = () => {
      timeoutRef.current = setTimeout(() => setIsVisible(true), delay)
    }

    const hideTooltip = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setIsVisible(false)
    }

    useEffect(() => {
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      }
    }, [])

    return (
      <div ref={ref} className={cn("relative inline-block", className)} {...props}>
        <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip} onFocus={showTooltip} onBlur={hideTooltip}>
          {children}
        </div>
        {isVisible && (
          <div
            role="tooltip"
            className={cn(
              "absolute z-50 whitespace-nowrap rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-white shadow-md dark:bg-white dark:text-zinc-900",
              positionStyles[position],
            )}
          >
            {content}
            <span className={cn("absolute border-4", arrowStyles[position])} />
          </div>
        )}
      </div>
    )
  },
)

Tooltip.displayName = "Tooltip"
