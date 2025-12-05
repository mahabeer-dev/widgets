"use client"

import { forwardRef, createContext, useContext, useState, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

interface AccordionContextValue {
  value: string[]
  toggle: (value: string) => void
  multiple: boolean
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined)

/**
 * Accordion component props
 */
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Allow multiple items to be open */
  multiple?: boolean
  /** Default open items */
  defaultValue?: string[]
}

/**
 * An accordion component for expandable content sections
 *
 * @example
 * ```tsx
 * <Accordion>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content for section 1</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, multiple = false, defaultValue = [], children, ...props }, ref) => {
    const [value, setValue] = useState<string[]>(defaultValue)

    const toggle = (itemValue: string) => {
      if (multiple) {
        setValue((prev) => (prev.includes(itemValue) ? prev.filter((v) => v !== itemValue) : [...prev, itemValue]))
      } else {
        setValue((prev) => (prev.includes(itemValue) ? [] : [itemValue]))
      }
    }

    return (
      <AccordionContext.Provider value={{ value, toggle, multiple }}>
        <div ref={ref} className={cn("divide-y divide-zinc-200 dark:divide-zinc-800", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)

Accordion.displayName = "Accordion"

interface AccordionItemContextValue {
  value: string
  isOpen: boolean
}

const AccordionItemContext = createContext<AccordionItemContextValue | undefined>(undefined)

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const context = useContext(AccordionContext)
    if (!context) throw new Error("AccordionItem must be used within an Accordion")

    const isOpen = context.value.includes(value)

    return (
      <AccordionItemContext.Provider value={{ value, isOpen }}>
        <div ref={ref} className={cn("py-2", className)} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  },
)

AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...props }, ref) => {
    const accordionContext = useContext(AccordionContext)
    const itemContext = useContext(AccordionItemContext)
    if (!accordionContext || !itemContext) {
      throw new Error("AccordionTrigger must be used within an AccordionItem")
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={() => accordionContext.toggle(itemContext.value)}
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-zinc-600 dark:hover:text-zinc-300",
          className,
        )}
        aria-expanded={itemContext.isOpen}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("transition-transform duration-200", itemContext.isOpen && "rotate-180")}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  },
)

AccordionTrigger.displayName = "AccordionTrigger"

export const AccordionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const itemContext = useContext(AccordionItemContext)
    if (!itemContext) throw new Error("AccordionContent must be used within an AccordionItem")

    if (!itemContext.isOpen) return null

    return (
      <div ref={ref} className={cn("pb-4 pt-0 text-sm text-zinc-600 dark:text-zinc-400", className)} {...props}>
        {children}
      </div>
    )
  },
)

AccordionContent.displayName = "AccordionContent"
