/**
 * Utility function to conditionally join class names
 * @param classes - Class names to join
 * @returns Joined class names string
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
