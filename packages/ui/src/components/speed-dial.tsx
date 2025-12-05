"use client"

import type React from "react"

import { forwardRef, type HTMLAttributes, useState } from "react"
import { cn } from "../utils/cn"

/**
 * SpeedDial action item
 */
export interface SpeedDialAction {
  icon: React.ReactNode
  label: string
  onClick: () => void
}

/**
 * SpeedDial component props
 */
export interface SpeedDialProps extends HTMLAttributes<HTMLDivElement> {
  /** Main button icon */
  icon?: React.ReactNode
  /** Actions to display */
  actions: SpeedDialAction[]
  /** Direction to expand */
  direction?: "up" | "down" | "left" | "right"
}

const directionStyles = {
  up: "flex-col-reverse bottom-0",
  down: "flex-col top-0",
  left: "flex-row-reverse right-0",
  right: "flex-row left-0",
}

const actionDirectionStyles = {
  up: "-translate-y-2",
  down: "translate-y-2",
  left: "-translate-x-2",
  right: "translate-x-2",
}

/**
 * A speed dial component for quick actions
 *
 * @example
 * ```tsx
 * <SpeedDial
 *   actions={[
 *     { icon: <PlusIcon />, label: "Add", onClick: () => {} },
 *     { icon: <EditIcon />, label: "Edit", onClick: () => {} },
 *   ]}
 * />
 * ```
 */
export const SpeedDial = forwardRef<HTMLDivElement, SpeedDialProps>(
  ({ className, icon, actions, direction = "up", ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const defaultIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("transition-transform duration-200", isOpen && "rotate-45")}
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    )

    return (
      <div ref={ref} className={cn("relative inline-flex", directionStyles[direction], className)} {...props}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          aria-expanded={isOpen}
          aria-label="Toggle actions"
        >
          {icon || defaultIcon}
        </button>

        <div className={cn("flex gap-2", directionStyles[direction])}>
          {actions.map((action, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-2 transition-all duration-200",
                isOpen ? "opacity-100" : "pointer-events-none opacity-0",
                isOpen ? actionDirectionStyles[direction] : "",
              )}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
            >
              <button
                onClick={() => {
                  action.onClick()
                  setIsOpen(false)
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 shadow-md transition-colors hover:bg-zinc-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
                aria-label={action.label}
              >
                {action.icon}
              </button>
              <span className="whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white shadow-md dark:bg-white dark:text-zinc-900">
                {action.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  },
)

SpeedDial.displayName = "SpeedDial"
