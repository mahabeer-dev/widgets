"use client"

import { useState } from "react"
import { LiveProvider, LiveError, LivePreview } from "react-live"
import { Highlight, themes } from "prism-react-renderer"
import { Check, Copy, Code, Eye } from "lucide-react"

interface CodePreviewProps {
  code: string
  scope?: Record<string, unknown>
  language?: string
  showLineNumbers?: boolean
}

export function CodePreview({ code, scope = {}, language = "tsx", showLineNumbers = true }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4">
        <div className="flex">
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === "preview"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === "code"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code className="h-4 w-4" />
            Code
          </button>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <LiveProvider code={code} scope={scope} noInline={false}>
        {activeTab === "preview" && (
          <div className="flex min-h-[200px] items-center justify-center p-8">
            <LivePreview />
            <LiveError className="rounded-md bg-red-50 p-4 text-sm text-red-600 dark:bg-red-950 dark:text-red-400" />
          </div>
        )}

        {activeTab === "code" && (
          <div className="relative">
            <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} overflow-x-auto p-4 text-sm`}
                  style={{ ...style, margin: 0, background: "transparent" }}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                      {showLineNumbers && (
                        <span className="mr-4 inline-block w-8 select-none text-right text-muted-foreground/50">
                          {i + 1}
                        </span>
                      )}
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </LiveProvider>
    </div>
  )
}
