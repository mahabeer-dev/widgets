"use client"

import React from "react"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const toastCode = `function Demo() {
  const [toasts, setToasts] = React.useState([])
  
  const addToast = (type) => {
    const id = Math.random().toString(36).substring(7)
    const messages = {
      default: 'This is a notification',
      success: 'Operation completed successfully!',
      error: 'Something went wrong.',
      warning: 'Please review your changes.',
    }
    setToasts(prev => [...prev, { id, type, message: messages[type] }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }
  
  const typeStyles = {
    default: 'bg-white border-zinc-200',
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  }
  
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => addToast('default')} className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">Default</button>
        <button onClick={() => addToast('success')} className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">Success</button>
        <button onClick={() => addToast('error')} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">Error</button>
        <button onClick={() => addToast('warning')} className="rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600">Warning</button>
      </div>
      
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(toast => (
          <div key={toast.id} className={\`flex items-center justify-between gap-4 rounded-lg border p-4 shadow-lg \${typeStyles[toast.type]}\`}>
            <p className="text-sm font-medium">{toast.message}</p>
            <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))} className="opacity-70 hover:opacity-100">✕</button>
          </div>
        ))}
      </div>
    </div>
  )
}`

const toastProps = [
  {
    name: "type",
    type: '"default" | "success" | "error" | "warning"',
    default: '"default"',
    description: "Visual style variant of the toast",
  },
  {
    name: "message",
    type: "string",
    required: true,
    description: "Toast message content",
  },
  {
    name: "duration",
    type: "number",
    default: "5000",
    description: "Duration in milliseconds before auto-dismiss",
  },
]

export default function ToastPage() {
  return (
    <ComponentPageLayout
      name="Toast"
      description="Toast notifications with success, error, warning, and default variants."
    >
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Interactive Toasts</h3>
          <CodePreview code={toastCode} scope={{ React }} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={toastProps} />
      </section>
    </ComponentPageLayout>
  )
}
