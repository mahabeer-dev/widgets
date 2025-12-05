"use client"

import { createContext, useContext, useState, forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider")
  }
  return context
}

/**
 * Tabs component props
 */
export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** Default active tab value */
  defaultValue: string
  /** Callback when tab changes */
  onValueChange?: (value: string) => void
}

/**
 * A tabbed interface component
 *
 * @example
 * ```tsx
 * <Tabs defaultValue="tab1">
 *   <TabsList>
 *     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
 *     <TabsTrigger value="tab2">Tab 2</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="tab1">Content 1</TabsContent>
 *   <TabsContent value="tab2">Content 2</TabsContent>
 * </Tabs>
 * ```
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, onValueChange, children, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultValue)

    const handleTabChange = (value: string) => {
      setActiveTab(value)
      onValueChange?.(value)
    }

    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)

Tabs.displayName = "Tabs"

export const TabsList = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-lg bg-zinc-100 p-1 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
        className,
      )}
      {...props}
    />
  )
})

TabsList.displayName = "TabsList"

interface TabsTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, disabled, ...props }, ref) => {
    const { activeTab, setActiveTab } = useTabsContext()
    const isActive = activeTab === value

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${value}`}
        disabled={disabled}
        onClick={() => setActiveTab(value)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950",
          isActive
            ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-950 dark:text-zinc-50"
            : "hover:bg-zinc-50 dark:hover:bg-zinc-800",
          className,
        )}
        {...props}
      />
    )
  },
)

TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  value: string
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({ className, value, ...props }, ref) => {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === value

  if (!isActive) return null

  return (
    <div
      ref={ref}
      role="tabpanel"
      id={`tabpanel-${value}`}
      tabIndex={0}
      className={cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 dark:ring-offset-zinc-950",
        className,
      )}
      {...props}
    />
  )
})

TabsContent.displayName = "TabsContent"
