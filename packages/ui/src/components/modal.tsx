"use client"

import { forwardRef, type HTMLAttributes, useRef, useEffect } from "react"
import { cn } from "../utils/cn"
import { useClickOutside } from "../hooks/use-click-outside"
import { useKeyboard } from "../hooks/use-keyboard"

/**
 * Modal component props
 */
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is open */
  open: boolean
  /** Callback when the modal should close */
  onClose: () => void
  /** Modal title */
  title?: string
  /** Modal description */
  description?: string
  /** Size of the modal */
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeStyles = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
}

/**
 * A modal dialog component with backdrop and animations
 *
 * @example
 * ```tsx
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">
 *   <p>Are you sure you want to proceed?</p>
 * </Modal>
 * ```
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ className, open, onClose, title, description, size = "md", children, ...props }, ref) => {
    const contentRef = useRef<HTMLDivElement>(null)

    useClickOutside(contentRef, onClose)
    useKeyboard("Escape", onClose)

    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
      return () => {
        document.body.style.overflow = ""
      }
    }, [open])

    if (!open) return null

    return (
      <div ref={ref} className="fixed inset-0 z-50 flex items-center justify-center" {...props}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />
        <div
          ref={contentRef}
          className={cn(
            "relative z-50 w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-800 dark:bg-zinc-950",
            sizeStyles[size],
            className,
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
          aria-describedby={description ? "modal-description" : undefined}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:ring-offset-zinc-950"
            aria-label="Close modal"
          >
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
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {title && (
            <h2 id="modal-title" className="text-lg font-semibold">
              {title}
            </h2>
          )}
          {description && (
            <p id="modal-description" className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          )}
          <div className={cn(title || description ? "mt-4" : "")}>{children}</div>
        </div>
      </div>
    )
  },
)

Modal.displayName = "Modal"
