"use client"

import { useEffect, useCallback } from "react"

/**
 * Hook to handle keyboard events
 * @param key - Key to listen for (e.g., 'Escape', 'Enter')
 * @param handler - Callback function when key is pressed
 */
export function useKeyboard(key: string, handler: () => void): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === key) {
        handler()
      }
    },
    [key, handler],
  )

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])
}
