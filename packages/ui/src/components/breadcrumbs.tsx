import type React from "react"
import { forwardRef, type HTMLAttributes, Children, isValidElement, cloneElement } from "react"
import { cn } from "../utils/cn"

/**
 * Breadcrumbs component props
 */
export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** Separator between items */
  separator?: React.ReactNode
}

/**
 * A breadcrumbs component for navigation hierarchy
 *
 * @example
 * ```tsx
 * <Breadcrumbs>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem current>Details</BreadcrumbItem>
 * </Breadcrumbs>
 * ```
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ className, separator, children, ...props }, ref) => {
    const defaultSeparator = (
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
        className="text-zinc-400"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    )

    const items = Children.toArray(children).filter(isValidElement)

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn("flex items-center", className)} {...props}>
        <ol className="flex items-center gap-2">
          {items.map((child, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">{separator || defaultSeparator}</span>}
              {cloneElement(child as React.ReactElement<{ isLast?: boolean }>, { isLast: index === items.length - 1 })}
            </li>
          ))}
        </ol>
      </nav>
    )
  },
)

Breadcrumbs.displayName = "Breadcrumbs"

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLSpanElement> {
  /** URL to navigate to */
  href?: string
  /** Whether this is the current page */
  current?: boolean
  /** Internal prop - set by parent */
  isLast?: boolean
}

export const BreadcrumbItem = forwardRef<HTMLSpanElement, BreadcrumbItemProps>(
  ({ className, href, current, isLast, children, ...props }, ref) => {
    const isCurrent = current || isLast

    if (href && !isCurrent) {
      return (
        <a
          href={href}
          className={cn(
            "text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            className,
          )}
        >
          {children}
        </a>
      )
    }

    return (
      <span
        ref={ref}
        aria-current={isCurrent ? "page" : undefined}
        className={cn(
          "text-sm",
          isCurrent ? "font-medium text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400",
          className,
        )}
        {...props}
      >
        {children}
      </span>
    )
  },
)

BreadcrumbItem.displayName = "BreadcrumbItem"
