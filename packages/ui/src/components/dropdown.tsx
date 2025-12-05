"use client"

import type React from "react"
import {
  createContext,
  useContext,
  useState,
  useRef,
  forwardRef,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from "react"
import { cn } from "../utils/cn"
import { useClickOutside } from "../hooks/use-click-outside"
import { useKeyboard } from "../hooks/use-keyboard"

interface DropdownContextValue {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

const DropdownContext = createContext<DropdownContextValue | undefined>(undefined)

function useDropdownContext() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error("Dropdown components must be used within a Dropdown provider")
  }
  return context
}

/**
 * Dropdown component props
 */
export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** Callback when dropdown open state changes */
  onOpenChange?: (open: boolean) => void
}

/**
 * A dropdown menu component
 *
 * @example
 * ```tsx
 * <Dropdown>
 *   <DropdownTrigger>Open Menu</DropdownTrigger>
 *   <DropdownContent>
 *     <DropdownItem>Item 1</DropdownItem>
 *     <DropdownItem>Item 2</DropdownItem>
 *   </DropdownContent>
 * </Dropdown>
 * ```
 */
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ className, onOpenChange, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)

    const handleOpenChange = (open: boolean) => {
      setIsOpen(open)
      onOpenChange?.(open)
    }

    useClickOutside(contentRef, () => handleOpenChange(false))
    useKeyboard("Escape", () => handleOpenChange(false))

    return (
      <DropdownContext.Provider value={{ isOpen, setIsOpen: handleOpenChange, triggerRef }}>
        <div ref={ref} className={cn("relative inline-block", className)} {...props}>
          {children}
        </div>
      </DropdownContext.Provider>
    )
  },
)

Dropdown.displayName = "Dropdown"

export const DropdownTrigger = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const { isOpen, setIsOpen, triggerRef } = useDropdownContext()

    return (
      <button
        ref={(node) => {
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
          // @ts-expect-error - we know this is safe
          triggerRef.current = node
        }}
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800",
          className,
        )}
        {...props}
      >
        {children}
        <svg
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  },
)

DropdownTrigger.displayName = "DropdownTrigger"

export const DropdownContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isOpen } = useDropdownContext()

    if (!isOpen) return null

    return (
      <div
        ref={ref}
        role="menu"
        className={cn(
          "absolute left-0 top-full z-50 mt-1 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-md dark:border-zinc-800 dark:bg-zinc-950",
          className,
        )}
        {...props}
      />
    )
  },
)

DropdownContent.displayName = "DropdownContent"

interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether the item is destructive/dangerous */
  destructive?: boolean
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  ({ className, destructive, ...props }, ref) => {
    const { setIsOpen } = useDropdownContext()

    return (
      <button
        ref={ref}
        role="menuitem"
        onClick={(e) => {
          props.onClick?.(e)
          setIsOpen(false)
        }}
        className={cn(
          "flex w-full cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 dark:focus:bg-zinc-800",
          destructive && "text-red-600 focus:bg-red-50 dark:focus:bg-red-950",
          className,
        )}
        {...props}
      />
    )
  },
)

DropdownItem.displayName = "DropdownItem"
