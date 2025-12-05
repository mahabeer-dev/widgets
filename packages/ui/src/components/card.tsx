import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Card component props
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the card has a hover effect */
  hoverable?: boolean
}

/**
 * A flexible card container component
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description</CardDescription>
 *   </CardHeader>
 *   <CardContent>Content here</CardContent>
 *   <CardFooter>Footer actions</CardFooter>
 * </Card>
 * ```
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, hoverable = false, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
        hoverable && "transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    />
  )
})

Card.displayName = "Card"

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
})

CardHeader.displayName = "CardHeader"

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return <h3 ref={ref} className={cn("text-xl font-semibold leading-none tracking-tight", className)} {...props} />
  },
)

CardTitle.displayName = "CardTitle"

export const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={cn("text-sm text-zinc-500 dark:text-zinc-400", className)} {...props} />
  },
)

CardDescription.displayName = "CardDescription"

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  },
)

CardContent.displayName = "CardContent"

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
})

CardFooter.displayName = "CardFooter"
