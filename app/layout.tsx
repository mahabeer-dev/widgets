import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "M-widgets - Beautiful React Component Library",
  description:
    "A collection of beautifully crafted, accessible React components. Browse, preview, copy the code, or install via npm.",
  generator: "v0.app",
  keywords: [
    "react",
    "components",
    "ui",
    "widgets",
    "typescript",
    "tailwindcss",
    "next.js",
    "seo",
  ],
  authors: [{ name: "M-widgets" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "M-widgets - Beautiful React Component Library",
    description:
      "Beautiful, accessible React components and sections. Browse, preview, and copy production-ready widgets.",
    url: siteUrl,
    siteName: "M-widgets",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "M-widgets",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M-widgets - Beautiful React Component Library",
    description:
      "Beautiful, accessible React components and sections. Browse, preview, and copy production-ready widgets.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
