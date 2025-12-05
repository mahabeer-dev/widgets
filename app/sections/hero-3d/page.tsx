"use client"

import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"
import Logo3D from "@/components/logo-3d"
import { useState } from "react"
import { Hero3DSection } from "@/components/sections/hero-3d"

const code = `"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Environment, MeshDistortMaterial, GradientTexture } from "@react-three/drei"
import { useRef, Suspense } from "react"
import type * as THREE from "three"

function FloatingSphere({ position, color, speed = 1, distort = 0.4 }: { 
  position: [number, number, number]
  color: string
  speed?: number
  distort?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={color} distort={distort} speed={2} roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  )
}

function FloatingTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.8, 0.3, 32, 64]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.9} />
      </mesh>
    </Float>
  )
}

function FloatingBox({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial roughness={0.1} metalness={1}>
          <GradientTexture stops={[0, 0.5, 1]} colors={["#6366f1", "#8b5cf6", "#d946ef"]} />
        </meshStandardMaterial>
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
      <pointLight position={[10, -10, 10]} color="#d946ef" intensity={0.5} />
      
      <FloatingSphere position={[-3, 1, -2]} color="#6366f1" speed={1.2} distort={0.5} />
      <FloatingSphere position={[3.5, -0.5, -3]} color="#8b5cf6" speed={0.8} distort={0.3} />
      <FloatingSphere position={[0, 2, -4]} color="#d946ef" speed={1} distort={0.4} />
      <FloatingTorus position={[-2, -1.5, -2]} color="#06b6d4" />
      <FloatingTorus position={[2.5, 1.5, -3]} color="#f43f5e" />
      <FloatingBox position={[4, -1, -2]} />
      <FloatingBox position={[-3.5, 2, -4]} />
      
      <Environment preset="city" />
    </>
  )
}

export function Hero3DSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Now in Public Beta
        </div>

        <h1 className="mt-8 max-w-4xl text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
          Build the future with{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            stunning 3D
          </span>{" "}
          experiences
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg text-zinc-400 sm:text-xl">
          Create immersive web experiences that captivate your users. Our platform makes 3D development accessible,
          fast, and beautiful.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-transform hover:scale-105">
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">
              Get Started Free
            </span>
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
            View Documentation
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 sm:gap-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-sm text-zinc-500">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">1M+</div>
            <div className="text-sm text-zinc-500">Projects Created</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-sm text-zinc-500">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}`

export default function Hero3DPage() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo3D className="h-6 w-6" />
            <span>my-widgets</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/components"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Components
            </Link>
            <Link href="/sections" className="text-sm font-medium text-foreground transition-colors">
              Sections
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        <Link
          href="/sections"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sections
        </Link>

        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">3D Hero Section</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A stunning hero section featuring interactive 3D floating shapes with distortion effects, built with React
              Three Fiber.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Three.js</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                React Three Fiber
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Drei</span>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Code
              </>
            )}
          </button>
        </div>

        {/* Live Preview */}
        <div className="mb-8 overflow-hidden rounded-xl border border-border">
          <div className="border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium">Live Preview</div>
          <div className="h-[600px]">
            <Hero3DSection />
          </div>
        </div>

        {/* Dependencies */}
        <div className="mb-8 rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Required Dependencies</h2>
          <div className="rounded-lg bg-zinc-950 p-4 font-mono text-sm text-zinc-300">
            npm install three @react-three/fiber @react-three/drei
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Also add the Three.js types for TypeScript support:</p>
          <div className="mt-2 rounded-lg bg-zinc-950 p-4 font-mono text-sm text-zinc-300">
            npm install -D @types/three
          </div>
        </div>

        {/* Code */}
        <div className="rounded-xl border border-border bg-card overflow-hidden">
          <div className="border-b border-border bg-muted/50 px-4 py-2 text-sm font-medium">Code</div>
          <pre className="overflow-x-auto p-4 text-sm bg-zinc-950 text-zinc-300">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
