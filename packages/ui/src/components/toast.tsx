"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, forwardRef, type HTMLAttributes } from "react"
import { cn } from "../utils/cn"

type ToastType = "default" | "success" | "error" | "warning"

interface Toast {
  id: string
  message: string
  type: ToastType
  duration?: number
}

interface ToastContextValue {
  toasts: Toast[]
  addToast: (message: string, type?: ToastType, duration?: number) => void
  removeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

/**
 * Hook to use toast notifications
 *
 * @example
 * ```tsx
 * const { addToast } = useToast()
 * addToast("Operation successful!", "success")
 * ```
 */
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

/**
 * Toast provider component
 */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((message: string, type: ToastType = "default", duration = 5000) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = { id, message, type, duration }

    setToasts((prev) => [...prev, newToast])

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

/**
 * Toast component props
 */
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** Toast data */
  toast: Toast
  /** Callback when toast is closed */
  onClose: () => void
}

const typeStyles: Record<ToastType, string> = {
  default: "bg-white border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800",
  success: "bg-green-50 border-green-200 text-green-800 dark:bg-green-950 dark:border-green-800 dark:text-green-200",
  error: "bg-red-50 border-red-200 text-red-800 dark:bg-red-950 dark:border-red-800 dark:text-red-200",
  warning:
    "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-200",
}

/**
 * Individual toast notification component
 */
export const Toast = forwardRef<HTMLDivElement, ToastProps>(({ className, toast, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-center justify-between gap-4 rounded-lg border p-4 shadow-lg transition-all",
        typeStyles[toast.type],
        className,
      )}
      {...props}
    >
      <p className="text-sm font-medium">{toast.message}</p>
      <button
        onClick={onClose}
        className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
        aria-label="Close notification"
      >
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
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
})

Toast.displayName = "Toast"
