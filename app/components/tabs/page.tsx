"use client"

import React from "react"

import { ComponentPageLayout } from "@/components/component-page-layout"
import { CodePreview } from "@/components/code-preview"
import { PropsTable } from "@/components/props-table"

const tabsCode = `function Demo() {
  const [activeTab, setActiveTab] = React.useState('account')
  
  return (
    <div className="w-full max-w-md">
      <div className="inline-flex h-10 items-center justify-center rounded-lg bg-zinc-100 p-1">
        <button
          onClick={() => setActiveTab('account')}
          className={\`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all \${
            activeTab === 'account' 
              ? 'bg-white text-zinc-900 shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-900'
          }\`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={\`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all \${
            activeTab === 'password' 
              ? 'bg-white text-zinc-900 shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-900'
          }\`}
        >
          Password
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={\`inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium transition-all \${
            activeTab === 'settings' 
              ? 'bg-white text-zinc-900 shadow-sm' 
              : 'text-zinc-500 hover:text-zinc-900'
          }\`}
        >
          Settings
        </button>
      </div>
      
      <div className="mt-4 rounded-lg border border-zinc-200 p-4">
        {activeTab === 'account' && (
          <div>
            <h3 className="font-medium">Account Settings</h3>
            <p className="mt-2 text-sm text-zinc-500">Manage your account settings and preferences.</p>
          </div>
        )}
        {activeTab === 'password' && (
          <div>
            <h3 className="font-medium">Password Settings</h3>
            <p className="mt-2 text-sm text-zinc-500">Update your password and security options.</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h3 className="font-medium">General Settings</h3>
            <p className="mt-2 text-sm text-zinc-500">Configure general application settings.</p>
          </div>
        )}
      </div>
    </div>
  )
}`

const tabsProps = [
  {
    name: "defaultValue",
    type: "string",
    required: true,
    description: "Default active tab value",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    description: "Callback when tab changes",
  },
]

export default function TabsPage() {
  return (
    <ComponentPageLayout name="Tabs" description="A tabbed interface component for organizing content into sections.">
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Examples</h2>

        <div className="mt-8">
          <h3 className="mb-4 text-lg font-medium">Interactive Tabs</h3>
          <CodePreview code={tabsCode} scope={{ React }} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Props</h2>
        <PropsTable props={tabsProps} />
      </section>
    </ComponentPageLayout>
  )
}
