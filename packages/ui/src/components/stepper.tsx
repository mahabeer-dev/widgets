import { forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

/**
 * Step item
 */
export interface Step {
  label: string
  description?: string
}

/**
 * Stepper component props
 */
export interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of steps */
  steps: Step[]
  /** Current active step (0-indexed) */
  currentStep: number
  /** Orientation of the stepper */
  orientation?: "horizontal" | "vertical"
}

/**
 * A stepper component for multi-step processes
 *
 * @example
 * ```tsx
 * <Stepper
 *   steps={[
 *     { label: "Step 1", description: "Details" },
 *     { label: "Step 2", description: "Review" },
 *     { label: "Step 3", description: "Complete" },
 *   ]}
 *   currentStep={1}
 * />
 * ```
 */
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ className, steps, currentStep, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex", orientation === "horizontal" ? "flex-row items-center" : "flex-col", className)}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < currentStep
          const isActive = index === currentStep
          const isLast = index === steps.length - 1

          return (
            <div
              key={index}
              className={cn("flex", orientation === "horizontal" ? "flex-1 items-center" : "items-start")}
            >
              <div className={cn("flex", orientation === "horizontal" ? "flex-col items-center" : "flex-row gap-3")}>
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 font-medium transition-colors",
                    isCompleted
                      ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                      : isActive
                        ? "border-zinc-900 text-zinc-900 dark:border-white dark:text-white"
                        : "border-zinc-300 text-zinc-400 dark:border-zinc-700",
                  )}
                >
                  {isCompleted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <div className={cn(orientation === "horizontal" ? "mt-2 text-center" : "")}>
                  <div
                    className={cn(
                      "text-sm font-medium",
                      isCompleted || isActive ? "text-zinc-900 dark:text-white" : "text-zinc-400",
                    )}
                  >
                    {step.label}
                  </div>
                  {step.description && (
                    <div className="text-xs text-zinc-500 dark:text-zinc-400">{step.description}</div>
                  )}
                </div>
              </div>
              {!isLast && (
                <div
                  className={cn(
                    orientation === "horizontal" ? "mx-4 h-0.5 flex-1" : "ml-5 mt-2 h-8 w-0.5",
                    isCompleted ? "bg-zinc-900 dark:bg-white" : "bg-zinc-200 dark:bg-zinc-800",
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
    )
  },
)

Stepper.displayName = "Stepper"
